import Link from "next/link";
import { projects } from "../lib/projects";

const github = "https://github.com/maria-dev4";
const linkedin = "https://www.linkedin.com/in/maria-epu";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    title: "Backend and Auth",
    items: [
      "BetterAuth",
      "REST API integration",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    title: "Tools",
    items: ["Git and GitHub", "Vercel and Netlify", "Figma", "VS Code"],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero wrap" id="top">
        
        <img className="avatar" src="/maria.jpg" alt="Maria" />
        <div>
          <p className="role">Full Stack Developer (MERN)</p>
          <h1>Hi, I am Maria.</h1>
          <p className="lead">
            I build responsive web apps with Next.js and React, and I put every
            project online so anyone can try it.
          </p>
          <div className="actions">
            <a className="btn primary" href="/resume.pdf" download>
              Download resume
            </a>
            <a
              className="btn"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
            <a className="btn" href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="block about" id="about">
        <div className="wrap">
          <h2>About me</h2>
          <p>
            I am from Cumilla, Bangladesh, and I am learning full stack
            development in the 7-month course at Programming Hero (B-14 batch).
          </p>
          <p>
            My journey started with three months of HTML, CSS and Git. With that
            base I built my first website on my own, a skincare brand site
            called Lumière. Since then I have moved from static pages to Next.js
            apps with sign-in, protected routes and live API data, and I am now
            learning Node.js, Express and MongoDB to build the backend as well.
          </p>
          <p>
            I enjoy turning a design into a page that works, and I like the
            moment when a feature I was stuck on finally runs. I prefer building
            things I can open in a browser and share with a link, so I deploy
            every project. I like to understand my code well enough to explain
            it line by line.
          </p>
          <p>
            Away from the screen I love anime, cooking (I make pickles and enjoy
            trying new recipes) and growing plants in containers, including
            bougainvillea, chilli plants and roses. Gardening taught me
            patience, and it helps with coding too: good things take steady
            care.
          </p>
          <div className="facts">
            <div className="fact">
              <b>Based in</b>Cumilla, Bangladesh
            </div>
            <div className="fact">
              <b>Training</b>Full stack course, B-14 batch
            </div>
            <div className="fact">
              <b>Currently learning</b>Node.js, Express, MongoDB
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="skills">
        <div className="wrap">
          <h2>Skills</h2>
          <div className="skills">
            {skillGroups.map((group) => (
              <div className="panel" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="chips big">
                  {group.items.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="projects">
        <div className="wrap">
          <h2>Projects</h2>
          <div className="cards">
            {projects.map((p) => (
              <article className="card" key={p.slug}>
                <img src={p.image} alt={`Screenshot of ${p.name}`} />
                <div className="body">
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <ul className="chips">
                    {p.stack.slice(0, 3).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <Link className="btn" href={`/projects/${p.slug}`}>
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="education">
        <div className="wrap">
          <h2>Education</h2>
          <div className="edu">
            <div className="fact">
              <b>Full Stack Web Development Course, Programming Hero</b>
              B-14 batch, 2026 to present. A 7-month MERN stack program covering
              HTML, CSS, JavaScript, React, Next.js, Node.js, Express and
              MongoDB.
            </div>
            <div className="fact">
              <b>Higher Secondary Certificate (HSC), Science</b>
              Kasinagar Degree College, Comilla Board, 2020. GPA 4.25 out of
              5.00.
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="contact">
        <div className="wrap">
          <h2>Contact</h2>
          <div className="contact-list">
            <a className="fact" href="mailto:maria423000@gmail.com">
              <b>Email</b>maria423000@gmail.com
            </a>
            <a className="fact" href="tel:+8801825480056">
              <b>Phone</b>01825480056
            </a>
            <a
              className="fact"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <b>LinkedIn</b>linkedin.com/in/maria-epu
            </a>
            <a className="fact" href={github} target="_blank" rel="noreferrer">
              <b>GitHub</b>github.com/maria-dev4
            </a>
          </div>
        </div>
      </section>

      <section className="block" id="resume">
        <div className="wrap">
          <h2>Resume</h2>
          <p style={{ marginBottom: 20 }}>
            My one-page resume has my skills, projects and education.
          </p>
          <a className="btn primary" href="/resume.pdf" download>
            Download resume (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
