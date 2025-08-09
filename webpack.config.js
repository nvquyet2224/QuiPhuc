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
const productCategoryComponent = fs.readFileSync(__dirname + "/src/_product-category.html");
const kitchenComponent = fs.readFileSync(__dirname + "/src/_kitchen.html");
const productNewComponent = fs.readFileSync(__dirname + "/src/_product-new.html");
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


const listBannerComponent = fs.readFileSync(__dirname + "/src/_list-banner.html");
const listProductComponent = fs.readFileSync(__dirname + "/src/_list-product.html");

const newListComponent = fs.readFileSync(__dirname + "/src/_new-list.html");
const newDetailComponent = fs.readFileSync(__dirname + "/src/_new-detail.html");

const aboutComponent = fs.readFileSync(__dirname + "/src/_about.html");
const aboutVisionComponent = fs.readFileSync(__dirname + "/src/_about-vision.html");
const aboutHistoryComponent = fs.readFileSync(__dirname + "/src/_about-history.html");

const roomsComponent = fs.readFileSync(__dirname + "/src/_rooms.html");
const lookbooksDetailComponent = fs.readFileSync(__dirname + "/src/_lookbooks-chi-tiet.html");

const profileDetailComponent = fs.readFileSync(__dirname + "/src/_profile-detail.html");

const loginFormComponent = fs.readFileSync(__dirname + "/src/_login-form.html");

const recruitmentComponent = fs.readFileSync(__dirname + "/src/_recruitment-block.html");
const recruitmentDetailComponent = fs.readFileSync(__dirname + "/src/_recruitment-detail.html");
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
    main: ["./src/js/main.js"],
    index: ["./src/js/index.js"],
    business: ["./src/js/business.js"],
    san_pham_chi_tiet: ["./src/js/san_pham_chi_tiet.js"],
    news: ["./src/js/news.js"],
    new_detail: ["./src/js/new-detail.js"],
    product_list: ["./src/js/product_list.js"],
    lookbooks: ["./src/js/lookbooks.js"],
    profile: ["./src/js/profile.js"],
    login: ["./src/js/login.js"],
    lookbooks_chi_tiet: ["./src/js/lookbooks_chi_tiet.js"],
    about: ["./src/js/about.js"],
    recruitment: ["./src/js/recruitment.js"],
    recruitment_detail: ["./src/js/recruitment-detail.js"],
    cart: ["./src/js/cart.js"],
    support_client: ["./src/js/support-client.js"],
    store: ["./src/js/store.js"],
    contact: ["./src/js/contact.js"],
    promotion: ["./src/js/promotion.js"],
    not_found: ["./src/js/not-found.js"],
  },
  output: {
    publicPath: "../",
    path: path.resolve(__dirname, "html"),
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
          info: { minimized: minimized },
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
          from: "src/js/product_list_main.js",
          to: "js/product_list_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/product_detail_main.js",
          to: "js/product_detail_main.js",
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
          from: "src/js/recruitment_main.js",
          to: "js/recruitment_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/recruitment_detail_main.js",
          to: "js/recruitment_detail_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/lookbooks_chi_tiet_main.js",
          to: "js/lookbooks_chi_tiet_main.js",
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
          from: "src/js/about_main.js",
          to: "js/about_main.js",
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
      productCategoryComponent: productCategoryComponent,
      kitchen: kitchenComponent,
      productNewComponent: productNewComponent,
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
      productCategoryComponent: productCategoryComponent,
      kitchen: kitchenComponent,
      collection: collectionComponent,
      productNewComponent: productNewComponent,
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
      newListComponent: newListComponent,
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
      newDetailComponent: newDetailComponent,
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
      listBannerComponent,
      listProductComponent,
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
      filename: "lookbooks.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      rooms: roomsComponent,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/lookbooks.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "lookbooks-chi-tiet.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      detail: lookbooksDetailComponent,
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/lookbooks-chi-tiet.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "profile.html",
      preload: preload,
      svg: svg,
      header: headerNoramComponent,
      detail: profileDetailComponent,
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
      form: loginFormComponent,
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
      aboutComponent: aboutComponent,
      commit: commitComponent,
      componentPartner: componentPartner,
      aboutHistoryComponent: aboutHistoryComponent,
      aboutVisionComponent: aboutVisionComponent,
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
      recruitmentComponent: recruitmentComponent,
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
      recruitmentDetailComponent: recruitmentDetailComponent,
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
      registerPromotion: registerPromotion,
      footer: footerComponent,
      template: "src/cua-hang.html",
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