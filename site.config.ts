import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6fb673db682746cfa1ff68ca9b259186',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'May13th',
  domain: 'osier-river',
  author: 'LiuHe&GaoJialu',

  // open graph metadata (optional)
  description: 'May13th',

  // social usernames (optional)
//   twitter: 'transitive_bs',
  github: 'Shydlock',
  zhihu: 'bing-yu-18-12',
  zhihu2: 'lu-lu-lu-80-57',
//   linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
//   navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '1f17fb2b65cf4156966c7e402a4391b4'
    },
    {
      title: 'Origin',
      pageId: 'b164749fbc1b421bb8d6b0c3f6f583e1'
    },
    {
      title: 'Contact',
      pageId: '7467dc135ab340daacf9fcef41b962a0'
    }
  ]
})
