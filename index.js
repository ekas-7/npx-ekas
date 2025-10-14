#!/usr/bin/env node

import { createSpinner } from 'nanospinner';
import chalk from 'chalk';
import terminalLink from 'terminal-link';
import figlet from 'figlet';
import gradient from 'gradient-string';

// Configuration
const config = {
    name: 'Ekaspreet Singh Atwal',
    status: 'Pursuing  B.Tech in IT @ NITJ',
    education: [
        {
            institution: 'NIT Jalandhar',
            degree: 'Bachelor of Technology - Information Technology',
            duration: '2022 - Current',
            cgpa: '8.34'
        }
    ],
    github: 'https://github.com/ekas-7',
    linkedin: 'https://www.linkedin.com/in/ekaspreet-singh-atwal-b7570b269/',
    twitter: 'https://x.com/Ekas_7',
    email: 'ekaspreetatwal@gmail.com',
    mobile: '+91-8872059425',

    // Additional resume/context added per request (keeps styling unchanged)
    contact: {
        portfolio: 'https://ekas.site'
    },

    experience: [
        {
            company: 'Prava Payments',
            role: 'Software Engineering Intern',
            dates: 'Aug 2025 – Present',
            location: 'Remote, USA',
            bullets: [
                'Built REST/GraphQL agentic endpoints for Shopify for CRUD operations, custom orders, and secure payment confirmation.',
                'Containerized and deployed the main backend repository and backend services + Shopify extensions on AWS (ECS, ECR, Aurora, CloudFront, S3, CloudWatch, EC2) using Terraform, Docker, and CI/CD pipelines.',
                'Developed a Chrome extension that integrates Prava APIs with ChatGPT and Perplexity for AI-agentic payments in chat.'
            ]
        },
        {
            company: 'Microsoft',
            role: 'Software Engineering Intern',
            dates: 'June 2025 – August 2025',
            location: 'Bangalore, India',
            bullets: [
                'Developed RAG-based workflows to automate the generation of pull requests to identify and fix potential nullptr dereferences, memory leaks, and generate unit tests for low-level GPU code.',
                'Detected and resolved over 90 null pointer dereferences and 85 memory leaks.',
                'Integrated AI-generated unit tests into the codebase with CI pipelines to ensure clean builds and test coverage.'
            ]
        },
        {
            company: 'Open Food Facts',
            role: 'Open Source Contributor',
            dates: 'Feb 2025 – June 2025',
            location: 'Remote (Docs)',
            bullets: [
                'Integrated GitHub Actions for Dependabot, semantic PRs, auto-assignment, and TS linting.',
                'Created a Knowledge Panel UI with lit, enhanced Docker setups, and improved documentation and API consistency.'
            ]
        },
        {
            company: 'Global Psychological Services',
            role: 'Freelance Developer',
            dates: 'Oct 2024 – Jan 2025',
            location: 'Remote (Demo)',
            bullets: [
                'Built and deployed the Drishti Assessment Platform, a psychometric career guidance tool with RIASEC, DISC, and MBTI tests, serving over 2,500 users with automated report generation.'
            ]
        }
    ],

    achievements: [
        'HackTU 6.0: 2nd Runner-Up & Best Gen AI for ZingGuru, a RAG-powered learning platform (5000+ participants).',
        'Electothon 7.0: Best MongoDB Use for JIVA, an AI-driven healthcare system (4550+ participants).',
        'Hack CBS 7.0: TON Track Winner for an IPFS-based decentralized ML training system (4400+ participants).',
        'Discovered and responsibly reported critical authentication vulnerabilities in the NITJ Placement Portal and over 5 vulnerabilities in the Hostel Management System.'
    ],

    projects: [
        {
            name: 'Dhaniverse',
            desc: 'A gamified 2D RPG for financial literacy that teaches personal finance through real-life money simulations. Supports chunked maps and on-chain banking/leaderboards on ICP.',
            tech: ['React', 'Phaser 3', 'Deno', 'MongoDB', 'WebSockets']
        },
        {
            name: 'Dev Mux',
            desc: 'A collaboration platform with video calls, code editing, and a whiteboard. Features real-time sync using LiveKit & CodeSandbox.',
            tech: ['Prisma', 'PostgreSQL', 'LiveKit']
        },
        {
            name: 'Zing Guru',
            desc: 'An AI-powered learning ecosystem providing study paths, gamified modules, and 24/7 AI support.',
            tech: ['React.js', 'Node.js', 'LangChain', 'OpenAI', 'PostgreSQL', 'Redis']
        }
    ],

    codingProfiles: {
        leetcode: '850+ problems, peak rating 1774+',
        codechef: '3-Star (1648)',
        gfg: '300+ algorithmic problems'
    },

    coursework: ['DSA', 'OOP', 'DBMS', 'OS', 'CN', 'AI/ML', 'SE'],

    skills: {
        languages: ['C', 'C++', 'JavaScript', 'TypeScript', 'Java', 'Python'],
        frameworks: ['Node.js', 'Express.js', 'React.js', 'Recoil', 'HonoJS'],
        technologies: ['WebSockets', 'Zod', 'TailwindCSS', 'Docker', 'AWS'],
        databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Prisma ORM'],
        tools: ['Git', 'GitHub', 'Figma', 'Google Colab'],
        coursework: [
            'Data Structures and Algorithms',
            'Object-Oriented Programming',
            'Computer Networks',
            'Database Management Systems',
            'Operating Systems'
        ]
    },
};

