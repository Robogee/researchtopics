var Biology = [
    'Aging: Selective telomerase activation to delay senescence',
    'Aging: Effect of reduced mRNA translation on senescence',
    'Aging: Inhibition of mTOR gene and gene products for longevity of life',
    'Aging: Effects of diet (caloric restriction) on lifespan',
    'Aging: Effect of altered energy generation capacity (epigenetic changes) on the process of aging',
    'Agriculture: Development of GMO food crops',
    'Agriculture: Development of high-yield varieties of wheat and corn',
    'Agriculture: Imparting viral, fungal, and bacterial resistance to crop plants',
    'Agriculture: Study of salt and water stress on plants',
    'Agriculture: Inducing production of pest-repellent natural biochemicals (e.g. nimbidin from neem tree) in normal food crops',
    'Antibiotic Resistance: Mechanism of pathogenesis of antibiotic resistant agent',
    'Antibiotic Resistance: Drug designing of molecules that hamper pathogenicity',
    'Antibiotic Resistance: Development of a biomolecule that induces programmed cell death by caspase activation in resistant organism',
    'Antibiotic Resistance: Development of new target models to produce more effective antibiotics',
    'Antibiotic Resistance: Studying effects of probiotics in infection prevention',
    'Biomedication: Development of GMO microbes that break down oil',
    'Biomedication: Development of eco-friendly fuel alternatives (bio-diesel)',
    'Biomedication: Practical use of bioluminescence in place of electricity',
    'Biomedication: Bio-films that absorb air pollution',
    'Biomedication: Studying plants (water hyacinth) and microbes that can absorb heavy and toxic elements from effluents of industries',
    'Cancer Metastasis: Studying mechanism of cancer metastasis',
    'Cancer Metastasis: Rescuing function of tumor suppressor genes in cancerous state',
    'Cancer Metastasis: Developing methods and tools to identify and eliminate cancer cells without hampering healthy cells',
    'Cancer Metastasis: Targeted drug therapy to cancer sites',
    'Cancer Metastasis: Gene therapy to hamper the cancerous cells metastatic pathway',
    'Developmental Biology: Epigenetic basis of embryogenic development',
    'Developmental Biology: Specific cell fate and cell mapping of gastrula cells in development of higher animal fetuses',
    'Developmental Biology: Genetic basis of cleft palate',
    'Developmental Biology: Gestational environment that leads to developmental defects',
    'Developmental Biology: Effect of maternal health and diet on developing embryo',
    'Genetic Disorders: Cystic fibrosis (CFTR gene)',
    'Genetic Disorders: Huntingtons disease (HTT gene)',
    'Genetic Disorders: Lesch-Nyhan syndrome (HPRT1 gene)',
    'Genetic Disorders: Wilsons disease (ATP7B gene)',
    'Genetic Disorders: Down syndrome (trisomy of 21st chromosome)',
    'Infertility: Effect of Robertsonian translocations on infertility',
    'Infertility: Effect of Ring chromosomes on infertility and miscarriages',
    'Infertility: Age-related factors affecting infertility',
    'Infertility: Development of refined In Vitro Fertilization (IVF) and Post Implantation Genetic Diagnosis (PIGD) techniques',
    'Infertility: Hormonal basis of miscarriages',
    'Neurobiology: Comprehensive brain mapping',
    'Neurobiology: Brain activity during epileptic seizures',
    'Neurobiology: Basis for substance addiction',
    'Neurobiology: Brain processes involved in memory, intelligence, and formation of thoughts',
    'Neurobiology: Twin studies of monozygotic twins developing different personalities and behavior traits',
    'Structural Biology: In silico study of biological macromolecules',
    'Structural Biology: Prediction of protein structure based on altered sequence',
    'Structural Biology: Protein-protein interaction related to immune response',
    'Structural Biology: In silico drug designing against virulent protein',
    'Structural Biology: Studying protein structure and interactions in case of an unknown pathogen',
]

