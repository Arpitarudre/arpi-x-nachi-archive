import React, { useState } from 'react';
import { supabase } from '../supabase';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121110] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#181716] border border-[#FAF8F5]/15 rounded-lg p-8 shadow-2xl">
        <h1 className="font-serif-classic text-3xl text-[#FAF8F5] font-light mb-2">
          Arpi × Nachi
        </h1>

        <p className="text-sm text-[#D8CFBC]/70 mb-8">
          Our Archive
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-[#D8CFBC] block mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-3 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
              required
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-[#D8CFBC] block mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded px-3 py-3 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-[#72222B] hover:bg-[#8B2635] disabled:opacity-50 text-[#FAF8F5] text-xs uppercase tracking-widest font-medium rounded transition-colors"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};