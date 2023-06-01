import { InfoCard } from "../models/info-card-model";

export const EnglishIntroCard = new InfoCard(
  "Hello!",
  "Welcome to my Portfolio Feel free to cycle through these cards to learn about my different projects, experiences, and future goals! Also, be sure to check the contact me page at the bottom of this page!"
);

export const EnglishAboutMeCard = new InfoCard(
  "About Me!",
  "I am a Full Stack Software Engineer that has worked in a huge variety of technologies and languages! Including C#, JavaScript, Python, Golang, and more! Most of my Software Engineering Experience was in Japan, but I am currently furthering my abilities back in my home country the USA!"
);
export const EnglishCollegeCard = new InfoCard(
  "Education",
  "I went to college at BYU Hawaii, I majored in International Business, Japanese, and Computer Sciences. While going to school I was also working as a Japanese Translator/ Tour Guide at Kualoa Ranch! After my time in Hawaii, I moved to Utah and pursued my education further by attending DevMountains Web Development Coding Bootcamp. There I attended a course that majoring in the React library, while creating and managing Postgres Databases and interacting with them with an Express API"
);
export const EnglishSerioCard = new InfoCard("D!", "d");
export const EnglishFuturePlansCard = new InfoCard("E!", "e");

export const InfoCardList = [
  EnglishIntroCard,
  EnglishAboutMeCard,
  EnglishCollegeCard,
  EnglishSerioCard,
  EnglishFuturePlansCard,
];
