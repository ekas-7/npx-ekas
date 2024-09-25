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
    email: 'ekasatwal.work@gmail.com',

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
        
    ];

    details.forEach(({ label, value }) => {
        console.log(`${chalk.green(label.padEnd(12))} - ${chalk.cyan(value)}`);
    });
};

const printEducation = () => {
    config.education.forEach(edu => {
        console.log(`${chalk.cyan(edu.institution)} - ${edu.degree || edu.board} (${edu.duration})`);
        console.log(`CGPA : ${edu.cgpa }`);
        console.log();
    });
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
    console.log(gradient.rainbow('I am amped to crush it in open source and tech, ready to innovate, learn, and leave my mark!'));
    console.log(gradient.rainbow('Thanks for checking out my CLI!'));
};

main().catch(console.error);