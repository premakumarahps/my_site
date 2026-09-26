export interface ModuleItem {
  code: string;
  title: string;
  semester: number;
  credits: number;
  type: "Core" | "Elective";
  department: string;
  domain:
    | "Materials & Metallurgy"
    | "Mechanics & Design"
    | "Computational & Mathematics"
    | "Electronics & Embedded"
    | "Management & Humanities";
  gradeBadge?: string;
  description: string;
  learningOutcomes: string[];
  syllabusTopics: string[];
  relatedProjectId?: string;
}

export interface SemesterSummary {
  semester: number;
  title: string;
  subtitle: string;
  totalCredits: number;
  description: string;
}

export const SEMESTER_SUMMARIES: SemesterSummary[] = [
  {
    semester: 1,
    title: "Semester 1",
    subtitle: "Core Engineering Foundations",
    totalCredits: 14.0,
    description:
      "Intensive theoretical groundwork in fluid dynamics, statics, materials physics, programming fundamentals, and higher mathematics to secure placement in Materials Science & Engineering.",
  },
  {
    semester: 2,
    title: "Semester 2",
    subtitle: "Materials Fundamentals & Design Inception",
    totalCredits: 23.0,
    description:
      "Core materials thermodynamics, phase equilibria, crystallographic structures, 3D CAD modeling, and first physical prototype engineering in the departmental design workshop.",
  },
  {
    semester: 3,
    title: "Semester 3",
    subtitle: "Physical Metallurgy, Polymers & Advanced Math",
    totalCredits: 22.0,
    description:
      "In-depth investigation of ferrous alloy systems, polymer chain kinetics, continuum mechanical behavior (fatigue, creep, fracture mechanics), and differential equations.",
  },
  {
    semester: 4,
    title: "Semester 4",
    subtitle: "Solid State Physics, Kinetics & Machine Elements",
    totalCredits: 25.0,
    description:
      "Quantum mechanics of solids, diffusion kinetics, ceramic engineering, machine component design, and embedded systems instrumentation with microcontrollers.",
  },
  {
    semester: 5,
    title: "Semester 5",
    subtitle: "Machine Design, Characterization & Failure Analysis",
    totalCredits: 18.0,
    description:
      "Synthesis of complete automotive transmission systems, non-destructive characterization (XRD, SEM, FTIR, DSC), and forensic degradation/corrosion root-cause analysis.",
  },
  {
    semester: 6,
    title: "Semester 6",
    subtitle: "Industrial Training & Societal Systems",
    totalCredits: 14.0,
    description:
      "24-week full-time industrial training as Trainee Material Engineer at Consulting Engineering & Contractors (Pvt) Ltd. on RDA road infrastructure, paired with computational materials modeling.",
  },
  {
    semester: 7,
    title: "Semester 7",
    subtitle: "Capstone Marine Shaft & Continuum FEA",
    totalCredits: 21.0,
    description:
      "Lead materials selection (Ansys Granta) and Abaqus FEA for the Comprehensive Design Project (Marine Propulsion Shaft), non-linear continuum contact mechanics, and engineering economics.",
  },
  {
    semester: 8,
    title: "Semester 8",
    subtitle: "Final Year Thesis, Energy Materials & Biomaterials",
    totalCredits: 24.0,
    description:
      "Culmination of the B.Sc. degree: 7-credit final year research thesis on RHA and PP fiber modified EPS mortar, SCAPS-1D solar cell simulations, graphene supercapacitors, and biomaterial implants.",
  },
];

