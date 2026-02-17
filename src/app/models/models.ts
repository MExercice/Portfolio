export interface Skill {
    id: string;
    name: string;
    type: 'Technique' | 'Humaine';
    level: number; // 1-100
    definition: string;
    proof: SkillProof[]; // Anecdotes structurées
    selfCriticism: string;
    evolution: string;
    linkedProjectIds: string[];
}

export interface SkillProof {
    content: string;
    linkedProjectId?: string;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    context: string;
    objectives: string[];
    steps: string[];
    actors: string[];
    results: string;
    criticism: string;
    linkedSkillIds: string[];
    imageUrl?: string;
}

export interface TimelineEntry {
    id: string;
    date: string;
    title: string;
    company: string;
    location: string;
    logoUrl?: string;
    missions: string[];
}

export interface PortfolioData {
    owner: {
        firstName: string;
        lastName: string;
        photoUrl: string;
        title: string;
    };
    skills: Skill[];
    projects: Project[];
    experiences: TimelineEntry[];
}
