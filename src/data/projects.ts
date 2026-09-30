// PROJEKTIKORTIT
// Lisää, poista tai muokkaa portfolio-projekteja tästä tiedostosta.
// Yksi { ... }-lohko vastaa yhtä korttia Projects-osiossa.
export interface Project {
  title: string;
  category: string;
  role: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  systems: string[];
  challenge: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Thalassofobia", // Projektin nimi.
    category: "Multiplayer Underwater Horror Game", // Lyhyt projektityyppi nimen yläpuolella.
    role: "Lead Programmer / Software Team Lead", // Oma roolisi projektissa.
    description: "A multiplayer underwater horror game developed in Unreal Engine. My work focuses on gameplay programming, multiplayer architecture, UI systems and network synchronization.", // Kortin tiivistelmä.
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "UMG", "Replication", "Steam / EOS"], // Teknologiat tageiksi.
    image: "./images/projects/thalassofobia.svg", // Kuvan tiedosto public/images/projects-kansiosta.
    imageAlt: "Abstract sonar visualization representing the Thalassofobia underwater game", // Kuvan saavutettava kuvaus.
    systems: ["Server-authoritative gameplay", "RPC communication", "PlayerState / GameState replication", "Multiplayer HUD", "Mission, equipment and interaction systems", "Health and oxygen synchronization", "Boat gameplay"], // Case studyn luettelo.
    challenge: "Unreal Engine widgets exist locally and cannot be replicated directly. Shared gameplay state is kept in replicated PlayerState and GameState objects while each client's widgets observe and present that state locally.", // Case studyn tekninen haaste.
    // github: "https://github.com/Make4T/REPOSITORY", // Lisää vain, jos projekti on julkinen.
    // demo: "https://LINKKI-DEMOON", // Esim. Steam-, itch.io- tai videolinkki.
    featured: true, // false piilottaa kortin Projects-osiosta.
  },
  {
    title: "Gameplay Ability & Parkour System",
    category: "Gameplay Framework / Engine Programming",
    role: "Gameplay & Systems Programmer",
    description: "A modular parkour and character ability system built around Unreal Engine's Gameplay Ability System, combining movement, animation and reusable gameplay abilities.",
    technologies: ["Unreal Engine", "C++", "Gameplay Ability System", "Animation", "Character Movement"],
    image: "./images/projects/parkour.svg",
    imageAlt: "Technical movement-path visualization representing a parkour system",
    systems: ["Wall running and climbing", "Hanging and ledge detection", "Sliding and drop mechanics", "Gameplay abilities", "Animation integration", "Reusable C++ components"],
    challenge: "The architecture keeps core gameplay behavior in testable, reusable C++ components while exposing tuning and content configuration to designers through Blueprints.",
    featured: true,
  },
  {
    title: "Multiplayer Lobby Framework",
    category: "Unity Networking System",
    role: "Networking Programmer",
    description: "A reusable multiplayer lobby architecture developed with Unity and Mirror, covering the player journey from local discovery to a managed lobby session.",
    technologies: ["Unity", "C#", "Mirror", "Telepathy", "LAN Discovery"],
    image: "./images/projects/lobby.svg",
    imageAlt: "Network-node diagram representing a multiplayer lobby framework",
    systems: ["Host and join flow", "Party creation", "Player limits", "Server and LAN discovery", "Lobby player tracking", "Connection lifecycle management"],
    challenge: "The lobby separates connection state, player membership and presentation so sessions remain understandable and reusable across different game prototypes.",
    featured: true,
  },
  {
    title: "Python Telemetry Analyzer",
    category: "Python Data Tooling / Telemetry",
    role: "Python Developer",
    description: "A testable CLI that turns JSONL or CSV game and server telemetry into JSON, CSV and self-contained HTML reports with session, player and event statistics.",
    technologies: ["Python", "JSONL / CSV", "CLI", "pytest", "Ruff", "GitHub Actions"],
    image: "./images/projects/python-telemetry-analyzer.svg",
    imageAlt: "Telemetry event stream transformed into an analytics report",
    systems: ["JSONL and CSV parsing", "Event and session aggregation", "Player and session metrics", "Malformed-row warnings", "Strict CI mode", "JSON, CSV and HTML reports", "Tested package build"],
    challenge: "Telemetry is useful only when bad rows do not silently disappear. The analyzer keeps valid events flowing, reports the exact malformed line and offers strict mode for pipelines where data quality must stop the build.",
    github: "https://github.com/Make4T/python-telemetry-analyzer",
    featured: true,
  },
  {
    title: "Python Config Validator",
    category: "Python Tooling / Developer Experience",
    role: "Python Developer",
    description: "A testable command-line tool that validates JSON and optional YAML configuration files against a schema, reports actionable diagnostics and safely fills missing defaults.",
    technologies: ["Python", "JSON Schema", "CLI", "pytest", "Ruff", "GitHub Actions"],
    image: "./images/projects/python-validator.svg",
    imageAlt: "Configuration document with validation checks and structured error indicators",
    systems: ["JSON and optional YAML input", "Schema-driven validation", "Safe --fix defaults", "Stable error codes and suggestions", "Machine-readable JSON output", "pytest and Ruff CI", "PyPI build workflow"],
    challenge: "Automatic fixes should improve a configuration without silently changing the user's intent. The validator only applies defaults declared by the schema, preserves existing values and validates the result again before reporting success.",
    github: "https://github.com/Make4T/python-config-validator",
    featured: true,
  },
  {
    title: "Real-Time Graphics Programming",
    category: "Graphics Programming",
    role: "Graphics Programmer",
    description: "A lower-level rendering project exploring the foundations behind real-time 3D engines, from model loading and transforms to lighting and camera systems.",
    technologies: ["C++", "OpenGL", "GLM", "GLFW", "GLAD", "Assimp"],
    image: "./images/projects/graphics.svg",
    imageAlt: "Wireframe scene representing a real-time graphics renderer",
    systems: ["3D rendering", "Model loading", "Phong lighting", "Transformations", "Camera systems", "Real-time render loop"],
    challenge: "Building the rendering path directly with OpenGL makes resource ownership, coordinate spaces and the relationship between CPU-side scene data and GPU-side shaders explicit.",
    featured: true,
  },
];
