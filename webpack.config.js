const path = require("path");
//const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");

let fs = require("fs");

const preload = fs.readFileSync(__dirname + "/src/_preload.html");
const svg = fs.readFileSync(__dirname + "/src/_svg.html");

const headerComponent = fs.readFileSync(__dirname + "/src/_component-header.html");
const footerComponent = fs.readFileSync(__dirname + "/src/_component-footer.html");

const homeBanner = fs.readFileSync(__dirname + "/src/_home-banner.html");
const danhmucsanpham = fs.readFileSync(__dirname + "/src/_danh-muc-san-pham.html");
const gocbepthongminh = fs.readFileSync(__dirname + "/src/_goc-bep-thong-minh.html");
const sanphammoi = fs.readFileSync(__dirname + "/src/_san-pham-moi.html");
const bandanglamgi = fs.readFileSync(__dirname + "/src/_ban-dang-lam-gi.html");
const sanphamkhuyenmai = fs.readFileSync(__dirname + "/src/_san-pham-khuyen-mai.html");
const camhung = fs.readFileSync(__dirname + "/src/_cam-hung.html");
const tuvanhotro = fs.readFileSync(__dirname + "/src/_tu-van-ho-tro.html");
const camket = fs.readFileSync(__dirname + "/src/_cam-ket.html");
const chuongtrinhkhuyenmai = fs.readFileSync(__dirname + "/src/_chuong-trinh-khuyen-mai.html");
const dangkykhuyenmai = fs.readFileSync(__dirname + "/src/_dang-ky-khuyen-mai.html");
const dichvu = fs.readFileSync(__dirname + "/src/_dich-vu.html");
const productDetail = fs.readFileSync(__dirname +"/src/_product-detail.html");
const breadcrumb = fs.readFileSync(__dirname +"/src/_breadcrumb-component.html");

const thuonghieu = fs.readFileSync(__dirname + "/src/_thuong-hieu.html");
const bosuutap = fs.readFileSync(__dirname + "/src/_bo-suu-tap.html");
const cacduan = fs.readFileSync(__dirname + "/src/_cac-du-an.html");
const doanhnghiepbanner = fs.readFileSync(__dirname + "/src/_doanh-nghiep-banner.html");


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
    doanh_nghiep: ["./src/js/doanh_nghiep.js"],
    product_detail: ["./src/js/product-detail.js"],
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
      danhmucsanpham: danhmucsanpham,
      gocbepthongminh: gocbepthongminh,
      sanphammoi: sanphammoi,
      bandanglamgi: bandanglamgi,
      sanphamkhuyenmai: sanphamkhuyenmai,
      camhung: camhung,
      camket: camket,
      tuvanhotro: tuvanhotro,
      chuongtrinhkhuyenmai: chuongtrinhkhuyenmai,
      dangkykhuyenmai: dangkykhuyenmai,
      dichvu: dichvu,
      footer: footerComponent,
      template: "src/index.html",
      minify: minify,
    }), new HtmlWebpackPlugin({
      inject: false,
      filename: "danh-cho-doanh-nghiep.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      doanhnghiepbanner,
      danhmucsanpham: danhmucsanpham,
      gocbepthongminh: gocbepthongminh,
      bosuutap,
      sanphammoi,
      thuonghieu,
      cacduan,
      camket: camket,
      tuvanhotro: tuvanhotro,
      chuongtrinhkhuyenmai: chuongtrinhkhuyenmai,
      dangkykhuyenmai: dangkykhuyenmai,
      dichvu: dichvu,
      footer: footerComponent,
      template: "src/danh-cho-doanh-nghiep.html",
      minify: minify,
    }),
    // product detail
    new HtmlWebpackPlugin({
      inject: false,
      filename: "product-detail.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      productDetail: productDetail,
      home_banner: homeBanner,
      breadcrumb: breadcrumb,
      danhmucsanpham: danhmucsanpham,
      gocbepthongminh: gocbepthongminh,
      sanphammoi: sanphammoi,
      bandanglamgi: bandanglamgi,
      sanphamkhuyenmai: sanphamkhuyenmai,
      camhung: camhung,
      camket: camket,
      tuvanhotro: tuvanhotro,
      chuongtrinhkhuyenmai: chuongtrinhkhuyenmai,
      dangkykhuyenmai: dangkykhuyenmai,
      dichvu: dichvu,
      footer: footerComponent,
      template: "src/product-detail.html",
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