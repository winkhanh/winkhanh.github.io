export interface EventPointType{
    time:string,
    value:number,
    events:string[]    
};

const listOfEvent : EventPointType[] = [
    {
        time: "Summer 2013",
        value:0,
        events:["First time learning Programming (Pascal), and start learning competitive programming"]
    },
    {
        time: "Spring 2015",
        value:7,
        events:[
            "First Prize in Math Competition for oustanding students at City level",
            "First Prize in Informatics Competition for oustanding students at City level",
        ]
    },
    {
        time:"Summer 2015",
        value:8,
        events:["Third Prize in National Youth Informatics Contest"]
    },
    {
        time:"Fall 2015",
        value:9,
        events:["Admitted to Le Quy Don High school for the gifted, majoring in IT"]
    },
    {
        time:"Spring 2016",
        value:11,
        events:["Silver Prize in 30-4 Olympics at Informatics (National level)"]
    },
    {
        time:"Fall 2016",
        value:13,
        events:["Third Prize in Viet Nam Olympiad in Informatics (National level)"]
    },
    {
        time:"Spring 2017",
        value:11,
        events:["Gold Prize (#2) in 30-4 Olympics at Informatics (National level)"]
    },
    {
        time:"Fall 2017",
        value:13,
        events:["Third Prize in Viet Nam Olympiad in Informatics (National level)"]
    },
    {
        time:"Fall 2018",
        value:17,
        events:[
            "Admitted to State University of New York at Plattsburgh, majoring in Computer Science",
            "With 6 other students, founded Coding Hub"
        ]
    },
    {
        time:"Spring 2019",
        value:19,
        events:["Fourth place in CCSCNE 2019 (http://ccscne.org/participate/programming-contest/)"]
    }
];
export default listOfEvent;