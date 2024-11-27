
"use client"
const page = () => {
  const projects = [
    {
      name: "Ecommerce Bakery",
      description: "This project is an Ecommerce site with cart functionality.",
      link: "https://ecomb-akery-ssid.vercel.app/",
      image: "/ecom.jpg",
    },
    {
      name: "Blogging Project",
      description: "This project is related to blogging.",
      link: "https://blogwebassign4-5.vercel.app/",
      image: "/blog.jpg",
    },
    {
      name: "Count Down Timer",
      description: "A timer project with multiple functionalities.",
      link: "https://counter1st-project.vercel.app/",
      image: "/timer.jpg",
    },
    {
      name: "Grocery",
      description: "A streamlined shopping platform for groceries with easy navigation.",
      link: "http://grocery-website-o9959o86c-nida-pervezs-projects.vercel.app",
      image: "/gro.jpg",
    },
    {
      name: "Accessories",
      description: "Showcasing premium accessories, from fashion items to tech gadgets.",
      link: "https://accessories-website-nlek30y81-nida-pervezs-projects.vercel.app/index.html",
      image: "/acc.jpg",
    },
    {
      name: "Amazon Clone",
      description: "A replica of Amazon, offering a comprehensive e-commerce platform.",
      link: "http://amazon-clone-mfaky44e3-nida-pervezs-projects.vercel.app",
      image: "/ama.jpg",
    },
    {
      name: "Facebook Login",
      description: "Mimics Facebook's login functionality with secure authentication.",
      link: "http://facebookloginclone-e5u8o20tb-nida-pervezs-projects.vercel.app",
      image: "/fa.jpg",
    },
  ];

  return (
    <div>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f7f7f7;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 2.5em;
          color: #333;
        }
        .projects {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .project-card {
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          transform: scale(1.05);
        }
        .project-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .project-card .content {
          padding: 15px;
        }
        .project-card h2 {
          font-size: 1.5em;
          margin: 0;
          color: #333;
        }
        .project-card p {
          font-size: 0.9em;
          color: #666;
          margin: 10px 0;
        }
        .project-card a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: #0070f3;
          font-size: 0.9em;
        }
        .project-card a:hover {
          text-decoration: underline;
        }
      `}</style>
      <div className="container">
        <div className="header">
          <h1>My Projects</h1>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} />
              <div className="content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
