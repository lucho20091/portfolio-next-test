"use client";

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import Tabs
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OtherProjectsSkeleton() {
  return (
    <section className="w-full py-14 md:py-28 text-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* TITLE SKELETON */}
        <div className="text-center space-y-4 mb-14 md:mb-28">
          <div className="h-10 w-3/4 mx-auto bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-1/2 mx-auto bg-gray-700 rounded animate-pulse mt-2"></div>
        </div>

        {/* TABS LIST SKELETON */}
        <Tabs className="w-full relative"> {/* Added Tabs wrapper */}
          <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-gray-900 p-2 h-auto border border-gray-700 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <TabsTrigger key={i} value={`tab-${i}`} className="px-8 py-4 bg-gray-800 rounded-md"></TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* TABLE SKELETON */}
        <div className="mt-6 md:mt-8 bg-gray-900 text-gray-300 p-4 rounded-xl shadow-lg border border-gray-700 animate-pulse">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="grid grid-cols-5 sm:grid-cols-6 gap-4 bg-gray-800 px-3 font-semibold text-gray-300 border border-gray-700 select-none">
                <TableHead className="col-span-3 sm:col-span-4 flex items-center justify-start text-gray-300">
                  <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
                </TableHead>
                <TableHead className="col-span-1 flex items-center justify-center text-gray-300">
                  <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
                </TableHead>
                <TableHead className="col-span-1 flex items-center justify-center text-gray-300">
                  <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(4)].map((_, i) => (
                <TableRow key={i} className="grid grid-cols-5 sm:grid-cols-6 gap-4 bg-gray-800 border-y border-gray-700 px-3 font-medium text-gray-300">
                  <TableCell className="col-span-3 sm:col-span-4">
                    <div className="h-4 w-full bg-gray-700 rounded"></div>
                  </TableCell>
                  <TableCell className="col-span-1 text-center">
                    <div className="h-5 w-5 mx-auto bg-gray-700 rounded-full"></div>
                  </TableCell>
                  <TableCell className="col-span-1 text-center">
                    <div className="h-5 w-5 mx-auto bg-gray-700 rounded-full"></div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}