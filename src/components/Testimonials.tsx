"use client";

import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "A/L Physics Student",
    role: "Colombo",
    content: "Sir explains complex physical concepts with engineering logic instead of just making us memorize formulas. It completely changed my perspective on Physics.",
    rating: 5,
  },
  {
    id: 2,
    name: "Engineering Undergraduate",
    role: "University of Moratuwa",
    content: "The foundation I got from Sandun Sir's Physics classes helped me immensely in my first year engineering mechanics and thermodynamics modules.",
    rating: 5,
  },
  {
    id: 3,
    name: "A/L Physics Student",
    role: "Kandy",
    content: "The online platform and past paper analytics are amazing. I can track exactly which areas I need to improve, and the live sessions are highly interactive.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="mt-16 w-full max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-foreground">Student Success Stories</h3>
        <p className="text-muted-foreground mt-2">What students say about the Physics Academy</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="bg-card border border-border/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
            <p className="text-foreground text-sm italic mb-6">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
