import childProcess from 'child_process';
import fs from 'fs';
import dotenv from 'dotenv';
import prettier from 'prettier';
// import { env } from 'process';
import { siteMapTags as RoutesMeta } from '.';

const rootDir = process.cwd();

dotenv.config({
  path: `${rootDir}/.env.${process.env.NODE_ENV}`,
});

const today = new Date().toISOString();

console.log("the current env is ", process.env.NODE_ENV);

const domain = process.env.SITE_URL || 'https://ikarus3d.com';

const metaList = [];

console.log(`Updating sitemap on ${today} for domain ${domain}...`);

function pathToEntry(meta) {
  return `
    <url>
      <loc>${meta.url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${meta.priority}</priority>
    </url>
`;
}

function routesToSitemap(metas) {
  let sitemapContent = '';
  for (const meta of metas) {
    sitemapContent += pathToEntry(meta);
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

function getMeta(meta){
  const url = meta.find((obj)=>obj.name==='route');
  if(!url){
    let name = "";
    if(metaList.length===0){
      name=domain;
      throw new Error(`'url' is undefined at ${name}. Stopping the build.`);
    }else{
        name = metaList[metaList.length-1].url;
        throw new Error(`'url' is undefined in the next route of ${name}. Stopping the build.`);
    }
  }
  const priority = meta.find((obj)=>obj.name==='priority');
  if (!priority) {
    throw new Error(`'priority' is undefined at .${url.content}. Stopping the build.`);
  }
  const routeMeta = {
    url: domain+url.content,
    priority: priority.content
  }
  metaList.push(routeMeta);
  const next_meta = meta.find((obj)=>obj.name==='next-route');
  if(!next_meta){
    if(url.content!=='/privacy-policy'){
      throw new Error(`'next_meta' is undefined at .${url.content}. Stopping the build.`);
    }
    return;
  }else{
    getMeta(next_meta.content);
  }
}
export async function generateSitemap() {
    let meta = RoutesMeta();
    getMeta(meta);
    const sitemap = routesToSitemap(metaList);
    fs.writeFileSync('./public/ikarus3d_sitemap.xml', sitemap, 'utf8');
    console.log('ikarus3d_sitemap.xml updated', process.env.NODE_ENV);
    return sitemap;
}