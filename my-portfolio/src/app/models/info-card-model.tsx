export class InfoCard {
  title: string;
  description: string;
  icons?: string[];
  image?: string;

  constructor(
    title: string,
    description: string,
    icons?: string[],
    image?: string
  ) {
    this.title = title;
    this.description = description;
    this.icons = icons;
    this.image = image;
  }
}
