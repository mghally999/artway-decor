export const BUNNY_BASE =
  import.meta.env.PUBLIC_BUNNY_CDN_BASE || "https://artwaydecor.b-cdn.net";

export const MAX_IMAGES = Number(
  import.meta.env.PUBLIC_BUNNY_MAX_IMAGES || 250
);
export const STOP_AFTER_FAILS = Number(
  import.meta.env.PUBLIC_BUNNY_STOP_AFTER_FAILS || 8
);

const clean = (s: string) => String(s || "").replace(/^\/+|\/+$/g, "");
const seg = (s: string) => encodeURIComponent(clean(s));

export function bunnyUrl(category: string, project: string, filename: string) {
  const base = String(BUNNY_BASE).replace(/\/+$/g, "");
  return `${base}/${seg(category)}/${seg(project)}/${seg(filename)}`;
}
