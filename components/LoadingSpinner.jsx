"use client";

import React from 'react';
import { LoaderCircle } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-28">
      <LoaderCircle className="size-12 animate-spin text-blue-500" />
    </div>
  );
}