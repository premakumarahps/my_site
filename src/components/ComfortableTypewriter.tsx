"use client";

import { useState, useEffect } from "react";

interface ComfortableTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export default function ComfortableTypewriter({
  words,
  typingSpeed = 95,
  deletingSpeed = 45,
  pauseDuration = 2600,
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
        const jitter = Math.floor(Math.random() * 20) - 10;
        const timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        }, Math.max(30, typingSpeed + jitter));
        return () => clearTimeout(timer);
      } else {
        // Word complete: pause comfortably before deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Deleting complete: brief natural pause then next word
        const timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 320);
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

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
