// From https://makerkit.dev/blog/tutorials/environment-variables-remix
export function getBrowserEnvironment() {
  const env = process.env;

  return {
    SITE_URL: env.SITE_URL,
    NODE_ENV: env.NODE_ENV,
    GET_IN_TOUCH_API: env.GET_IN_TOUCH_API,
    FREE_SAMPLE_API: env.FREE_SAMPLE_API,
    HIRE_US: env.HIRE_US,
    NEWSLETTER_API: env.NEWSLETTER_API,
    BLOG_API: env.BLOG_API,
    BLOG_URL: env.BLOG_URL,
    MEDIA_URL: env.MEDIA_URL,
    SITE_KEY: env.SITE_KEY,
    CDN_BASE_URL: env.CDN_BASE_URL,
    GTM_TAG: env.GTM_TAG
  };
}
