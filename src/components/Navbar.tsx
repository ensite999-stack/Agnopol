"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const languages = [
  { code: 'en-US', label: 'English (US)' },
  { code: 'en-GB', label: 'English (UK)' },
  { code: 'fr', label: 'Français' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <Link href="/" className="text-xl font-light tracking-[0.4em] hover:text-blue-500 transition-colors">
        AGNOPOL
      </Link>
      
      <div className="flex items-center space-x-8">
        {/* 语言选择器 - 手机端建议做成侧滑或浮窗 */}
        <div className="hidden md:flex space-x-4 text-[10px] tracking-widest uppercase text-zinc-500">
          {languages.map((lang) => (
            <button key={lang.code} className="hover:text-white transition-colors">
              {lang.label}
            </button>
          ))}
        </div>

        {/* 菜单触发器 */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs tracking-widest uppercase border-b border-white pb-1"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* 全屏菜单 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 text-2xl font-light tracking-widest animate-in fade-in duration-500">
          <Link href="/origin" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Origin</Link>
          <Link href="/actions" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Actions</Link>
          <Link href="/community" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Community</Link>
          <Link href="/treasury" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Transparency</Link>
          <button onClick={() => setIsOpen(false)} className="text-xs text-zinc-600 mt-12 border border-zinc-800 px-6 py-2">BACK</button>
        </div>
      )}
    </nav>
  );
};
