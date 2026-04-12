const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix image src with basePath for static export compatibility */
export function img(src: string): string {
  if (!basePath || src.startsWith("http") || src.startsWith(basePath)) return src;
  return `${basePath}${src}`;
}
