"use client";
import React from "react";

export default function HeroParticles({ className = "" }: { className?: string }) {
  return (
    <div className={"pointer-events-none " + className} aria-hidden="true">
      {/* Particle 1 */}
      <div className="absolute top-1/4 left-1/5 w-24 h-24 bg-primary-400 opacity-30 rounded-full blur-2xl animate-float1" />
      {/* Particle 2 */}
      <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-purple-400 opacity-20 rounded-full blur-2xl animate-float2" />
      {/* Particle 3 */}
      <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-pink-400 opacity-20 rounded-full blur-2xl animate-float3" />
      {/* Particle 4 */}
      <div className="absolute top-1/3 left-3/4 w-20 h-20 bg-blue-400 opacity-20 rounded-full blur-2xl animate-float4" />
    </div>
  );
} 