function newBiology() {
    var randomNumber = Math.floor(Math.random() * (Biology.length));
    document.getElementById('ideaGenerator').innerHTML = Biology[randomNumber];
}

 var Physics = [
    'Astrophysics: Constraining toridal equilibria to accretion disc observationsz',
    'Astrophysics: Modeling the SABRE Dark Matter Detector',
    'Astrophysics: Positrons and Dust Grains',
    'Astrophysics: Modelling a solar fare by MRXMHD',
    'Astrophysics: Real-time data acquisition for the Australian Dark matter Axion Haloscrope',
    'Atomic and Molecular Physics: Positron applications in medical physics',
    'Atomic and Molecular Physics: Measuring free-ion hyperfine fields',
    'Atomic and Molecular Physics: The inverse swarm problem with nueral networks',
    'Atomic and Molecular Physics: Optical quantum memory',
    'Atomic and Molecular Physics: Modelling free-ion hyperfine fields',
    'Atomic and Molecular Physics: Augar-cascade modelling for targeted cancer therapy',
    'Biophysics: Improving Magnetic Resonance Imaging with metamaterials',
    'Biophysics: Mechanical properties of plant cells',
    'Biophysics: Bacteria turbulence: diffusion and self-organization',
    'Biophysics: Shape signatures for leaves(topological data analysis)',
    'Biophysics: Protein structure: new topological methods',
    'Clean Energy: Organic-inorganic perovskite materials for high performance photovoltaics',
    'Clean Energy: Inclusion of toroidal flow into multiple relaxed region MHD',
    'Clean Energy: Application of data-mining techniques to plasma waves in H1 and other stellarators',
    'Clean Energy: Nanowire arrays for next generation high performance photovoltaics',
    'Clean Energy: Hydrogen genration by solar water splitting using nitride-based compound semiconductors',
    'Engineering: Generation of random numbers from vacuum fluctuations',
    'Engineering: Nuclear lifetimes-direct timing with LaBr3 detectors',
    'Engineering: Vibration control for optical interferometry',
    'Engineering: Exploring the nature of deep levels in high performance ZnO Schottky diodes',
    'Engineering: Fibre laser technology for quantum systems',
    'Environmental Physics: Crucial fundamental nuclear data for nuclear fusion and nuclear fission',
    'Environmental Physics: Nanobubbles',
    'Environmental Physics: Inertial effects during immiscible multiphase fluid displacements in porous media',
    'Environmental Physics: Surface forces and the behavior of colloidal systems',
    'Environmental Physics: 4D tomography- imaging materials in 3D as they change',
    'Fusion and Plasma Confinement: Thermonuclear ringtones in tokamak plasmas',
    'Fusion and Plasma Confinement: Modelling a solar flare by MRXMHD',
    'Fusion and Plasma Confinement: Radiofrequency wave propagation and heating in the MAGPIE plasma-materials interaction devices',
    'Fusion and Plasma Confinement: Tearing modes in the multi-region relaxed MHD plasma model',
    'Fusion and Plasma Confinement: Diagnosing plasma-surface interactions under fusion-relevant conditions',
    'Nanoscience and Nanotechnology: Monte-Carlo simulation of x-ray scattering from nano-objects',
    'Nanoscience and Nanotechnology: Controlling the properties of 2D materials by defect engineering',
    'Nanoscience and Nanotechnology: Mastering control over structure, composition and homogeneity in ternary nanowire growth',
    'Nanoscience and Nanotechnology: Resistive switching in transition-metal oxides and its use in nonvolatile memory devices',
    'Nanoscience and Nanotechnology: UV nano-LEDs',
    'Photonics, Lasers, and Nonlinear Optics: Developing a planar waveguide photonic quantum processor',
    'Photonics, Lasers, and Nonlinear Optics: Quantum squeezed states for interferometric gravitational-wave detectors',
    'Photonics, Lasers, and Nonlinear Optics: Non-equilibrium quantum condensation of microcavity exciton polaritons',
    'Photonics, Lasers, and Nonlinear Optics: Parity-time symmetry in classical and quantum nonlinear optics',
    'Photonics, Lasers, and Nonlinear Optics: Optical metamaterials: from Harry Potter to modern technology',
]
function newPhysics() {
    var randomNumber = Math.floor(Math.random() * (Physics.length));
    document.getElementById('ideaGenerator').innerHTML = Physics[randomNumber];
}

