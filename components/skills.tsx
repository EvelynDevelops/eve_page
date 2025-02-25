import Image from "next/image";

const skills = [
  // Frontend 技术
  { name: "HTML5", icon: "/icons/apps/html5.svg" },
  { name: "CSS3", icon: "/icons/apps/css.svg" },
  { name: "JavaScript", icon: "/icons/apps/javascript.svg" },
  { name: "React.js", icon: "/icons/apps/reactjs.svg" },
  { name: "Next.js", icon: "/icons/apps/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/icons/apps/tailwindcss.svg" },
  { name: "TypeScript", icon: "/icons/apps/typescript.svg" },
  { name: "Storybook", icon: "/icons/apps/storybook.svg" },

  // Backend 技术
  { name: "Node.js", icon: "/icons/apps/nodejs.svg" },
  { name: "NestJS", icon: "/icons/apps/nestjs.svg" },
  { name: "Flask", icon: "/icons/apps/flask-dark.svg" },
  { name: "Python", icon: "/icons/apps/python.svg" },
  { name: "PHP", icon: "/icons/apps/php.svg" },

  // Database & DevOps
  { name: "PostgreSQL", icon: "/icons/apps/postgresql.svg" },
  { name: "MySQL", icon: "/icons/apps/mysql.svg" },
  { name: "Docker", icon: "/icons/apps/docker.svg" },
  { name: "GraphQL", icon: "/icons/apps/graphql.svg" },

  // Dev Tools
  { name: "Git", icon: "/icons/apps/git.svg" },
  { name: "GitHub", icon: "/icons/apps/github-dark.svg" },
  { name: "GitLab", icon: "/icons/apps/gitlab.svg" },
  { name: "Jira", icon: "/icons/apps/jira.svg" },
  { name: "VSCode", icon: "/icons/apps/vscode.svg" },

  // Cloud & AI
  { name: "Figma", icon: "/icons/apps/figma.svg" },
  { name: "OpenAI", icon: "/icons/apps/openai.svg" },
  { name: "Azure", icon: "/icons/apps/azure.svg" },
  { name: "DigitalOcean", icon: "/icons/apps/digitalocean.svg" },

  // Communication & Collaboration
  { name: "Slack", icon: "/icons/apps/slack.svg" },
];

export default function TechStackCard() {
  return (
    <div className="border border-gray-700 rounded-sm p-4 shadow-lg w-full max-w-3xl mx-auto bg-transparent">

      <div className="grid grid-cols-6 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={20}
              height={20}
              className="w-8 h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