export const CURRICULUM_MODULES: ModuleItem[] = [
  // ==========================================
  // SEMESTER 1
  // ==========================================
  {
    code: "CE1023",
    title: "Fluid Mechanics",
    semester: 1,
    credits: 2.0,
    type: "Core",
    department: "Civil Engineering",
    domain: "Mechanics & Design",
    gradeBadge: "Grade A-",
    description:
      "Fluid statics, hydrostatic thrust on curved and planar surfaces (dams, gates), buoyancy, metacentric stability of floating bodies, and conservation of mass, momentum, and energy in pipe networks.",
    learningOutcomes: [
      "Describe fluid properties and characteristics of fluids in engineering applications.",
      "Demonstrate hydrostatic forces on structures such as dams and analyze vessel stability.",
      "Apply conservation of mass, energy, and momentum in fluid pipeline systems.",
    ],
    syllabusTopics: [
      "Fluid properties & pressure distributions",
      "Hydrostatic forces on dams and radial gates",
      "Buoyancy & metacentric stability",
      "Fluids in motion & Bernoulli's equation",
      "Hydraulic machinery & head loss calculations",
    ],
  },
  {
    code: "MT1023",
    title: "Properties of Materials",
    semester: 1,
    credits: 2.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade A-",
    description:
      "Fundamental atomic bonding, Bravais lattices, crystal defects, mechanical behavior (stress-strain, hardness), electrical conduction, and degradation mechanisms across metals, ceramics, and polymers.",
    learningOutcomes: [
      "Recognize the structure of metals, polymers, and ceramics.",
      "Identify relationships between material structure, properties, and engineering applications.",
      "Assess mechanical, electrical, and degradation properties of engineering materials.",
    ],
    syllabusTopics: [
      "Atomic bonding & crystal lattices",
      "Point, line, and planar imperfections",
      "Mechanical testing & deformation",
      "Introduction to nanomaterials",
      "Material degradation & selection guidelines",
    ],
  },
  {
    code: "ME1033",
    title: "Mechanics",
    semester: 1,
    credits: 2.0,
    type: "Core",
    department: "Mechanical Engineering",
    domain: "Mechanics & Design",
    gradeBadge: "Grade A-",
    description:
      "Statics and dynamics of engineering assemblies: shear force and bending moment diagrams (SFD/BMD), pin-jointed trusses, rigid body 2D kinematics, impulse-momentum, and single-degree-of-freedom vibrations.",
    learningOutcomes: [
      "Calculate sectional properties and internal bending moments/shear forces in structural beams.",
      "Analyze statically determinate and indeterminate trusses.",
      "Formulate 2D particle and rigid body kinematics, kinetics, and damped natural vibrations.",
    ],
    syllabusTopics: [
      "Properties of plane areas & centroidal axes",
      "Internal forces, SFD, and BMD",
      "Truss analysis (method of joints & sections)",
      "Kinematics & kinetics of 2D rigid bodies",
      "Undamped & damped single-DOF vibrations",
    ],
  },
  {
    code: "CS1033",
    title: "Programming Fundamentals",
    semester: 1,
    credits: 3.0,
    type: "Core",
    department: "Computer Science & Engineering",
    domain: "Computational & Mathematics",
    gradeBadge: "Grade B+",
    description:
      "Algorithmic problem-solving, structured programming with Python, data structures, file I/O, modular functional decomposition, and basic embedded microcontroller hardware control.",
    learningOutcomes: [
      "Devise algorithms to solve computational engineering problems.",
      "Develop modular software programs using Python.",
      "Deploy simple control applications using embedded hardware platforms.",
    ],
    syllabusTopics: [
      "Python operators, expressions, and control flow",
      "Data representation and matrix manipulation",
      "Functional programming and recursion",
      "File processing and numerical algorithms",
      "Embedded hardware interaction",
    ],
  },
  {
    code: "EE1040",
    title: "Electrical Fundamentals",
    semester: 1,
    credits: 2.0,
    type: "Core",
    department: "Electronic & Telecommunication",
    domain: "Electronics & Embedded",
    gradeBadge: "Grade B",
    description:
      "Linear DC circuit analysis with Kirchhoff's laws, single-phase AC theory, phasors, three-phase balanced systems (Star/Delta), and domestic wiring regulations and protective devices.",
    learningOutcomes: [
      "Analyze practical aspects of linear circuit elements.",
      "Solve AC single-phase and balanced three-phase power circuits.",
      "Design domestic wiring circuits and evaluate circuit protection/earthing devices.",
    ],
    syllabusTopics: [
      "Circuit elements & Kirchhoff's laws",
      "AC theory, impedance & phasor notation",
      "Three-phase balanced systems & power factor",
      "Transformers and distribution concepts",
      "Domestic wiring, overcurrent, and RCD protection",
    ],
  },
  {
    code: "MA1014",
    title: "Mathematics",
    semester: 1,
    credits: 3.0,
    type: "Core",
    department: "Mathematics",
    domain: "Computational & Mathematics",
    gradeBadge: "Grade C+",
    description:
      "Complex numbers, vector algebra, matrix algebra (eigenvalues, Gaussian elimination, diagonalization), real analysis, Taylor series, Riemann integration, and first/second-order linear ODEs.",
    learningOutcomes: [
      "Solve complex variable functions, 3D vectors, and matrix eigenvalue problems.",
      "Apply real variable limits, continuity, and infinite power series.",
      "Solve first and second-order linear differential equations with constant coefficients.",
    ],
    syllabusTopics: [
      "Complex numbers & Euler's identity",
      "Matrices, determinants, and eigenvalues",
      "Real analysis & Taylor/Maclaurin series",
      "Riemann integration & improper integrals",
      "First & second-order ODEs (Wronskian method)",
    ],
  },

  // ==========================================
  // SEMESTER 2
  // ==========================================
  {
    code: "MT1940",
    title: "Fundamentals of Engineering Design and Workshop Practice",
    semester: 2,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Mechanics & Design",
    gradeBadge: "Grade A",
    description:
      "Holistic engineering design process, customer requirement elicitation, weighted decision matrices, hands-on workshop fabrication, and embedded hardware prototyping for innovative consumer products.",
    learningOutcomes: [
      "Identify and define complex design problems through stakeholder analysis.",
      "Apply creative thinking and concept selection methods (decision trees, weighted matrices).",
      "Execute workshop fabrication, assembly, safety testing, and comprehensive reporting.",
    ],
    syllabusTopics: [
      "Engineering design steps & need identification",
      "Creative concept generation & decision matrices",
      "Safety in design & prototype specifications",
      "Hands-on workshop machining and fabrication",
      "Technical report synthesis and defense",
    ],
    relatedProjectId: "smart-breeze",
  },
  {
    code: "MT1070",
    title: "Thermodynamics and Phase Equilibria",
    semester: 2,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade B",
    description:
      "Laws of classical thermodynamics, Gibbs phase rule, Clausius-Clapeyron equation, free energy-composition curves, binary phase diagrams (eutectic, peritectic), and electrochemical equilibrium.",
    learningOutcomes: [
      "Apply thermodynamic state functions and Maxwell relations to materials systems.",
      "Evaluate phase equilibria and reversible/irreversible solidification kinetics.",
      "Interpret binary phase diagrams, lever rules, and the iron-carbon system.",
    ],
    syllabusTopics: [
      "First & second laws, enthalpy, entropy & free energy",
      "Gibbs phase rule & Clausius-Clapeyron equation",
      "Statistical thermodynamics & partition functions",
      "Thermodynamics of regular solutions & mixing entropy",
      "Binary metallurgical phase diagrams & lever rule",
    ],
    relatedProjectId: "heat-sink-thermodynamics",
  },
  {
    code: "MT1080",
    title: "Fundamentals of Materials Science and Engineering",
    semester: 2,
    credits: 4.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "The materials paradigm, interatomic bonding energies, unit cell geometry, reciprocal lattices, Ewald sphere, Brillouin zones, non-crystalline/semicrystalline states, and functional materials for sensors/actuators.",
    learningOutcomes: [
      "Relate engineering properties to atomic bonding and crystal defects.",
      "Explain crystallographic structures using reciprocal lattices and symmetry operations.",
      "Evaluate functional properties of materials in advanced engineering devices.",
    ],
    syllabusTopics: [
      "The materials paradigm in industrial manufacturing",
      "Interatomic bonding forces and potential curves",
      "Crystalline symmetry, Miller indices, and reciprocal space",
      "Amorphous, semicrystalline, and liquid crystalline states",
      "Functional materials for optical and electronic devices",
    ],
  },
  {
    code: "ME1091",
    title: "Engineering Drawing & Computer Aided Modelling",
    semester: 2,
    credits: 3.0,
    type: "Core",
    department: "Mechanical Engineering",
    domain: "Mechanics & Design",
    description:
      "Orthographic and isometric projections, sectional views, assembly drawings, interpenetration curves of solids, development of surfaces, and 3D parametric solid modeling in CAD environments.",
    learningOutcomes: [
      "Apply orthographic and isometric projection principles in technical drawings.",
      "Generate detailed sectional views of multi-component assemblies.",
      "Construct parametric 3-dimensional virtual solid models in modern CAD software.",
    ],
    syllabusTopics: [
      "Projection methods (1st and 3rd angle)",
      "Sectional views & assembly drawing standards",
      "Interpenetration curves & triangulation developments",
      "Parametric solid modeling & feature hierarchies",
      "Production drawings, dimensions, and symbols",
    ],
  },
  {
    code: "EN1803",
    title: "Basic Electronics for Engineering Applications",
    semester: 2,
    credits: 3.0,
    type: "Core",
    department: "Electronic & Telecommunication",
    domain: "Electronics & Embedded",
    description:
      "Semiconductor diodes, BJT and MOSFET transistor switching/biasing, op-amp signal conditioning circuits (amplifiers, comparators, integrators), A/D-D/A conversion, and digital combinational logic.",
    learningOutcomes: [
      "Design analog circuits using diodes, BJTs, and MOSFETs.",
      "Configure operational amplifiers for electronic instrumentation.",
      "Synthesize combinational logic circuits using Boolean minimization and Karnaugh maps.",
    ],
    syllabusTopics: [
      "Semiconductor diodes, rectification & power supplies",
      "BJT & MOSFET transistors as switches and amplifiers",
      "Operational amplifier configurations (inverting/non-inverting/summing)",
      "Sensor signal conditioning & ADC/DAC converters",
      "Combinational digital logic & Karnaugh maps",
    ],
  },
  {
    code: "MA1024",
    title: "Methods of Mathematics",
    semester: 2,
    credits: 3.0,
    type: "Core",
    department: "Mathematics",
    domain: "Computational & Mathematics",
    description:
      "Numerical root finding, numerical calculus, multivariate calculus (Jacobians, Hessians, Lagrange multipliers), double integrals, first-order PDEs, and probability distributions.",
    learningOutcomes: [
      "Apply numerical algorithms (Newton-Raphson, Simpson's rule, Gauss-Seidel) to engineering problems.",
      "Solve multivariable optimization problems with constraints using Lagrange multipliers.",
      "Evaluate engineering uncertainty using probability distributions and central limit theorem.",
    ],
    syllabusTopics: [
      "Numerical root solving & polynomial interpolation",
      "Multivariate calculus, partial derivatives & Hessians",
      "Constrained optimization & Lagrange multipliers",
      "Double integrals & coordinate transformations",
      "Probability, random variables & normal distributions",
    ],
  },
  {
    code: "CS2813",
    title: "Visual Programming",
    semester: 2,
    credits: 2.0,
    type: "Elective",
    department: "Computer Science & Engineering",
    domain: "Computational & Mathematics",
    description:
      "Graphical user interface (GUI) development, event-driven programming on the .NET framework, forms and controls, exception handling, data binding, and relational database connectivity.",
    learningOutcomes: [
      "Develop functional event-driven desktop programs using visual frameworks.",
      "Implement robust form controls, input validation, and exception handling.",
      "Integrate desktop graphical applications with relational databases.",
    ],
    syllabusTopics: [
      "Visual programming concepts & IDE environments",
      "Events, delegates, controls, and form lifecycles",
      "String, file, and data stream manipulation",
      "Exception handling & defensive design",
      "Database programming with ADO.NET / SQL",
    ],
  },
  {
    code: "EL1030",
    title: "Language Skills Enhancement",
    semester: 2,
    credits: 2.0,
    type: "Core",
    department: "Languages",
    domain: "Management & Humanities",
    description:
      "Advanced professional English, technical discourse synthesis, technical presentations, engineering process descriptions, and graphical data interpretation.",
    learningOutcomes: [
      "Demonstrate advanced listening, speaking, reading, and writing competencies (UTEL 6-8).",
      "Deliver structured oral presentations on complex technical topics.",
      "Compose technical descriptions of mechanisms, processes, and charts.",
    ],
    syllabusTopics: [
      "Professional oral communication & technical debate",
      "Reading comprehension & scientific synthesis",
      "Describing engineering mechanisms and processes",
      "Data visualization commentary & report writing",
      "Grammatical accuracy in technical documentation",
    ],
  },

  // ==========================================
  // SEMESTER 3
  // ==========================================
  {
    code: "MT2220",
    title: "Ferrous Metals and Alloys",
    semester: 3,
    credits: 4.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade B",
    description:
      "Extractive metallurgy of iron and steel, blast furnace thermochemistry, plain carbon steels, alloy steels, cast irons, TTT/CCT transformation kinetics, and solution annealing heat treatment protocols.",
    learningOutcomes: [
      "Describe extractive pyrometallurgy and thermodynamic reduction of iron ores.",
      "Correlate microstructures (ferrite, pearlite, bainite, martensite) to mechanical properties.",
      "Formulate precise industrial heat treatment schedules using TTT and CCT diagrams.",
    ],
    syllabusTopics: [
      "Iron extraction: Blast furnace & alternative reduction",
      "Pyrometallurgical & hydrometallurgical refining",
      "Fe-C equilibrium system & microstructural phases",
      "TTT and CCT kinetic transformation diagrams",
      "Heat treatment: Annealing, normalizing, quenching, tempering",
    ],
    relatedProjectId: "door-handle-metallurgy",
  },
  {
    code: "MT2021",
    title: "Polymer Science and Technology",
    semester: 3,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade B+",
    description:
      "Polymer chemistry, step-growth and chain-growth polymerization mechanisms, Carothers equation, copolymerization kinetics, molecular weight averages, rubber compounding, and shaping operations.",
    learningOutcomes: [
      "Classify polymers and calculate molecular weight averages ($M_n, M_w$).",
      "Analyze kinetics of step and chain polymerization and copolymer reactivity ratios.",
      "Formulate rubber compounds with vulcanizing agents and design plastic shaping processes.",
    ],
    syllabusTopics: [
      "Classification, nomenclature & isomerism in polymers",
      "Polymerization mechanisms & Carothers equation",
      "Copolymerization composition drift & reactivity ratios",
      "Thermal transitions ($T_g, T_m$) and morphology",
      "Rubber compounding & industrial shaping (injection, extrusion)",
    ],
    relatedProjectId: "cnt-self-healing",
  },
  {
    code: "MT2211",
    title: "Mechanical Behaviour of Materials",
    semester: 3,
    credits: 4.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Continuum stress-strain tensors, yield criteria (Tresca, Von Mises), Griffith fracture mechanics, stress intensity factors ($K_{IC}$), high-strain-rate dynamics, Goodman-Gerber fatigue life, and creep.",
    learningOutcomes: [
      "Apply 3D stress tensors, Tresca, and Von Mises yield criteria to engineering components.",
      "Design safe structural components against brittle fracture using Griffith mechanics.",
      "Calculate fatigue life using S-N curves, Goodman diagrams, and Miner's cumulative rule.",
    ],
    syllabusTopics: [
      "3D stress states, principal stresses & yield criteria",
      "Elastic wave propagation & high-strain-rate behavior",
      "Fracture mechanics: Griffith criterion & $K_{IC}$ testing",
      "Fatigue failure mechanisms & cyclic life estimation",
      "High-temperature creep mechanisms & Larson-Miller parameter",
    ],
  },
  {
    code: "MT2053",
    title: "Communication Skills",
    semester: 3,
    credits: 2.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Management & Humanities",
    gradeBadge: "Grade B+",
    description:
      "High-level academic research synthesis, literature review methodologies, oral technical defense, interpersonal team dynamics, and structured engineering reporting.",
    learningOutcomes: [
      "Present and defend complex scientific theses with clarity and evidence.",
      "Conduct rigorous academic literature reviews across peer-reviewed sources.",
      "Execute effective interpersonal collaboration and professional engineering writing.",
    ],
    syllabusTopics: [
      "Engineering thesis formulation & evidence structuring",
      "Academic literature review & citation standards",
      "Advanced oral presentation & technical defense",
      "Note-taking, synthesis & interpersonal communication",
      "Professional team collaboration dynamics",
    ],
    relatedProjectId: "cnt-self-healing",
  },
  {
    code: "EE2804",
    title: "Applied Electricity",
    semester: 3,
    credits: 3.0,
    type: "Core",
    department: "Electronic & Telecommunication",
    domain: "Electronics & Embedded",
    description:
      "Single-phase and three-phase transformers, induction motor torque-speed curves, DC machines, stepper motors, industrial electric lighting, resistance/arc welding transformers, and power factor correction.",
    learningOutcomes: [
      "Assess performance and equivalent circuits of transformers and electric motors.",
      "Select electric motors for industrial torque, speed, and duty-cycle requirements.",
      "Apply domestic and industrial wiring regulations and power factor optimization.",
    ],
    syllabusTopics: [
      "Transformers: Equivalent circuit, losses, and efficiency",
      "Three-phase induction motors & speed control methods",
      "DC machines: Series, shunt, and compound motors",
      "Universal & stepper motors in automation",
      "Industrial lighting, electric welding, and power economics",
    ],
  },
  {
    code: "MA2014",
    title: "Differential Equations",
    semester: 3,
    credits: 2.0,
    type: "Elective",
    department: "Mathematics",
    domain: "Computational & Mathematics",
    description:
      "Series solutions (Frobenius method), Legendre polynomials, Bessel functions, Laplace transforms, Fourier series, and canonical classification of second-order PDEs (Hyperbolic, Parabolic, Elliptic).",
    learningOutcomes: [
      "Solve variable-coefficient ODEs using Frobenius series and special functions.",
      "Apply Laplace transforms to solve coupled linear ODE systems and transfer functions.",
      "Classify second-order PDEs and solve boundary value problems with Fourier series.",
    ],
    syllabusTopics: [
      "Frobenius method, Legendre & Bessel functions",
      "Laplace transforms, inverse transforms & convolutions",
      "Fourier series & Parseval's theorem",
      "Classification of PDEs (hyperbolic, parabolic, elliptic)",
      "Separation of variables for wave and heat equations",
    ],
  },
  {
    code: "MA2024",
    title: "Calculus",
    semester: 3,
    credits: 2.0,
    type: "Elective",
    department: "Mathematics",
    domain: "Computational & Mathematics",
    description:
      "Vector calculus (div, grad, curl), line/surface/volume integrals, Green's, Stokes', and Divergence theorems, complex analysis, Cauchy-Riemann equations, Cauchy's integral theorem, and residue calculus.",
    learningOutcomes: [
      "Apply vector differential operators and evaluate line, surface, and volume integrals.",
      "Apply Green's, Stokes', and Gauss' Divergence theorems to physical vector fields.",
      "Evaluate contour integrals using Cauchy's integral formula and residue calculus.",
    ],
    syllabusTopics: [
      "Vector fields, curvature, and differential operators",
      "Green's, Stokes', and Divergence theorems",
      "Analytic complex functions & Cauchy-Riemann equations",
      "Cauchy's integral theorem & formula",
      "Taylor, Laurent series & residue theorem",
    ],
  },
  {
    code: "MA3024",
    title: "Numerical Methods",
    semester: 3,
    credits: 2.0,
    type: "Elective",
    department: "Mathematics",
    domain: "Computational & Mathematics",
    description:
      "Linear system solvers (LU decomposition, Cholesky), non-linear systems, spline curve fitting, numerical optimization (steepest descent), Runge-Kutta ODE solvers, and shooting/finite difference BVP methods.",
    learningOutcomes: [
      "Solve large linear systems using direct matrix decomposition techniques.",
      "Implement single-step and multi-step methods (Runge-Kutta, Adams) for initial value problems.",
      "Solve boundary value problems using shooting and finite difference schemes.",
    ],
    syllabusTopics: [
      "Conditioning of linear systems & LU decomposition",
      "Newton-Raphson for multivariable systems",
      "Cubic splines & multi-dimensional optimization",
      "Runge-Kutta & predictor-corrector ODE solvers",
      "Finite difference approximations for BVPs",
    ],
  },

  // ==========================================
  // SEMESTER 4
  // ==========================================
  {
    code: "MT2181",
    title: "Solid State Materials",
    semester: 4,
    credits: 4.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Engineering quantum mechanics, time-independent Schrödinger equation, Drude model, Fermi-Dirac statistics, density of states, reciprocal space, Brillouin zones, band theory, and semiconductor physics.",
    learningOutcomes: [
      "Solve the Schrödinger equation for finite and infinite potential wells.",
      "Apply Fermi-Dirac and Maxwell-Boltzmann statistics to electron gas models in solids.",
      "Correlate semiconductor band structures and density of states to electrical and magnetic properties.",
    ],
    syllabusTopics: [
      "Schrödinger wave equation, operators & eigenfunctions",
      "Drude model & free electron gas limitations",
      "Fermi-Dirac statistics & density of states",
      "Reciprocal space, Brillouin zones & band theory",
      "Intrinsic/extrinsic semiconductors, dielectrics & magnetism",
    ],
    relatedProjectId: "tfet-quantum",
  },
  {
    code: "MT2230",
    title: "Kinetics of Materials",
    semester: 4,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade B+",
    description:
      "Chemical kinetics, reaction rate laws, Arrhenius temperature dependence, Fick's 1st and 2nd laws of solid-state diffusion, interdiffusion, Kirkendall effect, and nucleation and growth kinetics.",
    learningOutcomes: [
      "Formulate reaction orders, rate constants, and Arrhenius activation energies.",
      "Solve Fick's diffusion equations under infinite and semi-infinite boundary conditions.",
      "Model homogeneous/heterogeneous nucleation kinetics and phase interface velocities.",
    ],
    syllabusTopics: [
      "Reaction rates, chain mechanisms & activation energy",
      "Solid-gas and solid-liquid reaction kinetics",
      "Fick's laws of diffusion & random walk model",
      "Interdiffusion, Kirkendall effect & vacancy fluxes",
      "Nucleation and growth kinetics in phase transformations",
    ],
    relatedProjectId: "pvc-uv-stabilization",
  },
  {
    code: "MT2171",
    title: "Ceramic Engineering",
    semester: 4,
    credits: 4.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Ceramic powder synthesis, comminution, particle size characterization, colloid rheology, slip casting, extrusion, sintering kinetics (solid-state, liquid-phase), glazes, and advanced electro/bioceramics.",
    learningOutcomes: [
      "Formulate powder synthesis, characterization, and colloidal suspension rheology.",
      "Design ceramic body formulations, plastic shaping, and slip-casting operations.",
      "Model sintering mechanisms, grain growth, microstructural evolution, and densification.",
    ],
    syllabusTopics: [
      "Traditional vs. advanced structural ceramics",
      "Powder synthesis, communition & laser particle sizing",
      "Colloidal rheology & electrical double-layer theory",
      "Forming methods: Slip casting, pressing, extrusion",
      "Solid-state & liquid-phase sintering kinetics",
    ],
  },
  {
    code: "MT3095",
    title: "Polymer Engineering",
    semester: 4,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Statistical rubber elasticity, Mooney-Rivlin theory, linear viscoelasticity models (Maxwell, Kelvin-Voigt), time-temperature superposition (WLF equation), polymer melt rheology, and spherulite morphology.",
    learningOutcomes: [
      "Apply Mooney-Rivlin strain energy functions to design rubber-elastic components.",
      "Analyze viscoelastic stress relaxation and creep using mechanical spring-dashpot models.",
      "Evaluate non-Newtonian polymer melt flow in dies and geometrical channels.",
    ],
    syllabusTopics: [
      "Statistical theory of rubber elasticity & entropy forces",
      "Viscoelasticity: Maxwell, Kelvin-Voigt & WLF equation",
      "Rheology of non-Newtonian polymer melts",
      "Polymer crystallization, lamellae & spherulitic morphology",
      "High and low strain-rate yield and fracture behavior",
    ],
  },
  {
    code: "ME2851",
    title: "Fundamentals of Machine Elements Design",
    semester: 4,
    credits: 3.0,
    type: "Core",
    department: "Mechanical Engineering",
    domain: "Mechanics & Design",
    description:
      "Stress flow in machine parts, stress concentration, ISO limits and fits, design of power transmission shafts, belt drives, spur gears (Lewis beam strength), keys, splines, bolted/welded joints, and rolling bearings.",
    learningOutcomes: [
      "Apply ISO limits, tolerances, and fit systems to mechanical assemblies.",
      "Design transmission shafts, couplings, keys, and gear drives under complex loading.",
      "Select and rate rolling-contact bearings based on $L_{10}$ dynamic load ratings.",
    ],
    syllabusTopics: [
      "Design process, stress concentration & safety factors",
      "ISO fits, tolerances, and shaft-basis systems",
      "Power transmission shafts, flywheels & belt drives",
      "Spur gears: Tooth profiles & beam bending strength",
      "Couplings, splines, bolted/welded joints & bearings",
    ],
    relatedProjectId: "scissor-lift-design",
  },
  {
    code: "ME2833",
    title: "Mechanics of Machines",
    semester: 4,
    credits: 2.0,
    type: "Core",
    department: "Mechanical Engineering",
    domain: "Mechanics & Design",
    description:
      "Kinematic velocity and acceleration diagrams for planar mechanisms, Coriolis acceleration, epicyclic gear trains, static and dynamic balancing of rotating shafts, and harmonic vibration transmissibility.",
    learningOutcomes: [
      "Construct velocity and acceleration polygon diagrams for complex 2D planar linkages.",
      "Calculate gear ratios and torque distribution in epicyclic gear trains.",
      "Execute static and dynamic balancing of multi-plane rotating masses.",
    ],
    syllabusTopics: [
      "Planar linkages, relative velocity & Coriolis acceleration",
      "Epicyclic gear trains & speed-torque relationships",
      "Static & dynamic balancing of multi-plane rotating masses",
      "Harmonic excitation, dynamic magnification & transmissibility",
      "Torsional and transverse shaft vibration modes",
    ],
  },
  {
    code: "EN2853",
    title: "Embedded Systems and Applications",
    semester: 4,
    credits: 3.0,
    type: "Elective",
    department: "Electronic & Telecommunication",
    domain: "Electronics & Embedded",
    gradeBadge: "Grade A-",
    description:
      "Microcontroller architectures (ARM Core, ESP32), C/C++ firmware, sensor interfacing (I2C, SPI, UART), PWM actuator control, wireless telemetry (MQTT, Wi-Fi), and PCB layout design rules.",
    learningOutcomes: [
      "Architect embedded systems interfacing analog/digital sensors and PWM actuators.",
      "Write multi-threaded firmware in C++ integrating communication protocols (MQTT, NTP).",
      "Design industry-compatible schematic layouts and PCB routing files.",
    ],
    syllabusTopics: [
      "Microcontroller architectures, GPIO & hardware timers",
      "Sensor bus protocols: I2C, SPI, and UART",
      "IoT telemetry protocols (MQTT) & cloud dashboards",
      "Schematic design, footprint libraries & PCB stack-up",
      "Enclosure design, EMI shielding & system reliability",
    ],
    relatedProjectId: "smart-medibox",
  },
  {
    code: "MA2034",
    title: "Linear Algebra",
    semester: 4,
    credits: 2.0,
    type: "Elective",
    department: "Mathematics",
    domain: "Computational & Mathematics",
    description:
      "Vector spaces, linear combinations, bases, dimension, inner product spaces, Gram-Schmidt orthogonalization, linear transformations, Cayley-Hamilton theorem, and QR matrix factorization.",
    learningOutcomes: [
      "Prove vector space properties, subspace dimensions, and linear independence.",
      "Construct orthonormal bases using the Gram-Schmidt orthogonalization process.",
      "Diagonalize symmetric matrices and compute quadratic forms and matrix norms.",
    ],
    syllabusTopics: [
      "Vector spaces, subspaces, span & dimension",
      "Inner product spaces & Gram-Schmidt process",
      "Linear transformations, kernel, and range spaces",
      "Cayley-Hamilton theorem & minimal polynomials",
      "Diagonalization, QR factorization & positive definiteness",
    ],
  },
  {
    code: "MA3014",
    title: "Applied Statistics",
    semester: 4,
    credits: 2.0,
    type: "Elective",
    department: "Mathematics",
    domain: "Computational & Mathematics",
    description:
      "Discrete and continuous distributions, confidence intervals for means and variances, hypothesis testing ($Z, t, F, \\chi^2$), contingency tables, goodness-of-fit, and simple/multiple linear regression.",
    learningOutcomes: [
      "Calculate sample statistics and model data using continuous/discrete probability distributions.",
      "Execute hypothesis tests on industrial sample means, proportions, and variances.",
      "Fit linear regression equations and assess goodness-of-fit using ANOVA tables.",
    ],
    syllabusTopics: [
      "Discrete & continuous probability distributions",
      "Sampling distributions & Central Limit Theorem",
      "Hypothesis testing (t-test, Z-test, F-test)",
      "Chi-square tests of independence & goodness of fit",
      "Linear regression analysis & residual diagnostics",
    ],
  },

  // ==========================================
  // SEMESTER 5
  // ==========================================
  {
    code: "ME3813",
    title: "Machine Design",
    semester: 5,
    credits: 2.0,
    type: "Core",
    department: "Mechanical Engineering",
    domain: "Mechanics & Design",
    gradeBadge: "Grade A",
    description:
      "Complete design of complex mechanical transmissions: tractive power sizing, geometric gear progression, case-hardened alloy steels, shaft fatigue (Soderberg/Goodman), SKF bearing schedules, and production drawings.",
    learningOutcomes: [
      "Solve a comprehensive, multi-variable mechanical machine design task.",
      "Execute 3D parametric solid modeling and generate detailed manufacturing drawings.",
      "Deliver rigorous technical calculations adhering to international engineering codes (ASME, ISO).",
    ],
    syllabusTopics: [
      "Tractive effort, road resistance & engine power bands",
      "Kinematic gear ratio optimization (geometric progression)",
      "Dynamic tooth loading (Buckingham) & wear calculations",
      "ASME shaft design & Soderberg fatigue failure criteria",
      "Bearing selection ($L_{10}$ ratings) & lubrication tribology",
    ],
    relatedProjectId: "gearbox-design",
  },
  {
    code: "MT3054",
    title: "Characterization of Materials",
    semester: 5,
    credits: 4.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Powder X-ray Diffraction (XRD, Bragg's law, structure factors), FTIR vibration spectroscopy, UV-Vis spectrophotometry, atomic absorption, thermal analysis (DSC/TGA), and electron microscopy (SEM, TEM, EDS).",
    learningOutcomes: [
      "Index X-ray diffraction patterns to identify crystalline phases and lattice parameters.",
      "Analyze functional groups and chemical bonding kinetics via FTIR and UV-Vis spectroscopy.",
      "Interpret thermal mass loss (TGA), phase transitions (DSC), and electron microscopy images (SEM/EDS).",
    ],
    syllabusTopics: [
      "Powder XRD: Bragg reflections & phase identification",
      "Vibrational FTIR & UV-Vis spectroscopy analysis",
      "Quantitative spectrophotometry & Beer's law",
      "Thermal analysis: DSC phase changes & TGA pyrolysis",
      "Electron optics: SEM, TEM, and EDAX elemental microanalysis",
    ],
    relatedProjectId: "xrd-paper-analysis",
  },
  {
    code: "MT3031",
    title: "Degradation and Failure of Materials",
    semester: 5,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Electrochemical corrosion thermodynamics (Pourbaix diagrams), Evans polarization diagrams, localized corrosion (pitting, crevice, intergranular), high-temperature oxidation, cathodic protection, and forensic failure analysis.",
    learningOutcomes: [
      "Describe electrochemical mechanisms and rate kinetics of aqueous corrosion.",
      "Design active and passive corrosion protection systems (cathodic, anodic, coatings).",
      "Execute systematic root-cause failure investigations and fracture morphology assessments.",
    ],
    syllabusTopics: [
      "Electrochemical principles, polarization & Pourbaix diagrams",
      "Forms of corrosion: Galvanic, pitting, crevice, intergranular",
      "High-temperature oxidation kinetics of metals",
      "Cathodic protection design (sacrificial anodes & ICCP)",
      "Forensic failure investigation methodologies & case studies",
    ],
    relatedProjectId: "marine-shaft-cdp",
  },
  {
    code: "MT2075",
    title: "Metal Forming and Joining",
    semester: 5,
    credits: 2.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Plastic deformation mechanics, yield criteria in metal forming, bulk processes (forging, rolling, extrusion, wire drawing), sheet metal forming (deep drawing), fusion welding metallurgy (HAZ), and defect inspection.",
    learningOutcomes: [
      "Analyze mechanical and metallurgical behavior during bulk and sheet metal deformation.",
      "Identify common forming defects (cold shut, flash cracking, secondary tensile tears).",
      "Select fusion and solid-state welding processes and assess Heat Affected Zone (HAZ) integrity.",
    ],
    syllabusTopics: [
      "Homogeneous vs. inhomogeneous deformation & friction",
      "Bulk forming: Forging, hot/cold rolling & extrusion",
      "Sheet metal forming: Deep drawing & bending mechanics",
      "Welding classification: Arc, gas, resistance & solid-state",
      "Welding metallurgy: Heat Affected Zone (HAZ) & defect inspection",
    ],
  },
  {
    code: "MT3060",
    title: "Industrial Metallurgy",
    semester: 5,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Foundry operations (sand casting, investment casting, die casting), metal solidification dendritic kinetics, gating and riser design, powder metallurgy compaction/sintering, and metal additive manufacturing.",
    learningOutcomes: [
      "Classify industrial casting technologies and calculate runner, riser, and gating geometries.",
      "Model alloy solidification kinetics and dendritic segregation to prevent shrinkage porosity.",
      "Evaluate powder metallurgy and modern metal additive manufacturing (3D printing) workflows.",
    ],
    syllabusTopics: [
      "Foundry casting: Sand, die, centrifugal & investment casting",
      "Solidification theory, nucleation, and dendritic crystal growth",
      "Gating system design: Runners, risers & aspiration prevention",
      "Powder metallurgy: Atomization, compaction & sintering",
      "Machinability & metal additive manufacturing processes",
    ],
  },
  {
    code: "MT3084",
    title: "Latex Science and Technology",
    semester: 5,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Natural rubber field latex composition, colloidal stabilization/destabilization, concentration techniques (centrifugation, creaming), latex compounding, prevulcanization, and dipped/foam goods manufacture.",
    learningOutcomes: [
      "Describe colloidal characteristics and preservation mechanisms of natural rubber latex.",
      "Formulate latex compounding recipes (accelerators, vulcanizers, antioxidants, stabilizers).",
      "Design manufacturing lines for dipped products, latex foam, adhesives, and extruded threads.",
    ],
    syllabusTopics: [
      "Natural rubber latex colloidal structure & spontaneous coagulation",
      "Concentration methods: Centrifugation, creaming, evaporation",
      "Latex characterization: DRC, TSC, VFA, KOH number & MST",
      "Latex compounding ingredients & prevulcanization kinetics",
      "Manufacturing technologies: Dipped goods, latex foam & thread",
    ],
  },

  // ==========================================
  // SEMESTER 6
  // ==========================================
  {
    code: "MT3993",
    title: "Industrial Training (Internship)",
    semester: 6,
    credits: 6.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade A-",
    description:
      "24-week industrial internship at Consulting Engineering & Contractors (Pvt) Ltd. (CEC). Trainee Material Engineer on an RDA road rehabilitation project in Homagama. Civil materials QA/QC, asphalt plants, and Excel VBA automation.",
    learningOutcomes: [
      "Apply materials engineering principles to live infrastructure and manufacturing operations.",
      "Formulate systematic QA/QC testing protocols under international standards (ASTM, BS, SLS).",
      "Fulfill all 12 Washington Accord Program Outcomes (POs) in professional engineering environments.",
    ],
    syllabusTopics: [
      "Asphalt mixing plant operations: Batch vs. continuous drum systems",
      "Aggregate grading, bitumen extraction & Marshall stability tests",
      "Subgrade compaction QA/QC (Sand cone method, moisture control)",
      "Dynamic Cone Penetrometer (DCP) layer stratification algorithms",
      "Site safety (HSE), professional ethics, and project management hierarchy",
    ],
    relatedProjectId: "dcp-analyzer",
  },
  {
    code: "MT3880",
    title: "Engineer and Society",
    semester: 6,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Management & Humanities",
    gradeBadge: "Grade A+",
    description:
      "Engineering ethics, IESL professional code of conduct, societal and environmental impact assessments (EIA), occupational health and safety (HSE) management systems, and sustainable development goals.",
    learningOutcomes: [
      "Demonstrate comprehensive understanding of engineering professional ethics and social responsibilities.",
      "Apply risk assessment tools and HSE management practices to industrial operations.",
      "Assess engineer-led interventions for sustainable environmental protection.",
    ],
    syllabusTopics: [
      "Engineering ethics & IESL professional code of conduct",
      "Inclusive engineering concepts & social equity",
      "Legal frameworks, labor ordinances & environmental acts",
      "Hazard identification, risk assessment & HSE systems",
      "Environmental impact assessment (EIA) & circular economy",
    ],
  },
  {
    code: "MT3350",
    title: "Materials Modelling",
    semester: 6,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Computational & Mathematics",
    description:
      "Multi-scale materials modeling: continuum scale Finite Element Analysis (FEA), Molecular Dynamics (MD) atomistic simulations, potential energy functions, and Density Functional Theory (DFT) quantum calculations.",
    learningOutcomes: [
      "Distinguish simulation frameworks across time and length scales (DFT to FEA).",
      "Formulate Molecular Dynamics potential energy functions and integration algorithms.",
      "Interpret Density Functional Theory (DFT) surface energies and electronic band structures.",
    ],
    syllabusTopics: [
      "Multi-scale modeling paradigms in materials engineering",
      "Continuum FEA foundations, stiffness matrices & convergence",
      "Molecular Dynamics (MD) simulations & force fields",
      "Density Functional Theory (DFT) & exchange-correlation functionals",
      "Surface energy relaxation & quantum mechanical material properties",
    ],
  },
  {
    code: "HM2450",
    title: "Introduction to Psychology",
    semester: 6,
    credits: 2.0,
    type: "Elective",
    department: "Languages / Humanities",
    domain: "Management & Humanities",
    description:
      "Cognitive psychology, emotional intelligence, organizational behavior, interpersonal relationship dynamics, stress management, and psychological factors in leadership and decision-making.",
    learningOutcomes: [
      "Explain core principles of human psychology and behavioral modification.",
      "Apply emotional intelligence to team leadership and workplace conflict resolution.",
      "Implement stress management and cognitive resilience strategies in high-pressure engineering roles.",
    ],
    syllabusTopics: [
      "Evolution of psychological theories & human cognition",
      "Emotional intelligence & leadership dynamics",
      "Personality development & self-evaluation models",
      "Attitudes, perception, and decision-making biases",
      "Interpersonal communication & occupational stress management",
    ],
  },

  // ==========================================
  // SEMESTER 7
  // ==========================================
  {
    code: "MT3201",
    title: "Comprehensive Design Project (CDP)",
    semester: 7,
    credits: 4.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade A+ | 4.0 GPA (Pinnacle Project)",
    description:
      "The pinnacle engineering capstone: complete, from-scratch design of a 1.6m marine propulsion shaft for a CAT 3406C marine engine. Ansys Granta Ashby material selection (Super Duplex SAF 2507), Abaqus FEA, and cathodic protection.",
    learningOutcomes: [
      "Lead multi-criteria engineering design from market requirements to production specifications.",
      "Execute computer-aided materials selection via Ashby charts in Ansys Granta.",
      "Simulate non-linear structural stress and fatigue life using 3D solid FEA in Abaqus CAE.",
    ],
    syllabusTopics: [
      "Requirement elicitation & marine classification standards (DNV/ABS)",
      "Ashby chart material selection for yield strength and PREN corrosion resistance",
      "Abaqus FEA solid modeling under combined torsion and thrust",
      "Keyway stress concentration mitigation & fatigue fillet radii optimization",
      "Impressed Current Cathodic Protection (ICCP) & shaft earthing slip-ring design",
    ],
    relatedProjectId: "marine-shaft-cdp",
  },
  {
    code: "MT4810",
    title: "Continuum Scale Numerical Simulation of Material Systems",
    semester: 7,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Mechanics & Design",
    gradeBadge: "Grade A",
    description:
      "Applied Finite Element Analysis (FEA) using Abaqus CAE: direct stiffness methods, iso-parametric element formulation, elasto-plastic material definitions, contact mechanics, and mesh convergence validation.",
    learningOutcomes: [
      "Formulate stiffness matrices and shape functions for continuum finite elements.",
      "Configure non-linear boundary conditions, contact interactions, and plasticity in Abaqus CAE.",
      "Execute mesh convergence studies and validate simulation outputs against analytical hand calculations.",
    ],
    syllabusTopics: [
      "Finite element foundations & direct stiffness integration",
      "Iso-parametric elements & numerical Gaussian quadrature",
      "Non-linear material models: Yield stress & strain hardening curves",
      "Surface-to-surface penalty contact & friction formulations",
      "Mesh convergence verification & Hertzian contact stress validation",
    ],
    relatedProjectId: "spur-gear-fea",
  },
  {
    code: "MT4130",
    title: "Selection of Materials for Engineering Applications",
    semester: 7,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Ashby material property charts, performance indices, multi-constraint optimization, shape efficiency factors, microstructural architecture, and techno-economic material selection strategies.",
    learningOutcomes: [
      "Derive material performance indices ($M$) for minimum weight, deflection, and cost.",
      "Navigate digital material property databases using multi-constraint trade-off plots.",
      "Analyze structural efficiency based on microscopic and macroscopic shape factors.",
    ],
    syllabusTopics: [
      "Ashby property charts & multi-objective performance indices",
      "Techno-economic criteria & cost-per-unit-function matrices",
      "Shape efficiency factor-based material selection",
      "Requirement pyramid & product character formulation",
      "Industrial case studies across aerospace, automotive, and marine systems",
    ],
    relatedProjectId: "marine-shaft-cdp",
  },
  {
    code: "MT4074",
    title: "Design and Fabrication of Polymer Products",
    semester: 7,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Design criteria for extruded and molded plastics/rubbers: rubber springs, tires, seals, injection-molded components, hollow blow-molded containers, plastic gears, and molding troubleshooting.",
    learningOutcomes: [
      "Establish engineering design criteria for high-precision plastic and rubber components.",
      "Design extruded and injection-molded geometries factoring in shrinkage and cooling.",
      "Diagnose and remediate processing defects in polymer manufacturing.",
    ],
    syllabusTopics: [
      "Design of rubber products: Static/dynamic springs, tires & seals",
      "Design of plastic items: Injection molding, blow molding & hollow shells",
      "Plastic gear and bearing design considerations",
      "Shrinkage, warpage, and cooling channel placement",
      "Troubleshooting mold defects and process parameter optimization",
    ],
  },
  {
    code: "MT4024",
    title: "Total Quality Management (TQM)",
    semester: 7,
    credits: 2.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Management & Humanities",
    description:
      "Quality philosophies (Deming, Juran, Ishikawa), 7 basic quality control tools, statistical process control (SPC), quality circles, cross-functional improvement teams, and international standards (ISO 9001).",
    learningOutcomes: [
      "Apply Total Quality Management tools and promotional frameworks to industrial environments.",
      "Design and implement statistical quality control and continuous improvement programs.",
      "Evaluate national and international quality awards and certifications.",
    ],
    syllabusTopics: [
      "Evolution of quality: Inspection to Total Quality Management",
      "The 7 basic QC tools (Pareto, Ishikawa, Control charts, Histograms)",
      "Statistical Process Control (SPC) & capability indices ($C_p, C_{pk}$)",
      "Quality circles & cross-functional problem-solving teams",
      "Quality awards (Deming Prize, NCQP) and ISO quality standards",
    ],
  },
  {
    code: "MN4023",
    title: "Engineering Economics",
    semester: 7,
    credits: 2.0,
    type: "Core",
    department: "Industrial Management",
    domain: "Management & Humanities",
    gradeBadge: "Grade B+",
    description:
      "Time value of money, discounted cash flows, Net Present Value (NPV), Internal Rate of Return (IRR), Benefit-Cost Ratio (BCR), macro-economic shadow pricing, and sensitivity risk analysis.",
    learningOutcomes: [
      "Execute discounted cash flow analysis and compute NPV, IRR, and payback periods.",
      "Conduct macro-economic Benefit-Cost Analysis (EBCA) using shadow prices.",
      "Perform sensitivity testing and decision-tree risk evaluations on engineering investments.",
    ],
    syllabusTopics: [
      "Time value of money, equivalence & cash flow diagrams",
      "NPV, annual worth, equivalent annual cost & IRR methods",
      "Financial Benefit-Cost Analysis (FBCA) for commercial viability",
      "Economic Benefit-Cost Analysis (EBCA) & shadow pricing",
      "Sensitivity analysis, stress-testing & decision trees",
    ],
    relatedProjectId: "ferrocement-economic-viability",
  },

  // ==========================================
  // SEMESTER 8
  // ==========================================
  {
    code: "MT4204",
    title: "B.Sc. Final Year Research Project (Thesis)",
    semester: 8,
    credits: 7.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade A",
    description:
      "Comprehensive 3-semester capstone research project: 'Synergistic Effects of Rice Husk Ash and Polypropylene Fiber on Modified Expanded Polystyrene Cement Mortar'. Lab mix formulation, ASTM testing, and failure mechanics.",
    learningOutcomes: [
      "Formulate original research hypotheses and critically review international scientific literature.",
      "Execute rigorous experimental casting, ASTM mechanical testing, and microstructural analysis.",
      "Deliver an academic thesis defense and publish peer-review quality scientific reports.",
    ],
    syllabusTopics: [
      "Research methodology, GLP safety & problem identification",
      "Pozzolanic binder substitution: Rice Husk Ash (RHA) & C-S-H densification",
      "Lightweight EPS aggregate integration & density-strength mapping",
      "Polypropylene (PP) fiber secondary reinforcement & crack bridging",
      "ASTM compressive/flexural characterization & ductile failure analysis",
    ],
    relatedProjectId: "ferrocement-mortar-fyp",
  },
  {
    code: "MT4420",
    title: "Energy Materials",
    semester: 8,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    gradeBadge: "Grade A",
    description:
      "Photovoltaic physics, SCAPS-1D perovskite solar cell simulation, lithium-ion battery electrochemistry, graphene supercapacitor fabrication, cyclic voltammetry, and high-temperature superconductors.",
    learningOutcomes: [
      "Model working mechanisms of photovoltaic cells, lithium-ion batteries, and supercapacitors.",
      "Execute SCAPS-1D device simulations optimizing absorber layer thickness and carrier transport.",
      "Synthesize nanostructured graphene electrodes and interpret cyclic voltammetry charge storage.",
    ],
    syllabusTopics: [
      "Semiconductor photovoltaics & SCAPS-1D numerical simulation",
      "Electrochemical energy storage in secondary Li-ion batteries",
      "Graphene & nanocarbon supercapacitors (EDLC mechanisms)",
      "Cyclic Voltammetry (CV) & Galvanostatic Charge-Discharge (GCD)",
      "Superconductivity: Meissner effect, flux pinning & power applications",
    ],
    relatedProjectId: "scaps-solar-simulation",
  },
  {
    code: "MT4120",
    title: "Biomaterials and Medical Implants",
    semester: 8,
    credits: 2.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Biocompatibility, bone histology, metallic orthopedic alloys (316L SS, Co-Cr-Mo, Ti-6Al-4V), osseointegration, sandblasted acid-etched (SLA) surfaces, plasma-sprayed Hydroxyapatite, and cardiovascular stents.",
    learningOutcomes: [
      "Evaluate biocompatibility and immune response to orthopedic and dental implants.",
      "Analyze surface engineering techniques (SLA, plasma spray) to promote osseointegration.",
      "Select biomaterials for cardiovascular, dental, ophthalmic, and suture applications.",
    ],
    syllabusTopics: [
      "Bone histology, biomechanics & fracture repair mechanisms",
      "Metallic implant materials: Ti alloys, Co-Cr & 316L Stainless Steel",
      "Osseointegration stages & immune hypersensitivity prevention",
      "Surface modifications: SLA micro-roughness & Hydroxyapatite (HA)",
      "Cardiovascular stents, tissue heart valves & ophthalmic biomaterials",
    ],
    relatedProjectId: "dental-implant-biomaterials",
  },
  {
    code: "MT4121",
    title: "Cleaner Production",
    semester: 8,
    credits: 3.0,
    type: "Core",
    department: "Materials Science & Engineering",
    domain: "Management & Humanities",
    description:
      "Industrial environmental auditing, material balance and resource flow diagrams, waste cause analysis (Ishikawa diagrams), Life Cycle Assessment (LCA), green chemistry, and circular economy strategies.",
    learningOutcomes: [
      "Execute cleaner production assessments and construct material/energy balance flowcharts.",
      "Identify waste generation root causes and evaluate CP options using weighted matrices.",
      "Apply Life Cycle Assessment (LCA) methodologies and circular economy principles.",
    ],
    syllabusTopics: [
      "Cleaner production methodology & process flow diagramming",
      "Material balance calculations & waste costing",
      "Ishikawa root cause analysis & CP option prioritization",
      "Life Cycle Assessment (LCA): Scope, inventory & impact analysis",
      "Green chemistry, eco-innovation & circular economy models",
    ],
  },
  {
    code: "MT4430",
    title: "Compounding and Testing of Polymers",
    semester: 8,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Polymer mixing thermodynamics, mixing indices, compounding machinery, nano-composite dispersion, elastomer blends (NR, SBR, EPDM), and standardized mechanical/thermal testing protocols.",
    learningOutcomes: [
      "Explain mixing entropy, scale of segregation, and blending rheology.",
      "Formulate high-performance polymer compounds and nanocomposites.",
      "Execute standardized mechanical, electrical, and flammability testing of polymer products.",
    ],
    syllabusTopics: [
      "Science of mixing: Segregation scale, mixing indices & kinetics",
      "Polymer compounding ingredients, fillers & interfacial agents",
      "Nano-composite compounding & reactive extrusion techniques",
      "Mechanical testing: Tensile, impact, flexural & tear resistance",
      "Thermal, electrical resistivity, and flammability evaluations",
    ],
  },
  {
    code: "MT4084",
    title: "Dies and Moulds for Polymer Processing",
    semester: 8,
    credits: 3.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Mechanics & Design",
    description:
      "Die and mold steel metallurgy, hardening treatments, compression/transfer mold design, blow mold pinch-off, extrusion die land/die swell geometries, and multi-cavity injection mold runners and cooling circuits.",
    learningOutcomes: [
      "Select tool steels and surface treatments for high-wear polymer processing tooling.",
      "Design multi-cavity injection molds with optimized gating, ejection, and cooling layouts.",
      "Formulate extrusion die geometries compensating for polymer melt viscoelastic die swell.",
    ],
    syllabusTopics: [
      "Mould and die materials, hardening, and thermal cooling systems",
      "Compression and transfer mold cavity and pot sizing",
      "Blow mold design: Parison calibration, pinch-off & cooling",
      "Extrusion die geometry, die land & viscoelastic die swell control",
      "Multi-cavity injection mold layout: Runners, gates, and venting",
    ],
  },
  {
    code: "MT4301",
    title: "Non-Destructive Testing (NDT)",
    semester: 8,
    credits: 2.0,
    type: "Elective",
    department: "Materials Science & Engineering",
    domain: "Materials & Metallurgy",
    description:
      "Physical principles and standards for industrial Non-Destructive Testing: Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MPI), Dye Penetrant Testing (DPT), and Eddy Current Testing.",
    learningOutcomes: [
      "Compare relative capabilities, sensitivity, and limitations of primary NDT techniques.",
      "Select optimal NDT inspection protocols based on material composition and defect geometry.",
      "Formulate standardized inspection procedures for structural welds and foundry castings.",
    ],
    syllabusTopics: [
      "Physical principles of Ultrasonic, Radiographic, and Magnetic testing",
      "Liquid dye penetrant & Eddy current surface inspection methods",
      "Standards-based NDT procedure development (ASTM, ISO)",
      "Quality assurance of structural welds and casting flaws",
      "Advanced industrial NDT methods & signal interpretation",
    ],
  },
  {
    code: "MN4043",
    title: "Technology Management",
    semester: 8,
    credits: 2.0,
    type: "Core",
    department: "Management of Technology",
    domain: "Management & Humanities",
    description:
      "Strategic management of technology, technology-strategy alignment, R&D commercialization pipelines, organizational innovation cultures, technology transfer agreements, and National Innovation Systems (NIS).",
    learningOutcomes: [
      "Align technology roadmap strategies with competitive corporate business models.",
      "Manage R&D pipelines and overcome barriers in commercializing scientific inventions.",
      "Evaluate international technology transfer mechanisms and national innovation systems.",
    ],
    syllabusTopics: [
      "Technology strategy formulation & business alignment",
      "Invention, innovation & commercializing R&D outputs",
      "Organizational culture & structures for promoting creativity",
      "Technology transfer processes, contracts & success factors",
      "National Innovation Systems (NIS) & science/technology parks",
    ],
  },
  {
    code: "HM2030",
    title: "Japanese as a Foreign Language",
    semester: 8,
    credits: 2.0,
    type: "Elective",
    department: "Languages",
    domain: "Management & Humanities",
    description:
      "Hiragana, Katakana, and basic Kanji writing systems, conversational expressions, Japanese business and engineering etiquette, and social/cultural frameworks in Japan.",
    learningOutcomes: [
      "Read and write Hiragana, Katakana, and fundamental Kanji characters.",
      "Conduct professional greetings, introductions, and daily conversational dialogue in Japanese.",
      "Understand cultural and organizational frameworks within Japanese engineering industries.",
    ],
    syllabusTopics: [
      "Hiragana and Katakana character orthography and pronunciation",
      "Basic Kanji characters, numbering systems, dates, and times",
      "Self-introductions, occupational dialogue & formal greetings",
      "Sentence structure, particles, verbs, and conversational roleplay",
      "Japanese workplace culture, etiquette, and industrial innovation",
    ],
  },
];