var Psychology= [
    'Emotional Health: Day to day activities and their effects on reoccuring dreams',
    'Emotional Health: Various prescription drugs and their effects on normal mental function',
    'Emotional Health: Lack of sleep affect on mental state',
    'Emotional Health: Natural alternatives to druges used for mental health',
    'Emotional Health: Stages of brain development in infants from birth to two',
    'Mental Health: Prevention of postpartum depression',
    'Mental Health: Mental health between men and women',
    'Mental Health: Side effects of antidepressants for women',
    'Mental Health: Maintaining good mental health',
    'Mental Health: Changing hormone levels and mental health',
    'Basic Learning Procedures: Effectiveness of classical conditioning over a short period of time',
    'Basic Learning Procedures: Various techniques of taste-aversion learning and their effectiveness',
    'Basic Learning Procedures: Prescription drugs and their effects on operant conditioning',
    'Basic Learning Procedures: Cultural pressures and their impact on social learning',
    'Basic Learning Procedures: Various classes of stimulus equivalence',
    'Social Psychology: Age and its effects on social cognition',
    'Social Psychology: Hormones and their impacts on attitudes and attitude change',
    'Social Psychology: Racial views and their influence over group process and social influence',
    'Social Psychology: Gender and its relationship to the degree of prejudice and stereotyping',
    'Human Diversity: Cultural norms and their impacts on gender and sexual orientation',
    'Human Diversity: Distribution of the multiple axes of human diveristy',
    'Human Diversity: Cultrual distribution and its impact on global psychology',
    'Human Diversity: Cross-Cultural Psychology and Research',
    'Human Diversity: Degree of importance of international psychology around the globe',
    'Clinical Psychology: Predujices and stereotypes and the ethics of therapists',
    'Clinical Psychology: Accuracy and effectiveness of the Diagnostic and Statistical Manual of mental disorders',
    'Clinical Psychology: Psychoactive substance use disorders vs alternative methods',
    'Clinical Psychology: Cognitive-behavioral therapy vs alternative therapies',
    'Clinical Psychology: Forensic clinical psychology vs Cognitive-behavioral therapy',
    'Applied Psychology: Various differences in careers with relation to industrial and organizational psychology',
    'Applied Psychology: Differences in Community Psychology around the globe',
    'Applied Psychology: Effectiveness of various techiniques of applied behavior anaylsis',
    'Applied Psychology: Gender differences in organizational behavior management',
    'Psychotherapy: Effectiveness of current methods of the assessment of mental health in older adults',
    'Psychotherapy: Various theraputical methods for domestic violence intervention and their benefits and drawbacks',
    'Psychotherapy: Effectiveness of constructivist psychotherapies',
    'Psychotherapy: Hyponosis its effects on the psychological unconscious',
    'Psychotherapy: Meditation its effects on the relaxation response',


]
function newPsychology() {
    var randomNumber = Math.floor(Math.random() * (Psychology.length));
    document.getElementById('ideaGenerator').innerHTML = Psychology[randomNumber];
}

var Chemistry = [
    'Transport of Trace Metals in Groundwater',
    'Chemical Speciation of Heavy Metal Ion Using Supported Liquid Membranes',
    'Destruction of Chemicals on Metal Oxide Films and Nanoparticles',
    'Applications to Solar Energy Conversion or Electrocatalysis',
    'Synthesis of New Materials, Structural Chemistry, and Applications in Catalysis',
    'Design, Synthesis, and Characterization of Molecule‐based Magnetic Materials',
    'Fundamental Studies of the Diels‐Alder Reaction',
    'Design, Synthesis, and Self‐assembly of Supramolecular Polymers',
    'Enantioselective and Diastereoselective synthesis using Reissert Compounds',
    'Isolation and Structural Elucidation of New Natural Products with Anticancer Activity',
    'Sulfonate and Carboxylate Ion‐containing Polymers',
    'Nanomaterials for Photocatalysis and Photoelectrochemistry',
    'Room Temperature Ionic Liquids',
    'New Materials for High Efficiency Solar Cells',
    'Effects of Mixed Salts on Aqueous Interfaces',
    'Computational Modeling of Aggregation Phenomena in Petrochemical Mixtures',
    'Strategies for Low-energy Recycling of Plastics',
    'Molecular Catalysts for Carbon Dioxide Conversion',
    'Cyanobacteria Conversion of Fatty Acids to Fuel',
    'Evaluating the Structure and Function of Intrinsically Disordered Proteins',
    'Chemistry of Biological Systems',
    'Characterization of Biological Systems',
    'Surface Spectroscopy',
    'Alcohol Poisoning and Fetal Alcohol Syndrome',
    'Aldehydes and Ketones as Flavoring Agents',
    'Chemistry of Vision',
    'Chemistry of Nicotine and Caffeine Addiction',
    'Resin Polymers',
    'Nuclear Magnetic Resonance of Organic Compounds',
    'Biological Chemistry of Sulfur and Selenium',
    'Inorganic Nanostructured Materials',
]
function newChemistry(){
    var randomNumber = Math.floor(Math.random() * (Chemistry.length));
    document.getElementById('ideaGenerator').innerHTML = Chemistry[randomNumber];
}
