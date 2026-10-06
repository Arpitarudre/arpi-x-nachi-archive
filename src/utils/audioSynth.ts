/**
 * Soft Ambient Vinyl & Warm Drone Synthesizer via Web Audio API.
 * Completely self-contained, no external audio network requests needed.
 */
class AmbientSoundManager {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private oscNode1: OscillatorNode | null = null;
  private oscNode2: OscillatorNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;

    try {
      // Master gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 2);
      this.gainNode.connect(this.ctx.destination);

      // 1. Vinyl crackle / soft warm tape hiss
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Pink noise filter approximation
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.05;
        // occasional micro-clicks
        if (Math.random() < 0.0008) {
          output[i] += (Math.random() * 2 - 1) * 0.3;
        }
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      // Filter noise to sound like warm vintage vinyl
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, this.ctx.currentTime);

      this.noiseNode.connect(filter);
      filter.connect(this.gainNode);
      this.noiseNode.start();

      // 2. Warm harmonic chord (F# / C# gentle meditative drone)
      this.oscNode1 = this.ctx.createOscillator();
      this.oscNode1.type = 'sine';
      this.oscNode1.frequency.setValueAtTime(138.59, this.ctx.currentTime); // C#3

      this.oscNode2 = this.ctx.createOscillator();
      this.oscNode2.type = 'triangle';
      this.oscNode2.frequency.setValueAtTime(92.50, this.ctx.currentTime); // F#2

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(0.03, this.ctx.currentTime);

      this.oscNode1.connect(oscGain);
      this.oscNode2.connect(oscGain);
      oscGain.connect(this.gainNode);

      this.oscNode1.start();
      this.oscNode2.start();

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.gainNode) return;
    try {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        try {
          this.noiseNode?.stop();
          this.oscNode1?.stop();
          this.oscNode2?.stop();
          this.noiseNode?.disconnect();
          this.oscNode1?.disconnect();
          this.oscNode2?.disconnect();
        } catch {}
        this.isPlaying = false;
      }, 1300);
    } catch {
      this.isPlaying = false;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientSoundManager();
