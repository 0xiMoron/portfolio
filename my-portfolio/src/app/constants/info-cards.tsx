import { InfoCard } from "../models/info-card-model";

export const EnglishIntroCard = new InfoCard(
  "Hello!",
  "Welcome to my Portfolio Feel free to cycle through these cards to learn about my different projects, experiences, and future goals! Also, be sure to check the contact me page at the bottom of this page!"
);

export const EnglishAboutMeCard = new InfoCard("About Me!", "a");
export const EnglishCollegeCard = new InfoCard("B!", "b");
export const EnglishDevMountainCard = new InfoCard("C!", "c");
export const EnglishSerioCard = new InfoCard("D!", "d");
export const EnglishFuturePlansCard = new InfoCard("E!", "e");

export const InfoCardList = [
  EnglishIntroCard,
  EnglishAboutMeCard,
  EnglishCollegeCard,
  EnglishDevMountainCard,
  EnglishSerioCard,
  EnglishFuturePlansCard,
];
