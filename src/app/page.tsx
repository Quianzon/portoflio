import { BackgroundBeams } from "@/components/ui/background-beams";
import ContactForm from "@/components/ui/contact-form";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Timeline data with new format
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <BackgroundBeams className="w-full h-full">
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-8 z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              <span className="text-primary-400">Hello, I'm</span> Gladys Quianzon
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Web developer, QA, and PHP developer
            </h2>
            <div className="flex gap-4">
              <Link 
                  href="#timeline" 
                  className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-all"
                >
                  My Journey
                </Link>
              <Link 
                href="#projects" 
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-all"
              >
                View My Work
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </BackgroundBeams>
      </div>

      {/* About Section */}
      <section id="about" className="w-full py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 mb-4">
              I'm a QA and php developer with expertise in modern web technologies. 
              With a strong foundation in both frontend and backend development, I create 
              seamless, responsive, and user-friendly applications.
            </p>
            <p className="text-gray-700 mb-4">
              My journey in tech began with a degree in Bachelor of Science in Information Technology, followed by 
              hands-on experience at innovative startups.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PHP Native</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Wordpress</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MySQL</span>
            </div>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden">
            {/* Replace with your image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-purple-500/30 z-10"></div>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Your Image Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="w-full">
        <Timeline data={timelineData} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">DMSF Inventory System</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive inventory management system for DMSF that tracks medical supplies, generates reports, and manages stock levels efficiently.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">PHP Native</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">CSS</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Javascript</span>
                </div>
                <Link 
                  href="#" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Karaoke System</h3>
                <p className="text-gray-600 mb-4">
                  A web-based karaoke system with song queuing, user management, and real-time lyrics display. Features include song search, and performance scoring.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">PHP Native</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">CSS</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Javascript</span>
                </div>
                <Link 
                  href="#" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mortuary System</h3>
                <p className="text-gray-600 mb-4">
                  A mortuary employee management system that handles staff records, work schedules, and employee information. Features include automated reporting of employee information.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">PHP Native</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">MySQL</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">CSS</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">Javascript</span>
                </div>
                <Link 
                  href="#" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Gladys Quianzon</h3>
            <p className="text-gray-400">Web Developer</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Gladys Quianzon. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
