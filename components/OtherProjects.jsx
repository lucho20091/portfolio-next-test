// Improved OtherProjects component with title, enhanced styling for tabs and table

"use client";

import { useState, useRef } from "react";
import { data } from "@/lib/data";
import { Github, CodeXml } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function OtherProjects() {
  const [activeTab, setActiveTab] = useState("Next");
  const tabsListRef = useRef(null);

  const uniqueTech = [...new Set(data.flatMap((item) => item.technologies))];

  const moveTabLeft = () => {
    if (tabsListRef.current) tabsListRef.current.scrollLeft -= 140;
  };

  const moveTabRight = () => {
    if (tabsListRef.current) tabsListRef.current.scrollLeft += 140;
  };

  return (
    <section className="background-animation w-full py-28 md:py-28 text-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <div data-aos="fade-up" className="text-center space-y-4 mb-32">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Other <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore all my additional builds—sorted by technologies and built
            with clean, organized structure.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full relative"
        >
          {/* TABS LIST */}
          <TabsList
            ref={tabsListRef}
            className="
    w-full
    flex
    flex-wrap
    justify-start
    rounded-none
    gap-2
    bg-gray-300
    p-2
    h-auto
  "
          >
            {uniqueTech.map((tech) => (
              <TabsTrigger
                key={tech}
                value={tech}
                className="
        px-2
        py-1
        font-medium
        bg-gray-100
        text-gray-800
            rounded-none
        transition-all
        hover:bg-gray-200
        cursor-pointer
      "
              >
                {tech}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* TAB CONTENT */}
          {uniqueTech.map((tech) => (
            <TabsContent
              key={tech}
              value={tech}
              className="mt-8 bg-gray-200 text-black p-4 rounded-xl shadow-lg border border-gray-300     rounded-none"
            >
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="grid grid-cols-5 sm:grid-cols-6 gap-4 bg-gray-300 px-3 font-semibold text-gray-800 border border-gray-400">
                    <TableHead className="col-span-3 sm:col-span-4 flex items-center justify-start">
                      Project Name
                    </TableHead>
                    <TableHead className="col-span-1 flex items-center justify-center">
                      GitHub
                    </TableHead>
                    <TableHead className="col-span-1 flex items-center justify-center">
                      Website
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data
                    .filter((project) => project.technologies.includes(tech))
                    .map((projectMap) => (
                      <TableRow
                        key={projectMap.id}
                        className="grid grid-cols-5 sm:grid-cols-6 gap-4 bg-gray-200 border-y border-black px-3 font-semibold text-gray-800"
                      >
                        {/* Project Name + Modal */}
                        <TableCell className="col-span-3 sm:col-span-4 font-medium">
                          {/* Mobile: show truncated */}
                          <span className="sm:hidden">
                            {projectMap.projectName.trim().slice(0, 15)}
                            {projectMap.projectName.trim().length > 15
                              ? "..."
                              : ""}
                          </span>

                          {/* Desktop: show full */}
                          <span className="hidden sm:inline">
                            {projectMap.projectName.trim()}
                          </span>
                        </TableCell>

                        {/* GitHub */}
                        <TableCell className="col-span-1 text-center">
                          <a href={projectMap.github} target="_blank">
                            <Github
                              className="mx-auto hover:text-blue-600 transition"
                              size={22}
                            />
                          </a>
                        </TableCell>

                        {/* Website */}
                        <TableCell className="col-span-1 text-center">
                          {projectMap.website && (
                            <a href={projectMap.website} target="_blank">
                              <CodeXml
                                className="mx-auto hover:text-green-600 transition"
                                size={22}
                              />
                            </a>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
