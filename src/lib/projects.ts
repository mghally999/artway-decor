import raw from "@/config/projectCategories.json";

export type Project = {
  slug: string;
  title: string;
  count: number;
  ext?: "jpg" | "jpeg" | "png" | "webp";
};

export type Category = {
  slug: string;
  title: string;
  projects: Project[];
};

export const categories: Category[] = (raw as any).categories;

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProject(categorySlug: string, projectSlug: string) {
  const cat = getCategory(categorySlug);
  if (!cat) return null;
  return cat.projects.find((p) => p.slug === projectSlug) || null;
}
