import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { PhotoItem } from '../types';
import { supabase } from '../supabase';

interface UploadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPhoto: (photo: PhotoItem) => void;
}

export const UploadPhotoModal: React.FC<UploadPhotoModalProps> = ({ isOpen, onClose, onAddPhoto }) => {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<PhotoItem['category']>('two_of_us');
  const [style, setStyle] = useState<PhotoItem['style']>('standard');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (file) {
    setSelectedFile(file);

    const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!selectedFile || !title) return;

  try {
    const fileExt = selectedFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `photos/${fileName}`;

    // 1. Upload image to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('photo-upload')
      .upload(filePath, selectedFile);

    if (uploadError) {
  console.error('Image upload failed:', uploadError);
  alert(`Image upload failed: ${uploadError.message}`);
  return;
}

    // 2. Get the public image URL
    const { data: publicUrlData } = supabase.storage
      .from('photo-upload')
      .getPublicUrl(filePath);

    const imageUrl = publicUrlData.publicUrl;

    // 3. Save photo information in Supabase database
    const { data, error: insertError } = await supabase
      .from('photos')
      .insert({
        url: imageUrl,
        title: title || 'Untitled Memory',
        caption: caption || 'A quiet, precious moment preserved forever.',
        date: date || 'Recent 2026',
        location: location || 'Special Place',
        category,
        style,
        aspect: style === 'polaroid' ? 'portrait' : 'landscape',
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert failed:', insertError);
      alert(`Photo uploaded, but saving the memory failed: ${insertError.message}`);
      return;
    }

    // 4. Add the saved photo to the archive immediately
    onAddPhoto(data as PhotoItem);

    // 5. Close modal and reset
    onClose();
    setTitle('');
    setCaption('');
    setDate('');
    setLocation('');
    setImagePreview('');
    setSelectedFile(null);

  } catch (error) {
    console.error('Unexpected upload error:', error);
    alert('Something went wrong. Please try again.');
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#181716] border border-[#FAF8F5]/15 rounded-lg max-w-lg w-full p-6 sm:p-8 text-[#FAF8F5] relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[#FAF8F5]/10 text-[#EAE5DE]/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif-classic text-2xl font-light mb-1 text-[#FAF8F5]">
          Add to the Archive
        </h3>
        <p className="text-xs text-[#D8CFBC]/80 mb-6 font-sans">
          Upload an authentic photo from your camera roll to enrich this memory archive.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File input / Image drop */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border border-dashed border-[#FAF8F5]/20 hover:border-[#D8CFBC] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#121110]"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Upload preview"
                className="max-h-44 object-contain rounded"
              />
            ) : (
              <div className="text-center">
                <Upload className="w-8 h-8 text-[#D8CFBC] mx-auto mb-2" />
                <span className="text-xs uppercase tracking-wider text-[#FAF8F5]">
                  Select photo from device
                </span>
                <p className="text-[11px] text-[#EAE5DE]/50 mt-1">PNG, JPG, WebP supported</p>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#D8CFBC] block mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Sunset in Bandra"
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
                required
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#D8CFBC] block mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as PhotoItem['category'])}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
              >
                <option value="two_of_us">The Two of Us</option>
                <option value="adventures">Adventures</option>
                <option value="random">The Random Ones</option>
                <option value="you">You (Nachi)</option>
                <option value="us_lately">Us, Lately</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#D8CFBC] block mb-1">
              Caption / Memory
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="What made this moment special?"
              rows={2}
              className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#D8CFBC] block mb-1">
                Date
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. October 2025"
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#D8CFBC] block mb-1">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Lonavala"
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#D8CFBC] block mb-1">
                Display Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value as PhotoItem['style'])}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
              >
                <option value="standard">Standard</option>
                <option value="polaroid">Polaroid</option>
                <option value="film_strip">Film Strip</option>
                <option value="editorial">Editorial</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider text-[#EAE5DE]/70 hover:text-[#FAF8F5]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#72222B] hover:bg-[#8B2635] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium rounded transition-colors"
            >
              Save to Archive
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
