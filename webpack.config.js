const path = require("path");
//const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");

let fs = require("fs");

const preload = fs.readFileSync(__dirname + "/src/_preload.html");
const svg = fs.readFileSync(__dirname + "/src/_svg.html");

const headerComponent = fs.readFileSync(__dirname + "/src/_component-header.html");
const headerNoramComponent = fs.readFileSync(__dirname + "/src/_component-header-normal.html");
const footerComponent = fs.readFileSync(__dirname + "/src/_component-footer.html");
const componentPartner = fs.readFileSync(__dirname + "/src/_component-partner.html");

const homeBanner = fs.readFileSync(__dirname + "/src/_home-banner.html");
const productCategory = fs.readFileSync(__dirname + "/src/_product-category.html");
const kitchenComponent = fs.readFileSync(__dirname + "/src/_kitchen.html");
const productNew = fs.readFileSync(__dirname + "/src/_product-new.html");
const whatnowComponent = fs.readFileSync(__dirname + "/src/_whatnow.html");
const productPromotion = fs.readFileSync(__dirname + "/src/_product-promotion.html");
const inspirationComponent = fs.readFileSync(__dirname + "/src/_inspiration.html"); 
const supportComponent = fs.readFileSync(__dirname + "/src/_support.html");
const commitComponent = fs.readFileSync(__dirname + "/src/_commit.html");
const promotionComponent = fs.readFileSync(__dirname + "/src/_promotion.html");
const registerPromotion = fs.readFileSync(__dirname + "/src/_register-promotion.html");
const serviceComponent = fs.readFileSync(__dirname + "/src/_service.html");

const breadcrumb = fs.readFileSync(__dirname + "/src/_breadcrumb-component.html");
const productRelatedComponent = fs.readFileSync(__dirname + "/src/_product-related.html");

const brandComponent = fs.readFileSync(__dirname + "/src/_brand.html");
const collectionComponent = fs.readFileSync(__dirname + "/src/_collection.html");
const projectComponent = fs.readFileSync(__dirname + "/src/_project.html");
const businessBannerComponent = fs.readFileSync(__dirname + "/src/_business-banner.html");

const mainProductComponent = fs.readFileSync(__dirname + "/src/_main-product.html");
const detailInfo = fs.readFileSync(__dirname + "/src/_detail-info.html");
const detailVideo = fs.readFileSync(__dirname + "/src/_detail-video.html");
const detailSafeComponent = fs.readFileSync(__dirname + "/src/_product-detail-safe.html");
const detailStructureComponent = fs.readFileSync(__dirname + "/src/_product-detail-structure.html");
const detailBigimgComponent = fs.readFileSync(__dirname + "/src/_product-detail-bigimg.html");
const detailAdditionalComponent = fs.readFileSync(__dirname + "/src/_product-detail-additional.html");


const banners = fs.readFileSync(__dirname + "/src/_list-banner.html");
const products = fs.readFileSync(__dirname + "/src/_list-product.html");

const news = fs.readFileSync(__dirname + "/src/_new-list.html");
const newDetail = fs.readFileSync(__dirname + "/src/_new-detail.html");
  
const about = fs.readFileSync(__dirname + "/src/_about.html");
const aboutVision = fs.readFileSync(__dirname + "/src/_about-vision.html");
const aboutHistory = fs.readFileSync(__dirname + "/src/_about-history.html");

const lookbooks = fs.readFileSync(__dirname + "/src/_lookbooks.html"); 
const lookbook = fs.readFileSync(__dirname + "/src/_lookbook.html");
const lookbookRelated = fs.readFileSync(__dirname + "/src/_lookbook-related.html");

const login = fs.readFileSync(__dirname + "/src/_login-form.html");
const profile = fs.readFileSync(__dirname + "/src/_profile-detail.html");

const stores = fs.readFileSync(__dirname + "/src/_list-store.html");

const searchResult = fs.readFileSync(__dirname + "/src/_search-result.html");

const recruitments = fs.readFileSync(__dirname + "/src/_recruitment-block.html");
const recruitment = fs.readFileSync(__dirname + "/src/_recruitment-detail.html");
//noErrorOnMissing: true

const minifyRules = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: false,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

const devMode = true;
const isBack = false;
const minify = false;
const minimized = false;

