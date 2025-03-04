"use client"

import React from "react"
import {
  Expandable,
  ExpandableCard,
  ExpandableCardHeader,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableContent,
  ExpandableTrigger,
} from "@/components/ExpandableCard"
import Image from "next/image";
import { ExternalLink } from "lucide-react";


const projects = [
    {
      id: 1,
      title: "Eve_page",
      description: "My personal website showcasing my projects, skills, and experience.",
      details: "A fully responsive site built with Next.js and Tailwind CSS. Includes project showcases, blog posts, and contact form integrations.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "UI/UX Design"],
      link: "https://evepage.com",
      image: "/images/eve_page.png",
    },
    {
      id: 2,
      title: "Social Media ETL Pipeline",
      description: "An ETL pipeline processing data from platforms like RED note, TikTok, and Weibo.",
      details: "Built with FastAPI and PostgreSQL. Automates data extraction, transformation, and storage, with scheduled sentiment-based business reports.",
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "ETL", "API Integration", "Data Processing"],
      link: "https://etlproject.com",
      image: "/images/etl_pipeline.png",
    },
    {
      id: 3,
      title: "Image-Based Search System",
      description: "A full-stack image-based search system using a RAG model.",
      details: "Developed with Next.js, Tailwind CSS, and PostgreSQL. Supports image uploads and retrieves the top-K most relevant results using vector embeddings.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "RAG Model", "Docker", "ORM"],
      link: "https://imagesearch.com",
      image: "/images/image_search.png",
    },
  ]
  
  

  function ProjectCard({ project }: { project: (typeof projects)[0] }) {
    return (
      <Expandable
        expandDirection="horizontal"
        expandBehavior="push"
        transitionDuration={0.3}
        onExpandStart={() => console.log(`start expand: ${project.title}`)}
        onExpandEnd={() => console.log(`finish expand: ${project.title}`)}
        onCollapseStart={() => console.log(`start close: ${project.title}`)}
        onCollapseEnd={() => console.log(`finsh close: ${project.title}`)}
      >
    
        <ExpandableTrigger>
        <ExpandableCard className="w-full">

            {/* header: project name */}
            <ExpandableCardHeader className="flex flex-row items-start px-2">

            <Image src="/images/profile.jpg" alt="avatar"
              className="rounded-full object-cover border mr-5"
              width={50} height={50}/>
              <p className="text-lg font-semibold">{project.title}</p>
            </ExpandableCardHeader>


  
            {/* ccontent: expandable contact */}
            <ExpandableCardContent className="rounded-md flex flex-col">
              <p className="text-gray-700">{project.description}</p>

              <ExpandableContent preset="slide-up" className="flex flex-col">
                <p className="mt-2 text-sm text-gray-600">{project.details}</p>
                <ul className="mt-2 text-sm text-gray-500 space-y-1">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="whitespace-nowrap">🔹 {tech}</li>
                  ))}
                </ul>
              </ExpandableContent>
            </ExpandableCardContent>
  
            {/* bottom: */}
            <ExpandableCardFooter className="flex justify-start space-x-2">
                <p>{new URL(project.link).host}</p>
                <ExternalLink className="size-4" />
            </ExpandableCardFooter>
          </ExpandableCard>
        </ExpandableTrigger>
      </Expandable>
    )
  }
  
export default function ProjectShowcase() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
