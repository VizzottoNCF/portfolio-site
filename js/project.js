// Filled from vizzotto.itch.io. Entries marked TODO need your input (mainly your role and skills).
// Cover/gallery images hotlink to itch.io for now; download them into /img when you can.
const TODO = { en: "TODO: describe what you did on this project.", pt: "TODO: descreva o que você fez neste projeto." };

const PROJECTS = [
  {
    id: "total-domination",
    title: "Total Domination",
    year: 2026,
    cover: "https://img.itch.zone/aW1nLzI3NDE2MjAxLnBuZw==/original/uXh1Qu.png",
    images: ["https://img.itch.zone/aW1nLzI3NDE2MjAxLnBuZw==/original/uXh1Qu.png"],
    summary: { en: "Resource management strategy game about conquering planets.", pt: "Jogo de estratégia e gerenciamento de recursos sobre conquistar planetas." },
    description: {
      en: "The player is a galactic emperor expanding their territory, choosing which alien servant to send on which mission to win the challenges of each planet. Made with a team for GameJamUFN 2026.1.",
      pt: "O jogador é um imperador galáctico que expande seu território, escolhendo qual servo alienígena enviar para cada missão e vencer os desafios de cada planeta. Feito em equipe para a GameJamUFN 2026.1."
    },
    role: { en: "Lead Developer and Programmer", pt: "Líder de Desenvolvimento e Programador" },
    skills: ["Unity", "C#", "Team Management"],
    links: [{ label: "Play on itch.io", url: "https://vizzotto.itch.io/total-domination" }]
  },
  {
    id: "miau",
    title: "M.I.A.U.",
    year: 2025,
    cover: "https://img.itch.zone/aW1nLzIxMjA4NzEwLnBuZw==/original/rIhc0%2F.png",
    images: [
      "https://img.itch.zone/aW1nLzIxMjA4NzEwLnBuZw==/original/rIhc0%2F.png",
      "https://img.itch.zone/aW1nLzIxMjA4NDI0LnBuZw==/original/TB9r%2Fz.png"
    ],
    summary: { en: "Space traffic puzzle with cats and aliens.", pt: "Puzzle de trânsito espacial com gatos e alienígenas." },
    description: {
      en: "Multiplanetary Expedition for Otherworldly Welfare: manage the space traffic of small sectors of the galaxy. Made by a team from the Digital Games course for UFN Game Jam 2025.1 (theme: \"5 Stars\").",
      pt: "Missão Interplanetária de Apoio Universal: gerencie o trânsito espacial de pequenos setores das galáxias. Feito em equipe pelo curso de Jogos Digitais para a Game Jam UFN 2025.1 (tema: \"5 Estrelas\")."
    },
    role: { en: "Lead Developer and Programmer", pt: "Líder de Desenvolvimento e Programador" },
    skills: ["Unity", "C#", "Unity Physics", "Team Management"],
    links: [{ label: "Play on itch.io", url: "https://vizzotto.itch.io/miau" }]
  },
  {
    id: "spider-heaven",
    title: "Spider Heaven",
    year: 2024,
    cover: "https://img.itch.zone/aW1nLzE3NTk1MTUzLnBuZw==/original/Cqb%2Fi4.png",
    images: [
      "https://img.itch.zone/aW1nLzE3NTk1MTUzLnBuZw==/original/Cqb%2Fi4.png",
      "https://img.itch.zone/aW1nLzE3NTk1OTAxLnBuZw==/original/10gqR9.png"
    ],
    summary: { en: "A bullet heaven made about a small spider surviving in a chaotic garden.", pt: "Um bullet heaven sobre uma pequena aranha sobrevivendo em um jardim caótico." },
    description: {
      en: "A bullet heaven game made for UFN Game Jam 2024 with the theme \"Survival in small scale\".",
      pt: "Um jogo bullet heaven feito para a Game Jam UFN 2024 com o tema \"Sobrevivência em pequena escala\"."
    },
    role: { en: "Auxilary Content Developer, Assistant Programmer and Sound Design", pt: "Desenvolvimento de Mecânicas Auxiliares, Programador Auxiliar e Design Sonoro" },
    skills: ["GameMaker Studio 2", "Bullet heaven", "Team Cooperation"],
    links: [{ label: "Download on itch.io", url: "https://vizzotto.itch.io/spider-heaven" }]
  },
  {
    id: "ecos-do-passado",
    title: "Gama D'Eça: Ecos do Passado",
    cover: "https://img.itch.zone/aW1nLzE4NjIzMDExLnBuZw==/original/CJVKkJ.png",
    images: [
      "https://img.itch.zone/aW1nLzE4NjIzMDExLnBuZw==/original/CJVKkJ.png",
      "https://img.itch.zone/aW1nLzE4NjIyNjQ3LnBuZw==/original/Z0CvJp.png"
    ],
    summary: { en: "Game made in cooperation with local museum Gama D'Eça.", pt: "Jogo feito em colaboração com museu local Gama D'Eça." },
    description: {
      en: "Your friends dare you to explore a small museum alone at night after rumors of ghosts. Meet its residents and help them with their requests.",
      pt: "Ouvindo rumores de fantasmas em um pequeno museu, seus amigos te desafiam a explorá-lo sozinho durante a noite. Descubra os residentes e ajude-os com seus pedidos."
    },
    role: { en: "Lead Developerm, Programmer and Sound Design", pt: "Líder de Desenvolvimento, Programador e Design Sonoro" },
    skills: ["Unity3D", "C#", "3D Modelling Integration"],
    links: [{ label: "Download on itch.io", url: "https://vizzotto.itch.io/ecos-do-passado" }]
  },
  /*{
    id: "soul-fall",
    title: "Soul Fall",
    cover: "https://img.itch.zone/aW1nLzE3MTExMzY5LnBuZw==/original/od87c7.png",
    images: [
      "https://img.itch.zone/aW1nLzE3MTExMzY5LnBuZw==/original/od87c7.png",
      "https://img.itch.zone/aW1nLzE3MTA2MjM1LnBuZw==/original/unZnGh.png"
    ],
    summary: { en: "Point & click puzzle from a game jam (on hold).", pt: "Puzzle point & click de game jam (em pausa)." },
    description: {
      en: "Made for the Ctrl Alt Frame game jam with the themes \"Everything is energy\" and \"Between the Stars and the Secrets of the Night\". Unfinished: there is no content past the caves.",
      pt: "Feito para a game jam Ctrl Alt Frame com os temas \"Tudo é energia\" e \"Entre as Estrelas e os Segredos da Noite\". Não finalizado: não há conteúdo implementado das cavernas em diante."
    },
    role: TODO,
    skills: ["Point & click", "Puzzle design", "Teamwork"],
    links: [{ label: "Download on itch.io", url: "https://vizzotto.itch.io/soul-fall" }]
  },*/
  {
    id: "name-game",
    title: "name-game",
    cover: "https://img.itch.zone/aW1nLzI0MjgyMjA5LnBuZw==/original/XV1LzK.png",
    images: ["https://img.itch.zone/aW1nLzI0MjgyMjA5LnBuZw==/original/XV1LzK.png"],
    summary: { en: "A simple game made to understand scope in software development.", pt: "Jogo simplês feito para compreender escopo na engenharia de software." },
    description: {
      en: "A 16-bit single color action boss fight game made for HERYJAM-QA.",
      pt: "Um jogo 16-bits monocromática de boss fight feito para a HERYJAM-QA."
    },
    role: { en: "Lead Developer and Programmer", pt: "Líder de Desenvolvimento e Programador" },
    skills: ["Unity2D", "C#", "Software Engineering"],
    links: [{ label: "Play on itch.io", url: "https://vizzotto.itch.io/name-game" }]
  },
  {
    id: "codebreach",
    title: "[ Codebreach ]",
    cover: "https://img.itch.zone/aW1nLzIxNzIwMzMxLnBuZw==/original/OsSIaF.png",
    images: [
      "https://img.itch.zone/aW1nLzIxNzIwMzMxLnBuZw==/original/OsSIaF.png",
      "https://img.itch.zone/aW1nLzIxNzIwMzczLnBuZw==/original/78nmsz.png"
    ],
    summary: { en: "Solo Unity project.", pt: "Projeto solo em Unity." },
    description: {
      en: "TODO: the itch.io page has no description. Add a few sentences about the game.",
      pt: "TODO: a página do itch.io não tem descrição. Adicione algumas frases sobre o jogo."
    },
    role: { en: "Developer and Programmer", pt: "Desenvolvedor e Programador" },
    skills: ["Unity3D", "C#", "Level Design", "Puzzle design"],
    links: [{ label: "Play on itch.io", url: "https://vizzotto.itch.io/codebreach" }]
  },
  {
    id: "para-sempre-aqui",
    title: "Para Sempre Aqui",
    cover: "https://img.itch.zone/aW1nLzIzNTQ3Nzc4LnBuZw==/315x250%23c/GDkT1p.png",
    images: ["https://img.itch.zone/aW1nLzIzNTQ3OTY1LnBuZw==/original/bO1f9y.png"],
    summary: { en: "Survival game about the purgatory of your choices.", pt: "Jogo de sobrevivência sobre o purgatório das suas escolhas." },
    description: {
      en: "Try to survive the purgatory of your choices. Winner of GameJamUFN 2025.2 (theme: \"You Shouldn't Be Here\").",
      pt: "Tente resistir o purgatório de suas escolhas. Vencedor da GameJamUFN 2025.2 (tema: \"Você não devia estar aqui\")."
    },
    role: { en: "Lead Developer and Programmer", pt: "Líder de Desenvolvimento e Programador" },
    skills: ["Unity3D", "C#", "Team Management"],
    links: [{ label: "Play on itch.io", url: "https://sunnylikebirds.itch.io/para-sempre-aqui" }]
  },
  /*
  {
    id: "beyond-the-veil",
    title: "Beyond the Veil",
    cover: "cover image url",
    images: ["detailed image urls 1", "2", ...],
    summary: { en: "summary 1.", pt: "summary 2." },
    description: {
      en: "description 1.",
      pt: "description 2."
    },
    role: { en: "Programmer", pt: "Programador" },
    skills: ["Java", "Jira", "Agile Development"],
  }
  {
    id: "last-laugh",
    title: "Last Laugh",
    cover: "https://img.itch.zone/aW1nLzE0ODQ3MjQxLnBuZw==/315x250%23c/%2BW20s9.png",
    images: ["https://img.itch.zone/aW1nLzE0ODQ3MjQxLnBuZw==/315x250%23c/%2BW20s9.png"],
    summary: { en: "Student-made puzzle game where you play a clown.", pt: "Puzzle feito por estudantes em que você é um palhaço." },
    description: {
      en: "A game made by students in which you are a clown who must cheer up the \"children\" of a suspicious entity. Hosted on Davi KSS's itch.io page.",
      pt: "Jogo criado por estudantes em que você é um palhaço que precisa animar as \"crianças\" de uma entidade suspeita. Hospedado na página de Davi KSS no itch.io."
    },
    role: TODO,
    skills: ["Puzzle design", "Teamwork"],
    links: [{ label: "Play on itch.io", url: "https://davi-kss.itch.io/last-laugh" }]
  },
  {
    id: "priscila-web",
    title: "Priscila Web",
    cover: "https://img.itch.zone/aW1nLzEzNjAxNTE5LnBuZw==/315x250%23c/LIez%2Bz.png",
    images: ["https://img.itch.zone/aW1nLzEzNjAxNTE5LnBuZw==/315x250%23c/LIez%2Bz.png"],
    summary: { en: "Visual novel about human trafficking.", pt: "Visual novel sobre tráfico humano." },
    description: {
      en: "A visual novel about the process of buying a human trafficking victim. Hosted on ThiagoMarzari's itch.io page.",
      pt: "Visual novel sobre o processo de comprar uma vítima do tráfico humano. Hospedado na página de ThiagoMarzari no itch.io."
    },
    role: TODO,
    skills: ["Visual novel", "Teamwork"],
    links: [{ label: "Play on itch.io", url: "https://thiagomarzari.itch.io/priscila-web" }]
  }*/
];

/* BASE TEMPLATE FOR NEW PROJECTS
,
{
    id: "id",
    title: "name",
    cover: "cover image url",
    images: ["detailed image urls 1", "2", ...],
    summary: { en: "summary 1.", pt: "summary 2." },
    description: {
      en: "description 1.",
      pt: "description 2."
    },
    role: TODO,
    skills: ["skill used"],
    links: [{ label: "Play on itch.io", url: "url" }]
  }
    */