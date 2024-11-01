let resumeData = {
  name: "Lynden Jones",
  role:
    "Fifth-year student at the University of Alberta in computer engineering and mathematics",
  linkedinId: " Lynden Jones",
  skypeid: "Your skypeid",
  roleDescription:
    "I’m a student with hands-on experience across tech’s cutting edge—from developing high-speed self-driving software for a race car to crafting efficient code for AWS S3 Express One Zone. Whether it’s AI on wheels or cloud at scale, I write code that doesn’t just work—it flies.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/lynden-jones-39022a226/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/LyndenJ",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "I'm from Calgary, Alberta, Canada, and I've been immersed in software development since getting my first computer. My expertise lies in building robust algorithms for complex backend systems, and I’m deeply engaged with state-of-the-art machine learning techniques.",
  aboutme2:
    "This past summer, I worked at AWS on the S3 Express One Zone team, where I developed capacity provisioning solutions to meet dynamic customer demands and successfully brought my project to production.",
  aboutme3:
    "Currently, I'm completing a study term at uAlberta for this semester and winter 2025. I’m open to internships starting in summer 2025 and fall 2025. If you think I'd be a great addition to your team, feel free to reach out at lgjones@ualberta.ca.",
  address: "+1 (587) 577-8000",
  website: "lgjones@ualberta.ca",
  education: [
    {
      UniversityName: "University of Alberta",
      Major: "B.Sc Computer Engineering Software Option Co-op",
      Minor: "Mathematics",
      MonthOfPassing: "April",
      YearOfPassing: "2026",
      GPA: "3.7/4.0",
      Achievements: [
        "Bruce A. Johnston Scholarship for Engineering and Leadership - Sept 2020",
        "Dean's Research Award - April 2023",
      ],
    },
  ],
  work: [
    {
      CompanyName: "Amazon Inc.",
      specialization: "SDE Intern",
      MonthOfLeaving: "August",
      YearOfLeaving: "2024",
      Achievements:
        "I had the opportunity to intern with the Simple Storage Service (S3) team at Amazon Web Services (AWS), where I contributed to the development of Express One Zone, a pioneering data storage class engineered to deliver single-digit millisecond response times—an industry-first in cloud computing. In this role, I personally researched, designed, and launched a workflow that automated the ingestion of physical capacity into the host fleet, significantly optimizing our system’s efficiency. I employed Rust, a fast and memory-safe programming language, for core system logic and deployed the infrastructure using TypeScript in Amazon CDK. This project not only went into production but also underscored my ability to deliver technically complex solutions with a high degree of reliability.",
    },
    {
      CompanyName: "Bremergy e.V.",
      specialization: "Software Developer Intern - Driverless",
      MonthOfLeaving: "August",
      YearOfLeaving: "2023",
      Achievements:
        "Collaborated in a fast-paced team to develop autonomous driving software for the 2024 season race car, utilizing C++ and Python with ROS2 to implement real-time control nodes for hardware interfaces, including Lidar, Depth Camera, wheel speed sensors, and more. Optimized path-planning and odometry algorithms to enhance lap completion speed, and conducted simulations in Gazebo to model real-world physics across various tracks. Employed Docker to streamline codebase portability across diverse Unix environments.",
    },
    {
      CompanyName: "Neo Financial",
      specialization: "Software Test Engineer",
      MonthOfLeaving: "August",
      YearOfLeaving: "2022",
      Achievements:
        "Collaborated with product management throughout the software development lifecycle, contributing to specification, design, development, and testing phases. Developed and maintained unit, integration, and end-to-end tests across a large codebase, focusing on high-risk areas involving sensitive client data and third-party API calls. Additionally, I partnered with senior developers to create an internal iOS training app for onboarding new hires. Played a key role in an Agile team, helping to release features that significantly increased customer conversion by 18% on savings applications and by over 180x on mortgage lead acquisition.",
    },
    {
      CompanyName: "Westech Healthcare ltd.",
      specialization: "Database Developer",
      MonthOfLeaving: "August",
      YearOfLeaving: "2021",
      Achievements:
        "Led the development and deployment of an SQL database from requirements specification to implementation, managing client contacts and sales data for a small medical company. Additionally, I optimized warehouse operations by overseeing inventory management, order fulfillment, and logistics, resulting in a 23% increase in efficiency by the end of the summer.",
    },
  ],
  skillsDescription: "Some of my notable skills include:",
  skills: [
    {
      skillname: "Python",
    },
    {
      skillname: "Typescript",
    },
    {
      skillname: "java",
    },
  ],
  portfolio: [
    {
      name: "Navigation System",
      description:
        "A functioning GPS system of Edmonton. This is an implementation of Dijkstra's algorithm and a Client-Server relationship. Go ahead and compare it to Google Maps;)",
      imgurl: "images/portfolio/navigationSystem.jpeg",
      repoUrl: "https://github.com/LyndenJ/Edmonton-GPS",
    },
    // {
    //   "name":"Naive Bayes Classifier",
    //   "description":"Weather Classification",
    //   "imgurl":"images/portfolio/classifier.jpeg"
    // },
    {
      name: "Compression Algorithm",
      description: "Huffman Encoding",
      imgurl: "images/portfolio/huffmanEncoding.webp",
      repoUrl:
        "https://github.com/LyndenJ/c274.Fall.2021/tree/main/huffman_2021",
    },
    {
      name: "This Personal Website",
      description:
        "What better way to show off react.js knowledge than creating this website. Click to check out the repo!",
      imgurl: "images/portfolio/youAreHere.jpeg",
      repoUrl: "https://github.com/LyndenJ/WebsiteV3",
    },
    {
      name: "Journ.ai",
      description:
        "A journalling app powered by artificial intelligence! Write down journal entries and watch the power of Natural Language Processing extract and show you the relative frequency of your 7 most core emotions.",
      imgurl: "images/portfolio/journAiLogo.png",
      repoUrl: "https://devpost.com/software/journai-8wl03y",
    },
  ],
  testimonials: [
    {
      description: "Those who can imagine anything can create the impossible",
      name: "Alan Turing",
    },
    {
      description:
        "Computer science is no more about computers than astronomy is about telescopes",
      name: "E.W. Dijkstra",
    },
  ],
};

export default resumeData;
