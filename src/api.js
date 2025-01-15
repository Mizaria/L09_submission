const categories = [
  {
    name: "Infomation technology",
    id: "information-technology",
    sessions: [
      {
        name: "C218- UI/UX Design for Mobile Application", 
        id: "UI/UX",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        speaker: {
          name: "Amran Mohamed",
          title: "Lecturer",

        },
      },
      {
        name: "C337- Immersive Technologies", 
        id: "IT",
        desc: "This module equips students with the knowledge and skills to create Augmented Reality (AR) and Virtual Reality (VR) applications. Students will also learn how to create 3D assets that can be used when developing their AR and VR apps.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer",
        },
      },
    ],
  },
  {
    name: "Common ICT Programmes ",
    id: "Common ICT Programme",
    sessions: [
      {
        name: "C110- Programming Fundamentals I", 
        id: "C110 Programming Fundamentals It",
        desc: "This module introduces students to computational thinking for problem-solving in computer programming and the fundamental concepts and constructs applicable to most programming languages.",
        speaker: {
          name: "Wong Hau Shian",
          title: "Lecturer/Program Chair",

        },
      },
      {
        name: "C207- Database Systems", 
        id: "C207 Database Systems",
        desc: "This module covers the principles and concepts of database management systems and the reasons for using such systems in an organisation. It provides an understanding of the factors in database design and it will help students develop a methodical approach to database design and implementation.",
        speaker: {
          name: "Hew Ka Kian",
          title: "Lecturer",

        },
      },
      
    ],
  },
  {
    name: "Diploma in Applied AI ",
    id: "Diploma in Applied AI & Analytics",
    sessions: [
      {
        name: "C240- AI Essentials and Innovations", 
        id: "C240 AI Essentials and Innovations",
        desc: "This module teaches students the essential skills and knowledge of artificial intelligence (AI) and its applications in various fields.",
        speaker: {
          name: "Lessie Kang",
          title: "Senior Lecturer",

        },
      },
      {
        name: "C389- AI Solution Design and Implementation", 
        id: "C389 AI Solution Design and Implementations",
        desc: "This module aims to provide students with a comprehensive understanding of the design and implementation of AI solutions. Students will be exposed to several scenarios and problem needs that can be assisted or solved with applied AI solutions.",
        speaker: {
          name: "Andy Tao",
          title: "Module Chair/Lecturer",

        },
      },
      
    ],
  },
 
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