module.exports = {
  mode: devMode ? "development" : "production",
  watch: true,
  entry: {
    critical: ["./src/js/critical.js"],
    cmp_critical: ["./src/js/critical.js"],
    cmp_about_block: ["./src/js/about-block.js"],
    cmp_animation: ["./src/js/animation.js"],
    cmp_banner_business: ["./src/js/banner-business.js"],
    cmp_banner_list: ["./src/js/banner-list.js"],
    cmp_banner: ["./src/js/banner.js"],
    cmp_brand: ["./src/js/brand.js"],
    cmp_breadcrumb: ["./src/js/breadcrumb.js"],
    cmp_cart_block: ["./src/js/cart-block.js"],
    cmp_categories: ["./src/js/categories.js"],
    cmp_category: ["./src/js/category.js"],
    cmp_collection: ["./src/js/collection.js"],
    cmp_commit: ["./src/js/commit.js"],
    cmp_common: ["./src/js/common-ui.js"],
    cmp_contact_block: ["./src/js/contact-block.js"],
    cmp_detail_info: ["./src/js/detail-info.js"],
    cmp_detail_video: ["./src/js/detail-video.js"],
    cmp_filter: ["./src/js/filter.js"],
    cmp_footer: ["./src/js/footer.js"],
    cmp_form: ["./src/js/form.js"],
    cmp_header: ["./src/js/header.js"],
    cmp_inspiration: ["./src/js/inspiration.js"],
    cmp_jquery_ui: ["./src/js/jquery-ui-ui.js"],
    cmp_kitchen: ["./src/js/kitchen.js"],
    cmp_list_store: ["./src/js/list-store.js"],
    cmp_login_form: ["./src/js/login-form.js"],
    cmp_lookbook_detail: ["./src/js/lookbook-detail.js"],
    cmp_main_product: ["./src/js/main-product.js"],
    cmp_mini_cart: ["./src/js/mini-cart.js"],
    cmp_new_detail: ["./src/js/new_detail.js"],
    cmp_new_list: ["./src/js/new-list.js"],
    cmp_notfound: ["./src/js/not-found-block.js"],
    cmp_pagination: ["./src/js/pagination.js"],
    cmp_popup: ["./src/js/popup.js"],
    cmp_product_detail_common: ["./src/js/product-detail-common.js"],
    cmp_product_list: ["./src/js/product-list.js"],
    cmp_profile_detail: ["./src/js/profile-detail.js"],
    cmp_project: ["./src/js/project.js"],
    cmp_promotion_block: ["./src/js/promotion-block.js"],
    cmp_promotion: ["./src/js/promotion-ui.js"],
    cmp_recruitment_block: ["./src/js/recruitment-block.js"],
    cmp_regiter_promotion: ["./src/js/regiter-promotion.js"],
    cmp_reset: ["./src/js/reset.js"],
    cmp_rooms: ["./src/js/rooms.js"],
    cmp_search_popup: ["./src/js/search-popup.js"],
    cmp_search_result: ["./src/js/search-result.js"],
    cmp_service: ["./src/js/service.js"],
    cmp_swiper: ["./src/js/swiper-ui.js"],
    cmp_whatnow: ["./src/js/whatnow.js"],


    main: ["./src/js/main.js"],
    index: ["./src/js/index.js"],
    business: ["./src/js/business.js"],
    news: ["./src/js/news.js"],
    new_detail: ["./src/js/new-detail.js"],
    products: ["./src/js/products.js"],
    product: ["./src/js/product.js"],
    lookbooks: ["./src/js/lookbooks.js"],
    lookbook: ["./src/js/lookbook.js"],
    profile: ["./src/js/profile.js"],
    login: ["./src/js/login.js"],
    about: ["./src/js/about.js"],
    recruitments: ["./src/js/recruitments.js"],
    recruitment: ["./src/js/recruitment.js"],
    cart: ["./src/js/cart.js"],
    support_client: ["./src/js/support-client.js"],
    store: ["./src/js/store.js"],
    search: ["./src/js/search.js"],
    contact: ["./src/js/contact.js"],
    promotion: ["./src/js/promotion.js"],
    not_found: ["./src/js/not-found.js"],
  },
  output: {
    publicPath: "../",
    path: path.resolve(__dirname, "html"),
    filename: isBack ? "../../source/plugins/Web/webroot/js/[name].js" : "none/[name].js",
    //filename: isBack ? "../../source/plugins/Web/webroot/js/[name].js" : "js/[name].js", // copy to backend
    library: ["[name]", "modules"],
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isBack ? "../../source/plugins/Web/webroot/css/[name].css" : "css/[name].css", // copy to backend
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images", noErrorOnMissing: true },
        {
          from: "src/js/jquery.js",
          to: "js/jquery.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/jquery-ui.js",
          to: "js/jquery-ui.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/swiper-bundle.js",
          to: "js/swiper-bundle.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/lottie-player.js",
          to: "js/lottie-player.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/common.js",
          to: "js/common.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/index_main.js",
          to: "js/index_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/business_main.js",
          to: "js/business_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/products_main.js",
          to: "js/products_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/product_main.js",
          to: "js/product_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/lookbooks_main.js",
          to: "js/lookbooks_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/lookbook_main.js",
          to: "js/lookbook_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/recruitments_main.js",
          to: "js/recruitments_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/recruitment_main.js",
          to: "js/recruitment_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/profile_main.js",
          to: "js/profile_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/login_main.js",
          to: "js/login_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/store_main.js",
          to: "js/store_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/search_main.js",
          to: "js/search_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/about_main.js",
          to: "js/about_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/promotion_main.js",
          to: "js/promotion_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/contact_main.js",
          to: "js/contact_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/cart_main.js",
          to: "js/cart_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        { from: "src/videos", to: "videos", noErrorOnMissing: true },
        { from: "src/jsons", to: "jsons", noErrorOnMissing: true }
      ],
      options: {
        concurrency: 100
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "index.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      home_banner: homeBanner,
      productCategory: productCategory,
      kitchen: kitchenComponent,
      productNew: productNew,
      whatnowComponent: whatnowComponent,
      productPromotion: productPromotion,
      inspiration: inspirationComponent,
      commit: commitComponent,
      support: supportComponent,
      promotionComponent: promotionComponent,
      registerPromotion: registerPromotion,
      service: serviceComponent,
      footer: footerComponent,
      template: "src/index.html",
      minify: minify,
    }), new HtmlWebpackPlugin({
      inject: false,
      filename: "danh-cho-doanh-nghiep.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      businessBannerComponent: businessBannerComponent,
      productCategory: productCategory,
      kitchen: kitchenComponent,
      collection: collectionComponent,
      productNew: productNew,
      brandComponent: brandComponent,
      project: projectComponent,
      commit: commitComponent,
      support: supportComponent,
      promotionComponent: promotionComponent,
      registerPromotion: registerPromotion,
      service: serviceComponent,
      footer: footerComponent,
      template: "src/danh-cho-doanh-nghiep.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "san-pham-chi-tiet.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      // productDetail: productDetail,
      mainProductComponent,
      productRelatedComponent: productRelatedComponent,
      home_banner: homeBanner,
      breadcrumb: breadcrumb,
      detailInfo: detailInfo,
      detailVideo,
      detailSafeComponent,
      detailStructureComponent,
      detailBigimgComponent,
      detailAdditionalComponent,
      commit: commitComponent,
      support: supportComponent,
      promotionComponent: promotionComponent,
      registerPromotion: registerPromotion,
      service: serviceComponent,
      footer: footerComponent,
      template: "src/san-pham-chi-tiet.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "tin-tuc.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      news: news,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/tin-tuc.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "tin-chi-tiet.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      newDetail: newDetail,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/tin-chi-tiet.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "san-pham.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      productRelatedComponent: productRelatedComponent,
      home_banner: homeBanner,
      breadcrumb: breadcrumb,
      banners,
      products,
      commit: commitComponent,
      support: supportComponent,
      promotionComponent: promotionComponent,
      registerPromotion: registerPromotion,
      service: serviceComponent,
      footer: footerComponent,
      template: "src/san-pham.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "san-pham-doanh-nghiep.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      productRelatedComponent: productRelatedComponent,
      home_banner: homeBanner,
      breadcrumb: breadcrumb,
      banners,
      products,
      commit: commitComponent,
      support: supportComponent,
      promotionComponent: promotionComponent,
      registerPromotion: registerPromotion,
      service: serviceComponent,
      footer: footerComponent,
      template: "src/san-pham-doanh-nghiep.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "khong-gian.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      rooms: lookbooks,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/khong-gian.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "khong-gian-chi-tiet.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      lookbook: lookbook,
      lookbookRelated: lookbookRelated,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/khong-gian-chi-tiet.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "profile.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      detail: profile,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/profile.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "login.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      form: login,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/login.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "ve-qui-phuc.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      about: about,
      commit: commitComponent,
      componentPartner: componentPartner,
      aboutHistory: aboutHistory,
      aboutVision: aboutVision,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/ve-qui-phuc.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "tuyen-dung.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      recruitments: recruitments,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/tuyen-dung.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "tuyen-dung-chi-tiet.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      recruitment: recruitment,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/tuyen-dung-chi-tiet.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "cart.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/cart.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "cua-hang.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      stores: stores,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/cua-hang.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "tim-kiem.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      searchResult:searchResult,
      products,
      registerPromotion: registerPromotion,
      service: serviceComponent,
      footer: footerComponent,
      template: "src/tim-kiem.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "ho-tro-khach-hang.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/ho-tro-khach-hang.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "lien-he.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/lien-he.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "khuyen-mai.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      productCategory: productCategory,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/khuyen-mai.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "404.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/404.html",
      minify: minify,
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  watchOptions: {
    ignored: "**/node_modules",
    aggregateTimeout: 100,
  },
};