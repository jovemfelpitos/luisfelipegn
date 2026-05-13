import {
  Bot,
  BrainCircuit,
  Cable,
  ChartNoAxesCombined,
  Code2,
  Database,
  FileCode2,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  PanelTop,
  Table2,
  Workflow
} from "lucide-react";

export type Locale = "pt" | "en";

export type Localized<T> = Record<Locale, T>;

export const navItems: Localized<Array<{ label: string; href: string }>> = {
  pt: [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Projetos", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Stack", href: "/stack" },
    { label: "Contato", href: "/contact" }
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Stack", href: "/stack" },
    { label: "Contact", href: "/contact" }
  ]
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luisfelipeeg1/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/jovemfelpitos/", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/luisfelipe.gn", icon: Instagram }
];

export const copy = {
  pt: {
    person: {
      name: "Luis Felipe",
      title: "Analista de Sistemas | Dados & Automação",
      description: "Profissional de tecnologia focado em sistemas e dados.",
      footer: "Luis Felipe — Sistemas, Dados & Automação."
    },
    home: {
      eyebrow: "Currículo digital",
      workflowLabel: "Fluxo operacional",
      workflowDescription: "Integrações, dados e automações conectadas com clareza.",
      experienceTitle: "Experiência",
      experienceIntro: "Atuação contínua em sistemas, operação e automação."
    },
    about: {
      title: "Sobre",
      intro:
        "Sou Luis Felipe, tenho 22 anos e trabalho com tecnologia da informação desde 2021.",
      paragraphs: [
        "De lá pra cá aprendi muito sobre dados e sistemas em geral e me profissionalizei como Analista de Sistemas. Percebi que precisava realizar rotinas repetitivas e, com isso, comecei a aplicar automações dentro do meu ambiente de trabalho.",
        "O resultado disso foi ganhar mais tempo e produtividade. Desde o começo sempre tentei otimizar o máximo de tempo nas tarefas e, depois de descobrir isso, minha vida mudou. Resolver problemas e criar soluções virou esporte, e os agentes de IA e fluxos de automação me ajudaram a melhorar cada vez mais isso.",
        "Além disso gosto de praticar esportes, corrida é onde eu me desligo dos códigos e automações. Faço com corpo e mente coisas que são impossíveis de serem feitas via automação, por enquanto. Particularmente me sinto muito bem na natureza, e boxe virou meu novo esporte favorito, sempre ouvindo uma boa música, na maior parte das vezes rap."
      ],
      blocks: [
        {
          title: "Perfil",
          text: "Tecnologia aplicada no dia a dia, com foco em organizar sistemas, dados e tarefas."
        },
        {
          title: "Atuação",
          text: "Sistemas, CRM, integrações, relatórios, dados e automações para processos internos."
        },
        {
          title: "Rotina",
          text: "Análise, organização de informações, melhoria de fluxos e busca por mais produtividade."
        }
      ],
      offCodeTitle: "Fora dos códigos",
      offCodeDescription: "Alguns registros da vida fora dos códigos, automações e telas."
    },
    projects: {
      title: "Projetos",
      intro: "Projetos selecionados serão adicionados em breve.",
      disabled: "Em breve"
    },
    insights: {
      title: "Insights",
      intro: "Insights e anotações serão adicionados em breve.",
      topics: ["Sistemas", "Dados", "Automação", "IA", "Workflows", "Tecnologia"]
    },
    stack: {
      title: "Stack",
      intro: "Tecnologias organizadas por uso prático."
    },
    contact: {
      title: "Contato",
      intro: "Canais diretos para acompanhar trabalhos, projetos e atualizações."
    }
  },
  en: {
    person: {
      name: "Luis Felipe",
      title: "Systems Analyst | Data & Automation",
      description: "Technology professional focused on systems and data.",
      footer: "Luis Felipe — Systems, Data & Automation."
    },
    home: {
      eyebrow: "Digital resume",
      workflowLabel: "Operational flow",
      workflowDescription: "Integrations, data and automations connected with clarity.",
      experienceTitle: "Experience",
      experienceIntro: "Continuous work across systems, operations and automation."
    },
    about: {
      title: "About",
      intro: "I am Luis Felipe, 22 years old, and I have worked with information technology since 2021.",
      paragraphs: [
        "Since then I have learned a lot about data and systems in general and became a Systems Analyst. I noticed I had to handle repetitive routines, so I started applying automations inside my work environment.",
        "The result was more time and productivity. Since the beginning I have always tried to optimize as much time as possible in tasks, and after discovering this my life changed. Solving problems and creating solutions became a sport, and AI agents and automation flows helped me improve this more and more.",
        "Besides that, I like practicing sports. Running is where I disconnect from code and automations. I do with body and mind things that are impossible to do through automation, for now. I feel really good in nature, and boxing became my new favorite sport, usually listening to good music, most of the time rap."
      ],
      blocks: [
        {
          title: "Profile",
          text: "Technology applied to everyday routines, focused on organizing systems, data and tasks."
        },
        {
          title: "Work",
          text: "Systems, CRM, integrations, reports, data and automations for internal processes."
        },
        {
          title: "Routine",
          text: "Analysis, information organization, flow improvement and a search for more productivity."
        }
      ],
      offCodeTitle: "Outside the code",
      offCodeDescription: "Some records of life outside code, automations and screens."
    },
    projects: {
      title: "Projects",
      intro: "Selected projects will be added soon.",
      disabled: "Soon"
    },
    insights: {
      title: "Insights",
      intro: "Insights and notes will be added soon.",
      topics: ["Systems", "Data", "Automation", "AI", "Workflows", "Technology"]
    },
    stack: {
      title: "Stack",
      intro: "Technologies organized by practical use."
    },
    contact: {
      title: "Contact",
      intro: "Direct channels for work, projects and updates."
    }
  }
} satisfies Localized<Record<string, unknown>>;

