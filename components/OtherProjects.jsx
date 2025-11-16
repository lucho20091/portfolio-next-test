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
    <section className=" w-full py-14 md:py-28  text-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* TITLE */}
        <div
          data-aos="fade-up"
          className="text-center space-y-4 mb-14 md:mb-28"
        >
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
    bg-gray-900
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
        bg-gray-800
        text-gray-300
        rounded-none
        transition-all
        hover:bg-gray-700
        cursor-pointer
        data-[state=active]:bg-gray-700
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
              className="mt-8 bg-gray-900 text-gray-300 p-4 rounded-xl shadow-lg border border-gray-700"
            >
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="grid grid-cols-5 sm:grid-cols-6 gap-4 bg-gray-800 px-3 font-semibold text-gray-300 border border-gray-700 select-none hover:bg-gray-700">
                    <TableHead className="col-span-3 sm:col-span-4 flex items-center justify-start text-gray-300">
                      Project Name
                    </TableHead>
                    <TableHead className="col-span-1 flex items-center justify-center text-gray-300">
                      GitHub
                    </TableHead>
                    <TableHead className="col-span-1 flex items-center justify-center text-gray-300">
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
                        className="grid grid-cols-5 sm:grid-cols-6 gap-4 bg-gray-800 border-y border-gray-700 px-3 font-medium text-gray-300 hover:bg-gray-700 transition"
                      >
                        {/* Project Name */}
                        <TableCell className="col-span-3 sm:col-span-4">
                          <span className="sm:hidden">
                            {projectMap.projectName.trim().slice(0, 15)}
                            {projectMap.projectName.trim().length > 15
                              ? "..."
                              : ""}
                          </span>
                          <span className="hidden sm:inline">
                            {projectMap.projectName.trim()}
                          </span>
                        </TableCell>

                        {/* GitHub */}
                        <TableCell className="col-span-1 text-center">
                          <a href={projectMap.github} target="_blank">
                            <Github
                              className="mx-auto hover:text-blue-400 transition"
                              size={22}
                            />
                          </a>
                        </TableCell>

                        {/* Website */}
                        <TableCell className="col-span-1 text-center">
                          {projectMap.website && (
                            <a href={projectMap.website} target="_blank">
                              <CodeXml
                                className="mx-auto hover:text-green-400 transition"
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
