import { Github, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration. Includes user authentication, product management, and order processing.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/username/ecommerce',
      live: 'https://ecommerce-demo.com'
    }
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    links: {
      github: 'https://github.com/username/task-manager',
      live: 'https://task-manager-demo.com'
    }
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple cities. Features include location search and weather alerts.',
    tags: ['React', 'Weather API', 'Charts.js', 'CSS3'],
    links: {
      github: 'https://github.com/username/weather-dashboard',
      live: 'https://weather-dashboard-demo.com'
    }
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Code</span>
              </Link>
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <LinkIcon className="w-5 h-5" />
                <span>Live Demo</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 