export class Partner {
  name: string;
  logoUrl: string;
  description: string;

  constructor(name: string, logo: string, description: string) {
    this.name = name;
    this.logoUrl = logo;
    this.description = description;
  }
}
