"use client";

import React from 'react';
import { Button } from "./ui/button";

export default function ContactFormSkeleton() {
  return (
    <section className="relative w-full pb-14 md:py-28 text-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION TITLE SKELETON */}
        <div className="text-center space-y-4 mb-14 md:mb-28">
          <div className="h-10 w-3/4 mx-auto bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-1/2 mx-auto bg-gray-700 rounded animate-pulse mt-2"></div>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto border border-gray-700 animate-pulse">
          <div className="space-y-6">
            {/* NAME INPUT SKELETON */}
            <div>
              <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
              <div className="w-full h-12 bg-gray-800 rounded-lg"></div>
            </div>

            {/* EMAIL INPUT SKELETON */}
            <div>
              <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
              <div className="w-full h-12 bg-gray-800 rounded-lg"></div>
            </div>

            {/* MESSAGE TEXTAREA SKELETON */}
            <div>
              <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
              <div className="w-full h-28 bg-gray-800 rounded-lg"></div>
            </div>

            {/* BUTTON SKELETON */}
            <Button variant="secondary" className="block ml-auto cursor-not-allowed">
              <div className="h-6 w-24 bg-gray-700 rounded"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}