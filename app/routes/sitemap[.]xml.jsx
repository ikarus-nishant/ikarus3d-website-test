import { siteMapTags as RoutesMeta } from '.';

function pathToEntry(meta, today) {
  return `
    <url>
      <loc>${meta.url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${meta.priority}</priority>
    </url>
`;
}

function routesToSitemap(metas, today) {
  let sitemapContent = '';
  for (const meta of metas) {
    sitemapContent += pathToEntry(meta, today);
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
    ${sitemapContent}
</urlset>
`;
}

function getMeta(meta, domain, metaList) {
  const url = meta.find((obj) => obj.name === 'route');
  if (!url) {
    let name = "";
    if (metaList.length === 0) {
      name = domain;
      throw new Error(`'url' is undefined at ${name}. Stopping the build.`);
    } else {
      name = metaList[metaList.length - 1].url;
      throw new Error(`'url' is undefined in the next route of ${name}. Stopping the build.`);
    }
  }
  const priority = meta.find((obj) => obj.name === 'priority');
  if (!priority) {
    throw new Error(`'priority' is undefined at .${url.content}. Stopping the build.`);
  }
  const routeMeta = {
    url: domain + url.content,
    priority: priority.content
  };
  metaList.push(routeMeta);
  const next_meta = meta.find((obj) => obj.name === 'next-route');
  if (!next_meta) {
    if (url.content !== '/privacy-policy') {
      throw new Error(`'next_meta' is undefined at .${url.content}. Stopping the build.`);
    }
    return;
  } else {
    getMeta(next_meta.content, domain, metaList);
  }
}

export async function generateSitemap() {
  const domain = process.env.SITE_URL || 'https://ikarus3d.com';
  const today = new Date().toISOString();
  const metaList = [];
  let meta = RoutesMeta();
  getMeta(meta, domain, metaList);
  const sitemap = routesToSitemap(metaList, today);
  return sitemap;
}

export async function loader() {
  const sitemap = await generateSitemap();
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
