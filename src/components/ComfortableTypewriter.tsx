"use client";

import { useState, useEffect } from "react";

interface ComfortableTypewriterProps {
  words: string[];
  baseTypingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export default function ComfortableTypewriter({
  words,
  baseTypingSpeed = 85,
  pauseDuration = 2800,
  className = "",
  cursorClassName = "",
}: ComfortableTypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText.length < targetWord.length) {
        // Dynamic, human-like typing cadence:
        // - Initial keystroke: natural hesitation as someone starts typing (190-260ms)
        // - In-word keystrokes: variable rhythm (fast bursts for fluencies, gentle micro-pauses)
        let delay: number;

        if (currentText.length === 0) {
          delay = 190 + Math.random() * 80;
        } else {
          const rand = Math.random();
          if (rand < 0.12) {
            // Natural mental micro-pause mid-word
            delay = baseTypingSpeed + 90 + Math.random() * 80;
          } else if (rand > 0.72) {
            // Rapid keystroke burst
            delay = Math.max(35, baseTypingSpeed - 35 + Math.random() * 20);
          } else {
            // Organic human variance
            delay = baseTypingSpeed + (Math.random() * 40 - 20);
          }
        }

        const timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        }, delay);
        return () => clearTimeout(timer);
      } else {
        // Full word typed: pause comfortably with soft cursor breathing so user can absorb text
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        // Dynamic accelerating backspace:
        // Starts deliberate, accelerates progressively as if holding down backspace key
        const charactersRemaining = currentText.length;
        const totalCharacters = targetWord.length;
        const erasedSoFar = totalCharacters - charactersRemaining;

        // Acceleration factor: starts around 65ms, smoothly drops towards ~24ms with subtle jitter
        const acceleration = Math.min(38, erasedSoFar * 4.5);
        const dynamicDeleteSpeed = Math.max(24, 65 - acceleration + (Math.random() * 12 - 6));

        const timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length - 1));
        }, dynamicDeleteSpeed);
        return () => clearTimeout(timer);
      } else {
        // Deleting finished: comfortable natural pause before typing the next word
        const timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 320 + Math.random() * 60);
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words, baseTypingSpeed, pauseDuration]);

  const isWordComplete = currentText === words[currentWordIndex];

  return (
    <span className={`inline-flex items-baseline ${className}`} aria-label={words[currentWordIndex]}>
      <span>{currentText}</span>
      <span
        className={`inline-block w-[3px] ml-1 bg-primary rounded-full align-middle select-none shadow-[0_0_10px_rgba(59,130,246,0.9)] transition-opacity duration-300 ${
          isWordComplete ? "animate-cursor-blink" : "opacity-100"
        } ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
}
