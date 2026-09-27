"use client";

import { useEffect, useState, useRef } from "react";
import { GraduationCap, Award, BookOpen, Clock } from "lucide-react";

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: typeof GraduationCap;
}

const STATS: StatItem[] = [
  { id: "credits", label: "Credits Completed", value: 161, icon: BookOpen },
  { id: "projects", label: "Engineering Projects", value: 20, suffix: "+", icon: Award },
  { id: "grade", label: "Capstone Grade", value: 100, suffix: "% (A+)", icon: GraduationCap },
  { id: "years", label: "Years Experience", value: 5, suffix: "+", icon: Clock },
];

function useCountUp(end: number, duration: number = 2000, startOnInView: boolean = true) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnInView]);

  useEffect(() => {
    if (startOnInView && !inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(easeOutQuart(progress) * end));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration, inView, startOnInView]);

  return { count, ref };
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 text-center rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-1"
    >
      <div className="p-3 bg-primary/10 rounded-xl mb-4 text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1 tracking-tight">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="w-full py-12 bg-background border-y border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
