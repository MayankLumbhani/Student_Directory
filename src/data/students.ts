export interface Subject {
  code: string;
  name: string;
  credits: string;
}

export interface Student {
  id: number;
  studentId: string;
  name: string;
  initials: string;
  avatarColor: {
    bg: string;
    text: string;
  };
  department: string;
  course: string;
  studyYear: string;
  year: string;
  status: string;
  email: string;
  phone: string;
  location: string;
  enrolled: string;
  about: string;
  bio: string;
  currentStanding: string;
  subjects: Subject[];
  skills: string[];
  projects: string[];
  systemRecordId: string;
  lastValidated: string;
  image: string;
}

export const students: Student[] = [
  {
    id: 1,
    studentId: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "aarav.mehta@campus.edu",
    phone: "+1 (555) 234-8901",
    location: "Campus Heights, Hall B",
    enrolled: "Fall 2022",
    about: "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    bio: "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: "4.0 Credits" },
      { code: "CS-340", name: "Web Application Architecture", credits: "4.0 Credits" },
      { code: "CS-280", name: "Algorithms & Complexity", credits: "3.5 Credits" }
    ],
    skills: ["Rust", "Go", "Distributed Systems", "Kubernetes", "Next.js", "TypeScript"],
    projects: [
      "Distributed Key-Value Store with Raft Consensus",
      "Real-time Campus Event Stream Processor",
      "Automated Peer Code Review Bot"
    ],
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
    image: "/students/aarav.jpg"
  },
  {
    id: 2,
    studentId: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Design",
    course: "Design",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "elena.rostova@campus.edu",
    phone: "+1 (555) 345-6789",
    location: "Art & Media Quarters",
    enrolled: "Fall 2023",
    about: "Elena specializes in design systems and human-centered design for educational software. She explores accessible interface patterns and interactive data visualizations.",
    bio: "Elena specializes in design systems and human-centered design for educational software. She explores accessible interface patterns and interactive data visualizations.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "DS-210", name: "Typography & Visual Systems", credits: "3.0 Credits" },
      { code: "DS-245", name: "Human-Computer Interaction", credits: "4.0 Credits" },
      { code: "DS-290", name: "Design Prototyping & Motion", credits: "3.5 Credits" }
    ],
    skills: ["Figma", "UI/UX", "Design Systems", "Prototyping", "CSS Grid", "Accessibility"],
    projects: [
      "Campus Library Navigation App",
      "Accessible Healthcare Dashboard",
      "Micro-interaction Motion Library"
    ],
    systemRecordId: "1089-DS-ER",
    lastValidated: "Oct 24, 2024",
    image: "/students/elena.jpg"
  },
  {
    id: 3,
    studentId: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    avatarColor: { bg: "#ffedd5", text: "#ea580c" },
    department: "Business",
    course: "Business",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "marcus.chen@campus.edu",
    phone: "+1 (555) 456-7890",
    location: "West Residence, Tower 1",
    enrolled: "Fall 2021",
    about: "Marcus focuses on venture analytics and tech strategy. He serves as president of the Student Entrepreneurship Guild and assists university startups with financial modeling.",
    bio: "Marcus focuses on venture analytics and tech strategy. He serves as president of the Student Entrepreneurship Guild and assists university startups with financial modeling.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "BUS-410", name: "Strategic Management & Valuation", credits: "4.0 Credits" },
      { code: "BUS-455", name: "Venture Capital & Private Equity", credits: "3.5 Credits" },
      { code: "BUS-380", name: "Organizational Leadership", credits: "3.0 Credits" }
    ],
    skills: ["Financial Modeling", "Market Analysis", "Strategic Planning", "Python for Finance", "Pitch Decks"],
    projects: [
      "Campus Venture Fund Portfolio Tracker",
      "SaaS Pricing Strategy Benchmark",
      "Student Micro-loans Feasibility Analysis"
    ],
    systemRecordId: "1120-BA-MC",
    lastValidated: "Oct 24, 2024",
    image: "/students/marcus.jpg"
  },
  {
    id: 4,
    studentId: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "1st Year (Freshman)",
    year: "1st Year",
    status: "Active Student",
    email: "priya.sharma@campus.edu",
    phone: "+1 (555) 567-8901",
    location: "North Quad Dormitory",
    enrolled: "Fall 2024",
    about: "Priya is an ambitious freshman with a keen interest in competitive programming, algorithms, and web technologies. She won 1st place in the freshmen hackathon.",
    bio: "Priya is an ambitious freshman with a keen interest in competitive programming, algorithms, and web technologies. She won 1st place in the freshmen hackathon.",
    currentStanding: "1st Year Undergraduate",
    subjects: [
      { code: "CS-101", name: "Introduction to Computer Science", credits: "4.0 Credits" },
      { code: "CS-105", name: "Discrete Mathematics", credits: "4.0 Credits" },
      { code: "MATH-151", name: "Calculus for Engineers", credits: "3.5 Credits" }
    ],
    skills: ["Python", "C++", "Data Structures", "HTML5", "Tailwind CSS"],
    projects: [
      "Campus Study Group Coordinator",
      "Simple Markdown Note Editor",
      "Freshmen Survival Guide Website"
    ],
    systemRecordId: "1155-CS-PS",
    lastValidated: "Oct 24, 2024",
    image: "/students/priya.jpg"
  },
  {
    id: 5,
    studentId: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    avatarColor: { bg: "#ffe4e6", text: "#e11d48" },
    department: "Design",
    course: "Design",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "lucas.dubois@campus.edu",
    phone: "+1 (555) 678-9012",
    location: "South Studio Flats",
    enrolled: "Fall 2022",
    about: "Lucas is an industrial and digital product designer fascinated by physical computing, 3D generative assets, and minimal Scandinavian design principles.",
    bio: "Lucas is an industrial and digital product designer fascinated by physical computing, 3D generative assets, and minimal Scandinavian design principles.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "DS-315", name: "3D Product Modeling & Rendering", credits: "4.0 Credits" },
      { code: "DS-330", name: "Materiality & Sustainable Design", credits: "3.5 Credits" },
      { code: "DS-360", name: "Interactive Device Design", credits: "3.5 Credits" }
    ],
    skills: ["Blender", "Rhino 3D", "Figma", "Keyshot", "UI Motion", "Design Research"],
    projects: [
      "Modular Ergonomic Desk Lamp",
      "Zero-Waste Food Delivery Packaging",
      "Haptic Feedback Controller Concept"
    ],
    systemRecordId: "1201-DS-LD",
    lastValidated: "Oct 24, 2024",
    image: "/students/lucas.jpg"
  },
  {
    id: 6,
    studentId: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Business",
    course: "Business",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "maya.lin@campus.edu",
    phone: "+1 (555) 789-0123",
    location: "East Campus Apartments",
    enrolled: "Fall 2023",
    about: "Maya is studying international business and corporate marketing. She has led digital campaign initiatives for multiple student non-profit organizations on campus.",
    bio: "Maya is studying international business and corporate marketing. She has led digital campaign initiatives for multiple student non-profit organizations on campus.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "BUS-220", name: "Principles of Global Marketing", credits: "3.5 Credits" },
      { code: "BUS-240", name: "Business Analytics & Statistics", credits: "4.0 Credits" },
      { code: "BUS-260", name: "Supply Chain Essentials", credits: "3.0 Credits" }
    ],
    skills: ["Digital Marketing", "SEO Strategy", "Google Analytics", "Tableau", "Public Speaking"],
    projects: [
      "Campus Sustainability Marketing Drive",
      "Cross-Border E-Commerce Case Study",
      "Student Brand Ambassador Program"
    ],
    systemRecordId: "1244-BA-ML",
    lastValidated: "Oct 24, 2024",
    image: "/students/maya.jpg"
  },
  {
    id: 7,
    studentId: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "tariq.almansoor@campus.edu",
    phone: "+1 (555) 890-1234",
    location: "Science Complex Lodges",
    enrolled: "Fall 2021",
    about: "Tariq focuses on deep learning, NLP, and neural architecture optimization. He has published two workshop papers on efficient transformer tokenization.",
    bio: "Tariq focuses on deep learning, NLP, and neural architecture optimization. He has published two workshop papers on efficient transformer tokenization.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "CS-460", name: "Deep Neural Networks & NLP", credits: "4.0 Credits" },
      { code: "CS-482", name: "Computer Vision & Perception", credits: "4.0 Credits" },
      { code: "CS-499", name: "Senior Capstone Thesis", credits: "3.0 Credits" }
    ],
    skills: ["PyTorch", "Python", "Hugging Face", "CUDA", "FastAPI", "Docker"],
    projects: [
      "Low-Latency Speech-to-Speech Translation",
      "Multimodal Campus Q&A Assistant",
      "Neural Quantization Benchmark Engine"
    ],
    systemRecordId: "1310-CS-TA",
    lastValidated: "Oct 24, 2024",
    image: "/students/tariq.jpg"
  },
  {
    id: 8,
    studentId: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    avatarColor: { bg: "#e0e7ff", text: "#4338ca" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "sophia.muller@campus.edu",
    phone: "+1 (555) 901-2345",
    location: "Maple Residence Hall",
    enrolled: "Fall 2023",
    about: "Sophia is passionate about database internals, cyber security, and cryptography. She actively contributes to open-source database connectors and participates in CTF tournaments.",
    bio: "Sophia is passionate about database internals, cyber security, and cryptography. She actively contributes to open-source database connectors and participates in CTF tournaments.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "CS-240", name: "Database Systems & Storage", credits: "4.0 Credits" },
      { code: "CS-260", name: "Computer Systems & Networking", credits: "4.0 Credits" },
      { code: "CS-275", name: "Foundations of Cyber Security", credits: "3.5 Credits" }
    ],
    skills: ["PostgreSQL", "C", "Go", "Network Security", "Cryptography", "Linux Admin"],
    projects: [
      "B-Tree Index Visualization Tool",
      "Campus VPN Traffic Analyzer",
      "Encrypted Chat Protocol Implementation"
    ],
    systemRecordId: "1388-CS-SM",
    lastValidated: "Oct 24, 2024",
    image: "/students/sophia.jpg"
  },
  {
    id: 9,
    studentId: "STU-1412",
    name: "Alexander Wright",
    initials: "AW",
    avatarColor: { bg: "#ffedd5", text: "#ea580c" },
    department: "Mechanical Engineering",
    course: "Mechanical Engineering",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "alexander.wright@campus.edu",
    phone: "+1 (555) 111-2233",
    location: "Engineering Commons, Wing C",
    enrolled: "Fall 2022",
    about: "Alexander leads the university Formula SAE suspension design team and has worked on advanced aerodynamic simulation using computational fluid dynamics.",
    bio: "Alexander leads the university Formula SAE suspension design team and has worked on advanced aerodynamic simulation.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "ME-310", name: "Fluid Dynamics & Aerodynamics", credits: "4.0 Credits" },
      { code: "ME-330", name: "Thermodynamics & Heat Transfer", credits: "3.5 Credits" },
      { code: "ME-355", name: "Mechanical Machine Design", credits: "4.0 Credits" }
    ],
    skills: ["SolidWorks", "ANSYS Fluent", "MATLAB", "Finite Element Analysis", "CNC Machining"],
    projects: [
      "Formula SAE Active Rear Wing Design",
      "High-Efficiency Heat Exchanger",
      "Autonomous Drone Chassis"
    ],
    systemRecordId: "1412-ME-AW",
    lastValidated: "Oct 24, 2024",
    image: "/students/alexander.jpg"
  },
  {
    id: 10,
    studentId: "STU-1450",
    name: "Chloe Dupont",
    initials: "CD",
    avatarColor: { bg: "#ffe4e6", text: "#e11d48" },
    department: "Design",
    course: "Design",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "chloe.dupont@campus.edu",
    phone: "+1 (555) 222-3344",
    location: "Parkview Residence",
    enrolled: "Fall 2021",
    about: "Chloe is an exhibition and environmental designer who creates immersive sensory installations blending physical architecture with digital projections.",
    bio: "Chloe is an exhibition and environmental designer creating immersive installations.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "DS-420", name: "Spatial & Environmental Design", credits: "4.0 Credits" },
      { code: "DS-450", name: "Interactive Installations", credits: "3.5 Credits" },
      { code: "DS-490", name: "Degree Portfolio Showcase", credits: "3.0 Credits" }
    ],
    skills: ["Spatial Design", "TouchDesigner", "Figma", "AutoCAD", "Lighting Design"],
    projects: [
      "Campus Annual Art Gallery Pavilions",
      "Interactive Light Corridor Installation",
      "Wayfinding System for Central Hospital"
    ],
    systemRecordId: "1450-DS-CD",
    lastValidated: "Oct 24, 2024",
    image: "/students/chloe.jpg"
  },
  {
    id: 11,
    studentId: "STU-1492",
    name: "Rohan Kulkarni",
    initials: "RK",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Data Science",
    course: "Data Science",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "rohan.kulkarni@campus.edu",
    phone: "+1 (555) 333-4455",
    location: "North Quad Dormitory",
    enrolled: "Fall 2023",
    about: "Rohan applies predictive modeling and big data analytics to urban mobility and public transportation efficiency.",
    bio: "Rohan applies predictive modeling to urban mobility and public transportation.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "DS-201", name: "Probability & Inferential Statistics", credits: "4.0 Credits" },
      { code: "DS-250", name: "Data Wrangling & Pipeline Ops", credits: "3.5 Credits" },
      { code: "CS-210", name: "Object Oriented Programming in Java", credits: "3.5 Credits" }
    ],
    skills: ["Python", "Pandas", "SQL", "Apache Spark", "Tableau", "R"],
    projects: [
      "Metro Transit Delay Predictor",
      "Campus Carbon Footprint Analysis",
      "Sentiment Radar for Tech News"
    ],
    systemRecordId: "1492-DS-RK",
    lastValidated: "Oct 24, 2024",
    image: "/students/rohan.jpg"
  },
  {
    id: 12,
    studentId: "STU-1525",
    name: "Ananya Iyer",
    initials: "AI",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Bioengineering",
    course: "Bioengineering",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "ananya.iyer@campus.edu",
    phone: "+1 (555) 444-5566",
    location: "Life Sciences Center Hall",
    enrolled: "Fall 2022",
    about: "Ananya investigates synthetic biology and CRISPR-Cas gene editing mechanisms for sustainable biomass generation.",
    bio: "Ananya investigates synthetic biology and gene editing mechanisms.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "BIO-305", name: "Cellular & Molecular Bioengineering", credits: "4.0 Credits" },
      { code: "BIO-335", name: "Biomedical Instrumentation", credits: "4.0 Credits" },
      { code: "CHEM-220", name: "Organic Chemistry II", credits: "3.5 Credits" }
    ],
    skills: ["Genomics", "PCR", "Matlab", "Bioinformatics", "Microscopy"],
    projects: [
      "Enzyme Optimization for Plastic Degradation",
      "Wearable Glucose Biosensor Prototype",
      "Cell Culture Growth Rate Modeling"
    ],
    systemRecordId: "1525-BE-AI",
    lastValidated: "Oct 24, 2024",
    image: "/students/ananya.jpg"
  },
  {
    id: 13,
    studentId: "STU-1560",
    name: "Gabriel Santos",
    initials: "GS",
    avatarColor: { bg: "#dcfce7", text: "#16a34a" },
    department: "Business",
    course: "Business",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "gabriel.santos@campus.edu",
    phone: "+1 (555) 555-6677",
    location: "Highland Hall",
    enrolled: "Fall 2022",
    about: "Gabriel specializes in international economics and sustainable supply chains with an emphasis on Latin American trade partnerships.",
    bio: "Gabriel specializes in international economics and sustainable supply chains.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "BUS-320", name: "International Trade & Policy", credits: "3.5 Credits" },
      { code: "BUS-345", name: "Corporate Financial Analysis", credits: "4.0 Credits" },
      { code: "BUS-370", name: "Sustainable Supply Chains", credits: "3.5 Credits" }
    ],
    skills: ["Financial Analysis", "Stata", "Supply Chain Modeling", "Excel VBA", "Portuguese"],
    projects: [
      "Fair Trade Coffee Logistics Framework",
      "Latin American Emerging Tech Markets Report",
      "Zero-Carbon Logistics Strategy"
    ],
    systemRecordId: "1560-BA-GS",
    lastValidated: "Oct 24, 2024",
    image: "/students/gabriel.jpg"
  },
  {
    id: 14,
    studentId: "STU-1598",
    name: "Fatima Noor",
    initials: "FN",
    avatarColor: { bg: "#e0f2fe", text: "#0284c7" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "fatima.noor@campus.edu",
    phone: "+1 (555) 666-7788",
    location: "Riverside Hall",
    enrolled: "Fall 2022",
    about: "Fatima is interested in cloud infrastructure, site reliability engineering, and building resilient distributed systems with Kubernetes.",
    bio: "Fatima is interested in cloud infrastructure and site reliability engineering.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-315", name: "Cloud Infrastructure Architecture", credits: "4.0 Credits" },
      { code: "CS-350", name: "Operating System Kernels", credits: "4.0 Credits" },
      { code: "CS-385", name: "Distributed Storage Systems", credits: "3.5 Credits" }
    ],
    skills: ["Kubernetes", "Docker", "Terraform", "AWS", "Go", "Python"],
    projects: [
      "Multi-Region Auto-Failover Service",
      "GitOps Deployment Controller",
      "Microservice Chaos Testing Harness"
    ],
    systemRecordId: "1598-CS-FN",
    lastValidated: "Oct 24, 2024",
    image: "/students/fatima.jpg"
  },
  {
    id: 15,
    studentId: "STU-1630",
    name: "Liam O'Connor",
    initials: "LO",
    avatarColor: { bg: "#fef3c7", text: "#d97706" },
    department: "Electrical Engineering",
    course: "Electrical Engineering",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "liam.oconnor@campus.edu",
    phone: "+1 (555) 777-8899",
    location: "Bayside Towers",
    enrolled: "Fall 2021",
    about: "Liam is working on wireless communications, RF design, and next-generation ultra-wideband sensor networks.",
    bio: "Liam works on wireless communications and RF design.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "EE-410", name: "RF Circuit Design & Antennas", credits: "4.0 Credits" },
      { code: "EE-435", name: "Signal Processing & Communications", credits: "4.0 Credits" },
      { code: "EE-470", name: "Embedded Firmware Engineering", credits: "3.5 Credits" }
    ],
    skills: ["Verilog", "MATLAB", "Eagle PCB", "C", "Oscilloscopes", "Signal Processing"],
    projects: [
      "Ultra-Low Power Mesh Sensor Node",
      "Phased Array Antenna Prototype",
      "Software Defined Radio Demodulator"
    ],
    systemRecordId: "1630-EE-LO",
    lastValidated: "Oct 24, 2024",
    image: "/students/liam.jpg"
  },
  {
    id: 16,
    studentId: "STU-1672",
    name: "Zoe Tanaka",
    initials: "ZT",
    avatarColor: { bg: "#ffe4e6", text: "#e11d48" },
    department: "Design",
    course: "Design",
    studyYear: "1st Year (Freshman)",
    year: "1st Year",
    status: "Active Student",
    email: "zoe.tanaka@campus.edu",
    phone: "+1 (555) 888-9900",
    location: "South Studio Flats",
    enrolled: "Fall 2024",
    about: "Zoe is an enthusiastic illustrator and game UI designer focused on accessibility in gaming interfaces and delightful onboarding flows.",
    bio: "Zoe is an illustrator and game UI designer focused on accessibility.",
    currentStanding: "1st Year Undergraduate",
    subjects: [
      { code: "DS-101", name: "Fundamentals of Graphic Communication", credits: "3.5 Credits" },
      { code: "DS-120", name: "Drawing & Visual Composition", credits: "3.5 Credits" },
      { code: "ART-105", name: "Art History & Visual Culture", credits: "3.0 Credits" }
    ],
    skills: ["Figma", "Procreate", "Photoshop", "Illustrator", "UI Wireframing"],
    projects: [
      "Cozy Indie Game Menu System",
      "Accessible Color Blindness UI Kit",
      "Campus Mascot Character Series"
    ],
    systemRecordId: "1672-DS-ZT",
    lastValidated: "Oct 24, 2024",
    image: "/students/zoe.jpg"
  },
  {
    id: 17,
    studentId: "STU-1710",
    name: "Ethan Walker",
    initials: "EW",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "ethan.walker@campus.edu",
    phone: "+1 (555) 999-0011",
    location: "Campus Heights, Hall A",
    enrolled: "Fall 2023",
    about: "Ethan is fascinated by compiler construction, programming language semantics, and static analysis tooling.",
    bio: "Ethan is fascinated by compiler construction and programming language semantics.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "CS-230", name: "Programming Language Concepts", credits: "4.0 Credits" },
      { code: "CS-245", name: "Compilers & Interpreters", credits: "4.0 Credits" },
      { code: "MATH-210", name: "Linear Algebra for CS", credits: "3.5 Credits" }
    ],
    skills: ["Rust", "LLVM", "C++", "Ocaml", "AST Parsing", "Git"],
    projects: [
      "Custom Bytecode Virtual Machine",
      "Static Type Checker for Minimal Lisp",
      "Rust CLI Memory Profiler"
    ],
    systemRecordId: "1710-CS-EW",
    lastValidated: "Oct 24, 2024",
    image: "/students/ethan.jpg"
  },
  {
    id: 18,
    studentId: "STU-1745",
    name: "Nadia Belkacem",
    initials: "NB",
    avatarColor: { bg: "#dcfce7", text: "#16a34a" },
    department: "Data Science",
    course: "Data Science",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "nadia.belkacem@campus.edu",
    phone: "+1 (555) 123-9876",
    location: "West Residence, Tower 2",
    enrolled: "Fall 2021",
    about: "Nadia works on healthcare analytics, epidemiological modeling, and privacy-preserving federated machine learning.",
    bio: "Nadia works on healthcare analytics and federated machine learning.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "DS-430", name: "Healthcare Informatics & Analytics", credits: "4.0 Credits" },
      { code: "DS-465", name: "Federated Learning & Privacy", credits: "3.5 Credits" },
      { code: "DS-495", name: "Senior Data Science Capstone", credits: "4.0 Credits" }
    ],
    skills: ["Python", "TensorFlow Federated", "R", "SQL", "Differential Privacy", "Scikit-Learn"],
    projects: [
      "Privacy-Preserving Hospital Record Analysis",
      "Campus Epidemic Spread Simulator",
      "Automated ECG Anomaly Detection"
    ],
    systemRecordId: "1745-DS-NB",
    lastValidated: "Oct 24, 2024",
    image: "/students/nadia.jpg"
  },
  {
    id: 19,
    studentId: "STU-1780",
    name: "Julian Rivera",
    initials: "JR",
    avatarColor: { bg: "#ffedd5", text: "#ea580c" },
    department: "Business",
    course: "Business",
    studyYear: "1st Year (Freshman)",
    year: "1st Year",
    status: "Active Student",
    email: "julian.rivera@campus.edu",
    phone: "+1 (555) 234-8765",
    location: "North Quad Dormitory",
    enrolled: "Fall 2024",
    about: "Julian is exploring financial technology, decentralized finance mechanisms, and algorithmic trading models.",
    bio: "Julian is exploring fintech and algorithmic trading models.",
    currentStanding: "1st Year Undergraduate",
    subjects: [
      { code: "BUS-110", name: "Financial Accounting Basics", credits: "4.0 Credits" },
      { code: "ECON-101", name: "Microeconomic Theory", credits: "3.5 Credits" },
      { code: "MATH-140", name: "Mathematics for Finance", credits: "3.5 Credits" }
    ],
    skills: ["Excel", "Python", "Accounting", "Financial Analysis", "Tableau"],
    projects: [
      "Student Personal Budget Engine",
      "Crypto Volatility Tracker",
      "Campus Coffee Shop Business Plan"
    ],
    systemRecordId: "1780-BA-JR",
    lastValidated: "Oct 24, 2024",
    image: "/students/julian.jpg"
  },
  {
    id: 20,
    studentId: "STU-1815",
    name: "Hanna Lindqvist",
    initials: "HL",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Electrical Engineering",
    course: "Electrical Engineering",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "hanna.lindqvist@campus.edu",
    phone: "+1 (555) 345-7654",
    location: "Maple Residence Hall",
    enrolled: "Fall 2023",
    about: "Hanna is interested in renewable power systems, smart grid integration, and power electronics for electric vehicles.",
    bio: "Hanna focuses on renewable power systems and smart grid integration.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "EE-220", name: "Circuits & Power Electronics", credits: "4.0 Credits" },
      { code: "EE-250", name: "Electromagnetics & Fields", credits: "4.0 Credits" },
      { code: "PHYS-212", name: "Modern Physics for Engineers", credits: "3.5 Credits" }
    ],
    skills: ["SPICE", "Simulink", "C++", "Power Electronics", "Soldering", "LabVIEW"],
    projects: [
      "Bidirectional EV Charging Converter",
      "Solar Micro-Inverter Simulation",
      "Campus Grid Frequency Monitor"
    ],
    systemRecordId: "1815-EE-HL",
    lastValidated: "Oct 24, 2024",
    image: "/students/hanna.jpg"
  },
  {
    id: 21,
    studentId: "STU-1850",
    name: "Kenji Sato",
    initials: "KS",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "kenji.sato@campus.edu",
    phone: "+1 (555) 456-6543",
    location: "Science Complex Lodges",
    enrolled: "Fall 2022",
    about: "Kenji develops game engines and real-time graphics shaders using WebGPU and DirectX 12.",
    bio: "Kenji develops game engines and real-time graphics shaders.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-365", name: "Computer Graphics & Shaders", credits: "4.0 Credits" },
      { code: "CS-375", name: "Game Engine Architecture", credits: "4.0 Credits" },
      { code: "MATH-302", name: "Advanced 3D Geometry", credits: "3.0 Credits" }
    ],
    skills: ["C++", "Rust", "WebGPU", "HLSL/GLSL", "Vulkan", "Linear Algebra"],
    projects: [
      "Voxel Terrain Renderer with Compute Shaders",
      "Real-time Path Tracer in WebGPU",
      "Physics Engine for Rigid Bodies"
    ],
    systemRecordId: "1850-CS-KS",
    lastValidated: "Oct 24, 2024",
    image: "/students/kenji.jpg"
  },
  {
    id: 22,
    studentId: "STU-1890",
    name: "Amina Yusuf",
    initials: "AY",
    avatarColor: { bg: "#e0f2fe", text: "#0284c7" },
    department: "Information Technology",
    course: "Information Technology",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "amina.yusuf@campus.edu",
    phone: "+1 (555) 567-5432",
    location: "Highland Hall",
    enrolled: "Fall 2022",
    about: "Amina is passionate about enterprise cloud architecture, identity management, and cybersecurity policy.",
    bio: "Amina is passionate about enterprise cloud architecture and cybersecurity policy.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "IT-310", name: "Enterprise Networking & Security", credits: "4.0 Credits" },
      { code: "IT-340", name: "Directory Services & Identity", credits: "3.5 Credits" },
      { code: "IT-375", name: "DevOps & Continuous Integration", credits: "3.5 Credits" }
    ],
    skills: ["Azure", "Active Directory", "Bash", "Python", "Terraform", "Zero Trust"],
    projects: [
      "Single Sign-On Campus Integration Portal",
      "Automated Vulnerability Scanner",
      "Zero-Trust Network Access Prototype"
    ],
    systemRecordId: "1890-IT-AY",
    lastValidated: "Oct 24, 2024",
    image: "/students/amina.jpg"
  },
  {
    id: 23,
    studentId: "STU-1925",
    name: "Oliver Smith",
    initials: "OS",
    avatarColor: { bg: "#ffedd5", text: "#ea580c" },
    department: "Mechanical Engineering",
    course: "Mechanical Engineering",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "oliver.smith@campus.edu",
    phone: "+1 (555) 678-4321",
    location: "Engineering Commons, Wing B",
    enrolled: "Fall 2023",
    about: "Oliver researches soft robotics, pneumatic actuators, and biomimetic mechanisms for assistive medical devices.",
    bio: "Oliver researches soft robotics and biomimetic mechanisms.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "ME-225", name: "Statics & Dynamics", credits: "4.0 Credits" },
      { code: "ME-240", name: "Materials Science & Metallurgy", credits: "3.5 Credits" },
      { code: "ME-260", name: "Introduction to Mechatronics", credits: "4.0 Credits" }
    ],
    skills: ["SolidWorks", "Arduino", "3D Printing", "MATLAB", "Pneumatics"],
    projects: [
      "Soft Robotic Gripper for Fragile Objects",
      "Assistive Knee Brace with Pneumatic Springs",
      "Biomimetic Swimming Fish Robot"
    ],
    systemRecordId: "1925-ME-OS",
    lastValidated: "Oct 24, 2024",
    image: "/students/oliver.jpg"
  },
  {
    id: 24,
    studentId: "STU-1960",
    name: "Fatou Diop",
    initials: "FD",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Bioengineering",
    course: "Bioengineering",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "fatou.diop@campus.edu",
    phone: "+1 (555) 789-3210",
    location: "East Campus Apartments",
    enrolled: "Fall 2021",
    about: "Fatou designs 3D bio-printed tissue scaffolds and evaluates biodegradable polymer blends for regenerative medicine.",
    bio: "Fatou designs 3D bio-printed tissue scaffolds for regenerative medicine.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "BIO-415", name: "Biomaterials & Tissue Engineering", credits: "4.0 Credits" },
      { code: "BIO-440", name: "Stem Cell Dynamics & Ethics", credits: "3.5 Credits" },
      { code: "BIO-490", name: "Senior Bioengineering Thesis", credits: "4.0 Credits" }
    ],
    skills: ["Tissue Culture", "Polymer Chemistry", "SEM Microscopy", "MATLAB", "Rheology"],
    projects: [
      "Hydrogel Scaffold for Cartilage Repair",
      "Microfluidic Organ-on-a-Chip",
      "Antibacterial Wound Dressing Film"
    ],
    systemRecordId: "1960-BE-FD",
    lastValidated: "Oct 24, 2024",
    image: "/students/fatou.jpg"
  },
  {
    id: 25,
    studentId: "STU-2005",
    name: "Dmitri Volkov",
    initials: "DV",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "dmitri.volkov@campus.edu",
    phone: "+1 (555) 890-2109",
    location: "Campus Heights, Hall B",
    enrolled: "Fall 2022",
    about: "Dmitri focuses on operating systems, Linux kernel modules, and low-level virtualization hypervisors.",
    bio: "Dmitri focuses on operating systems and low-level virtualization.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-325", name: "Advanced Kernel Development", credits: "4.0 Credits" },
      { code: "CS-355", name: "Virtualization & Hypervisors", credits: "4.0 Credits" },
      { code: "CS-390", name: "Hardware-Software Interface", credits: "3.5 Credits" }
    ],
    skills: ["C", "Assembly (x86_64)", "Rust", "QEMU", "KVM", "Linux Kernel"],
    projects: [
      "Type-1 Microhypervisor in Rust",
      "Custom Linux VFS File System",
      "Process Sandbox with eBPF Monitoring"
    ],
    systemRecordId: "2005-CS-DV",
    lastValidated: "Oct 24, 2024",
    image: "/students/dmitri.jpg"
  },
  {
    id: 26,
    studentId: "STU-2040",
    name: "Camila Fernandez",
    initials: "CF",
    avatarColor: { bg: "#ffe4e6", text: "#e11d48" },
    department: "Design",
    course: "Design",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "camila.fernandez@campus.edu",
    phone: "+1 (555) 901-1098",
    location: "Art & Media Quarters",
    enrolled: "Fall 2023",
    about: "Camila creates brand identities, editorial layouts, and kinetic typography for cultural institutions and digital publications.",
    bio: "Camila creates brand identities and kinetic typography.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "DS-215", name: "Brand Identity & Strategy", credits: "3.5 Credits" },
      { code: "DS-250", name: "Editorial Layout & Book Design", credits: "3.5 Credits" },
      { code: "DS-270", name: "Kinetic Typography & After Effects", credits: "4.0 Credits" }
    ],
    skills: ["After Effects", "InDesign", "Illustrator", "Figma", "Creative Coding"],
    projects: [
      "University Film Festival Identity",
      "Interactive Digital Magazine Prototype",
      "Dynamic Typographic Clock"
    ],
    systemRecordId: "2040-DS-CF",
    lastValidated: "Oct 24, 2024",
    image: "/students/camila.jpg"
  },
  {
    id: 27,
    studentId: "STU-2080",
    name: "Benjamin Taylor",
    initials: "BT",
    avatarColor: { bg: "#dcfce7", text: "#16a34a" },
    department: "Business",
    course: "Business",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "benjamin.taylor@campus.edu",
    phone: "+1 (555) 012-3456",
    location: "West Residence, Tower 1",
    enrolled: "Fall 2021",
    about: "Benjamin analyzes mergers, acquisitions, and restructuring strategies in tech conglomerates with detailed financial valuation models.",
    bio: "Benjamin analyzes M&A and tech restructuring strategies.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "BUS-430", name: "Mergers, Acquisitions & Buyouts", credits: "4.0 Credits" },
      { code: "BUS-460", name: "Corporate Governance & Ethics", credits: "3.0 Credits" },
      { code: "BUS-485", name: "Quantitative Investment Strategies", credits: "4.0 Credits" }
    ],
    skills: ["Financial Analysis", "Capital IQ", "Bloomberg Terminal", "Excel VBA", "DCF Modeling"],
    projects: [
      "Cloud Sector M&A Valuation Model",
      "University Endowment Allocation Proposal",
      "Tech IPO Historical Performance Audit"
    ],
    systemRecordId: "2080-BA-BT",
    lastValidated: "Oct 24, 2024",
    image: "/students/benjamin.jpg"
  },
  {
    id: 28,
    studentId: "STU-2115",
    name: "Sunita Reddy",
    initials: "SR",
    avatarColor: { bg: "#e0f2fe", text: "#0284c7" },
    department: "Data Science",
    course: "Data Science",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "sunita.reddy@campus.edu",
    phone: "+1 (555) 123-4567",
    location: "Riverside Hall",
    enrolled: "Fall 2022",
    about: "Sunita works with time-series forecasting, climate datasets, and anomaly detection algorithms in sensor networks.",
    bio: "Sunita works with time-series forecasting and climate datasets.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "DS-320", name: "Time Series Analysis & Forecasting", credits: "4.0 Credits" },
      { code: "DS-350", name: "Machine Learning Algorithms", credits: "4.0 Credits" },
      { code: "MATH-315", name: "Stochastic Processes", credits: "3.5 Credits" }
    ],
    skills: ["Python", "Prophet", "PyTorch", "SQL", "Pandas", "Scikit-Learn"],
    projects: [
      "Local Weather Anomaly Early Warning System",
      "Campus Solar Production Forecast Engine",
      "Sensor Drift Calibration Pipeline"
    ],
    systemRecordId: "2115-DS-SR",
    lastValidated: "Oct 24, 2024",
    image: "/students/sunita.jpg"
  },
  {
    id: 29,
    studentId: "STU-2150",
    name: "Leo Rossi",
    initials: "LR",
    avatarColor: { bg: "#ffedd5", text: "#ea580c" },
    department: "Information Technology",
    course: "Information Technology",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "leo.rossi@campus.edu",
    phone: "+1 (555) 234-5678",
    location: "Highland Hall",
    enrolled: "Fall 2023",
    about: "Leo focuses on modern web infrastructure, edge compute runtimes, and full-stack web applications with high availability.",
    bio: "Leo focuses on modern web infrastructure and edge compute runtimes.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "IT-215", name: "Web Infrastructure & CDN Systems", credits: "3.5 Credits" },
      { code: "IT-245", name: "Database Administration & Tuning", credits: "4.0 Credits" },
      { code: "CS-205", name: "Data Structures & Modern C++", credits: "4.0 Credits" }
    ],
    skills: ["TypeScript", "Next.js", "Docker", "PostgreSQL", "Cloudflare Workers", "Tailwind CSS"],
    projects: [
      "Edge-Cached Campus Events Calendar",
      "Real-Time Student Chat Gateway",
      "Dynamic Status Page Service"
    ],
    systemRecordId: "2150-IT-LR",
    lastValidated: "Oct 24, 2024",
    image: "/students/leo.jpg"
  },
  {
    id: 30,
    studentId: "STU-2190",
    name: "Min-Jun Kim",
    initials: "MK",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "minjun.kim@campus.edu",
    phone: "+1 (555) 345-6780",
    location: "Science Complex Lodges",
    enrolled: "Fall 2021",
    about: "Min-Jun specializes in robotic manipulation, SLAM algorithms, and reinforcement learning for autonomous quadrupeds.",
    bio: "Min-Jun specializes in robotic manipulation and autonomous robotics.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "CS-470", name: "Autonomous Robotics & SLAM", credits: "4.0 Credits" },
      { code: "CS-485", name: "Reinforcement Learning & Control", credits: "4.0 Credits" },
      { code: "CS-498", name: "Senior Robotics Capstone", credits: "3.5 Credits" }
    ],
    skills: ["ROS 2", "C++", "Python", "Gazebo", "PyTorch", "OpenCV"],
    projects: [
      "Vision-Based Quadruped Stair Climbing",
      "Campus Autonomous Mail Delivery Cart",
      "Multi-Agent Swarm Exploration Simulator"
    ],
    systemRecordId: "2190-CS-MK",
    lastValidated: "Oct 24, 2024",
    image: "/students/minjun.jpg"
  },
  {
    id: 31,
    studentId: "STU-2225",
    name: "Zara Al-Hassan",
    initials: "ZA",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Electrical Engineering",
    course: "Electrical Engineering",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "zara.alhassan@campus.edu",
    phone: "+1 (555) 456-7891",
    location: "Bayside Towers",
    enrolled: "Fall 2022",
    about: "Zara explores analog mixed-signal chip design, low-power ADCs, and silicon photonics for ultra-fast interconnects.",
    bio: "Zara explores analog mixed-signal chip design and silicon photonics.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "EE-330", name: "CMOS Integrated Circuit Design", credits: "4.0 Credits" },
      { code: "EE-360", name: "Semiconductor Physics & Devices", credits: "4.0 Credits" },
      { code: "EE-380", name: "Digital Signal Processing Hardware", credits: "3.5 Credits" }
    ],
    skills: ["Cadence Virtuoso", "SPICE", "Verilog-A", "Layout Design", "Oscilloscopes"],
    projects: [
      "12-bit Successive Approximation ADC",
      "Optical Ring Resonator Modulator",
      "Ultra-Low Noise Transimpedance Amplifier"
    ],
    systemRecordId: "2225-EE-ZA",
    lastValidated: "Oct 24, 2024",
    image: "/students/zara.jpg"
  },
  {
    id: 32,
    studentId: "STU-2260",
    name: "Arthur Pendelton",
    initials: "AP",
    avatarColor: { bg: "#ffe4e6", text: "#e11d48" },
    department: "Mechanical Engineering",
    course: "Mechanical Engineering",
    studyYear: "1st Year (Freshman)",
    year: "1st Year",
    status: "Active Student",
    email: "arthur.pendelton@campus.edu",
    phone: "+1 (555) 567-8902",
    location: "North Quad Dormitory",
    enrolled: "Fall 2024",
    about: "Arthur is passionate about aerospace structures, composite materials, and high-altitude weather balloon telemetry systems.",
    bio: "Arthur is passionate about aerospace structures and composite materials.",
    currentStanding: "1st Year Undergraduate",
    subjects: [
      { code: "ME-101", name: "Engineering Mechanics & Graphics", credits: "3.5 Credits" },
      { code: "PHYS-141", name: "Classical Mechanics for Engineers", credits: "4.0 Credits" },
      { code: "MATH-151", name: "Calculus I", credits: "3.5 Credits" }
    ],
    skills: ["AutoCAD", "Fusion 360", "Python", "Rapid Prototyping", "Woodworking"],
    projects: [
      "Near-Space Atmospheric Radiosonde",
      "Carbon Fiber Rocket Nosecone",
      "Mini Wind Tunnel Test Bed"
    ],
    systemRecordId: "2260-ME-AP",
    lastValidated: "Oct 24, 2024",
    image: "/students/arthur.jpg"
  },
  {
    id: 33,
    studentId: "STU-2295",
    name: "Mei-Ling Zhou",
    initials: "MZ",
    avatarColor: { bg: "#dcfce7", text: "#16a34a" },
    department: "Data Science",
    course: "Data Science",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "meiling.zhou@campus.edu",
    phone: "+1 (555) 678-9013",
    location: "West Residence, Tower 2",
    enrolled: "Fall 2021",
    about: "Mei-Ling works on graph neural networks, knowledge graphs, and recommendation engines for academic literature discovery.",
    bio: "Mei-Ling works on graph neural networks and recommendation engines.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "DS-440", name: "Graph Representation Learning", credits: "4.0 Credits" },
      { code: "DS-475", name: "Recommender Systems & Ranking", credits: "3.5 Credits" },
      { code: "DS-499", name: "Senior Capstone Research", credits: "4.0 Credits" }
    ],
    skills: ["PyTorch Geometric", "Neo4j", "Python", "Cypher", "AWS SageMaker", "Docker"],
    projects: [
      "Citation Network Semantic Search",
      "Campus Course Recommendation Engine",
      "Knowledge Graph Entity Extraction"
    ],
    systemRecordId: "2295-DS-MZ",
    lastValidated: "Oct 24, 2024",
    image: "/students/meiling.jpg"
  },
  {
    id: 34,
    studentId: "STU-2330",
    name: "Jack MacIntyre",
    initials: "JM",
    avatarColor: { bg: "#fef3c7", text: "#d97706" },
    department: "Design",
    course: "Design",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "jack.macintyre@campus.edu",
    phone: "+1 (555) 789-0124",
    location: "South Studio Flats",
    enrolled: "Fall 2022",
    about: "Jack specializes in VR/AR user interaction, spatial audio environments, and holographic design for educational simulations.",
    bio: "Jack specializes in VR/AR user interaction and spatial design.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "DS-340", name: "Spatial Computing & XR Design", credits: "4.0 Credits" },
      { code: "DS-370", name: "Audio-Visual Experience Design", credits: "3.5 Credits" },
      { code: "CS-285", name: "Unity & XR Development", credits: "3.5 Credits" }
    ],
    skills: ["Unity", "Unreal Engine", "Figma XR", "Blender", "C#", "Spatial Audio"],
    projects: [
      "Virtual Chemistry Lab Simulator in VR",
      "Augmented Campus Navigation Glasses App",
      "Interactive 3D Anatomy Guide"
    ],
    systemRecordId: "2330-DS-JM",
    lastValidated: "Oct 24, 2024",
    image: "/students/jack.jpg"
  },
  {
    id: 35,
    studentId: "STU-2365",
    name: "Tara O'Sullivan",
    initials: "TO",
    avatarColor: { bg: "#e0f2fe", text: "#0284c7" },
    department: "Bioengineering",
    course: "Bioengineering",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "tara.osullivan@campus.edu",
    phone: "+1 (555) 890-1235",
    location: "Life Sciences Center Hall",
    enrolled: "Fall 2023",
    about: "Tara investigates neural engineering, EEG brain-computer interfaces, and signal decoding for robotic prosthetic limbs.",
    bio: "Tara investigates neural engineering and brain-computer interfaces.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "BIO-230", name: "Neuroengineering & Bioelectricity", credits: "4.0 Credits" },
      { code: "BIO-255", name: "Physiological Control Systems", credits: "3.5 Credits" },
      { code: "MATH-220", name: "Differential Equations for Biology", credits: "3.5 Credits" }
    ],
    skills: ["MATLAB", "Python", "EEG Processing", "Biomedical Sensors", "LabVIEW"],
    projects: [
      "EEG P300 Speller Interface",
      "EMG Prosthetic Hand Controller",
      "Sleep Stage Classification Model"
    ],
    systemRecordId: "2365-BE-TO",
    lastValidated: "Oct 24, 2024",
    image: "/students/tara.jpg"
  },
  {
    id: 36,
    studentId: "STU-2400",
    name: "Vikram Singhania",
    initials: "VS",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "vikram.singhania@campus.edu",
    phone: "+1 (555) 901-2346",
    location: "Campus Heights, Hall B",
    enrolled: "Fall 2022",
    about: "Vikram is a security researcher specializing in binary exploitation, web security, and automated fuzzing techniques.",
    bio: "Vikram is a security researcher specializing in binary exploitation.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-335", name: "Offensive Security & Penetration Testing", credits: "4.0 Credits" },
      { code: "CS-360", name: "Software Verification & Formal Methods", credits: "3.5 Credits" },
      { code: "CS-380", name: "Applied Cryptography Protocols", credits: "4.0 Credits" }
    ],
    skills: ["Ghidra", "GDB", "Python", "C", "AFL Fuzzing", "Burp Suite", "Assembly"],
    projects: [
      "Automated Protocol Fuzzer for IoT Devices",
      "Web Vulnerability Scanner for Next.js",
      "Zero-Knowledge Authentication Proof"
    ],
    systemRecordId: "2400-CS-VS",
    lastValidated: "Oct 24, 2024",
    image: "/students/vikram.jpg"
  },
  {
    id: 37,
    studentId: "STU-2435",
    name: "Clara Becker",
    initials: "CB",
    avatarColor: { bg: "#ffedd5", text: "#ea580c" },
    department: "Business",
    course: "Business",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "clara.becker@campus.edu",
    phone: "+1 (555) 012-3457",
    location: "Parkview Residence",
    enrolled: "Fall 2022",
    about: "Clara focuses on international human resources, diversity in modern tech organizations, and employee retention strategies.",
    bio: "Clara focuses on organizational psychology and tech talent strategy.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "BUS-335", name: "Global Talent & People Analytics", credits: "3.5 Credits" },
      { code: "BUS-365", name: "Negotiation & Conflict Resolution", credits: "3.5 Credits" },
      { code: "PSYC-210", name: "Organizational Psychology", credits: "4.0 Credits" }
    ],
    skills: ["People Analytics", "SPSS", "Qualtrics", "HR Strategy", "Executive Reporting"],
    projects: [
      "Remote Work Productivity Benchmarking Study",
      "Campus Internship Mentorship Playbook",
      "Tech Diversity Hiring Metrics Framework"
    ],
    systemRecordId: "2435-BA-CB",
    lastValidated: "Oct 24, 2024",
    image: "/students/clara.jpg"
  },
  {
    id: 38,
    studentId: "STU-2470",
    name: "Samuel Morales",
    initials: "SM",
    avatarColor: { bg: "#dcfce7", text: "#16a34a" },
    department: "Electrical Engineering",
    course: "Electrical Engineering",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "samuel.morales@campus.edu",
    phone: "+1 (555) 123-4568",
    location: "Bayside Towers",
    enrolled: "Fall 2021",
    about: "Samuel designs solar-tracking micro-inverters and autonomous battery energy storage management systems.",
    bio: "Samuel designs solar-tracking micro-inverters and battery storage systems.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "EE-440", name: "High Voltage Engineering & Power Systems", credits: "4.0 Credits" },
      { code: "EE-465", name: "Renewable Energy Grid Integration", credits: "3.5 Credits" },
      { code: "EE-495", name: "Senior Electrical Design Project", credits: "4.0 Credits" }
    ],
    skills: ["Simulink", "C", "Battery Management (BMS)", "PCB Layout", "Altium Designer"],
    projects: [
      "10kWh Campus Solar Storage Battery",
      "MPPT Solar Array Optimizer",
      "Grid Islanding Protection Relay"
    ],
    systemRecordId: "2470-EE-SM",
    lastValidated: "Oct 24, 2024",
    image: "/students/samuel.jpg"
  },
  {
    id: 39,
    studentId: "STU-2505",
    name: "Ingrid Nygård",
    initials: "IN",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Design",
    course: "Design",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "ingrid.nygard@campus.edu",
    phone: "+1 (555) 234-5679",
    location: "Art & Media Quarters",
    enrolled: "Fall 2023",
    about: "Ingrid is an eco-conscious product designer exploring circular economy materials, mycelium packaging, and sustainable ergonomics.",
    bio: "Ingrid explores circular economy materials and sustainable product design.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "DS-230", name: "Materials Lifecycle & Circular Design", credits: "3.5 Credits" },
      { code: "DS-260", name: "Ergonomics & Anthropometrics", credits: "3.5 Credits" },
      { code: "DS-280", name: "Form & Physical Prototyping", credits: "4.0 Credits" }
    ],
    skills: ["Fusion 360", "Wood Turning", "Mycelium Bio-fabrication", "Figma", "User Testing"],
    projects: [
      "Biodegradable Student Headphone Housing",
      "Mycelium Acoustic Wall Panels",
      "Modular Flatpack Student Desk"
    ],
    systemRecordId: "2505-DS-IN",
    lastValidated: "Oct 24, 2024",
    image: "/students/ingrid.jpg"
  },
  {
    id: 40,
    studentId: "STU-2540",
    name: "Kwame Mensah",
    initials: "KM",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Information Technology",
    course: "Information Technology",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "kwame.mensah@campus.edu",
    phone: "+1 (555) 345-6781",
    location: "Highland Hall",
    enrolled: "Fall 2021",
    about: "Kwame works on cloud database clustering, distributed backup replication, and zero-downtime database migration tooling.",
    bio: "Kwame works on cloud database clustering and disaster recovery.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "IT-420", name: "Disaster Recovery & High Availability", credits: "4.0 Credits" },
      { code: "IT-455", name: "Cloud Migration Strategy", credits: "3.5 Credits" },
      { code: "IT-490", name: "Senior IT Infrastructure Capstone", credits: "4.0 Credits" }
    ],
    skills: ["PostgreSQL", "Ansible", "Linux", "AWS RDS", "Bash", "Prometheus"],
    projects: [
      "Multi-Region Database Replication Failover",
      "Campus Automated Incident Response Bot",
      "Infrastructure-as-Code Compliance Checker"
    ],
    systemRecordId: "2540-IT-KM",
    lastValidated: "Oct 24, 2024",
    image: "/students/kwame.jpg"
  },
  {
    id: 41,
    studentId: "STU-2575",
    name: "Yuki Tanaka",
    initials: "YT",
    avatarColor: { bg: "#ffe4e6", text: "#e11d48" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "1st Year (Freshman)",
    year: "1st Year",
    status: "Active Student",
    email: "yuki.tanaka@campus.edu",
    phone: "+1 (555) 456-7892",
    location: "North Quad Dormitory",
    enrolled: "Fall 2024",
    about: "Yuki is excited about frontend engineering, web accessibility standards, and creative generative code with p5.js.",
    bio: "Yuki is excited about frontend engineering and web accessibility.",
    currentStanding: "1st Year Undergraduate",
    subjects: [
      { code: "CS-101", name: "Introduction to Computing", credits: "4.0 Credits" },
      { code: "CS-112", name: "Web Foundations & Modern CSS", credits: "3.5 Credits" },
      { code: "MATH-135", name: "Discrete Structures", credits: "3.5 Credits" }
    ],
    skills: ["HTML/CSS", "JavaScript", "p5.js", "React Basics", "Git"],
    projects: [
      "Interactive Audio Visualizer in Browser",
      "Freshman Orientation Navigation Site",
      "CSS Animation Showcase"
    ],
    systemRecordId: "2575-CS-YT",
    lastValidated: "Oct 24, 2024",
    image: "/students/yuki.jpg"
  },
  {
    id: 42,
    studentId: "STU-2610",
    name: "Isabella Martinez",
    initials: "IM",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Bioengineering",
    course: "Bioengineering",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "isabella.martinez@campus.edu",
    phone: "+1 (555) 567-8903",
    location: "Life Sciences Center Hall",
    enrolled: "Fall 2022",
    about: "Isabella develops microfluidic diagnostic chips for rapid infectious disease detection in low-resource clinics.",
    bio: "Isabella develops microfluidic diagnostic chips for disease detection.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "BIO-320", name: "Microfluidics & Lab-on-a-Chip", credits: "4.0 Credits" },
      { code: "BIO-350", name: "Immunoengineering Principles", credits: "3.5 Credits" },
      { code: "CHEM-310", name: "Analytical Biochemistry", credits: "4.0 Credits" }
    ],
    skills: ["Microfluidics", "Photolithography", "Fluorescence Microscopy", "Python", "Data Analysis"],
    projects: [
      "Paper-Based Saliva Diagnostic Strip",
      "3D Printed Droplet Generator",
      "Microfluidic Cell Sorting Platform"
    ],
    systemRecordId: "2610-BE-IM",
    lastValidated: "Oct 24, 2024",
    image: "/students/isabella.jpg"
  },
  {
    id: 43,
    studentId: "STU-2645",
    name: "David Kim",
    initials: "DK",
    avatarColor: { bg: "#ffedd5", text: "#ea580c" },
    department: "Data Science",
    course: "Data Science",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "david.kim@campus.edu",
    phone: "+1 (555) 678-9014",
    location: "Riverside Hall",
    enrolled: "Fall 2023",
    about: "David builds automated machine learning pipelines, feature stores, and real-time inference microservices.",
    bio: "David builds automated ML pipelines and inference microservices.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "DS-235", name: "Applied Machine Learning Systems", credits: "4.0 Credits" },
      { code: "DS-270", name: "Data Engineering Architecture", credits: "4.0 Credits" },
      { code: "CS-220", name: "Systems Programming in C & Go", credits: "3.5 Credits" }
    ],
    skills: ["Python", "FastAPI", "Docker", "MLflow", "PostgreSQL", "Redis"],
    projects: [
      "Real-Time Fraud Detection Engine",
      "Campus Dining Hall Wait Time Predictor",
      "Automated Feature Store Registry"
    ],
    systemRecordId: "2645-DS-DK",
    lastValidated: "Oct 24, 2024",
    image: "/students/david.jpg"
  },
  {
    id: 44,
    studentId: "STU-2680",
    name: "Fatima Al-Sayed",
    initials: "FA",
    avatarColor: { bg: "#dcfce7", text: "#16a34a" },
    department: "Business",
    course: "Business",
    studyYear: "2nd Year (Sophomore)",
    year: "2nd Year",
    status: "Active Student",
    email: "fatima.alsayed@campus.edu",
    phone: "+1 (555) 789-0125",
    location: "West Residence, Tower 1",
    enrolled: "Fall 2023",
    about: "Fatima is passionate about social entrepreneurship, impact investing, and microfinance models in developing regions.",
    bio: "Fatima focuses on social entrepreneurship and impact investing.",
    currentStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "BUS-230", name: "Social Entrepreneurship & Impact", credits: "3.5 Credits" },
      { code: "BUS-255", name: "Financial Markets & Institutions", credits: "4.0 Credits" },
      { code: "ECON-210", name: "Development Economics", credits: "3.5 Credits" }
    ],
    skills: ["Financial Analysis", "Impact Assessment", "Excel Modeling", "Market Research"],
    projects: [
      "Microfinance Lending Pool for Student Artisans",
      "Campus Social Impact Fund Whitepaper",
      "Non-Profit Donor Analytics Dashboard"
    ],
    systemRecordId: "2680-BA-FA",
    lastValidated: "Oct 24, 2024",
    image: "/students/fatima_a.jpg"
  },
  {
    id: 45,
    studentId: "STU-2715",
    name: "Lucas Moretti",
    initials: "LM",
    avatarColor: { bg: "#dbeafe", text: "#2563eb" },
    department: "Mechanical Engineering",
    course: "Mechanical Engineering",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "lucas.moretti@campus.edu",
    phone: "+1 (555) 890-1236",
    location: "Engineering Commons, Wing A",
    enrolled: "Fall 2021",
    about: "Lucas is leading the campus Hyperloop pod design team focusing on electromagnetic levitation and thermal vacuum testing.",
    bio: "Lucas leads the campus Hyperloop pod engineering team.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "ME-420", name: "Advanced Thermodynamics & Propulsion", credits: "4.0 Credits" },
      { code: "ME-445", name: "Vibrations & Acoustic Analysis", credits: "3.5 Credits" },
      { code: "ME-490", name: "Hyperloop Senior Design Capstone", credits: "4.0 Credits" }
    ],
    skills: ["ANSYS Mechanical", "SolidWorks", "Simulink", "MATLAB", "Telemetry"],
    projects: [
      "Electromagnetic Halbach Array Levitation Rig",
      "Vacuum Chamber Carbon-Fibre Pod Shell",
      "Pneumatic Emergency Braking System"
    ],
    systemRecordId: "2715-ME-LM",
    lastValidated: "Oct 24, 2024",
    image: "/students/lucas_m.jpg"
  },
  {
    id: 46,
    studentId: "STU-2750",
    name: "Grace Hopperfield",
    initials: "GH",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "grace.hopperfield@campus.edu",
    phone: "+1 (555) 901-2347",
    location: "Campus Heights, Hall A",
    enrolled: "Fall 2022",
    about: "Grace develops formal verification frameworks and verified cryptographic implementations in Coq and Lean.",
    bio: "Grace develops formal verification frameworks and verified crypto.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-370", name: "Formal Methods & Proof Assistants", credits: "4.0 Credits" },
      { code: "CS-382", name: "Type Theory & Lambda Calculus", credits: "3.5 Credits" },
      { code: "MATH-330", name: "Abstract Algebra & Category Theory", credits: "4.0 Credits" }
    ],
    skills: ["Lean 4", "Coq", "Haskell", "Rust", "Formal Verification", "LaTeX"],
    projects: [
      "Machine-Checked Proof of RSA Security",
      "Verified Parser for JSON in Lean 4",
      "Automated Theorem Prover for Propositional Logic"
    ],
    systemRecordId: "2750-CS-GH",
    lastValidated: "Oct 24, 2024",
    image: "/students/grace.jpg"
  },
  {
    id: 47,
    studentId: "STU-2785",
    name: "Mateo Silva",
    initials: "MS",
    avatarColor: { bg: "#e0f2fe", text: "#0284c7" },
    department: "Information Technology",
    course: "Information Technology",
    studyYear: "1st Year (Freshman)",
    year: "1st Year",
    status: "Active Student",
    email: "mateo.silva@campus.edu",
    phone: "+1 (555) 012-3458",
    location: "North Quad Dormitory",
    enrolled: "Fall 2024",
    about: "Mateo is learning system administration, homelab networking, and configuring automated backup pipelines with Docker.",
    bio: "Mateo is learning system administration and homelab networking.",
    currentStanding: "1st Year Undergraduate",
    subjects: [
      { code: "IT-105", name: "Computer Hardware & OS Basics", credits: "3.5 Credits" },
      { code: "IT-125", name: "Introduction to Networking & Routing", credits: "3.5 Credits" },
      { code: "CS-110", name: "Programming with Python", credits: "4.0 Credits" }
    ],
    skills: ["Linux", "Docker", "Networking", "Python", "Bash", "Proxmox"],
    projects: [
      "Self-Hosted Campus Club Storage Server",
      "Home Network DNS Sinkhole Setup",
      "Automated Linux Desktop Backup Script"
    ],
    systemRecordId: "2785-IT-MS",
    lastValidated: "Oct 24, 2024",
    image: "/students/mateo.jpg"
  },
  {
    id: 48,
    studentId: "STU-2820",
    name: "Zainab Qazi",
    initials: "ZQ",
    avatarColor: { bg: "#ffe4e6", text: "#e11d48" },
    department: "Design",
    course: "Design",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "zainab.qazi@campus.edu",
    phone: "+1 (555) 123-4569",
    location: "South Studio Flats",
    enrolled: "Fall 2021",
    about: "Zainab is a service designer who conducts ethnographic field research to redesign public transit and civic services for accessibility.",
    bio: "Zainab is a service designer conducting civic research.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "DS-435", name: "Service Design & Systems Thinking", credits: "4.0 Credits" },
      { code: "DS-460", name: "Design Ethnography & User Research", credits: "3.5 Credits" },
      { code: "DS-495", name: "Civic Innovation Graduation Thesis", credits: "4.0 Credits" }
    ],
    skills: ["Service Blueprinting", "User Interviews", "Journey Mapping", "Figma", "Workshop Facilitation"],
    projects: [
      "Municipal Transit Accessibility Journey Map",
      "Community Food Bank Distribution Redesign",
      "Campus Mental Health Service Portal"
    ],
    systemRecordId: "2820-DS-ZQ",
    lastValidated: "Oct 24, 2024",
    image: "/students/zainab.jpg"
  },
  {
    id: 49,
    studentId: "STU-2855",
    name: "Tobias Lind",
    initials: "TL",
    avatarColor: { bg: "#fef3c7", text: "#d97706" },
    department: "Electrical Engineering",
    course: "Electrical Engineering",
    studyYear: "3rd Year (Junior)",
    year: "3rd Year",
    status: "Active Student",
    email: "tobias.lind@campus.edu",
    phone: "+1 (555) 234-5680",
    location: "Bayside Towers",
    enrolled: "Fall 2022",
    about: "Tobias works on digital audio DSP chips, guitar pedal circuitry, and real-time audio synthesis on FPGAs.",
    bio: "Tobias works on digital audio DSP chips and guitar pedal circuitry.",
    currentStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "EE-345", name: "Audio DSP & Filter Architecture", credits: "4.0 Credits" },
      { code: "EE-375", name: "FPGA Systems in Verilog", credits: "4.0 Credits" },
      { code: "EE-390", name: "Analog Filter Circuit Design", credits: "3.5 Credits" }
    ],
    skills: ["Verilog", "FPGA (Vivado)", "C++", "JUCE", "KiCad", "Audio DSP"],
    projects: [
      "Stereo Reverb Engine on Xilinx FPGA",
      "Analog Bucket-Brigade Delay Pedal",
      "VST3 Polyphonic Synthesizer Plugin"
    ],
    systemRecordId: "2855-EE-TL",
    lastValidated: "Oct 24, 2024",
    image: "/students/tobias.jpg"
  },
  {
    id: 50,
    studentId: "STU-2890",
    name: "Seraphina Vance",
    initials: "SV",
    avatarColor: { bg: "#ede9fe", text: "#6366f1" },
    department: "Computer Science",
    course: "Computer Science",
    studyYear: "4th Year (Senior)",
    year: "4th Year",
    status: "Active Student",
    email: "seraphina.vance@campus.edu",
    phone: "+1 (555) 345-6782",
    location: "Maple Residence Hall",
    enrolled: "Fall 2021",
    about: "Seraphina is an AI ethics researcher exploring alignment, fairness metrics in automated screening, and model interpretability.",
    bio: "Seraphina is an AI ethics researcher exploring alignment and fairness.",
    currentStanding: "4th Year Undergraduate",
    subjects: [
      { code: "CS-475", name: "AI Ethics, Fairness & Society", credits: "4.0 Credits" },
      { code: "CS-490", name: "Model Interpretability & Explainability", credits: "3.5 Credits" },
      { code: "CS-499", name: "Senior Honors Research Thesis", credits: "4.0 Credits" }
    ],
    skills: ["Python", "PyTorch", "Captum", "SHAP/LIME", "Statistical Parity", "Academic Writing"],
    projects: [
      "Automated Bias Auditing Suite for LLMs",
      "Interpretability Visualizer for Vision Transformers",
      "University Admissions Fairness Simulator"
    ],
    systemRecordId: "2890-CS-SV",
    lastValidated: "Oct 24, 2024",
    image: "/students/seraphina.jpg"
  }
];

export const allDepartments = [
  "All departments",
  "Computer Science",
  "Design",
  "Business",
  "Information Technology",
  "Data Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Bioengineering"
];
