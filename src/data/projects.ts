// PROJEKTIKORTIT
// Lisää, poista tai muokkaa portfolio-projekteja tästä tiedostosta.
// Yksi { ... }-lohko vastaa yhtä korttia Projects-osiossa.
export type ProjectArea = "Game Development" | "Web & Services" | "Data & Tooling" | "Embedded Systems" | "Interactive Media";

export interface Project {
  title: string;
  category: string;
  area: ProjectArea;
  role: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  systems: string[];
  challenge: string;
  github?: string;
  demo?: string;
  steam?: string;
  document?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Thalassophobia", // Projektin nimi.
    category: "Multiplayer Underwater Horror Game", // Lyhyt projektityyppi nimen yläpuolella.
    area: "Game Development",
    role: "Lead Programmer / Software Team Lead", // Oma roolisi projektissa.
    description: "A multiplayer underwater horror game developed in Unreal Engine. My work focuses on gameplay programming, multiplayer architecture, UI systems and network synchronization.", // Kortin tiivistelmä.
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "UMG", "Replication", "Steam / EOS"], // Teknologiat tageiksi.
    image: "./images/projects/thalassophobia-underwater.gif", // Pelin vedenalainen gameplay-loop public/images/projects-kansiosta.
    imageAlt: "Looping first-person gameplay clip showing underwater exploration in Thalassophobia", // Kuvan saavutettava kuvaus.
    systems: ["Server-authoritative gameplay", "RPC communication", "PlayerState / GameState replication", "Multiplayer HUD", "Mission, equipment and interaction systems", "Health and oxygen synchronization", "Boat gameplay"], // Case studyn luettelo.
    challenge: "Unreal Engine widgets exist locally and cannot be replicated directly. Shared gameplay state is kept in replicated PlayerState and GameState objects while each client's widgets observe and present that state locally.", // Case studyn tekninen haaste.
    // github: "https://github.com/Make4T/REPOSITORY", // Lisää vain, jos projekti on julkinen.
    // demo: "https://LINKKI-DEMOON", // Esim. Steam-, itch.io- tai videolinkki.
    steam: "https://store.steampowered.com/app/2507690/Thalassophobia/", // Julkinen Steam Store -sivu.
    featured: true, // false piilottaa kortin Projects-osiosta.
  },
  {
    // UE 5.8 -projektin nykyinen portfolioesittely. Päivitä GitHub-linkki vasta, kun projektille on oma julkinen repository.
    title: "GASP Parkour Movement Showcase",
    category: "Unreal Engine 5.8 / Character Movement",
    area: "Game Development",
    role: "Gameplay & Systems Programmer",
    description: "An in-progress third-person parkour showcase built with Unreal Engine 5.8 and GASP. It demonstrates ledge hanging, directional shimmy, climb-up, drop, wall-jump and slide movement inside a purpose-built traversal course.",
    technologies: ["Unreal Engine 5.8", "C++", "Blueprints", "GASP", "Motion Matching", "Character Movement"],
    image: "./images/projects/parkour-climb-wallhang.gif",
    imageAlt: "Looping gameplay clip showing climb-up and wall-hang movement in the Unreal Engine parkour showcase",
    systems: ["Ledge detection and hanging", "Directional wall shimmy", "Climb-up and drop transitions", "Wall-jump and slide movement", "GASP character and animation integration", "Purpose-built traversal showcase map"],
    challenge: "Wall-relative movement must stay intuitive regardless of the wall orientation. The hang state derives a stable wall tangent so left and right input move consistently along the surface, while Blueprint-exposed values keep traversal tuning quick to iterate.",
    github: "https://github.com/Make4T/ParkourProject_UE5.8",
    featured: true,
  },
  {
    title: "Unity 2D Multiplayer Lobby Demo",
    category: "Unity 6 / Multiplayer Networking",
    area: "Game Development",
    role: "Networking Programmer",
    description: "A playable Unity 6 2D multiplayer lobby prototype built with Mirror. Players can host or join a session, set a name, move in a shared lobby, toggle ready state and transition to the game scene when every connected player is ready.",
    technologies: ["Unity 6", "C#", "Mirror", "NetworkBehaviour", "SyncVar", "Commands / RPCs", "URP 2D"],
    image: "./images/projects/lobby.svg",
    imageAlt: "Network-node diagram representing a Unity 2D multiplayer lobby",
    systems: ["Host and join UI flow", "Mirror NetworkManager lifecycle", "Networked player spawning", "Synced player name and ready state", "Server-authoritative click-to-move target", "ClientRpc player-list refresh", "All-ready server scene transition", "Standalone Windows build"],
    challenge: "A lobby needs one authoritative view of connected players while each client keeps responsive local input. The demo sends input and ready-state requests to the server through Mirror Commands, synchronizes lobby state with SyncVars and broadcasts the roster back to clients before the server transitions everyone to the game scene.",
    featured: true,
  },
  {
    title: "Python Telemetry Analyzer",
    category: "Python Data Tooling / Telemetry",
    area: "Data & Tooling",
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
    title: "SQL Game Telemetry Lab",
    category: "SQL / Game Data Engineering",
    area: "Data & Tooling",
    role: "Data Systems Developer",
    description: "A PostgreSQL telemetry lab that models players, sessions and gameplay events, then turns the data into reusable session, activity and oxygen-risk analytics.",
    technologies: ["PostgreSQL", "SQL", "Docker Compose", "JSONB", "GitHub Actions"],
    image: "./images/projects/sql-game-telemetry-lab.svg",
    imageAlt: "Relational game telemetry data model with session analytics",
    systems: ["Relational schema design", "Foreign keys and constraints", "Time-series indexes", "Repeatable seed data", "Analytics query library", "Dockerized PostgreSQL", "Smoke-test CI"],
    challenge: "Gameplay telemetry needs both flexible event metadata and reliable relationships. The schema keeps core entities relational, stores event-specific details in JSONB and validates the full database through an automated smoke test.",
    github: "https://github.com/Make4T/sql-game-telemetry-lab",
    featured: true,
  },
  {
    title: "Python Config Validator",
    category: "Python Tooling / Developer Experience",
    area: "Data & Tooling",
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
    // Arduino Uno -lopputyö: PDF-esitys ja kytkentäkaavio ovat public-kansiossa.
    // C#/.NET API sample: repository includes the implementation and automated tests.
    title: "Game Session API",
    category: "C# / .NET Backend Development",
    area: "Web & Services",
    role: "Backend Developer",
    description: "A compact ASP.NET Core Minimal API for multiplayer game sessions. It persists lobby state in SQLite and provides guarded REST endpoints for creating sessions, joining players and progressing a session through its lifecycle.",
    technologies: ["C#", ".NET 8", "ASP.NET Core", "Entity Framework Core", "SQLite", "xUnit"],
    image: "./images/projects/dotnet-game-session-api.svg",
    imageAlt: "Diagram of a game session API connecting clients, REST endpoints and a SQLite database",
    systems: ["Minimal API endpoint design", "Typed request and response contracts", "Entity Framework Core persistence", "SQLite data model", "Input validation and Problem Details", "Lobby capacity and duplicate-player guards", "xUnit test suite"],
    challenge: "Multiplayer session state needs rules that are enforced on the server rather than trusted to clients. The API keeps session membership in persistent storage and rejects duplicate joins, full lobbies and joins after the lobby has progressed.",
    github: "https://github.com/Make4T/dotnet-game-session-api",
    featured: true,
  },
  {
    // React and TypeScript dashboard sample: typed telemetry data with interactive filtering.
    title: "TypeScript Game Event Dashboard",
    category: "React / TypeScript Frontend Development",
    area: "Web & Services",
    role: "Frontend Developer",
    description: "A responsive game-operations dashboard that turns typed multiplayer telemetry into filters, player summaries, activity trends and a searchable event stream.",
    technologies: ["TypeScript", "React", "Vite", "useMemo", "Responsive UI", "Telemetry"],
    image: "./images/projects/typescript-event-dashboard.svg",
    imageAlt: "Game operations dashboard showing telemetry metrics, a chart and an event table",
    systems: ["Typed event and player domain models", "Derived filter state with useMemo", "Event-category controls", "Player cohort filtering", "Searchable activity stream", "Responsive dashboard layout", "Production build and lint verification"],
    challenge: "Telemetry interfaces must make dense data quickly understandable without hiding the underlying event detail. The dashboard uses a small typed domain model to derive the visible event stream and category summaries from one source of truth.",
    github: "https://github.com/Make4T/typescript-game-event-dashboard",
    featured: true,
  },
  {
    // Full Stack portfolio sample: React client communicates with an ASP.NET Core and SQLite backend.
    title: "Game Session Hub",
    category: "Full Stack / Multiplayer Services",
    area: "Web & Services",
    role: "Full Stack Developer",
    description: "A full stack lobby application for co-op game sessions. The React and TypeScript client creates, browses and joins lobbies through an ASP.NET Core REST API backed by SQLite, with a Docker development environment and continuous validation.",
    technologies: ["React", "TypeScript", "ASP.NET Core", "C#", "EF Core", "SQLite", "Docker Compose", "GitHub Actions"],
    image: "./images/projects/game-session-hub.svg",
    imageAlt: "Full stack game session hub connecting a web client, REST API and persistent lobby data",
    systems: ["React and TypeScript client", "ASP.NET Core Minimal API", "SQLite and Entity Framework Core", "CORS configuration", "Lobby creation and browse flow", "Join capacity and duplicate-player guards", "Session start state transition", "Docker Compose local environment", "GitHub Actions build, lint and API integration tests"],
    challenge: "A usable multiplayer lobby needs client-side clarity and server-side rules. The client presents live lobby state while the API owns validation, persistence, player capacity and the transition from an open lobby to an in-progress session.",
    github: "https://github.com/Make4T/game-session-hub",
    featured: true,
  },
  {
    title: "Arduino Uno Temperature Meter",
    category: "Embedded Systems / C Programming",
    area: "Embedded Systems",
    role: "Embedded Systems Developer",
    description: "A final-project temperature meter for checking baby-milk temperature. It measures water with a DS18B20 sensor, presents the result on a 16×2 LCD and communicates the temperature state through RGB LED feedback.",
    technologies: ["Arduino Uno", "C/C++", "ATmega328P", "DS18B20", "OneWire", "HD44780 LCD"],
    image: "./images/projects/arduino-temperature-meter.png",
    imageAlt: "Wiring diagram for an Arduino Uno temperature meter with LCD, buttons and LED indicators",
    systems: ["DS18B20 OneWire temperature sensing", "16×2 LCD status display", "Normal and inspection modes", "Button debouncing", "Green, orange and red LED feedback", "Sensor-disconnect error state"],
    challenge: "The device combines periodic sampling, user input and display feedback on a small microcontroller. The control loop keeps the interface responsive through debounced button input and updates the measurement, LCD and LED state in a predictable one-second cycle.",
    document: "./documents/arduino-uno-temperature-meter-presentation.pdf",
    featured: true,
  },
  {
    title: "Winter Survival",
    category: "Interactive Fiction / Narrative Design",
    area: "Interactive Media",
    role: "Narrative Designer & Twine Developer",
    description: "A branching winter-survival interactive-fiction prototype built in Twine. The player follows a radio signal, survives a roadside crash and makes choices about equipment, routes and recovery.",
    technologies: ["Twine 2", "Harlowe 3", "HTML", "Interactive Fiction", "Narrative Design"],
    image: "./images/projects/twine-winter-survival.svg",
    imageAlt: "Stylized Winter Survival Twine story map with branching passages",
    systems: ["46 connected story passages", "Choice-driven branching", "Radio and crash opening sequence", "Equipment and exploration choices", "Multiple survival routes", "Browser-playable HTML export"],
    challenge: "Branching fiction needs player choice without losing narrative clarity. The story map organizes the survival scenario into focused passages so choices remain understandable while still creating distinct routes through the experience.",
    github: "https://github.com/Make4T/twine-winter-survival",
    featured: true,
  },
  {
    // Koottu mikrokontrolleriharjoitusten kokonaisuus: ei useita pieniä erilliskortteja.
    title: "Embedded Systems Labs",
    category: "Microcontrollers / Embedded C Programming",
    area: "Embedded Systems",
    role: "Embedded Systems Developer",
    description: "A collection of Arduino Uno and AVR C labs exploring the practical foundations of embedded development: sensors, displays, motor control, digital I/O, ADC and PWM.",
    technologies: ["Arduino Uno", "Embedded C/C++", "ATmega328P", "AVR Studio", "SPI", "ADC / PWM"],
    image: "./images/projects/embedded-systems-labs.png",
    imageAlt: "Wiring diagram connecting an Arduino Uno to a Nokia 5110 graphic LCD",
    systems: ["Nokia 5110 PCD8544 graphic LCD", "Character LCD and display control", "DS18B20 OneWire sensor interface", "DC motor control", "Current measurement", "ADC input and PWM output"],
    challenge: "Each lab verifies the full path from wiring and pin configuration to firmware behavior. The work made hardware interfaces, timing, memory limits and iterative troubleshooting concrete across multiple peripherals.",
    featured: true,
  },
  {
    title: "Real-Time Graphics Programming",
    category: "Graphics Programming",
    area: "Game Development",
    role: "Graphics Programmer",
    description: "A lower-level C++ project exploring the foundations behind real-time 3D engines, from model loading and transforms to lighting and camera systems. It also includes a Bullet3 projectile-collision prototype with runtime collision visualization.",
    technologies: ["C++", "OpenGL", "GLM", "GLFW", "GLAD", "Assimp", "Bullet3"],
    image: "./images/projects/bullet3-collision-projectiles.gif",
    imageAlt: "Looping Bullet3 simulation clip showing blue projectile collisions against a red target",
    systems: ["3D rendering", "Model loading", "Phong lighting", "Transformations", "Camera systems", "Real-time render loop", "Bullet3 projectile collisions", "Collision debug visualization"],
    challenge: "Building the rendering path directly with OpenGL makes resource ownership, coordinate spaces and the relationship between CPU-side scene data and GPU-side shaders explicit. The Bullet3 collision prototype adds physics-driven projectile interactions and makes their collision state visible at runtime.",
    featured: true,
  },
];
