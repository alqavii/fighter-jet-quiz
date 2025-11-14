'use client';

import { useState, useEffect } from 'react';
import FighterJetQuiz from '@/components/FighterJetQuiz';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Fighter Jet Identification Quiz</h1>
          <p className="text-xl text-blue-200">Test your knowledge of military aircraft</p>
        </div>
        <FighterJetQuiz />
      </main>
    </div>
  );
}
