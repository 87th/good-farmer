export interface Crop {
  name: string;
  taxon: string;
  description: string;
  companions: Crop[];
  sunRequirements: SunRequirements;
  sunHours: number;
  soyingMethod: SoyingMethod;
}

enum SunRequirements {
  FullSun = "Full Sun",
  HalfSun = "Half Sun",
}

enum SoyingMethod {
  Transplant = "Transplant",
  Broadcasting = "Broadcasting",
  Dibbling = "Dibbling",
  Drilling = "Drilling",
  Planting = "Planting",
  Transplanting = "Transplanting",
}
