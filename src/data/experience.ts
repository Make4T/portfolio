export interface ExperienceItem {
  company: string;
  roles: string[];
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Varattu Valo Games Oy",
    roles: ["Co-Founder", "Software Team Lead", "Lead Programmer"],
    responsibilities: ["Gameplay programming", "Multiplayer architecture", "Unreal Engine development", "Technical design", "Team coordination", "Code architecture", "Gameplay and UI systems"],
  },
  {
    company: "Crimson Eyes Oy",
    roles: ["Co-Founder", "Programmer"],
    responsibilities: ["Game development", "Programming", "Prototype development", "Technical implementation"],
  },
];
