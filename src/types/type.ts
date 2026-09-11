export interface Technology {
  id: string;
  name: string;
  badge: string;
  description: string;
  icon: string;
  category: "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps" | "Tools";
  level: "Beginner-Friendly" | "Intermediate" | "Advanced";
  rating: number;
}