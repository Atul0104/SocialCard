export const profile = {
  name: "Atul Ganesh Rathod",
  shortName: "Atul Rathod",
  role: "Senior Software Engineer - Automation Tester",
  summary: "Senior Software Engineer - Automation Tester with experience across life insurance, banking, fintech, and network monitoring. I combine hands-on testing and automation to make complex user journeys, APIs, and backend data more dependable.",
  location: "Wagholi, Pune, India",
  email: "rathodatul4774@gmail.com",
  phone: "+91 9175634774",
  links: { github: "", linkedin: "" },
  availability: "Open to QA opportunities",
};

export const skills = [
  { name: "Testing", items: ["Manual testing", "Functional testing", "Regression testing", "Integration testing", "Smoke & sanity testing", "Cross-browser testing", "Responsive testing", "Mobile testing (Android & iOS)", "Performance testing", "Accessibility testing"] },
  { name: "Automation", items: ["Selenium WebDriver", "Playwright", "Robot Framework", "TestNG", "Maven", "Page Object Model", "Cucumber BDD"] },
  { name: "API & data", items: ["Postman", "REST API testing", "SQL", "Database testing", "Backend validation", "Financial transaction validation"] },
  { name: "Tools & engineering", items: ["Java", "JavaScript", "Python", "Jira", "Jenkins", "Git", "GitHub", "Eclipse", "Browser DevTools"] },
  { name: "Ways of working", items: ["Agile / Scrum", "SDLC", "STLC", "Test planning", "Test case design", "Defect lifecycle", "AI-assisted test workflows"] },
];

export const companies = {
  bandhan: { slug: "bandhan-life", name: "Bandhan Life Insurance", url: "https://www.bandhanlife.com/", overview: "An Indian life insurer focused on making protection and long-term financial planning easier to access.", highlights: ["The company reports a 98.15% claim settlement ratio for FY 2025–26.", "Its digital services support policy discovery, servicing, and claims."], source: "https://www.bandhanlife.com/about-us", image: "https://www.bandhanlife.com/sites/default/files/asset/2025-11/about%20us%202.svg" },
  nviera: { slug: "nviera", name: "Nviera Technologies", url: "https://www.nviera.com/", overview: "A technology company working across blockchain, IoT, and AI/ML, with solutions for sectors including healthcare, supply chain, and aviation.", highlights: ["The company presents Samvaadak as its permissioned blockchain platform.", "Its stated focus areas include blockchain, IoT, and AI/ML."], source: "https://www.nviera.com/", image: "https://www.nviera.com/images/Intersect2.png" },
  penta: { slug: "penta-software", name: "Penta Software Consultancy Services", url: "https://www.pentasoftwareconsultancy.com/", overview: "A software consultancy providing technology and digital product services, including software testing and automation.", highlights: ["The company offers software testing and automation services.", "Its service portfolio also includes software and application development."], source: "https://www.pentasoftwareconsultancy.com/", image: null },
  comviva: { slug: "comviva", name: "Comviva · Tech Mahindra", url: "https://www.comviva.com/", overview: "A global digital solutions company within Tech Mahindra, building customer experience and digital financial services platforms.", highlights: ["Comviva reports serving more than 2 billion users across 100+ countries.", "Its company profile describes more than 25 years in digital services."], source: "https://www.comviva.com/corporate/who-we-are/", image: "https://www.comviva.com/_next/image/?q=75&url=https%3A%2F%2Fwww.comviva.com%2Fwp-content%2Fuploads%2F2025%2F06%2FIMG_1.webp&w=1920" },
};

