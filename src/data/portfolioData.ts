export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "software" | "iot" | "materials" | "mechanical";
  shortDescription: string;
  tags: string[];
  academicContext?: string;
  gradeBadge?: string;
  fullReport: {
    executiveSummary: string;
    methodology: string[];
    technicalArchitecture?: string[];
    outcomes: string;
    highlights?: string[];
  };
}

export interface SkillPillar {
  title: string;
  category: string;
  iconName: "Layers" | "Code" | "Cpu" | "ShieldCheck";
  description: string;
  skills: { name: string; level?: string }[];
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const SKILL_PILLARS: SkillPillar[] = [
  {
    title: "Materials Science & Metallurgy",
    category: "Alloy Systems, Heat Treatment & Standards",
    iconName: "ShieldCheck",
    description: "Physical metallurgy, phase transformation control, non-destructive testing, and ASTM/SLS industrial compliance.",
    skills: [
      { name: "Super Duplex SS (SAF 2507)" },
      { name: "Solution Heat Treatment" },
      { name: "Non-Destructive Testing (UT/DPT)" },
      { name: "ASTM, BS & SLS Standards" },
      { name: "Failure & Forensic Metallography" },
      { name: "Scanning Electron Microscopy (SEM)" },
    ],
  },
  {
    title: "Continuum FEA & Simulation",
    category: "Multi-Physics & Structural Mechanics",
    iconName: "Layers",
    description: "Continuum-scale elasto-plastic contact modeling, non-linear stress analysis, and material selection optimization.",
    skills: [
      { name: "Abaqus CAE (Non-linear Contact / FEA)" },
      { name: "COMSOL Multiphysics" },
      { name: "Solid Edge (Parametric 3D CAD)" },
      { name: "Ansys Granta Selector (Ashby Charts)" },
      { name: "SCAPS-1D Photovoltaic Modeling" },
      { name: "Hertzian Contact Stress Validation" },
    ],
  },
  {
    title: "Computational Science & Python",
    category: "Engineering Algorithms & Data Pipelines",
    iconName: "Code",
    description: "Scientific computing in Python to automate engineering workflows, kinetic solvers, and data analysis pipelines.",
    skills: [
      { name: "Python (SciPy, NumPy, Pandas)" },
      { name: "RMSD Stratification Algorithms" },
      { name: "Arrhenius Kinetic Solvers" },
      { name: "Automated Data Extraction" },
      { name: "Next.js & TypeScript Systems" },
      { name: "Supabase (PostgreSQL Schemas)" },
    ],
  },
  {
    title: "IoT & Smart Instrumentation",
    category: "Embedded Microcontrollers & Telemetry",
    iconName: "Cpu",
    description: "Microcontroller firmware, wireless telemetry protocols, and automated sensor-actuator interfacing.",
    skills: [
      { name: "ESP32 & ESP8266 Microcontrollers" },
      { name: "Arduino (Embedded C++)" },
      { name: "MQTT Telemetry Protocols" },
      { name: "Node-RED Industrial Dashboards" },
      { name: "Sensor Signal Conditioning & PWM" },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  // TAB 1: Software & Web
  {
    id: "lms-saas",
    title: "AL Physics Academy LMS",
    subtitle: "AI-Accelerated Serverless Education Platform",
    category: "software",
    shortDescription:
      "A complete serverless Learning Management System engineered to automate student workflows, online problem sets, and resource distribution.",
    tags: ["Next.js", "Express", "Supabase", "PostgreSQL", "Vercel Serverless", "JWT Auth"],
    academicContext: "Extracurricular / Production Platform",
    gradeBadge: "Live Production App",
    fullReport: {
      executiveSummary:
        "Architected and deployed a dedicated, high-availability serverless web platform for A/L Physics tuition. The platform bridges classroom learning with self-paced digital education, providing role-based security, automated progress tracking, and seamless document delivery.",
      methodology: [
        "Structured PostgreSQL relational schemas for student profiles, class registrations, and automated grading metrics.",
        "Implemented secure JWT/bcrypt authentication flows and role-based access control for students and administrators.",
        "Deployed on Vercel Serverless with CI/CD automation, ensuring instant global response times and zero server maintenance.",
      ],
      technicalArchitecture: [
        "Next.js App Router & Tailwind CSS UI",
        "Supabase PostgreSQL Database & Storage Buckets",
        "Express API Microservices & Edge Functions",
        "Vercel Analytics & Production Monitoring",
      ],
      outcomes:
        "Currently supports active students across Sri Lanka, eliminating administrative bottlenecks and creating a unified digital hub for advanced physics.",
    },
  },
  {
    id: "family-finance",
    title: "Family Finance MVC App",
    subtitle: "Zero-Cost Cloud-Synced Accounting PWA",
    category: "software",
    shortDescription:
      "Server-side web application built at zero hosting cost utilizing Google Apps Script and a structured JSON cloud database for real-time dual-user tracking.",
    tags: ["HTML5", "CSS3", "JavaScript", "Google Apps Script", "Google Sheets API", "Cloud Database"],
    academicContext: "Independent Systems Architecture",
    gradeBadge: "Daily Active Tool",
    fullReport: {
      executiveSummary:
        "Engineered an elegant, zero-cost personal finance web application optimized for mobile browsers. The application allows dual-user concurrent expense and income tracking with automated category breakdowns and monthly analytics.",
      methodology: [
        "Designed a lightweight Single Page Application (SPA) architecture with responsive touch-friendly UI components.",
        "Created an asynchronous RESTful bridge to Google Apps Script endpoints to read and write transactional ledgers.",
        "Implemented client-side data caching and optimistic UI updates for instantaneous responsiveness over mobile connections.",
      ],
      technicalArchitecture: [
        "Vanilla HTML5/CSS3/ES6 Modern Frontend",
        "Google Apps Script Web App Endpoint",
        "Google Sheets Database Schema with JSON Serialization",
      ],
      outcomes:
        "Delivered a 100% free, maintenance-free, real-time financial tracking tool actively used on a daily basis with zero downtime.",
    },
  },
  {
    id: "dcp-analyzer",
    title: "Geotechnical DCP Layer Analyzer",
    subtitle: "Automated Soil Stratification Algorithm",
    category: "software",
    shortDescription:
      "Python mathematical algorithm combining Root Mean Square Deviation (RMSD) and linear interpolation to automatically map soil layer boundaries from field data.",
    tags: ["Python", "SciPy", "NumPy", "RMSD Algorithm", "Geotechnical Engineering"],
    academicContext: "Industrial Internship Innovation (CEC / RDA)",
    gradeBadge: "Field Implemented",
    fullReport: {
      executiveSummary:
        "Developed during a 24-week industrial placement with Consulting Engineering & Contractors (Pvt) Ltd. on an RDA road project. Replaced tedious, error-prone manual graph plotting with an automated algorithm that determines exact subgrade and base layer transition depths from dynamic cone penetrometer (DCP) blow counts.",
      methodology: [
        "Modeled cumulative penetration depth curves against blow counts from raw field investigation records.",
        "Formulated an iterative slope-change detection algorithm utilizing Root Mean Square Deviation (RMSD) to identify boundary discontinuities between hard and soft soil strata.",
        "Implemented automated report generation exporting engineering plots directly for QA/QC submission.",
      ],
      technicalArchitecture: [
        "Python 3 with NumPy matrix calculations",
        "SciPy interpolation & curve fitting routines",
        "Matplotlib dynamic visualization generator",
      ],
      outcomes:
        "Reduced soil boundary computation time from 45 minutes per borehole to under 3 seconds, significantly accelerating pavement design decisions.",
    },
  },
  {
    id: "perovskite-predictor",
    title: "Perovskite Stabilizer Predictor",
    subtitle: "Photovoltaic Degradation Calculator",
    category: "software",
    shortDescription:
      "Web-based analytical tool predicting UV photo-oxidation kinetics, activation energies, and material longevity metrics for next-generation solar cells.",
    tags: ["Python", "JavaScript", "Kinetics of Materials", "Arrhenius Modeling"],
    academicContext: "Computational Materials Research",
    gradeBadge: "Research Simulation",
    fullReport: {
      executiveSummary:
        "A computational tool bridging kinetic chemical equations and photovoltaic longevity predictions. Allows researchers to evaluate degradation rates and stabilizer efficacies under variable solar irradiance and thermal conditions.",
      methodology: [
        "Coded Arrhenius temperature-dependent rate equations coupled with Denisov free-radical trapping cycles.",
        "Integrated acceleration factor (AF) calculations to project multi-year outdoor operational lifespans from accelerated laboratory data.",
      ],
      outcomes:
        "Provided quantitative prediction models supporting high-efficiency perovskite absorber formulation.",
    },
  },

  // TAB 2: IoT & Hardware
  {
    id: "smart-medibox",
    title: "Smart MediBox",
    subtitle: "IoT Dispenser with Dynamic Light-Shielding Actuation",
    category: "iot",
    shortDescription:
      "ESP32-powered digital health assistant featuring NTP time sync, interactive OLED alarms, environmental telemetry, and dual-LDR servo-driven light protection.",
    tags: ["ESP32", "C++", "MQTT", "Node-RED", "Servo PWM", "Wokwi Simulator", "DHT22"],
    academicContext: "EN2853 - Embedded Systems and Applications",
    gradeBadge: "Grade A- | 3.0 Credits",
    fullReport: {
      executiveSummary:
        "Designed and programmed an intelligent IoT medical assistant to ensure timely medication dosage while actively safeguarding light-sensitive pharmaceuticals from photodegradation. Simulated completely on Wokwi and linked via MQTT telemetry to a live remote Node-RED dashboard.",
      methodology: [
        "Synchronized system clock over Wi-Fi via Network Time Protocol (NTP) to schedule precision multi-alarm reminders.",
        "Engineered an autonomous light-tracking mechanism: dual LDR sensors measure directional luminance differentials, triggering an ESP32 PWM servo to orient a physical shading window to block harmful ambient light.",
        "Integrated DHT22 temperature and humidity thresholds ($26^{\\circ}C - 32^{\\circ}C$, $60\\% - 80\\%$ RH) with acoustic alarms for improper storage conditions.",
      ],
      technicalArchitecture: [
        "ESP32 Microcontroller running optimized C++ firmware",
        "PubSubClient MQTT protocol publishing real-time telemetry",
        "Node-RED cloud dashboard for remote clinical observation",
        "I2C SSD1306 OLED interface with tactile push-button menu",
      ],
      outcomes:
        "Earned an A- grade; proved end-to-end integration of sensor filtering, embedded feedback control loops, and modern cloud telemetry.",
    },
  },
  {
    id: "smart-breeze",
    title: "SMART-BREEZE Fan System",
    subtitle: "Automated Presence-Aware Evaporative Cooler",
    category: "iot",
    shortDescription:
      "Energy-efficient cooling prototype integrating passive evaporative moisture wicking (cotton wicks + DC pump), PIR presence sensing, and automated climate control.",
    tags: ["Arduino UNO", "C++", "PIR Sensor", "DHT11", "Relay Control", "Evaporative Cooling"],
    academicContext: "MT1940 - Fundamentals of Engineering Design",
    gradeBadge: "Grade A | 3.0 Credits",
    fullReport: {
      executiveSummary:
        "Developed by team 'Tech Pioneers' to combat electrical energy wastage and skin dehydration caused by standard cooling fans. Combines automated human presence detection with a low-power evaporative cooling mechanism using cotton wicking.",
      methodology: [
        "Constructed an isolated dual-container fluid system: a DC pump circulates water across suspended cotton wicks in the airflow path, exploiting latent heat of vaporization.",
        "Programmed an Arduino UNO to read PIR motion and DHT11 temperature/humidity inputs, idling actuators when spaces are empty.",
        "Engineered opto-isolated relay switching to safely bridge 5V microelectronics with 230V AC mains power.",
      ],
      technicalArchitecture: [
        "Arduino UNO central processing unit",
        "HC-SR04 ultrasonic water reservoir level monitoring",
        "Dual-rail power isolation and structural fluid segregation",
      ],
      outcomes:
        "Achieved a top 'A' grade; prototype demonstrated measurable temperature reduction with zero ultrasonic power consumption.",
    },
  },
  {
    id: "adaptive-ac-blinker",
    title: "Adaptive AC Blinking System",
    subtitle: "Wi-Fi Controlled Smart Relay with OTA Updates",
    category: "iot",
    shortDescription:
      "ESP8266 Wi-Fi controlled high-voltage lighting system featuring a custom embedded web server and Over-The-Air (OTA) wireless firmware flashing.",
    tags: ["ESP8266", "C++ Firmware", "OTA Updates", "Embedded Web Server", "Relay Isolation"],
    academicContext: "Extracurricular Embedded Development",
    gradeBadge: "IoT Deployment",
    fullReport: {
      executiveSummary:
        "Engineered an advanced, Wi-Fi controlled AC relay system to manipulate high-voltage standard incandescent and LED loads with customizable, adaptive flashing sequences not achievable with commercial switches.",
      methodology: [
        "Developed asynchronous C++ firmware embedding a captive portal and HTTP configuration server directly onto the ESP8266.",
        "Implemented ArduinoOTA routines to enable wireless code uploads without physical access to the deployed enclosure.",
        "Designed optocoupler-isolated relay drivers to eliminate back-EMF and electrical noise during inductive switching.",
      ],
      outcomes:
        "Successfully deployed with reliable remote maintenance, robust fail-safes, and millisecond-precision timing control.",
    },
  },
  {
    id: "autonomous-robot-car",
    title: "Autonomous Arduino Car",
    subtitle: "Robotic Vehicle with Edge-Case Stuck Detection",
    category: "iot",
    shortDescription:
      "Self-navigating obstacle-avoidance robot equipped with ultrasonic sensor arrays, H-bridge DC motor drives, and timestamp-based dead-end recovery logic.",
    tags: ["Arduino", "Robotics", "HC-SR04", "L298N Motor Driver", "C++ Algorithms"],
    academicContext: "Independent Robotics Project",
    gradeBadge: "Robotics Hardware",
    fullReport: {
      executiveSummary:
        "Built a 4-wheel drive autonomous ground robot engineered to navigate unknown indoor environments without human intervention or pre-mapped floorplans.",
      methodology: [
        "Integrated an HC-SR04 ultrasonic sensor mounted on a sweep servo to sample 180-degree spatial depth vectors.",
        "Programmed a state-machine in C++ executing dynamic speed modulation and turn-bias selection based on obstacle proximity.",
        "Designed a timestamp-driven 'Stuck Detection' routine that identifies stalled wheel conditions and triggers an escape sequence.",
      ],
      outcomes:
        "Demonstrated continuous autonomous navigation with zero collision failure rates across complex obstacle courses.",
    },
  },

  // TAB 3: Materials & Simulation
  {
    id: "marine-shaft-cdp",
    title: "Corrosion-Resistant Marine Propulsion Shaft",
    subtitle: "Comprehensive Design Project (CDP)",
    category: "materials",
    shortDescription:
      "Complete engineering of a 1.6m marine propulsion shaft coupled to a CAT 3406C engine: Ansys Granta Ashby selection (Super Duplex SAF 2507), Abaqus FEA, and cathodic protection.",
    tags: ["Abaqus FEA", "Ansys Granta Selector", "Super Duplex SS", "Torsional Fatigue", "Cathodic Protection"],
    academicContext: "MT3201 - Comprehensive Design Project",
    gradeBadge: "Grade A+ | 4.0 GPA (Pinnacle Project)",
    fullReport: {
      executiveSummary:
        "The capstone design of a 1.6m propulsion shaft coupled to a CAT 3406C marine diesel engine (298 kW / 1800 RPM). Operating in aggressive seawater, the shaft required a 20-year operational life resisting pitting, crevice corrosion, and catastrophic torsional fatigue.",
      methodology: [
        "Utilized Ansys Granta Selector to generate multi-criteria Ashby charts: filtered candidate alloys by yield strength (> 400 MPa) and Pitting Resistance Equivalent Number (PREN > 40). Selected Super Duplex Stainless Steel (SAF 2507 / UNS S32750).",
        "Conducted Abaqus FEA simulations applying 1.58 kN·m continuous torque plus propeller axial thrust. Evaluated Von Mises stresses against the 550 MPa yield limit with dynamic marine safety factors.",
        "Engineered keyway fillet radii iteratively in Abaqus to suppress torsional fatigue stress concentration.",
        "Designed an Impressed Current Cathodic Protection (ICCP) system with MMO anodes and a silver-graphite slip ring earthing device (< 0.01 ohm) to prevent bearing spark erosion.",
      ],
      technicalArchitecture: [
        "Ansys Granta Selector Ashby multi-attribute optimization",
        "Abaqus CAE 3D solid continuum modeling",
        "DNV / ABS Marine Classification Society Compliance",
      ],
      outcomes:
        "Awarded an A+ (4.0 GPA). Validated structural integrity, zero fatigue crack initiation, and full corrosion resistance over the 20-year design horizon.",
    },
  },
  {
    id: "ferrocement-mortar-fyp",
    title: "Lightweight Ferrocement Mortar (FYP Thesis)",
    subtitle: "RHA & Polypropylene Fiber Modified EPS Mortar",
    category: "materials",
    shortDescription:
      "B.Sc. Final Year Research developing sustainable lightweight composite mortar. Utilized Rice Husk Ash for ITZ densification and PP fibers for Griffith crack-bridging.",
    tags: ["Materials Science Thesis", "Rice Husk Ash", "EPS Mortar", "PP Fibers", "Fracture Mechanics", "ASTM/SLS"],
    academicContext: "MT4204 - B.Sc. Final Year Research Project",
    gradeBadge: "Grade A | 7.0 Credits",
    fullReport: {
      executiveSummary:
        "Investigated the synergistic effects of agricultural waste Rice Husk Ash (RHA) and synthetic Polypropylene (PP) fibers on Expanded Polystyrene (EPS) lightweight cement mortar. Addressed the inherent low compressive strength and brittle fracture modes of EPS aggregates.",
      methodology: [
        "Formulated multi-phase mix designs substituting Ordinary Portland Cement with amorphous pozzolanic RHA to accelerate C-S-H gel formation and densify the Interfacial Transition Zone (ITZ) around EPS beads.",
        "Dispersed micro-synthetic PP fibers to act as a secondary reinforcement net, arresting crack propagation via Griffith fracture mechanics.",
        "Conducted 7-day and 28-day ASTM/SLS standardized compressive, flexural, density, and water absorption testing.",
        "Analyzed post-peak load-deflection curves, proving that PP fiber inclusion converted brittle failure into progressive ductile yielding.",
      ],
      technicalArchitecture: [
        "ASTM C109 & ASTM C348 Testing Protocols",
        "Scanning Electron Microscopy (SEM) ITZ Analysis",
        "Pozzolanic Reactivity & Density Reduction Modeling",
      ],
      outcomes:
        "Completed a 7-credit thesis earning an 'A' grade. Proved an eco-friendly composite with up to 40% density reduction and superior ductile energy absorption for non-load-bearing high-rise partitions.",
    },
  },
  {
    id: "spur-gear-fea",
    title: "FEA of Spur Gear Contact Mechanics",
    subtitle: "Continuum Scale Elasto-Plasticity in Abaqus",
    category: "materials",
    shortDescription:
      "Continuum scale finite element simulation in Abaqus CAE analyzing non-linear contact stresses and tooth root plastic strains, validated against Hertzian theory.",
    tags: ["Abaqus CAE", "Solid Edge", "Mesh Convergence", "Hertzian Theory", "Plasticity (PEEQ)"],
    academicContext: "MT4810/MT4811 - FEA Design Project",
    gradeBadge: "Grade A | 3.0 Credits",
    fullReport: {
      executiveSummary:
        "Conducted non-linear finite element modeling of contact mechanics between a spur gear and pinion under 494 N·m torque. Simulated elasto-plastic deformation, tooth meshing friction, and validated computational results against classical Hertzian contact stress calculations.",
      methodology: [
        "Generated mathematically exact involute tooth profiles in Solid Edge and assembled components at the exact center distance $(D_G + D_P)/2$.",
        "Exported precise STEP geometry into Abaqus CAE; applied non-linear elasto-plastic hardening curves for stainless steel.",
        "Defined surface-to-surface penalty contact formulation with Coulomb friction ($\\mu = 0.1$).",
        "Executed a rigorous mesh convergence study (reducing elements from 5mm down to 1mm) using C3D10 and C3D8R elements, proving mesh independence.",
      ],
      technicalArchitecture: [
        "Abaqus CAE 6.14 Solver",
        "Solid Edge Parametric CAD",
        "Hertzian Theoretical Stress Verification",
      ],
      outcomes:
        "Proved computational Von Mises peak stresses converged within 4.2% of Hertzian theoretical values, demonstrating mastery of continuum-scale non-linear FEA.",
    },
  },
  {
    id: "pvc-uv-stabilization",
    title: "Kinetics of PVC UV Stabilization",
    subtitle: "Mathematical Modeling & Python Degradation Calculator",
    category: "materials",
    shortDescription:
      "Solved coupled degradation kinetics for Polyvinyl Chloride (PVC) stabilized with Tinuvin 770 (HALS). Developed custom Python GUI tool to compute outdoor lifespans.",
    tags: ["Python GUI", "Chemical Kinetics", "Arrhenius Law", "FTIR Spectroscopy", "TGA / DSC"],
    academicContext: "MT2230 - Kinetics of Materials",
    gradeBadge: "Grade B+ | 3.0 Credits",
    fullReport: {
      executiveSummary:
        "Researched the photodegradation mechanisms of PVC under ultraviolet radiation (free-radical homolytic C-Cl cleavage and polyene formation). Evaluated Hindered Amine Light Stabilizers (HALS, Tinuvin 770) to interrupt the Denisov cycle.",
      methodology: [
        "Modeled reaction rate constants using the Arrhenius equation ($K = A \\exp(-E_a/RT)$) and computed Acceleration Factors (AF).",
        "Engineered an interactive Python GUI application enabling users to input light intensity and ambient temperature to simulate degradation curves.",
        "Validated kinetics against FTIR carbonyl index ($C=O$), UV-Vis yellowness index, TGA mass-loss profiles, and DSC glass transition shifts ($T_g$).",
      ],
      outcomes:
        "Earned B+ grade; demonstrated capability to translate physical degradation chemistry into predictive computational engineering software.",
    },
  },
  {
    id: "scaps-solar-simulation",
    title: "Perovskite Solar Cell Simulation",
    subtitle: "SCAPS-1D Photovoltaic Quantum Modeling",
    category: "materials",
    shortDescription:
      "Simulated next-generation FTO/ZnO/Perovskite/Cu2O/Au solar cells in SCAPS-1D, mathematically proving the trade-offs between absorber thickness and carrier recombination.",
    tags: ["SCAPS-1D", "Perovskite PV", "Quantum Efficiency", "Fill Factor", "Energy Materials"],
    academicContext: "MT4420 - Energy Materials",
    gradeBadge: "Grade A | 3.0 Credits",
    fullReport: {
      executiveSummary:
        "Conducted numerical device simulation on planar heterojunction perovskite solar cells to isolate the physical limits of carrier transport, recombination, and power conversion efficiency (PCE).",
      methodology: [
        "Parameterized absorption coefficients, defect state densities, and band alignments across the heterojunction stack in SCAPS-1D.",
        "Demonstrated that increasing thickness beyond $1.0\\,\\mu m$ degrades the internal built-in field, transitioning carrier transport from rapid drift to slow diffusion and destroying the Fill Factor.",
        "Identified the optimum absorber thickness at $\\sim 0.9 - 1.1\\,\\mu m$, balancing photon absorption with minimal recombination.",
      ],
      outcomes:
        "Pinpointed precise formulation parameters to achieve high short-circuit current density ($J_{sc} \\approx 29.3\\text{ mA/cm}^2$) and optimum device efficiency.",
    },
  },
  {
    id: "cnt-self-healing",
    title: "Carbon Nanotubes (CNTs) as Self-Healing Agents",
    subtitle: "Autonomous Nanocomposite Architecture for Aerospace",
    category: "materials",
    shortDescription:
      "Comprehensive research evaluating SWCNTs and MWCNTs (Young's modulus up to 1 TPa) in polymer matrices for extrinsic microcapsule and intrinsic supramolecular autonomous crack repair.",
    tags: ["Carbon Nanotubes", "Aerospace Composites", "Self-Healing Polymers", "SEM / EDX", "Dynamic Covalent Bonds", "TGA / DSC"],
    academicContext: "MT2021/MT2053 - Polymer Science & Communication",
    gradeBadge: "Grade B+ | 3.0 Credits",
    fullReport: {
      executiveSummary:
        "Investigated the integration of Single-Walled (SWCNTs) and Multi-Walled Carbon Nanotubes (MWCNTs) into advanced polymer composites to engineer autonomous self-healing aerospace materials that detect and heal micro-cracks without human intervention, drastically mitigating catastrophic in-flight failures.",
      methodology: [
        "Evaluated extrinsic self-healing architectures: CNT-reinforced microcapsule walls and polyacrylonitrile (PAN) hollow fibers containing liquid healing agents (dicyclopentadiene / epoxy), alongside biomimetic continuous vascular networks.",
        "Investigated intrinsic self-repair mechanisms: functionalized CNTs forming reversible dynamic covalent bonds and supramolecular interactions ($\\pi$-$\\pi$ stacking, hydrogen bonding, van der Waals forces) enabling repeatable healing at identical fracture locations.",
        "Synthesized multi-scale characterization protocols: Scanning Electron Microscopy (SEM) for crack bridging verification, EDX, IR & Raman spectroscopy for chemical bond reformation, and DSC/TGA for thermal activation kinetics.",
        "Analyzed targeted aerospace implementations: composite wing/fuselage delamination healing, deep-space pressurized fuel tank micro-fracture sealing, and piezoresistive structural health sensing in avionics.",
      ],
      technicalArchitecture: [
        "SWCNT & MWCNT Nanoscale Reinforcement Networks",
        "Dynamic Covalent Chemistry & Reversible Supramolecular Crosslinking",
        "SEM, EDX, Raman Spectroscopy & DSC Thermal Kinetics",
        "Aerospace Structural Delamination Standards",
      ],
      outcomes:
        "Awarded Grade 'B+'; delivered an actionable technological roadmap for implementing lightweight, self-repairing polymer nanocomposites resilient against thermal shocks, atomic oxygen (AO) erosion, and UV radiation.",
    },
  },
  {
    id: "tfet-quantum",
    title: "Quantum Mechanics of Tunneling Field Effect Transistors",
    subtitle: "Sub-Bandgap Device Physics Overcoming the 60 mV/dec Limit",
    category: "materials",
    shortDescription:
      "Theoretical device physics research modeling Wentzel-Kramers-Brillouin (WKB) quantum tunneling probability, band-to-band tunneling (BTBT), and ambipolar suppression in sub-10nm TFETs.",
    tags: ["Quantum Mechanics", "TFETs", "WKB Approximation", "Band-to-Band Tunneling", "Solid State Physics", "Heterojunctions"],
    academicContext: "MT2181 - Solid State Materials",
    gradeBadge: "Theoretical Research Project",
    fullReport: {
      executiveSummary:
        "Conducted in-depth solid-state physics research explaining how Tunneling Field Effect Transistors (TFETs) overcome the fundamental thermionic emission barrier (the 60 mV/decade Boltzmann tyranny) of standard MOSFETs by leveraging quantum mechanical Band-to-Band Tunneling (BTBT).",
      methodology: [
        "Formulated electron transmission probability $T(E)$ through the energy barrier using the Wentzel-Kramers-Brillouin (WKB) approximation, demonstrating exponential dependence on carrier effective mass ($m^*$) and bandgap ($E_g$).",
        "Demonstrated how TFETs filter high-energy electrons (acting as an energy bandpass filter), achieving steep sub-threshold swing and drastically cutting off-state leakage current ($I_{off}$) under scaled supply voltages.",
        "Evaluated solid-state material systems: contrasted indirect bandgaps (momentum conservation / phonons in Silicon) with direct bandgaps (III-V compounds), and modeled Ge-source / Si-channel heterojunctions to artificially lower junction barriers and boost ON-current ($I_{on}$).",
        "Addressed ambipolar parasitic leakage through asymmetric drain doping and gate-underlap geometry, while proving superior immunity to Drain-Induced Barrier Lowering (DIBL) in sub-10nm nodes.",
      ],
      technicalArchitecture: [
        "WKB Quantum Tunneling Approximation Formulation",
        "Heterojunction Band Alignment Modeling (Ge/Si & III-V Nanowires)",
        "1D Carbon Nanotube (CNT) TFET Channel Architectures",
      ],
      outcomes:
        "Bridged abstract quantum mechanics with practical semiconductor device engineering, establishing theoretical design rules for next-generation ultra-low-power computing architectures.",
    },
  },
  {
    id: "xrd-paper-analysis",
    title: "XRD Analysis of Historical Paper Deacidification & Ageing",
    subtitle: "Cellulose Crystallinity & Nanostructural Forensic Preservation",
    category: "materials",
    shortDescription:
      "Forensic materials science research using 2D/1D X-Ray Diffraction to quantify cellulose Crystallinity Index (CI) and Crystallinity Ratio (CR) following artificial thermal ageing and chemical deacidification.",
    tags: ["X-Ray Diffraction", "Cellulose Crystallinity", "Materials Characterization", "Deacidification", "Forensic Testing", "Calcite Precipitation"],
    academicContext: "MT3054 - Characterization of Materials",
    gradeBadge: "Individual Research Case Study",
    fullReport: {
      executiveSummary:
        "Explored the nanostructural degradation of archival documents by contrasting 19th-century flax 'rag' paper against modern cotton Whatman paper. Applied advanced X-Ray Diffraction (XRD) to quantify how accelerated artificial ageing and aqueous deacidification alter cellulose crystalline fractions.",
      methodology: [
        "Extracted 1D linear diffraction traces from 2D XRD patterns to calculate Crystallinity Index ($CI = (I_{max} - I_{min})/I_{max}$) and Crystallinity Ratio ($CR$).",
        "Subjected samples to accelerated environmental degradation in a controlled climatic chamber at 80°C and 65% Relative Humidity (RH) continuously for two weeks.",
        "Evaluated aqueous deacidification agents: Calcium Hydroxide $Ca(OH)_2$ and Magnesium Bicarbonate $Mg(HCO_3)_2$ to halt acid hydrolysis of cellulose chains.",
        "Isolated residual calcite ($CaCO_3$) diffraction reflections, linking excessive inorganic crystalline deposits with microstructural embrittlement.",
      ],
      technicalArchitecture: [
        "2D/1D Powder X-Ray Diffractometry (XRD)",
        "Cellulose Amorphous/Crystalline Peak Deconvolution",
        "Controlled Environmental Chamber Testing (80°C / 65% RH)",
      ],
      outcomes:
        "Demonstrated that forensic XRD can detect microscopic embrittlement invisible to conventional optical testing, revealing the delicate chemical balance required in paper conservation.",
    },
  },
  {
    id: "dental-implant-biomaterials",
    title: "Osseointegration & Surface Engineering of Dental Implants",
    subtitle: "Topographical SLA Etching & Hydroxyapatite Bioactive Coatings",
    category: "materials",
    shortDescription:
      "Biomaterials research on structural osseointegration of Titanium and Zirconia implants: Sandblasted Large-grit Acid-etched (SLA) surface roughness, plasma-sprayed Hydroxyapatite (HA), and BMP-2 proteins.",
    tags: ["Biomaterials", "Dental Implants", "Osseointegration", "Titanium SLA", "Hydroxyapatite", "Bioactive Coatings"],
    academicContext: "MT4120/MT4420 - Biomaterials & Implants",
    gradeBadge: "Advanced Modules Portfolio",
    fullReport: {
      executiveSummary:
        "Investigated the mechanical and biological interface between living human bone tissue and load-bearing artificial implants (Titanium, Zirconia) to eliminate fibrous encapsulation and accelerate long-term clinical osseointegration.",
      methodology: [
        "Evaluated macro-to-nano surface topography modifications: Sandblasting and Large-grit Acid etching (SLA) to maximize contact area, foster primary mechanical interlocking, and facilitate initial blood clot retention.",
        "Analyzed bioactive chemical coatings: plasma-sprayed Hydroxyapatite ($Ca_{10}(PO_4)_6(OH)_2$) matching natural bone mineral chemistry to promote direct chemical bonding.",
        "Researched biochemical functionalization with Bone Morphogenetic Proteins (BMP-2) to stimulate localized osteoblast differentiation and accelerate cellular mineralization.",
        "Assessed implant mechanics against masticatory fatigue, oral corrosion, and metal hypersensitivity.",
      ],
      technicalArchitecture: [
        "Titanium Grade 4 / Ti-6Al-4V ELI & Zirconia ($ZrO_2$) Microstructures",
        "Plasma-Sprayed Hydroxyapatite (HA) Coating Protocols",
        "SLA Topographical Surface Modification & Osseointegration Dynamics",
      ],
      outcomes:
        "Demonstrated how precision surface engineering at the nano- and microscale converts inert load-bearing metals into biologically active osteoconductive implants.",
    },
  },
  {
    id: "graphene-supercapacitor",
    title: "Graphene Supercapacitor Fabrication & Electrochemical Analysis",
    subtitle: "EDLC Electrodes with Ultra-High Specific Capacitance",
    category: "materials",
    shortDescription:
      "Synthesized nanostructured graphene EDLC electrodes leveraging $2630\\text{ m}^2/\\text{g}$ theoretical surface area. Performed Cyclic Voltammetry (CV) and Galvanostatic Charge-Discharge (GCD) testing.",
    tags: ["Supercapacitors", "Graphene Electrodes", "Cyclic Voltammetry", "EDLC", "Energy Storage", "GCD Testing"],
    academicContext: "MT4420 - Energy Materials",
    gradeBadge: "Laboratory Research Project",
    fullReport: {
      executiveSummary:
        "Synthesized and electrochemically characterized graphene-based Electrical Double-Layer Capacitor (EDLC) electrodes designed to bridge the performance gap between high-energy chemical batteries and high-power dielectric capacitors.",
      methodology: [
        "Formulated conductive electrode slurries combining high-surface-area graphene powder ($2630\\text{ m}^2\\text{/g}$ theoretical surface area) with PTFE binders, uniformly knife-coated onto metallic current collectors.",
        "Executed Cyclic Voltammetry (CV) across multiple voltage scan rates; verified quasi-rectangular voltammogram profiles confirming ideal electrostatic double-layer charge storage without faradaic redox degradation.",
        "Conducted Galvanostatic Charge-Discharge (GCD) cycling across varied current densities, calculating specific capacitance ($C_s = (I \\cdot \\Delta t)/(m \\cdot \\Delta V)$) from linear discharge slopes.",
        "Evaluated equivalent series resistance (ESR) and long-term cyclic retention.",
      ],
      technicalArchitecture: [
        "Graphene Nanoplatelet Slurry & Conductive Substrate Coating",
        "Electrochemical Workstation for Cyclic Voltammetry (CV)",
        "Galvanostatic Charge-Discharge (GCD) Dynamic Potentiometry",
      ],
      outcomes:
        "Successfully fabricated functional EDLC supercapacitor test cells exhibiting high rate capability, fast ion diffusion kinetics, and verified specific capacitance for fast-charge energy storage systems.",
    },
  },

  // TAB 4: Mechanical Design & Economics
  {
    id: "gearbox-design",
    title: "Automotive Gearbox Mechanical Design",
    subtitle: "Toyota Highlander 2024 Manual Transmission",
    category: "mechanical",
    shortDescription:
      "Complete kinematic and structural design of a 5-speed manual transmission: tractive effort calculations, SAE 5115 case-hardened gears, AISI 4340 shafts, and Soderberg fatigue analysis.",
    tags: ["Machine Design", "SAE 5115 Steel", "AISI 4340", "Soderberg Fatigue", "SKF Bearings", "Gear Kinematics"],
    academicContext: "ME3813 - Machine Design",
    gradeBadge: "Grade A | 2.0 Credits",
    fullReport: {
      executiveSummary:
        "Executed the full mechanical, kinematic, and metallurgical design of a 5-forward / 1-reverse manual gearbox for a 2050 kg SUV (Toyota Highlander 2024) navigating road gradients up to $30^\\circ$ and top speeds of 180 km/h.",
      methodology: [
        "Calculated tractive effort incorporating aerodynamic drag ($0.34\\,C_d$), rolling resistance, and climbing gradients to establish geometric progression gear ratios.",
        "Selected SAE 5115 case-hardened steel for gears; validated tooth bending strength (Lewis formula) and dynamic surface wear (Buckingham's equation).",
        "Applied the ASME Code for Shafting using AISI 4340 high-strength alloy steel; verified infinite fatigue life via Soderberg and Goodman criteria.",
        "Selected SKF Deep Groove and Angular Contact bearings based on dynamic load ratings ($C$) for a $10^6$ revolution $L_{10}$ lifecycle.",
      ],
      technicalArchitecture: [
        "ASME Transmission Shafting Standards",
        "Buckingham Dynamic Tooth Load Formulations",
        "SAE 75W-90 Synthetic Splash & Pressure Tribology",
      ],
      outcomes:
        "Earned an 'A' grade; delivered production-ready machine drawings, bearing schedules, and verified fatigue safety margins.",
    },
  },
  {
    id: "scissor-lift-design",
    title: "Low-Cost Industrial Scissor Lift",
    subtitle: "Individual Kinematic & Cost Optimization",
    category: "mechanical",
    shortDescription:
      "Theoretical design and kinematic optimization of a low-cost hydraulic scissor lift. Modeled linkage forces, cylinder dynamics, tipping stability, and market cost economics.",
    tags: ["Kinematics", "Hydraulic Sizing", "Structural Statics", "SWOT Analysis", "Cost Engineering"],
    academicContext: "ME2851 - Fundamentals of Machine Elements Design",
    gradeBadge: "Individual Design Project",
    fullReport: {
      executiveSummary:
        "Conceptualized and validated a low-cost, high-efficiency scissor lift for factory floor operations, emphasizing minimal raw material mass, maximum structural stability, and domestic manufacturing viability.",
      methodology: [
        "Executed kinematic analysis of pantograph linkages across the full extension stroke, identifying critical bending moments at the lowest lift angle.",
        "Sized hydraulic actuation cylinders to deliver required thrust under peak payload conditions.",
        "Analyzed center of gravity shifts and outrigger placement to prevent tipping moments under eccentric loading.",
        "Conducted a comprehensive manufacturing bill of materials (BOM) and strategic market SWOT analysis.",
      ],
      outcomes:
        "Proved full functional safety through rigorous mechanical calculations, optimizing the strength-to-weight ratio while driving down manufacturing costs.",
    },
  },
  {
    id: "door-handle-metallurgy",
    title: "304 Stainless Steel Door Handle",
    subtitle: "Investment Casting & Solution Annealing Optimization",
    category: "mechanical",
    shortDescription:
      "End-to-end design, investment casting workflow, and GB1200 solution heat treatment protocol (1020°C-1080°C) to eliminate sigma phase and prevent intergranular corrosion.",
    tags: ["Investment Casting", "304 Stainless Steel", "Solution Treatment", "Phase Diagrams", "Corrosion Prevention"],
    academicContext: "MT2220 - Ferrous Metals and Alloys",
    gradeBadge: "Grade B | 4.0 Credits",
    fullReport: {
      executiveSummary:
        "Led the metallurgical optimization and post-casting heat treatment design for a 200mm commercial pull handle cast from austenitic 304 Stainless Steel (18-8).",
      methodology: [
        "Engineered the Lost-Wax Investment Casting sequence: 3D printed wax patterns, 8-layer ceramic stucco shelling, dewaxing at 93°C, and 1204°C mold preheating.",
        "Designed the Solution Treatment (Annealing) protocol per GB1200: soaked at 1020°C–1080°C for 60 minutes to dissolve chromium-carbon precipitates back into austenite.",
        "Specified rapid water quenching to bypass the 500°C–900°C embrittlement zone, preventing brittle Sigma ($\\sigma$) phase formation and intergranular sensitization.",
      ],
      outcomes:
        "Delivered an ADA-compliant ergonomic design with maximum inherent corrosion resistance and high ductility.",
    },
  },
  {
    id: "ferrocement-economic-viability",
    title: "Ferrocement Wall Panels Economic Viability",
    subtitle: "COMSOL Static Analysis & Cost-Benefit Modeling",
    category: "mechanical",
    shortDescription:
      "Techno-economic evaluation of prefabricated ferrocement panels. Combined COMSOL structural deflection simulations with Financial & Economic Benefit-Cost Analysis (FBCA & EBCA).",
    tags: ["COMSOL Multiphysics", "Engineering Economics", "NPV & IRR", "Shadow Pricing", "Sustainability"],
    academicContext: "MN4023 - Engineering Economics",
    gradeBadge: "Grade B+ | 2.0 Credits",
    fullReport: {
      executiveSummary:
        "In collaboration with National Engineering Research & Development Centre (NERDC) prototypes, evaluated the commercial and macro-economic viability of replacing brick masonry with prefabricated lightweight ferrocement wall panels.",
      methodology: [
        "Conducted linear-elastic static simulations in COMSOL Multiphysics to verify self-weight deflection and crack prevention during transport.",
        "Executed Financial Benefit-Cost Analysis (FBCA): calculated Net Present Value (NPV = 12.85M LKR), Internal Rate of Return (IRR = 22% vs. 15% MARR), and Benefit-Cost Ratio (BCR = 1.09).",
        "Conducted Economic Benefit-Cost Analysis (EBCA) applying shadow pricing for environmental carbon reductions, yielding an Economic NPV of 19.41M LKR and Economic IRR of 27%.",
        "Conducted 10% revenue stress-testing to prove investment viability under adverse market conditions.",
      ],
      outcomes:
        "Proved that the product is both financially profitable for private investors and socio-economically beneficial for rapid sustainable national housing.",
    },
  },
  {
    id: "heat-sink-thermodynamics",
    title: "Thermodynamic Analysis of a Heat Sink",
    subtitle: "Conduction, Convection & Fin Geometry Optimization",
    category: "mechanical",
    shortDescription:
      "Theoretical and analytical heat dissipation study modeling 1D/3D conduction, boundary layer convection, dimensionless fluid numbers (Nu, Re, Gr, Pr, Ra), and advanced graphene/nanostructured fins.",
    tags: ["Thermodynamics", "Heat Sink Optimization", "Fourier's Law", "Dimensionless Numbers", "Graphene Cooling", "Fin Profiles"],
    academicContext: "MT1070 - Thermodynamics and Phase Equilibria",
    gradeBadge: "Grade B | 3.0 Credits",
    fullReport: {
      executiveSummary:
        "Conducted an in-depth thermodynamic analysis of electronic heat dissipation mechanisms via conduction, convection, and radiation. Evaluated structural fin configurations, material thermal diffusivity (Copper vs. Aluminum), and cutting-edge graphene/nanostructured thermal spreaders to maximize heat transfer efficiency.",
      methodology: [
        "Analyzed Fourier's law in differential form for 1D and 3D steady-state conditions; evaluated isotropic vs. anisotropic materials and transient thermal diffusivity ($\\alpha$) in Copper and Aluminum.",
        "Modeled boundary layer thicknesses (laminar vs. turbulent) over flat plates, and quantified radiative heat transfer using the Stefan-Boltzmann law and surface emissivity values.",
        "Applied thermodynamic dimensionless correlations (Nusselt, Reynolds, Grashof, Prandtl, and Rayleigh numbers) to predict buoyancy-driven convection and momentum diffusivity without CFD dependencies.",
        "Systematically optimized fin profiles (Pin, Straight, Louvered, Offset, Wavy, and Microchannel) to balance convective heat transfer surface area against excessive airflow pressure drops.",
        "Explored cutting-edge cooling technologies: graphene-based heat spreaders, nanowire arrays, thermoelectric modules (Peltier/Seebeck), and microfluidic/photonic cooling systems.",
      ],
      technicalArchitecture: [
        "Differential Fourier 1D/3D Conduction Solvers",
        "Dimensionless Boundary Layer Correlations (Nu, Re, Gr, Pr, Ra)",
        "Thermal Interface Materials (TIM) Contact Resistance Analysis",
        "Graphene & Nanostructured Heat Spreader Formulations",
      ],
      outcomes:
        "Achieved Grade 'B' (3.0 Credits); established theoretical framework and geometric design rules for optimizing thermal management in high-density power electronics.",
    },
  },
];

export const TIMELINE_EXPERIENCE: TimelineItem[] = [
  {
    period: "2024 (24-Week Industrial Training)",
    role: "Trainee Material Engineer (QA/QC)",
    organization: "Consulting Engineering & Contractors (Pvt) Ltd. (CEC)",
    location: "Homagama / Western Province, Sri Lanka",
    type: "Civil Infrastructure & Materials Engineering",
    description:
      "Completed a rigorous 24-week industrial internship on a major Road Development Authority (RDA) rural road rehabilitation project, bridging laboratory materials science with large-scale civil construction.",
    highlights: [
      "Supervised Asphalt Plant operations (Batch & Drum counterflow systems) and monitored Reclaimed Asphalt Pavement (RAP) integration.",
      "Conducted extensive laboratory and field QA/QC testing adhering strictly to ASTM and BS standards (sand cone compaction, bitumen extraction, aggregate grading).",
      "Engineered automated Excel VBA architectures and custom Python algorithms to instantly process Dynamic Cone Penetrometer (DCP) field data and automate Requests for Inspection (RFI) documentation.",
      "Achieved all 12 Washington Accord Program Outcomes (POs) and was awarded an A- grade for MT3993 Industrial Training.",
    ],
    techStack: ["ASTM/BS Testing", "Soil Compaction", "Asphalt Plants", "Excel VBA", "Python (RMSD)", "Site QA/QC"],
  },
  {
    period: "2019 — Present (5+ Years)",
    role: "Physics Consultant & EdTech Developer",
    organization: "Independent / AL Physics Academy",
    location: "Colombo / Remote, Sri Lanka",
    type: "Educational Technology & Academic Consulting",
    description:
      "Founded and scaled an advanced G.C.E. Advanced Level Physics consulting practice, mentoring hundreds of students by teaching through first-principles engineering logic rather than rote memorization.",
    highlights: [
      "Engineered a custom serverless cloud Learning Management System (LMS) deployed at physics-academy.vercel.app to automate student tracking, homework submissions, and resource delivery.",
      "Pioneered the 'Physics with Tech' concept: integrated software simulations in the classroom to demonstrate abstract mechanics, wave theory, and electromagnetism in action.",
      "Maintained dual excellence: successfully balanced full-time engineering undergraduate studies at UoM (161 credits completed) while leading a high-impact tutoring practice.",
      "Mentored students to achieve top island ranks and gain admission to prestigious engineering faculties.",
    ],
    techStack: ["First Principles Pedagogy", "EdTech LMS", "Next.js", "Supabase", "Interactive Simulations", "Leadership"],
  },
];
