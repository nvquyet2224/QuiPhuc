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

const productDetail = fs.readFileSync(__dirname +"/src/_product-detail.html");
const breadcrumb = fs.readFileSync(__dirname +"/src/_breadcrumb-component.html");
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
const minimized = true;

module.exports = {
  mode: devMode ? "development" : "production",
  watch: true,
  entry: {
    main: ["./src/js/main.js"],
    index: ["./src/js/index.js"],
    business: ["./src/js/business.js"],
    product_detail: ["./src/js/product-detail.js"],
    san_pham_chi_tiet: ["./src/js/san_pham_chi_tiet.js"],
  },
  output: {
    publicPath: "../",
    path: path.resolve(__dirname, "html"),
    filename: isBack ? "../../source/plugins/Web/webroot/js/[name].js" : "js/[name].js", // copy to backend
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
        { from: "src/js/common.js",
          to: isBack ? "../../source/plugins/Web/webroot/js/common.js" : "js/common.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        { from: "src/videos", to: "videos", noErrorOnMissing: true }
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
      filename: "product-detail.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      productDetail: productDetail,
      productRelatedComponent: productRelatedComponent,
      home_banner: homeBanner,
      breadcrumb: breadcrumb,
      commit: commitComponent,
      support: supportComponent,
      promotionComponent: promotionComponent,
      registerPromotion: registerPromotion,
      service: serviceComponent,
      footer: footerComponent,
      template: "src/product-detail.html",
      minify: minify,
    }),
    ,
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