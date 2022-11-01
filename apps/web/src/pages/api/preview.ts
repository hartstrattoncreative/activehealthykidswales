import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { previewClient } from 'sanity/server';
import { Page } from 'sanity/types/documents';

const query = groq`*[_type == "page" && slug.current == $slug] { "slug": slug.current }`;

function redirectToPreview(res: NextApiResponse, Location: any) {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});
  // Redirect to a preview capable route
  res.writeHead(307, { Location });
  res.end();
}

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET;
  // Only require a secret when in production
  if (!secret && process.env.NODE_ENV === 'production') {
    throw new TypeError(`Missing SANITY_STUDIO_PREVIEW_SECRET`);
  }
  // Check the secret if it's provided, enables running preview mode locally before the env var is setup
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  // If no slug is provided open preview mode on the frontpage
  if (!req.query.slug) {
    return redirectToPreview(res, '/');
  }

  const page = await previewClient.fetch<{ slug: string }>(query, {
    slug: req.query.slug,
  });

  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' });
  }
  console.log('PAGE', page);

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  redirectToPreview(res, '/');
}
