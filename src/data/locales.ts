import portfolioData from './portfolio.json';

const tamilData = {
    profile: {
        name: "குரு கண்ணன்",
        role: "ஜாவா டெவலப்பர்",
        summary: "புதிய வாய்ப்புகளைத் தேடும் ஜாவா டெவலப்பர் | Ednue Technologies நிறுவனர்",
        // Keep file paths same
        avatar: portfolioData.profile.avatar,
        resumeUrl: portfolioData.profile.resumeUrl
    },
    about: {
        summary: "வணக்கம், நான் குரு கண்ணன் - பகலில் ஜாவா வித்தகர், ஆர்வத்தால் தொழில்நுட்ப வழிகாட்டி. தற்போது TCS இல் அளவிடக்கூடிய பின்தள அமைப்புகளை உருவாக்கி வருகிறேன், மேலும் எனது திறன் மேம்பாட்டு நிறுவனமான Ednue Technologies மூலம் நாளைய தொழில்நுட்ப திறமையாளர்களை வடிவமைக்கிறேன்."
    },
    ui: {
        nav: {
            home: "முகப்பு",
            works: "படைப்புகள்",
            journey: "பயணம்",
            experience: "அனுபவம்",
            education: "கல்வி",
            upskilling: "திறன் மேம்பாடு",
            givingBack: "சமூக பங்களிப்பு",
            honors: "விருதுகள்",
            about: "என்னை பற்றி",
            contacts: "தொடர்புக்கு"
        },
        hero: {
            isA: "ஒரு",
            and: "மற்றும்",
            techMentor: "தொழில்நுட்ப வழிகாட்டி",
            description: "அளவிடக்கூடிய பின்தள அமைப்புகளை உருவாக்குதல் மற்றும் நாளைய தொழில்நுட்ப திறமையாளர்களை வடிவமைத்தல்.",
            contactBtn: "தொடர்பு கொள்ள!!",
            buildingAt: "தற்போது கட்டமைப்பது"
        },
        education: {
            title: "கல்வி"
        },
        experience: {
            title: "அனுபவம்"
        },
        projects: {
            title: "திட்டங்கள்",
            viewAll: "அனைத்தையும் பார்க்க"
        },
        awards: {
            title: "விருதுகள் & அங்கீகாரங்கள்",
            associatedWith: "உடன் தொடர்புடையது",
            viewFullSize: "முழு அளவைப் பார்க்கவும்"
        }
    },
    // For arrays like awards/experience, we might need a more complex strategy if we want full translation.
    // For now, we'll keep the English data for deep content but translate section headers and common fields where possible, 
    // or provide overrides.
    awards: portfolioData.awards.map(award => ({
        ...award,
        // Example manual translations for titles if needed, otherwise fallback to English or use a mapping.
        // For this specific task, we will focus on UI structure translation + keeping dynamic content mostly English 
        // unless specific translations are requested for all entries.
        // We can mimic the structure for type consistency.
    }))
};

const englishData = {
    ...portfolioData,
    ui: {
        nav: {
            home: "home",
            works: "works",
            journey: "Journey",
            experience: "experience",
            education: "education",
            upskilling: "Upskilling",
            givingBack: "Giving Back",
            honors: "Honors",
            about: "about-me",
            contacts: "contacts"
        },
        hero: {
            isA: "is a",
            and: "and",
            techMentor: "Tech Mentor",
            description: "Building scalable backend systems and shaping tomorrow’s tech talent.",
            contactBtn: "Contact me!!",
            buildingAt: "Currently building at"
        },
        education: {
            title: "education"
        },
        experience: {
            title: "experience"
        },
        projects: {
            title: "projects",
            viewAll: "View all"
        },
        awards: {
            title: "honors-&-awards",
            associatedWith: "Associated with",
            viewFullSize: "View Full Size"
        }
    }
};

export const locales = {
    en: englishData,
    ta: {
        ...englishData, // Fallback for missing fields (like skills, projects arrays)
        ...tamilData,
        // We explicitly merge objects that perform deep overrides
        profile: tamilData.profile,
        about: tamilData.about,
        ui: tamilData.ui
    }
};

export type LocaleData = typeof englishData;