export const workflowNodes = ["API", "CRM", "Workflow", "WhatsApp", "Database"];

export const aboutGallery = [
  "/about-gallery/1.jpeg",
  "/about-gallery/2.jpeg",
  "/about-gallery/3.jpeg",
  "/about-gallery/5.jpeg",
  "/about-gallery/6.jpeg",
  "/about-gallery/7.jpeg",
  "/about-gallery/8.jpeg"
];

export const experience = {
  pt: [
    {
      company: "Sath Gold",
      period: "2021 — Atualmente",
      role: "Analista de Sistemas",
      bullets: [
        "Sistemas e operação",
        "CRM e integrações",
        "Relatórios e dados",
        "Automações internas"
      ]
    }
  ],
  en: [
    {
      company: "Sath Gold",
      period: "2021 — Present",
      role: "Systems Analyst",
      bullets: ["Systems and operations", "CRM and integrations", "Reports and data", "Internal automations"]
    }
  ]
} satisfies Localized<
  Array<{ company: string; period: string; role: string; bullets: string[] }>
>;

export const projects = {
  pt: [
    {
      title: "Projeto 01",
      category: "Sistemas",
      description: "Estrutura reservada para um projeto de sistemas e operação.",
      status: "Organizando"
    },
    {
      title: "Projeto 02",
      category: "Dados",
      description: "Espaço preparado para relatórios, métricas e organização de dados.",
      status: "Em revisão"
    },
    {
      title: "Projeto 03",
      category: "Automação",
      description: "Área pronta para integrações, workflows e automações internas.",
      status: "Em breve"
    }
  ],
  en: [
    {
      title: "Project 01",
      category: "Systems",
      description: "Reserved structure for a systems and operations project.",
      status: "Organizing"
    },
    {
      title: "Project 02",
      category: "Data",
      description: "Prepared space for reports, metrics and data organization.",
      status: "In review"
    },
    {
      title: "Project 03",
      category: "Automation",
      description: "Ready for integrations, workflows and internal automations.",
      status: "Soon"
    }
  ]
} satisfies Localized<
  Array<{ title: string; category: string; description: string; status: string }>
>;

export const stackCategories = [
  {
    key: "data",
    title: "Data",
    icon: Database,
    items: [
      { label: "Python", icon: FileCode2 },
      { label: "SQL", icon: Database },
      { label: "Power BI", icon: ChartNoAxesCombined },
      { label: "Excel", icon: Table2 },
      { label: "Power Query", icon: PanelTop }
    ]
  },
  {
    key: "automation",
    title: "Automation",
    icon: Workflow,
    items: [
      { label: "n8n", icon: Workflow },
      { label: "APIs", icon: Cable },
      { label: "Webhooks", icon: Globe2 },
      { label: "CRM", icon: PanelTop }
    ]
  },
  {
    key: "development",
    title: "Development",
    icon: Code2,
    items: [
      { label: "Git", icon: Github },
      { label: "GitHub", icon: Github },
      { label: "Next.js", icon: PanelTop },
      { label: "TypeScript", icon: FileCode2 }
    ]
  },
  {
    key: "ai",
    title: "AI Applied",
    icon: BrainCircuit,
    items: [
      { label: "OpenAI", icon: Bot },
      { label: "ChatGPT", icon: BrainCircuit },
      { label: "Prompt Engineering", icon: FileCode2 },
      { label: "AI Workflows", icon: Workflow }
    ]
  }
];