// Helper functions
const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const printSkill = (skills, header) => {
    const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta']);
    const coloredSkills = skills.map((skill, index) => 
        chalk[availableColors[index % availableColors.length]](skill)
    );
    console.log(`${chalk.green(header.padEnd(12))} - ${coloredSkills.join(', ')}`);
};

const printHeader = (text) => {
    console.log('\n' + gradient.pastel(figlet.textSync(text, { horizontalLayout: 'full' })));
};

const printPersonalDetails = () => {
    const details = [
        { label: 'NAME', value: config.name },
        { label: 'STATUS', value: config.status },
        { label: 'GITHUB', value: terminalLink('Check it out!', config.github) },
        { label: 'LINKEDIN', value: terminalLink('Connect with me!', config.linkedin) },
        { label: 'TWITTER', value: terminalLink('Follow me!', config.twitter) },
        { label: 'EMAIL', value: config.email },
        { label: 'PORTFOLIO', value: terminalLink('Visit', config.contact?.portfolio || '') }
    ];

    details.forEach(({ label, value }) => {
        console.log(`${chalk.green(label.padEnd(12))} - ${chalk.cyan(value)}`);
    });
};

const printExperience = () => {
    config.experience.forEach(exp => {
        console.log(chalk.bold(exp.company + ' - ' + exp.role));
        console.log(chalk.dim(`${exp.dates} | ${exp.location}`));
        exp.bullets.forEach(b => console.log('  ' + chalk.cyan('•') + ' ' + b));
        console.log();
    });
};

const printAchievements = () => {
    console.log(chalk.bold('\nAchievements'));
    config.achievements.forEach(a => console.log(chalk.cyan('•') + ' ' + a));
    console.log();
};

const printProjects = () => {
    console.log(chalk.bold('\nProjects'));
    config.projects.forEach(p => {
        console.log(chalk.green.bold(p.name) + ' - ' + p.desc);
        console.log(chalk.dim('  Tech: ' + p.tech.join(', ')));
        console.log();
    });
};

const printEducation = () => {
    config.education.forEach(edu => {
        console.log(`${chalk.cyan(edu.institution)} - ${edu.degree || edu.board} (${edu.duration})`);
        console.log(`CGPA : ${edu.cgpa }`);
        console.log();
    });
};

const printCodingProfiles = () => {
    console.log(chalk.bold('\nCoding Profiles & Certifications'));
    Object.entries(config.codingProfiles).forEach(([k, v]) => {
        console.log(`${chalk.green(k.toUpperCase())}: ${chalk.cyan(v)}`);
    });
    console.log();
};

const printCoursework = () => {
    console.log(chalk.bold('\nRelevant Coursework'));
    console.log('• ' + config.coursework.join(', '));
    console.log();
};

// Main function
const main = async () => {
    console.clear();
    
    printHeader('YO Ekas this side !');
    
    const spinner = createSpinner('🔄 Loading Ekas\'s details').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner.success({ text: '✅ Details loaded successfully!' });

    printHeader('Personal Details');
    printPersonalDetails();

    const spinner1 = createSpinner('📚 Loading Education').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner1.success({ text: '🎓 Education loaded successfully!' });

    printHeader('Education');
    printEducation();

    const spinner2 = createSpinner('🛠️ Loading Skills').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner2.success({ text: '💪 Skills loaded successfully!' });

    printHeader('Skills');
    Object.entries(config.skills).forEach(([key, value]) => {
        printSkill(value, key.toUpperCase());
    });

    const spinner3 = createSpinner('💌 Loading Message').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner3.success({ text: '📣 Message loaded successfully!' });

    printHeader('Message');
    console.log(gradient.rainbow('I am amped to contribute  in open source and tech, ready to innovate, learn, and leave my mark!'));
    console.log(gradient.rainbow('Thanks for checking out my CLI!'));

    // Print expanded resume sections
    printHeader('Experience');
    printExperience();

    printAchievements();

    printProjects();

    printCodingProfiles();

    printCoursework();
};

main().catch(console.error);