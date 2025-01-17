import {
    FaReact,
    FaNodeJs,
    FaDocker,
    FaAws,
    FaPython,
    FaJava,
    FaPhp,
    FaGit,
    FaHtml5,
    FaCss3Alt,
  } from "react-icons/fa";
  import {
    SiNextdotjs,
    SiMongodb,
    SiTypescript,
    SiGraphql,
    SiKubernetes,
    SiPostgresql,
    SiFirebase,
    SiTailwindcss,
    SiRedux,
    SiJquery,
    SiMysql,
    SiExpress,
    SiVuedotjs,
    SiDjango,
    SiLaravel,
    SiRubyonrails,
    SiCsharp,
    SiDotnet,
    SiFlutter,
    SiSass,
    SiWebpack,
    SiBabel,
    SiRust,
    SiKotlin,
    SiElasticsearch,
    SiAngular
  } from "react-icons/si";
  

const techStack = [
  {
    name: "React",
    icon: <FaReact />,
    bg: "#282c34",
    textColor: "#61DBFB",
    releaseDate: "May 29, 2013",
    creator: "Facebook",
    website: "https://reactjs.org",
    description: "React is a JavaScript library for building interactive and declarative user interfaces. It uses a component-based architecture and virtual DOM for efficient rendering.",
    useCases: ["Web development", "Single-page applications", "Mobile app development (via React Native)"],
    popularCompanies: ["Facebook", "Instagram", "Airbnb"],
    features: ["Virtual DOM", "Component-based", "React Native for mobile", "Hooks API"],
    popularity: "Highly popular, used by millions of developers globally.",
    relatedTechnologies: ["Redux", "React Router", "React Native"],
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    bg: "#ffffff",
    textColor: "#000000",
    releaseDate: "October 25, 2016",
    creator: "Vercel",
    website: "https://nextjs.org",
    description: "Next.js is a React framework that enables server-side rendering and static site generation for React applications. It simplifies routing and API handling.",
    useCases: ["Server-side rendered applications", "Static websites", "Progressive web apps"],
    popularCompanies: ["Netflix", "Hulu", "Twitch"],
    features: ["SSR (Server-side Rendering)", "Static Site Generation", "API routes"],
    popularity: "Very popular in the React ecosystem for building fast, scalable apps.",
    relatedTechnologies: ["React", "Vercel", "TypeScript"],
  },
  {
    name: "Angular",
    icon: <SiAngular />,
    bg: "#FFECEC",
    textColor: "#DD0031",
    releaseDate: "September 14, 2016",
    creator: "Google",
    website: "https://angular.io",
    description: "Angular is a TypeScript-based web application framework. It provides a complete development ecosystem with built-in tools for dependency injection, routing, and forms.",
    useCases: ["Enterprise applications", "Dynamic web applications", "Cross-platform apps"],
    popularCompanies: ["Google", "Microsoft", "Forbes"],
    features: ["Two-way data binding", "Dependency injection", "RxJS"],
    popularity: "Widely used for building large-scale, enterprise-grade web applications.",
    relatedTechnologies: ["TypeScript", "RxJS", "Ionic"],
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs />,
    bg: "#f0fdf4",
    textColor: "#4FC08D",
    releaseDate: "February 2014",
    creator: "Evan You",
    website: "https://vuejs.org",
    description: "Vue.js is a progressive JavaScript framework for building user interfaces. It focuses on simplicity, flexibility, and ease of integration.",
    useCases: ["Single-page applications", "Prototyping", "Web interfaces"],
    popularCompanies: ["Alibaba", "Xiaomi", "Grammarly"],
    features: ["Reactive data binding", "Component-based architecture", "Vue CLI"],
    popularity: "Gaining popularity for its simplicity and flexibility, especially in the frontend ecosystem.",
    relatedTechnologies: ["Vuex", "Vue Router", "Nuxt.js"],
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    bg: "#eafae3",
    textColor: "#3C873A",
    releaseDate: "May 27, 2009",
    creator: "Ryan Dahl",
    website: "https://nodejs.org",
    description: "Node.js is a runtime environment that allows developers to execute JavaScript on the server. It uses an event-driven, non-blocking I/O model for scalability.",
    useCases: ["Server-side applications", "RESTful APIs", "Real-time applications"],
    popularCompanies: ["PayPal", "LinkedIn", "Netflix"],
    features: ["Non-blocking I/O", "Event-driven", "Vast ecosystem of packages (npm)"],
    popularity: "Very popular in server-side JavaScript development, known for high performance.",
    relatedTechnologies: ["Express.js", "Socket.io", "MongoDB"],
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    bg: "#F7F7F7",
    textColor: "#4DB33D",
    releaseDate: "February 2009",
    creator: "MongoDB Inc.",
    website: "https://www.mongodb.com",
    description: "MongoDB is a NoSQL document database that provides high performance, high availability, and easy scalability. It stores data in flexible, JSON-like documents.",
    useCases: ["Big data applications", "Real-time analytics", "Content management"],
    popularCompanies: ["Uber", "eBay", "Lyft"],
    features: ["Schema-less design", "Horizontal scaling", "High availability"],
    popularity: "Very popular for its flexibility in managing large, unstructured data.",
    relatedTechnologies: ["Mongoose", "Aggregation Framework", "Replica Sets"],
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    bg: "#f2f2f2",
    textColor: "#0db7ed",
    releaseDate: "March 20, 2013",
    creator: "Solomon Hykes",
    website: "https://www.docker.com",
    description: "Docker is a platform for developing, shipping, and running applications in isolated containers. It allows developers to package applications with their dependencies.",
    useCases: ["Microservices", "Continuous integration", "Cloud-native applications"],
    popularCompanies: ["Spotify", "Pinterest", "Uber"],
    features: ["Containerization", "Isolation", "Docker Compose"],
    popularity: "A popular tool in DevOps and microservices, used to create portable and isolated environments.",
    relatedTechnologies: ["Kubernetes", "Docker Compose", "Docker Swarm"],
  },
  {
    name: "AWS",
    icon: <FaAws />,
    bg: "#232f3e",
    textColor: "#FF9900",
    releaseDate: "March 2006",
    creator: "Amazon",
    website: "https://aws.amazon.com",
    description: "Amazon Web Services is a cloud computing platform offering infrastructure, platform, and software as services. It provides a vast array of scalable cloud solutions.",
    useCases: ["Cloud hosting", "Data storage", "Machine learning"],
    popularCompanies: ["Netflix", "Airbnb", "NASA"],
    features: ["Scalable infrastructure", "Global availability", "Elastic services"],
    popularity: "Dominates the cloud computing market with a large range of services.",
    relatedTechnologies: ["EC2", "S3", "Lambda"],
  },
  {
    name: "Python",
    icon: <FaPython />,
    bg: "#f5f5f5",
    textColor: "#3776AB",
    releaseDate: "February 20, 1991",
    creator: "Guido van Rossum",
    website: "https://www.python.org",
    description: "Python is a high-level, versatile programming language known for its simplicity and readability. It is widely used in web development, data science, and automation.",
    useCases: ["Web development", "Data analysis", "AI and machine learning"],
    popularCompanies: ["Google", "Dropbox", "Instagram"],
    features: ["Dynamic typing", "Extensive libraries", "Readable syntax"],
    popularity: "Extremely popular in various fields, especially in data science and machine learning.",
    relatedTechnologies: ["Pandas", "Django", "Flask"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    bg: "#ffffff",
    textColor: "#3178C6",
    releaseDate: "October 1, 2012",
    creator: "Microsoft",
    website: "https://www.typescriptlang.org",
    description: "TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions, enhancing code readability and maintainability.",
    useCases: ["Large-scale web applications", "Frontend frameworks", "Codebases requiring strict typing"],
    popularCompanies: ["Microsoft", "Slack", "Asana"],
    features: ["Static typing", "Generics", "Type inference"],
    popularity: "Gaining momentum in frontend development for its ability to catch bugs early.",
    relatedTechnologies: ["Angular", "React", "Vue.js"],
  },
  {
    name: "Java",
    icon: <FaJava />,
    bg: "#F7E8D4",
    textColor: "#5382A1",
    releaseDate: "May 23, 1995",
    creator: "James Gosling at Sun Microsystems",
    website: "https://www.oracle.com/java/",
    description:
      "Java is a high-level, object-oriented programming language designed to have as few implementation dependencies as possible. It's widely used for building enterprise-grade applications.",
    useCases: ["Enterprise applications", "Android apps", "Backend systems"],
    popularCompanies: ["LinkedIn", "Uber", "eBay"],
    features: ["Platform independence", "Strong memory management", "Rich API"],
    popularity: "One of the most popular programming languages for over two decades.",
    relatedTechnologies: ["Spring", "Hibernate", "JVM"],
  },
  {
    name: "PHP",
    icon: <FaPhp />,
    bg: "#4F5D95",
    textColor: "#4F5D95",
    releaseDate: "June 8, 1995",
    creator: "Rasmus Lerdorf",
    website: "https://www.php.net/",
    description:
      "PHP is a server-side scripting language designed specifically for web development. It is widely used to create dynamic and interactive web pages.",
    useCases: ["Web applications", "CMS platforms", "E-commerce solutions"],
    popularCompanies: ["Facebook", "WordPress", "Wikipedia"],
    features: ["Easy to learn", "Extensive community support", "Integration with MySQL"],
    popularity: "Widely used for its simplicity and efficiency in web development.",
    relatedTechnologies: ["Laravel", "Symfony", "WordPress"],
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    bg: "#E10098",
    textColor: "#E10098",
    releaseDate: "July 2015",
    creator: "Facebook",
    website: "https://graphql.org/",
    description:
      "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
    useCases: ["API development", "Data fetching", "Real-time applications"],
    popularCompanies: ["GitHub", "Twitter", "Airbnb"],
    features: ["Flexible queries", "Strongly typed schema", "Reduced over-fetching"],
    popularity: "Rapidly gaining popularity for modern API development.",
    relatedTechnologies: ["Apollo", "Relay", "Hasura"],
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    bg: "#326CE5",
    textColor: "#326CE5",
    releaseDate: "June 7, 2014",
    creator: "Google",
    website: "https://kubernetes.io/",
    description:
      "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and operation of containerized applications.",
    useCases: ["Container orchestration", "Microservices", "Cloud-native applications"],
    popularCompanies: ["Google", "IBM", "Red Hat"],
    features: ["Automatic scaling", "Self-healing", "Service discovery"],
    popularity: "A leader in container orchestration, widely adopted in cloud environments.",
    relatedTechnologies: ["Docker", "Helm", "Istio"],
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    bg: "#336791",
    textColor: "#336791",
    releaseDate: "July 8, 1996",
    creator: "Michael Stonebraker and UC Berkeley",
    website: "https://www.postgresql.org/",
    description:
      "PostgreSQL is a powerful, open-source object-relational database system with an emphasis on extensibility and standards compliance.",
    useCases: ["Web applications", "Analytics", "Data warehousing"],
    popularCompanies: ["Spotify", "Apple", "Reddit"],
    features: ["ACID compliance", "Extensibility", "JSON/JSONB support"],
    popularity: "Highly regarded for its robustness and feature-rich nature.",
    relatedTechnologies: ["pgAdmin", "PostGIS", "TimescaleDB"],
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    bg: "#38B2AC",
    textColor: "#38B2AC",
    releaseDate: "November 2017",
    creator: "Adam Wathan",
    website: "https://tailwindcss.com/",
    description:
      "Tailwind CSS is a utility-first CSS framework for building custom designs without having to write CSS from scratch.",
    useCases: ["Web design", "Frontend development", "Rapid prototyping"],
    popularCompanies: ["Vercel", "Laravel", "Hashnode"],
    features: ["Utility-first approach", "Customizable", "Responsive design"],
    popularity: "Extremely popular among developers for its ease of use and flexibility.",
    relatedTechnologies: ["CSS", "PostCSS", "Tailwind UI"],
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    bg: "#FFA000",
    textColor: "#FFA000",
    releaseDate: "April 2012",
    creator: "Firebase, Inc.",
    website: "https://firebase.google.com/",
    description:
      "Firebase is a platform developed by Google for creating mobile and web applications with real-time database and backend as a service.",
    useCases: ["Mobile apps", "Real-time databases", "User authentication"],
    popularCompanies: ["The New York Times", "Shazam", "Todoist"],
    features: ["Real-time database", "Authentication", "Cloud functions"],
    popularity: "Popular for rapid application development and serverless solutions.",
    relatedTechnologies: ["Firestore", "Google Cloud", "Firebase SDK"],
  },
  {
    name: "Rust",
    icon: <SiRust />,
    bg: "#000000",
    textColor: "#000000",
    releaseDate: "July 7, 2010",
    creator: "Graydon Hoare",
    website: "https://www.rust-lang.org/",
    description:
      "Rust is a systems programming language focused on safety, speed, and concurrency. It eliminates many common bugs at compile time.",
    useCases: ["System programming", "WebAssembly", "Embedded systems"],
    popularCompanies: ["Mozilla", "Dropbox", "Discord"],
    features: ["Memory safety", "Concurrency", "Performance"],
    popularity: "Gaining traction for safe and high-performance systems programming.",
    relatedTechnologies: ["Cargo", "WebAssembly", "Actix"],
  },
  {
    name: "Git",
    icon: <FaGit />,
    bg: "#F05032",
    textColor: "#F05032",
    releaseDate: "April 7, 2005",
    creator: "Linus Torvalds",
    website: "https://git-scm.com/",
    description:
      "Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    useCases: ["Version control", "Collaboration", "Backup systems"],
    popularCompanies: ["Google", "Facebook", "Microsoft"],
    features: ["Branching and merging", "Distributed development", "Fast performance"],
    popularity: "Widely used by developers and organizations globally.",
    relatedTechnologies: ["GitHub", "GitLab", "Bitbucket"],
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    bg: "#E34F26",
    textColor: "#E34F26",
    releaseDate: "October 28, 2014",
    creator: "World Wide Web Consortium (W3C)",
    website: "https://www.w3.org/TR/html5/",
    description:
      "HTML5 is the latest version of the HTML standard, providing powerful new features for multimedia, graphics, and web application development.",
    useCases: ["Web development", "Mobile web apps", "Interactive content"],
    popularCompanies: ["Google", "Mozilla", "Apple"],
    features: ["Semantic elements", "Offline storage", "Rich multimedia support"],
    popularity: "Foundational technology for web development, universally used.",
    relatedTechnologies: ["CSS3", "JavaScript", "Web APIs"],
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    bg: "#1572B6",
    textColor: "#1572B6",
    releaseDate: "June 2011",
    creator: "World Wide Web Consortium (W3C)",
    website: "https://www.w3.org/Style/CSS/",
    description:
      "CSS3 is the latest version of the Cascading Style Sheets standard, enabling developers to style web pages with advanced features.",
    useCases: ["Web design", "Responsive layouts", "Animation effects"],
    popularCompanies: ["Google", "Apple", "Amazon"],
    features: ["Media queries", "Flexbox and Grid", "Transitions and animations"],
    popularity: "Essential technology for creating visually appealing web pages.",
    relatedTechnologies: ["HTML5", "Sass", "Tailwind CSS"],
  },
  {
    name: "Kotlin",
    icon: <SiKotlin />,
    bg: "#A97BFF",
    textColor: "#A97BFF",
    releaseDate: "July 22, 2011",
    creator: "JetBrains",
    website: "https://kotlinlang.org/",
    description:
      "Kotlin is a modern programming language that combines the power of Java with a more concise and expressive syntax, primarily used for Android development.",
    useCases: ["Android apps", "Web applications", "Backend development"],
    popularCompanies: ["Pinterest", "Netflix", "Uber"],
    features: ["Interoperability with Java", "Null safety", "Concise syntax"],
    popularity: "The preferred language for Android development.",
    relatedTechnologies: ["Java", "Spring", "Ktor"],
  },
  {
    name: "Elasticsearch",
    icon: <SiElasticsearch />,
    bg: "#005571",
    textColor: "#005571",
    releaseDate: "February 8, 2010",
    creator: "Shay Banon",
    website: "https://www.elastic.co/elasticsearch/",
    description:
      "Elasticsearch is a distributed search and analytics engine designed for horizontal scalability, reliability, and easy integration.",
    useCases: ["Full-text search", "Real-time analytics", "Log monitoring"],
    popularCompanies: ["eBay", "Netflix", "Walmart"],
    features: ["Distributed architecture", "RESTful API", "Schema-free JSON documents"],
    popularity: "Widely used for search and analytics in big data applications.",
    relatedTechnologies: ["Kibana", "Logstash", "Beats"],
  },
  {
    name: "Django",
    icon: <SiDjango />,
    bg: "#092E20",
    textColor: "#092E20",
    releaseDate: "July 21, 2005",
    creator: "Adrian Holovaty and Simon Willison",
    website: "https://www.djangoproject.com/",
    description:
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    useCases: ["Web applications", "APIs", "Backend systems"],
    popularCompanies: ["Instagram", "Pinterest", "Mozilla"],
    features: ["ORM", "Admin panel", "Secure and scalable"],
    popularity: "Highly regarded in Python web development.",
    relatedTechnologies: ["Python", "Flask", "Celery"],
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    bg: "#FF2D20",
    textColor: "#FF2D20",
    releaseDate: "June 9, 2011",
    creator: "Taylor Otwell",
    website: "https://laravel.com/",
    description:
      "Laravel is a PHP framework for web artisans, offering an elegant syntax and features like routing, authentication, and caching.",
    useCases: ["Web applications", "APIs", "CMS platforms"],
    popularCompanies: ["9GAG", "Union", "Pfizer"],
    features: ["Blade templating", "Eloquent ORM", "Artisan CLI"],
    popularity: "One of the most popular PHP frameworks.",
    relatedTechnologies: ["PHP", "Symfony", "Vue.js"],
  },
  {
    name: "RubyonRails",
    icon: <SiRubyonrails />,
    bg: "#CC0000",
    textColor: "#CC0000",
    releaseDate: "December 13, 2005",
    creator: "David Heinemeier Hansson",
    website: "https://rubyonrails.org/",
    description:
      "Ruby on Rails is a full-stack web framework optimized for programmer happiness and sustainable productivity.",
    useCases: ["Web applications", "E-commerce platforms", "Prototyping"],
    popularCompanies: ["GitHub", "Shopify", "Airbnb"],
    features: ["Convention over configuration", "Active Record ORM", "Scaffolding"],
    popularity: "Popular for rapid application development.",
    relatedTechnologies: ["Ruby", "Sinatra", "Capistrano"],
  },
  {
    name: "C#",
    icon: <SiCsharp />,
    bg: "#68217A",
    textColor: "#68217A",
    releaseDate: "2000",
    creator: "Microsoft",
    website: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    description:
      "C# is a modern, object-oriented programming language developed by Microsoft for building a wide range of enterprise-grade applications.",
    useCases: ["Desktop apps", "Game development", "Web applications"],
    popularCompanies: ["Microsoft", "Unity", "Samsung"],
    features: ["Type-safe", "Garbage collection", "LINQ"],
    popularity: "Widely used in enterprise software and game development.",
    relatedTechnologies: [".NET", "ASP.NET", "Xamarin"],
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
    bg: "#512BD4",
    textColor: "#512BD4",
    releaseDate: "February 13, 2002",
    creator: "Microsoft",
    website: "https://dotnet.microsoft.com/",
    description:
      ".NET is a free, cross-platform, open-source developer platform for building different types of applications.",
    useCases: ["Web applications", "Mobile apps", "Desktop software"],
    popularCompanies: ["Microsoft", "Stack Overflow", "Dell"],
    features: ["Cross-platform", "Rich libraries", "Language interoperability"],
    popularity: "Popular for enterprise and scalable web development.",
    relatedTechnologies: ["C#", "ASP.NET", "Xamarin"],
  },
  {
    name: "Flutter",
    icon: <SiFlutter />,
    bg: "#02569B",
    textColor: "#02569B",
    releaseDate: "May 2017",
    creator: "Google",
    website: "https://flutter.dev/",
    description:
      "Flutter is an open-source UI software development toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    useCases: ["Mobile apps", "Web apps", "Desktop apps"],
    popularCompanies: ["Alibaba", "Google", "eBay"],
    features: ["Hot reload", "Custom widgets", "Cross-platform"],
    popularity: "Growing rapidly in mobile and cross-platform development.",
    relatedTechnologies: ["Dart", "Firebase", "Codemagic"],
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    bg: "#764ABC",
    textColor: "#764ABC",
    releaseDate: "June 2015",
    creator: "Dan Abramov and Andrew Clark",
    website: "https://redux.js.org/",
    description:
      "Redux is a predictable state container for JavaScript apps, often used with React to manage application state.",
    useCases: ["State management", "React applications", "Complex UIs"],
    popularCompanies: ["Instagram", "Robinhood", "Airbnb"],
    features: ["Single source of truth", "Middleware support", "Time travel debugging"],
    popularity: "Very popular in the React ecosystem.",
    relatedTechnologies: ["React", "Redux Toolkit", "Thunk"],
  },
  {
    name: "Sass",
    icon: <SiSass />,
    bg: "#CC6699",
    textColor: "#CC6699",
    releaseDate: "November 28, 2006",
    creator: "Hampton Catlin, Natalie Weizenbaum",
    website: "https://sass-lang.com/",
    description:
      "Sass is a CSS preprocessor that extends CSS with features like variables, nested rules, and mixins, making stylesheet authoring more efficient and organized.",
    useCases: ["Web styling", "CSS architecture", "Responsive design"],
    popularCompanies: ["Twitter", "Airbnb", "BBC"],
    features: ["Variables", "Mixins", "Nesting"],
    popularity: "Widely used by developers for managing large CSS codebases.",
    relatedTechnologies: ["CSS3", "Less", "Stylus"],
  },
  {
    name: "Webpack",
    icon: <SiWebpack />,
    bg: "#8DD6F9",
    textColor: "#8DD6F9",
    releaseDate: "March 10, 2012",
    creator: "Tobias Koppers",
    website: "https://webpack.js.org/",
    description:
      "Webpack is a powerful JavaScript module bundler that compiles and packages modules along with dependencies into static assets.",
    useCases: ["Module bundling", "Code splitting", "Optimizing assets"],
    popularCompanies: ["Uber", "Airbnb", "Slack"],
    features: ["Code splitting", "Tree shaking", "Loaders and plugins"],
    popularity: "The most popular module bundler in the JavaScript ecosystem.",
    relatedTechnologies: ["Babel", "Rollup", "Parcel"],
  },
  {
    name: "Babel",
    icon: <SiBabel />,
    bg: "#F9DC3E",
    textColor: "#F9DC3E",
    releaseDate: "September 28, 2014",
    creator: "Sebastian McKenzie",
    website: "https://babeljs.io/",
    description:
      "Babel is a JavaScript compiler that lets developers use next-generation JavaScript syntax and features in their projects by transpiling code.",
    useCases: ["Transpilation", "JavaScript compatibility", "Polyfills"],
    popularCompanies: ["Facebook", "Google", "Netflix"],
    features: ["JavaScript transpilation", "Plugin system", "Customizable"],
    popularity: "Commonly used with modern JavaScript frameworks.",
    relatedTechnologies: ["Webpack", "ESLint", "TypeScript"],
  },
  {
    name: "jQuery",
    icon: <SiJquery />,
    bg: "#0769AD",
    textColor: "#0769AD",
    releaseDate: "August 26, 2006",
    creator: "John Resig",
    website: "https://jquery.com/",
    description:
      "jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML DOM manipulation, event handling, and animations.",
    useCases: ["DOM manipulation", "Event handling", "Simplifying AJAX"],
    popularCompanies: ["WordPress", "IBM", "Intel"],
    features: ["Cross-browser compatibility", "Extensibility", "Animation support"],
    popularity: "Previously dominant, now replaced in most modern frameworks.",
    relatedTechnologies: ["JavaScript", "React", "Vue.js"],
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    bg: "#4479A1",
    textColor: "#4479A1",
    releaseDate: "May 23, 1995",
    creator: "Michael Widenius, David Axmark, Allan Larsson",
    website: "https://www.mysql.com/",
    description:
      "MySQL is an open-source relational database management system (RDBMS) widely used for web applications and enterprise software.",
    useCases: ["Data storage", "Web applications", "Content management systems"],
    popularCompanies: ["Facebook", "Twitter", "YouTube"],
    features: ["Relational database", "ACID compliance", "Scalability"],
    popularity: "One of the most popular database management systems worldwide.",
    relatedTechnologies: ["MariaDB", "PostgreSQL", "SQLite"],
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    bg: "#000000",
    textColor: "#000000",
    releaseDate: "November 16, 2010",
    creator: "TJ Holowaychuk",
    website: "https://expressjs.com/",
    description:
      "Express.js is a minimal and flexible Node.js web application framework providing robust features for building web and mobile applications.",
    useCases: ["Web servers", "APIs", "Backend frameworks"],
    popularCompanies: ["Uber", "PayPal", "Accenture"],
    features: ["Middleware support", "Routing", "Lightweight"],
    popularity: "Widely used in the Node.js ecosystem for server-side applications.",
    relatedTechnologies: ["Node.js", "Koa", "NestJS"],
  },
  

];

export default techStack;