export const experience = [
  {
    company: companies.bandhan,
    role: "Senior Software Engineer - Automation Tester",
    dates: "14 May 2026 – Present",
    tenure: "live",
    startedOn: "2026-05-14",
    engagements: [
      { project: "Calculator Testing & Automation", period: "14 May 2026 – Present", tenure: "live", startedOn: "2026-05-14", detail: "Testing the Bandhan Life calculator and creating automation scripts for its key user journeys.", domain: "Life insurance · digital calculator", tools: ["Calculator testing", "Automation scripts", "Manual testing", "Jira"] },
      { project: "Sarthi Application", period: "14 May 2026 – Present", tenure: "live", startedOn: "2026-05-14", detail: "Quality assurance for the Sarthi application as part of the current Bandhan Life engagement.", domain: "Insurance · application workflows", tools: ["Application testing", "Automation testing", "Jira"] },
    ],
  },
  {
    company: companies.nviera,
    role: "QA Engineer · Manual & Automation Testing",
    dates: "04 Dec 2025 – 13 May 2026",
    tenure: "5 months, 9 days",
    engagements: [
      { client: companies.comviva, project: "AT&T Super Application", period: "04 Dec 2025 – 13 May 2026", tenure: "5 months, 9 days", detail: "Tested a fintech and telecom app across web, Android, and iOS, covering authentication, payments, invoices, saved cards, subscriptions, service activation, end-to-end journeys, and API/data consistency.", tools: ["Playwright", "Robot Framework", "JavaScript", "Python", "Postman", "Jira"] },
    ],
  },
  {
    company: companies.penta,
    role: "QA Engineer",
    dates: "Jun 2024 – 21 Nov 2025",
    tenure: "about 1 year, 5 months",
    engagements: [
      { project: "GlobalBank CBS", period: "Mar 2025 – Nov 2025", tenure: "about 8 months", detail: "Tested an enterprise core banking system covering multi-currency CASA accounts, NEFT/RTGS/SWIFT transfers, reversals, foreign exchange, GL reconciliation, interest calculations, and compliance reporting.", tools: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Jenkins", "Postman", "SQL", "Jira"] },
      { project: "Network Traffic Monitoring System", period: "Jun 2024 – Jan 2025", tenure: "about 7 months", detail: "Tested a network monitoring platform for traffic capture, application and protocol identification, anomaly alerts, SNMP/syslog integrations, and performance dashboards. Validated packet capture and high-traffic behavior.", tools: ["Selenium", "Java", "TestNG", "Postman", "Wireshark", "tcpdump", "Jira"] },
    ],
  },
];

export const projects = [
  {
    slug: "bandhan-calculator-testing",
    name: "Bandhan Life Calculator Testing",
    company: companies.bandhan,
    period: "May 2026 – Present",
    tenure: "live",
    startedOn: "2026-05-14",
    domain: "Life insurance · digital calculator",
    description: "Testing the Bandhan Life calculator and creating automation scripts for its key user journeys.",
    tags: ["Calculator testing", "Automation scripts", "Manual testing"],
    highlights: ["Calculator testing", "Automation script creation", "Quality checks for key user journeys"],
  },
  {
    slug: "sarthi-application",
    name: "Sarthi Application",
    company: companies.bandhan,
    period: "May 2026 – Present",
    tenure: "live",
    startedOn: "2026-05-14",
    domain: "Insurance · application workflows",
    description: "Quality assurance for the Sarthi application as part of the current Bandhan Life engagement.",
    tags: ["Application testing", "Automation testing", "Jira"],
    highlights: ["Application workflow testing", "Automation testing support", "QA within the Bandhan Life engagement"],
  },
  {
    slug: "att-super-application",
    name: "AT&T Super Application",
    company: companies.comviva,
    domain: "Telecom · fintech · mobile services",
    period: "Dec 2025 – May 2026",
    tenure: "5 months, 9 days",
    description: "Cross-platform QA for a fintech and telecom app, covering account access, bill payments, saved cards, subscriptions, and service activations across web and mobile.",
    tags: ["Playwright", "Robot Framework", "Postman", "Web & mobile"],
    highlights: ["Authentication, subscription, and service activation journeys", "Invoice payments, saved cards, and payment method coverage", "Cross-platform testing on web, Android, and iOS", "API validation and data consistency with Postman"],
  },
  {
    slug: "globalbank-cbs",
    name: "GlobalBank CBS",
    company: companies.penta,
    domain: "Banking · core banking",
    period: "Mar 2025 – Nov 2025",
    tenure: "about 8 months",
    description: "Quality validation for core banking workflows including multi-currency accounts, domestic and international transfers, reversals, FX, ledger reconciliation, and regulatory reports.",
    tags: ["Selenium", "Java", "TestNG", "SQL"],
    highlights: ["Multi-currency CASA account workflows", "NEFT, RTGS, and SWIFT fund transfers", "Transaction reversals and foreign exchange rate behavior", "GL reconciliation, interest calculations, and compliance reporting"],
  },
  {
    slug: "network-traffic-monitoring",
    name: "Network Traffic Monitoring System",
    company: companies.penta,
    domain: "Network monitoring · enterprise IT",
    period: "Jun 2024 – Jan 2025",
    tenure: "about 7 months",
    description: "Testing for enterprise network visibility, protocol identification, alerting, SNMP/syslog integrations, and high-traffic behavior.",
    tags: ["Selenium", "API testing", "Performance", "Jira"],
    highlights: ["Packet capture checks using Wireshark and tcpdump", "Application and protocol identification across network traffic", "SNMP and syslog integrations and alert triggers", "Functional, negative, load, and stress coverage"],
  },
];export const education = { degree: "B.E. in Computer Engineering", school: "Bhivarabai Sawant Institute of Technology and Research", location: "Wagholi, Pune", result: "CGPA 7.21" };


export const personalProjects: { slug: string; name: string; domain: string; description: string }[] = [];
