export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
            With expertise in modern web technologies, I focus on building scalable and user-friendly applications.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux & React Query</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>RESTful APIs</li>
                <li>PostgreSQL & MongoDB</li>
                <li>AWS & Docker</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p className="text-gray-600">Tech Company • 2020 - Present</p>
              <p className="mt-2">
                Leading development of scalable web applications, mentoring junior developers,
                and implementing best practices for code quality and performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-gray-600">Digital Agency • 2018 - 2020</p>
              <p className="mt-2">
                Developed and maintained multiple client projects, focusing on responsive design
                and cross-browser compatibility.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
            <p className="text-gray-600">University Name • 2014 - 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
} 