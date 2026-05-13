export const profile = {
    name: "Somiryu",
    title: "Senior Full Stack Developer & Tabletop Industry Specialist",
    summary: "Full Stack Engineer with 15 years of immersion in the tabletop industry. Expert in Svelte, Ruby on Rails, and Go, with a proven track record of building complex ecosystems for game publishing and gamification. 4-time Gamicon Award winner for excellence in Gamification and Learning.",
    avatar: "/avatar.png", // User can replace this later
    socials: {
        github: "https://github.com/somiryu",
        linkedin: "https://www.linkedin.com/in/javier-velasquez-game/", // Placeholder
        email: "mailto:somiryu@gmail.com"
    }
};

export const skills = [
    { name: "Svelte / SvelteKit", level: 95, category: "Frontend", description: "Primary mastery. Expert in real-time state management via Stores." },
    { name: "Ruby on Rails", level: 90, category: "Backend", description: "Built several publishing ecosystems and high-volume mailing systems." },
    { name: "Vue 3 / Pinia", level: 15, category: "Frontend", description: "Direct logical progression from Svelte. Ready to adapt and scale." },
    { name: "Go (Golang)", level: 85, category: "Backend", description: "High-concurrency microservices for gamification engines." },
    { name: "PostgreSQL / MongoDB", level: 85, category: "Database", description: "Relational and NoSQL expertise for complex data structures." },
    { name: "AWS / DevOps", level: 80, category: "Infrastructure", description: "Terraform, EC2, S3, and Digital Ocean deployments." },
    { name: "Python / Django", level: 40, category: "Backend", description: "Basic backend development and scripting experience." },
    { name: "Gamification Design", level: 100, category: "Industry", description: "4x Gamicon Award Winner. Expert in engagement mechanics." },
    { name: "Project Management", level: 90, category: "Industry", description: "Led distributed teams and organized international events like Ludotopia." }
];

export const projects = [
    {
        id: "bg-forge",
        title: "BG-Forge",
        subtitle: "Board Game Publishing Ecosystem",
        description: "A comprehensive web application solving critical bottlenecks in the tabletop publishing workflow. Built as a solo project to handle complex component tracking and real-time state.",
        images: ["/Studio Screenshot.png", "/Admin Screenshot.png", "/Studio Scrrenshot 2.png"],
        stack: ["Ruby on Rails", "Svelte", "PostgreSQL", "Netlify"],
        link: "https://bg-forge.netlify.app/",
        highlights: [
            "Advanced Svelte Stores for real-time state management",
            "Complex relational schema for component manufacturing",
            "Optimized for publishing industry workflows"
        ]
    },
    {
        id: "gengine",
        title: "Gengine",
        subtitle: "Gamification Engine Microservices",
        description: "A high-concurrency engine for real-time engagement mechanics. Designed to scale across multiple applications with a modular administrative interface.",
        images: ["/aws gengine.png"],
        stack: ["Go", "MongoDB", "Docker", "SvelteKit", "Terraform", "AWS"],
        link: "https://github.com/somiryu",
        highlights: [
            "Microservice architecture for performance",
            "Infrastructure as Code via Terraform (AWS EC2/S3)",
            "Modular dashboard for real-time monitoring"
        ]
    },
    {
        id: "newsletter",
        title: "Newsletter & Delivery",
        subtitle: "High-Volume Communication System",
        description: "Custom mailing solution for large-scale reach. Managed full-stack deployment and reliability for consistent delivery.",
        images: ["/hashavua.png"],
        stack: ["Ruby on Rails", "Svelte", "Digital Ocean", "SendGrid", "Nginx"],
        link: "https://hashavuabogota.com/",
        highlights: [
            "Managed Nginx + Passenger deployment",
            "High-reliability SendGrid integration",
            "Custom-built for specific community engagement needs"
        ]
    },
    {
        id: "xanadu-bga",
        title: "Xanadú: BGA Adaptation",
        subtitle: "Digital Board Game Engineering",
        description: "An adaptation of the award-winning Xanadú board game for the Board Game Arena platform. Challenged with implementing complex game state logic within a highly restrictive PHP/JS API ecosystem.",
        images: ["/Xanadu approvals.png"],
        stack: ["PHP", "JavaScript", "BGA Framework", "SQL"],
        link: "https://boardgamearena.com/gamepanel?game=xanadu",
        highlights: [
            "Successfully implemented 100% of game logic in a legacy framework",
            "Reached Beta phase with extensive community approval and playtesting",
            "Deep integration with asynchronous state synchronization and player notifications",
            "Demonstrated ability to adapt to rigid, industry-specific proprietary APIs"
        ]
    }
];

export const experience = [
    {
        period: "2011 - Present",
        company: "Azahar Juegos & Free to Play",
        role: "Founder / Lead Developer",
        description: "Leading game design, publishing, and gamification consultancy. Developed several internal tools and client-facing platforms."
    },
    {
        period: "2026",
        company: "Ludotopia Colombia",
        role: "Lead Organizer",
        description: "Leading the team for the major tabletop event in Colombia, managing logistics, technology, and industry relations."
    },
    {
        period: "2016",
        company: "Xanadú",
        role: "Lead Game Designer",
        description: "Published flagship game and presented at international fairs like Essen Spiele (Germany) and MegaXP (Mexico)."
    }
];

export const awards = [
    { title: "Gamicon Award", year: "4 Total", category: "Gamification & Learning", icon: "Trophy" }
];

export const workflow = {
    title: "The Antigravity Method",
    steps: [
        { title: "Architecture Mode", description: "Strategic discussion and design of features before a single line of code is written." },
        { title: "Phased Implementation", description: "Iterative, controlled coding phases to ensure stability and precision." },
        { title: "Edge-Case Review", description: "Human-led, AI-Assisted review to eliminate technical debt and ensure security." }
    ]
};
