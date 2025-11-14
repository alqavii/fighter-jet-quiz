'use client';

import { useState, useEffect, useRef } from 'react';
import { fighterJets, FighterJet } from '@/data/fighterJets';
import Image from 'next/image';

export default function FighterJetQuiz() {
  const [currentJet, setCurrentJet] = useState<FighterJet | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showImage, setShowImage] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [flashDuration, setFlashDuration] = useState(500); // milliseconds
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const preloadedImagesRef = useRef<Set<string>>(new Set());

  // Preload all images on component mount for instant display
  useEffect(() => {
    const preloadImages = () => {
      fighterJets.forEach((jet) => {
        if (!preloadedImagesRef.current.has(jet.imagePath)) {
          const img = new window.Image();
          img.src = jet.imagePath;
          // Mark as preloaded immediately to avoid duplicate requests
          preloadedImagesRef.current.add(jet.imagePath);
        }
      });
    };

    // Preload all images as soon as component mounts
    preloadImages();
  }, []);

  const startNewRound = () => {
    setIsLoading(true);
    const randomJet = fighterJets[Math.floor(Math.random() * fighterJets.length)];
    setCurrentJet(randomJet);
    setSelectedAnswer('');
    setIsAnswered(false);
    setShowImage(false);
    
    // Flash the image after a brief delay
    setTimeout(() => {
      setShowImage(true);
      setIsLoading(false);
      
      // Hide the image after flashDuration
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowImage(false);
      }, flashDuration);
    }, 100);
  };

  useEffect(() => {
    startNewRound();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Update flash duration when it changes
  useEffect(() => {
    if (showImage && currentJet && !isAnswered) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowImage(false);
      }, flashDuration);
    }
  }, [flashDuration, showImage, currentJet, isAnswered]);

  const handleAnswer = () => {
    if (!currentJet || !selectedAnswer) return;
    
    setIsAnswered(true);
    const isCorrect = selectedAnswer === currentJet.id;
    
    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  };

  const handleNext = () => {
    startNewRound();
  };

  const sortedJets = [...fighterJets].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-4xl mx-auto">
      {/* Score Display */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6 text-center">
        <div className="text-2xl font-bold text-white">
          Score: {score.correct} / {score.total}
          {score.total > 0 && (
            <span className="text-lg text-blue-200 ml-2">
              ({Math.round((score.correct / score.total) * 100)}%)
            </span>
          )}
        </div>
      </div>

      {/* Flash Duration Slider */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
        <label className="block text-white text-lg font-semibold mb-3">
          Flash Duration: {flashDuration}ms
        </label>
        <input
          type="range"
          min="100"
          max="2000"
          step="50"
          value={flashDuration}
          onChange={(e) => setFlashDuration(Number(e.target.value))}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-sm text-blue-200 mt-1">
          <span>100ms</span>
          <span>2000ms</span>
        </div>
      </div>

      {/* Image Display Area */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-6 min-h-[400px] flex items-center justify-center">
        {isLoading ? (
          <div className="text-white text-xl">Loading...</div>
        ) : showImage && currentJet ? (
          <div className="relative w-full h-full max-w-2xl">
            <Image
              src={currentJet.imagePath}
              alt="Fighter Jet Silhouette"
              width={800}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        ) : currentJet && !isAnswered ? (
          <div className="text-white text-2xl text-center">
            <p className="mb-4">The silhouette has been shown.</p>
            <p className="text-lg text-blue-200">Select the correct fighter jet below:</p>
          </div>
        ) : isAnswered && currentJet ? (
          <div className="text-center">
            <div className="text-white text-3xl font-bold mb-4">
              {selectedAnswer === currentJet.id ? (
                <span className="text-green-400">✓ Correct!</span>
              ) : (
                <span className="text-red-400">✗ Incorrect</span>
              )}
            </div>
            <div className="text-white text-xl mb-2">
              The correct answer is: <span className="font-bold text-blue-300">{currentJet.name}</span>
            </div>
            <div className="text-blue-200 text-sm">
              {currentJet.country} • {currentJet.generation} • {currentJet.branch}
            </div>
            {selectedAnswer !== currentJet.id && (
              <div className="mt-4 text-red-300">
                You selected: {fighterJets.find(j => j.id === selectedAnswer)?.name || 'Unknown'}
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* Answer Selection */}
      {!isAnswered && (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
          <label className="block text-white text-lg font-semibold mb-3">
            Select the Fighter Jet:
          </label>
          <select
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a fighter jet --</option>
            {sortedJets.map((jet) => (
              <option key={jet.id} value={jet.id} className="bg-slate-800">
                {jet.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAnswer}
            disabled={!selectedAnswer}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Submit Answer
          </button>
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <div className="text-center">
          <button
            onClick={handleNext}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Next Jet
          </button>
        </div>
      )}

      {/* Show Image Again Button (for reference after answering) */}
      {isAnswered && currentJet && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowImage(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Show Silhouette Again
          </button>
        </div>
      )}
    </div>
  );
}

