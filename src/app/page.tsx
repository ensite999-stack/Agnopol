// src/app/page.tsx
import React from 'react';

export default function Homepage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500">
      {/* SECTION 1: HERO - THE MANIFESTO */}
      <section className="h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.5em] mb-6">AGNOPOL</h1>
        <p className="max-w-2xl text-zinc-400 text-sm md:text-lg leading-relaxed tracking-wide">
          One world, one breath. Not a platform to watch, but a coordinate to act.
        </p>
        <div className="mt-12">
          <a href="/origin" className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-xs">
            INITIALIZE ORIGIN
          </a>
        </div>
      </section>

      {/* SECTION 2: IDENTITY - THE COORDINATE */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-zinc-950/50">
        <div className="max-w-4xl w-full border-l border-zinc-800 pl-8">
          <h2 className="text-blue-500 text-xs tracking-widest mb-4 uppercase">Identity Protocol</h2>
          <h3 className="text-2xl font-light mb-6">One Person, One Coordinate.</h3>
          <p className="text-zinc-500 leading-relaxed">
            Your presence is verified by physical reality, not biometric tracking. 
            No faces, no ads, no hierarchy. Just your anchor in the living commons.
          </p>
        </div>
      </section>

      {/* SECTION 3: ACTION - THE MISSION */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          <div className="p-8 border border-zinc-900">
            <h4 className="text-lg font-light mb-4">Humanitarian Support</h4>
            <p className="text-sm text-zinc-600">Direct coordination for those in need. Radical transparency by default.</p>
          </div>
          <div className="p-8 border border-zinc-900">
            <h4 className="text-lg font-light mb-4">Ecological Action</h4>
            <p className="text-sm text-zinc-600">Collective response to planetary crises. From data to physical impact.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 border-t border-zinc-900 text-center text-[10px] text-zinc-700 tracking-widest uppercase">
        Power is fragmented, temporary, and transparent. © 2026 Agnopol
      </footer>
    </main>
  );
}
