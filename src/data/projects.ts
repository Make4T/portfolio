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
  document?: string;
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
    // UE 5.8 -projektin nykyinen portfolioesittely. Päivitä GitHub-linkki vasta, kun projektille on oma julkinen repository.
    title: "GASP Parkour Movement Showcase",
    category: "Unreal Engine 5.8 / Character Movement",
    role: "Gameplay & Systems Programmer",
    description: "An in-progress third-person parkour showcase built with Unreal Engine 5.8 and GASP. It demonstrates ledge hanging, directional shimmy, climb-up, drop, wall-jump and slide movement inside a purpose-built traversal course.",
    technologies: ["Unreal Engine 5.8", "C++", "Blueprints", "GASP", "Motion Matching", "Character Movement"],
    image: "./images/projects/parkour.svg",
    imageAlt: "Technical movement-path visualization representing an Unreal Engine parkour showcase",
    systems: ["Ledge detection and hanging", "Directional wall shimmy", "Climb-up and drop transitions", "Wall-jump and slide movement", "GASP character and animation integration", "Purpose-built traversal showcase map"],
    challenge: "Wall-relative movement must stay intuitive regardless of the wall orientation. The hang state derives a stable wall tangent so left and right input move consistently along the surface, while Blueprint-exposed values keep traversal tuning quick to iterate.",
    github: "https://github.com/Make4T/ParkourProject_UE5.8",
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
    title: "SQL Game Telemetry Lab",
    category: "SQL / Game Data Engineering",
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
    title: "Arduino Uno Temperature Meter",
    category: "Embedded Systems / C Programming",
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
