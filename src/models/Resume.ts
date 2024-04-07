import Education from "./Education";
import Experience from "./Experience";
import Language from "./Language";


export default class Resume {
    firstName: string = '';
    lastName: string = '';
    wantedRole: string = '';
    email: string = '';
    phone: string = '';
    country: string = '';
    city: string = '';
    githubLink: string = '';
    linkedinLink: string = '';
    porfolioLink: string = '';
    professionalSummary: string = '';
    experiences: Experience[] = []; 
    education: Education[] = []; 
    languages: Language[] = [];
    skills: string[] = [];

    constructor(firstName: string, lastName: string, wantedRole: string, email: string, phone: string, country: string, city: string, githubLink: string, linkedinLink: string, porfolioLink: string, professionalSummary: string, experiences: Experience[], education: Education[], languages: Language[], skills: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wantedRole = wantedRole;
        this.email = email;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.githubLink = githubLink;
        this.linkedinLink = linkedinLink;
        this.porfolioLink = porfolioLink;
        this.professionalSummary = professionalSummary;
        this.experiences = experiences;
        this.education = education;
        this.languages = languages;
        this.skills = skills;
    }

    addExperience(experience: Experience) {
        this.experiences.push(experience);
    }

    removeExperience(index: number) {
        this.experiences.splice(index, 1);
    }

    addEducation(education: Education) {
        this.education.push(education);
    }

    removeEducation(index: number) {
        this.education.splice(index, 1);
    }

    addLanguage(language: Language) {
        this.languages.push(language);
    }

    removeLanguage(index: number) {
        this.languages.splice(index, 1);
    }
  }