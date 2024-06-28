import { meta, shopify, starbucks, tesla , Microsoft, AWS } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Microsoft Azure AZ-104 Certification",
        company_name: "Microsoft",
        icon: Microsoft,
        iconBg: "#accbe1",
        date: "Aug 2023 - November 2023",
        points: [
            "Azure Identity and Governance: Implement and manage Azure Active Directory (AAD) Manage role-based access control (RBAC) Implement and manage hybrid identities",
            "Azure Storage Management: Implement and manage storage accounts Manage data in Azure Storage Configure Azure files and Azure blob storage",
            "Deploy and manage Azure virtual machines (VMs) Automate deployment and configuration of VMs Create and configure containers and Azure Kubernetes Service (AKS)",
            "Configure and manage virtual networks Implement and manage public and private IP addresses Implement Azure Load Balancer and Azure Application Gateway Network security groups (NSGs) and Azure Firewall",
        ],
    },
    {
        title: "AWS Cloud Practitioner Certification",
        company_name: "Amazon Web Services (AWS)",
        icon: AWS,
        iconBg: "#fbc3bc",
        date: "Aug 2023 - November 2023",
        points: [
            "Understand basic cloud computing concepts and AWS services Benefits and economics of cloud computing Different types of cloud deployment models: public, private, and hybrid",
            "Overview of key AWS services: EC2, S3, RDS, VPC, and Lambda Understand the global infrastructure of AWS: Regions, Availability Zones, and Edge locations",
            "Fundamentals of AWS security and compliance measures Shared responsibility model AWS Identity and Access Management (IAM) Data encryption and securing workloads in AWS",
            "Basic principles of AWS pricing and billing AWS pricing models: pay-as-you-go, reserved instances, and spot instances Cost management tools and best practices for cost optimization",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Nahush17Patankar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nahush-patankar-0675b0222/',
    }
];

export const projects = [
    {
        
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Disney clone',
        description: 'Developed a web application that shows the latest disney movies and shows.',
        link: 'https://disneyplus-clone-dc688.web.app/',

    },
    {
        
        iconUrl: threads,
        theme: 'btn-back-black',
        name: 'Netflix clone',
        description: 'Developed a web application that shows the latest Netflix movies and shows with the latest payment mode by Stripe.',
        link: 'https://netflix-clone-34b55.web.app',

    },
    {
        
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Hulu clone',
        description: ' Enjoy Hulu Movies, TV Shows, and Live YouTube Trailers with Multiple Genres',
        link: 'https://hulu-clone-e5896.web.app',

    },
    {
        
        iconUrl:snapgram,
        theme: 'btn-back-red',
        name: 'Youtube clone',
        description: 'Developed a web application that shows the latest movies and shows trailers.',
        link: 'http://youtube-clone-np.netlify.app',

    },
    {
        
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Apple Iphone Store ',
        description: 'Developed a web application that shows the latest iPhone 15 Pro website features enabling Gsap features.',
        link: 'https://iphone-patpro.netlify.app/',

    },
    
    {
        
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Tesla clone',
        description: 'Developed a web application for Tesla similar to it emerses the users with future of electric cars.',
        link: 'https://tesla-clone-dc395.web.app/#',

    },
    {
        
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AirBnb clone',
        description: 'Developed a web application for Hotel booking and advance booking.',
        link: 'https://airbnb-clone-virid-beta.vercel.app/',

    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://car-hub-umber-mu.vercel.app/',
    },
   
];