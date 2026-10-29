export const projects = [
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    image: "/projects/bazar-dor.png",
    summary: "A market price tracker for everyday grocery items, so shoppers can browse and compare prices by category.",
    description: "Bazar Dor lets shoppers browse grocery products by category and compare prices. It has email and password, Google and GitHub sign-in, protected product detail pages, category pages with sorting, skeleton loaders, a custom 404 page and a profile update form.",
    stack: ["Next.js 16", "React", "Tailwind CSS", "BetterAuth", "react-hot-toast"],
    live: "https://bazar-dor-maria-8854.vercel.app",
    github: "https://github.com/maria-dev4/bazar-dor",
    challenges: [
      "The course replaced the product API midway, so I had to rewire the data fetching for categories and products.",
      "Getting Google and GitHub sign-in to work on the live Vercel site took extra setup of callback URLs and environment variables.",
      "Protecting the product detail pages so only signed-in users can open them, while keeping the redirect smooth."
    ],
    future: [
      "Price history charts for each product",
      "A favourites list so shoppers can track the items they buy often",
      "Search across all categories"
    ]
  },
  {
    slug: "fitlog",
    name: "FitLog",
    image: "/projects/fitlog.png",
    summary: "A gym workout library app built from a Figma design, to practise turning a design into a working Next.js app.",
    description: "FitLog is a workout library whose layout follows a Figma design closely. I built it on the Next.js App Router to practise routing, components and responsive layout.",
    stack: ["Next.js", "App Router", "Tailwind CSS", "Figma"],
    live: "https://fit-log-omega-weld.vercel.app/",
    github: "https://github.com/maria-dev4/fit-log",
    challenges: [
      "Matching the spacing, sizes and alignment of the Figma design exactly with Tailwind classes.",
      "Understanding how the App Router organises pages and layouts for the first time.",
      "Keeping the workout cards consistent from mobile to desktop."
    ],
    future: [
      "Let users log their own workouts",
      "Filter exercises by muscle group",
      "Add user accounts to save a personal routine"
    ]
  },
  {
    slug: "devconf-2026",
    name: "DevConf 2026",
    image: "/projects/devconf.png",
    summary: "A landing page for a developer conference, built from a Figma design with HTML5 and CSS3.",
    description: "DevConf 2026 is a landing page for a fictional developer conference. It has a sticky navbar, a hero section with a dark overlay, a speaker section laid out with CSS Grid and pricing cards.",
    stack: ["HTML5", "CSS3", "Tailwind CSS", "Javascrift", "Next.js"],
    live: "https://majestic-froyo-3e5028.netlify.app/",
    github: "https://github.com/maria-dev4/assignment-05",
    
    challenges: [
      "Laying out the speaker section with CSS Grid so it stays tidy on every screen size.",
      "Placing readable text over the hero image with a dark overlay.",
      "Making the sticky navbar and pricing cards respond well on small screens."
    ],
    future: [
      "Add a mobile menu and a schedule section",
      "Connect a working ticket registration form",
      "Rebuild the page in React for reusable components"
    ]
  }
];
