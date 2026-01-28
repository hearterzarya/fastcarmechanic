export interface ServiceArea {
  id: string;
  name: string;
  eta: string;
  emirate: string;
}

export const serviceAreas: ServiceArea[] = [
  { id: "dubai", name: "Dubai", eta: "25-35 min", emirate: "Dubai" },
  { id: "abu-dhabi", name: "Abu Dhabi", eta: "35-50 min", emirate: "Abu Dhabi" },
  { id: "sharjah", name: "Sharjah", eta: "30-40 min", emirate: "Sharjah" },
  { id: "ajman", name: "Ajman", eta: "35-45 min", emirate: "Ajman" },
  { id: "ras-al-khaimah", name: "Ras Al Khaimah", eta: "45-60 min", emirate: "Ras Al Khaimah" },
  { id: "fujairah", name: "Fujairah", eta: "50-65 min", emirate: "Fujairah" },
  { id: "umm-al-quwain", name: "Umm Al Quwain", eta: "40-55 min", emirate: "Umm Al Quwain" },
];
