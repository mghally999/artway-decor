const CDN_BASE = (import.meta.env.PUBLIC_BUNNY_CDN_BASE as string) || "";

export function cdnUrl(path: string) {
  const base = CDN_BASE.replace(/\/+$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
