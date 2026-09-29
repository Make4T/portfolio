export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { title: "Programming", skills: ["C++", "C#", "Blueprints", "TypeScript"] },
  { title: "Game Engines", skills: ["Unreal Engine 5", "Unity"] },
  { title: "Multiplayer", skills: ["Replication", "RPC", "Authority", "Client / Server", "PlayerState", "GameState", "Mirror", "Steam", "EOS"] },
  { title: "Unreal Engine", skills: ["Gameplay Ability System", "UMG", "Animation Blueprints", "Enhanced Input", "Gameplay Framework", "Components"] },
  { title: "Graphics", skills: ["OpenGL", "GLM", "GLFW", "GLAD", "Assimp", "Real-Time Rendering"] },
  { title: "Development Tools", skills: ["Git", "GitHub", "Visual Studio", "VS Code", "CMake", "Trello", "HacknPlan"] },
];
