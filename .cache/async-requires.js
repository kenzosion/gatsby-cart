// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-template-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/templates/post-template.js" /* webpackChunkName: "component---src-templates-post-template-js" */),
  "component---src-templates-blog-template-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/templates/blog-template.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---src-templates-product-template-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/templates/product-template.js" /* webpackChunkName: "component---src-templates-product-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/haurkang/Documents/gatsby-cart/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-page-3-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/pages/page-3.js" /* webpackChunkName: "component---src-pages-page-3-js" */),
  "component---src-pages-products-js": () => import("/Users/haurkang/Documents/gatsby-cart/src/pages/products.js" /* webpackChunkName: "component---src-pages-products-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/haurkang/Documents/gatsby-cart/.cache/data.json")

