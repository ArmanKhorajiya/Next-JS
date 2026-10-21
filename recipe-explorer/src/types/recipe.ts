export type Recipe = {
  id: number;
  slug: string;
  name: string;
  category: string;
  cuisine: string;
  time: number;
  difficulty: string;
  ingredients: string[];
  description: string;
  instructions: string[];
};
