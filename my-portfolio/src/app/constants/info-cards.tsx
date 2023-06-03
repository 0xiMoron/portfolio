import { InfoCard } from "../models/info-card-model";

export const EnglishIntroCard = new InfoCard(
  "Hello!",
  "Welcome to my Portfolio Feel free to cycle through these cards to learn about my different projects, experiences, and future goals! Also, be sure to check the contact me page at the bottom of this page!"
);

export const EnglishAboutMeCard = new InfoCard(
  "About Me",
  "I am a Full Stack Software Engineer that has worked in a huge variety of technologies and languages! Including C#, JavaScript, Python, Golang, and more! Most of my Software Engineering Experience was in Japan, but I am currently furthering my abilities back in my home country the USA!"
);
export const EnglishCollegeCard = new InfoCard(
  "Education",
  "I attended college at BYU Hawaii, I majored in International Business, Japanese, and Computer Sciences. While going to school I was also working as a Japanese Translator/ Tour Guide at Kualoa Ranch! After my time in Hawaii, I moved to Utah and pursued my education further by attending DevMountains Web Development Coding Bootcamp. There I attended a course that majoring in the React library, while creating and managing Postgres Databases and interacting with them with an Express API"
);
export const EnglishSerioCard = new InfoCard(
  "Serio",
  "Serio (セリオ株式会社) was a Japanese Company in Okayama, Japan that I had worked for. I was a member of the Research and Development Team for 3 years. My day to day was to research what was the latest and greatest in the tech industry and bring that skill set to the Japanese front. We would create a variety of sample projects that were released within the company, utilizing tools like Kubernetes and Docker while also implementing high quality code design practices like DDD and clean automated testing. We were building in applications as Microservices and implementing Distributed Transactions within them, while also utilizing CI/CD tools for seamless deployment. I also was part of a team that initialized an AI Project where we created a Neural Network that could take video footage of a construction site and detect dangerous situations using Object Detection coupled with Posture Detection (all written in Python)."
);

export const EnglishInternshipCard = new InfoCard(
  "Serio's Intership",
  "While at Serio one of my responsibilities was to mentor their Internships that occurred twice a year. I would teach a group of college students about basic web development utilizing a Vue.js Frontend and a Python backend while working in an Agile Scrum enviroment. We would lead the teams of students to create the Frontend and Backend as separate microservices, and had them containerize each individual service and deploy them to our private Azure Cloud using Docker and Kubernetes. We also used MongoDB for our Kubernetes Containerized Database",
  ["git-alt", "docker", "python", "vuejs", "js"]
);

export const EnglishCompanyTrainingCard = new InfoCard(
  "Company Training",
  "In my second year with Serio, I was asked to lead the training of the new employees. We taught extensive classes about frontend frameworks (React, Angular, Vue), backend API’s and REST functions, agile development, microservice architecture vs the monolith, and cloud computing with containerization. I specifically was incharge of introducing Kubernetes, Docker, and various DevOps services. We then supervised their progress on their assigned projects as a “Product Manager”, debugging their code, supervising version control with git, helping with authorization services and environment setup. We had them make two microservices, a frontend made in Angular, and a backend made in .Net",
  ["git-alt", "docker", "python", "angular", "js", "css3-alt", "bootstrap"]
);

export const EnglishFoobarEatsCard = new InfoCard(
  "Project: FoobarEats",
  "As a member of the Research and Development team at Serio, it was our responsibility to find the cutting edge of tech and apply it to projects within our company. One of our sample projects displaying a wide array of technologies and modern practices was “Foobar Eats”. It was a multi microservice project that implemented the DDD Onion Architecture design, and had a reliable system for Distributed Transactions. We created two different Saga Orchestrators to compare their reliability, scalability, and ease of use. The two we used were Zeebe and MassTransit and I led the initial research and development of our Zeebe Saga Orchestrator.  We wanted to use a variety of languages for our microservices and have them interact through a central Orchestrator. Our tech stack was Angular in the Frontend, 3 .Net Microservices, and a Golang microservice. The project was made to mimic UberEats (hence the name FoobarEats) and had an Order page, Store/Inventory managing Microservice, a Delivery Microservice, and a separate Payment Microservice. We implemented various Automated Tests as well, including Unit, Component, and E2E testing.",
  [
    "git-alt",
    "docker",
    "python",
    "angular",
    "js",
    "css3-alt",
    "bootstrap",
    "linux",
    "stripe",
    "windows",
  ]
);

export const EnglishAiProjectCard = new InfoCard(
  "Project: Arakigumi Ai Project",
  "While with Serio, I was a founding member of the Arakigumi Ai project still currently being developed."
);

export const EnglishKubernetesClusterCard = new InfoCard(
  "Project: Raspi Kubernetes Cluster",
  "e",
  ["raspberry-pi", "ubuntu"]
);

export const EnglishSocialCodersCard = new InfoCard(
  "Project: Social Coders",
  "e"
);

export const EnglishFuturePlansCard = new InfoCard("My Current Goals", "e");

export const InfoCardList = [
  EnglishIntroCard,
  EnglishAboutMeCard,
  EnglishCollegeCard,
  EnglishSerioCard,
  EnglishInternshipCard,
  EnglishCompanyTrainingCard,
  EnglishFoobarEatsCard,
];
