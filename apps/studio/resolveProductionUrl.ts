const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET as string;

export default function resolveProductionUrl(doc: any): string {
  const url = process.env.SANITY_STUDIO_PRODUCTION_URL ?? `http://localhost:3000`;
   const previewUrl = new URL(url);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.path?.current ?? `/`);

  return previewUrl.toString();
}
