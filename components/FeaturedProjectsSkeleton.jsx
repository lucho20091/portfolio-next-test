"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedProjectsSkeleton() {
  return (
    <section className="relative background-animation text-gray-300 py-14 md:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-6 md:gap-28">
        {/* TITLE SKELETON */}
        <div className="text-center space-y-4 lg:mb-6">
          <div className="h-10 w-3/4 mx-auto bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-1/2 mx-auto bg-gray-700 rounded animate-pulse mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-x-4 2xl:gap-x-0 gap-y-6 2xl:gap-y-28 2xl:grid-cols-1">
          {/* PROJECT SKELETON 1 */}
          <Card className="overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)] rounded-2xl py-0 animate-pulse">
            <CardContent className="relative p-0 aspect-video overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gray-800"></div>
            </CardContent>
          </Card>

          {/* PROJECT SKELETON 2 */}
          <Card className="overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)] rounded-2xl py-0 animate-pulse">
            <CardContent className="relative p-0 aspect-video overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gray-800"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}