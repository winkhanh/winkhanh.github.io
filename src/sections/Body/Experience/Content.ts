export interface ProjectType{
    name:string,
    description:string,
    date:string,
    note?:string,
    link?:string,
    techUsing:string[]
}
export interface ExperienceType{
    name:string,
    key:string,
    title?:string,
    location?:string,
    date?:string,
    bulletPoints:string[],
    projects?:ProjectType[]
};

const CodingHubExp : ExperienceType = {
    name:"Coding Hub",
    key: "coding-hub",
    title:"Current President and Co-Founder | Fullstack developer",
    location:"Plattsburgh, NY",
    date:"September 2018 - Present",
    bulletPoints:[
        "Grow from a 6-founder-member team to a 20+ members. Plan, build, test and deploy software apps to assist students and organizations on campus",
        "Explain highly-technical concepts to university staff to gain approval and receive support to deploy our applications",
        "Conduct weekly stand-up meetings and coding reviews, pair programming",
        "Introduce Slack and Asana for team and project management"
    ],
    projects:[
        {
            name:"Shuttler",
            description:"A Mobile App to track the college shuttles in real time",
            date: "2019",
            note:"DEPLOYED",
            techUsing:[
                "Dart (Flutter)",
                "ReactJS",
                "Firebase"
            ]
        },{
            name:"Tutoring Hub",
            description:"A website to review and rate tutors for students of SUNY Plattsburgh",
            date: "2019",
            techUsing:[
                "ReactJS",
                "Express.js",
            ]
        },{
            name:"Club Hub",
            description:"A central website for clubs in SUNY Plattsburgh",
            date: "2020",
            techUsing:[
                "ReactJS",
                "Express.js"
            ]
        }
    ]
};
export {CodingHubExp};

const SUNYExp : ExperienceType = {
    name:"SUNY Plattsburgh",
    key: "suny-platt",
    title: "Teacher Assistant at CS Department and Academic Tutor at Claude J.Clark Learning Center",
    location:"Plattsburgh, NY",
    date:"September 2019 - December 2019",
    bulletPoints:[
        "Help the professor to prepare and conduct labs for some programming classes",
        "Assist students with class coursework and lab assignment",
        "Coolaborated with other TAs to prepare and evaluate labs",
        "Aid students in courses such as algorithms and data structure, python, math classes"
    ]
};
export {SUNYExp};

const MediusExp : ExperienceType = {
    name: "Medius Research, Inc",
    key: "medius",
    title: "Software Engineer Intern",
    location: "Remotely, Palm City, FL",
    date: "September 2020 - December 2020",
    bulletPoints:[
        "Collaborated with the development team to implement front-end design and functionality",
        "Adopted new development frameworks and collaboration technologies as needed along with developing proficiency in technologies core to our technical stack",
        "Worked with project founders to implement higher-level goals",
        "Implemented the main page and the editor for the website"
    ]
}
export {MediusExp}

const SideProjectExp : ExperienceType = {
    name: "Side Projects",
    key: "side-projects",
    bulletPoints:[
        "Attend hackathons: HackBoston 2018, HackDarthmouth 2019, PlattHack 2019, ...",
        "Some of the projects are class projects that I decided to continue to work on to complete them",
        "Only lists some of hightlight projects"
    ],
    projects:[
        {
            name:"Personal Website",
            description:"This website that you are viewing",
            date:"2020",
            techUsing:[
                "ReactJS"
            ]
        },{
            name:"Online Judger",
            description:"A website to hold, participate programming contests",
            date:"2020",
            techUsing:[
                "ReactJS",
                "Django",
                "Celery"
            ]
        },{
            name:"Cesta",
            description:"A Marketplace application for college students",
            date:"2020",
            techUsing:[
                "React Native",
                "ReactJS",
                "Express.js",
                "GraphQL"
            ]
        }
    ]
};
export {SideProjectExp};
