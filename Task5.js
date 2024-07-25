//Resume Created in JSON, iterate over all for loops (for, for in, for of, forEach)

const resume = {
    name: "Chandramouli",
    title: "Mechanical Engineer & Front End Developer",
    contact: {
        email: "moulimcmnsit@gmail.com",
        phone: "8122817271",
        address: "19/101 St, Marandahalli, Dharmapuri"
    },
    education: [
        {
            degree: "B.E. in Mechanical Engineering",
            institution: "Anna University",
            year: 2019
        }
    ],
    experience: [
        {
            title: "Mechanical Engineer",
            company: "JSW Engineering",
            years: "2019-2021"
        },
        {
            title: "Front End Developer",
            company: "GTN Solutions",
            years: "2021-Present"
        }
    ],
    skills: ["JavaScript", "HTML", "CSS", "ReactJs"]
};

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
        console.log(`${key}: ${JSON.stringify(resume[key], null, 2)}`);
    }
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let skill of resume.skills) {
    console.log(skill);
}

// Using forEach loop
console.log("\nUsing forEach loop:");
resume.skills.forEach(skill => {
    console.log(skill);
});
