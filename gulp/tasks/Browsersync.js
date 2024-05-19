"use strict"
const { watch } = require("gulp");
const config = require("../../paths.js");
const { Styles } = require("./Styles.js");
const { Scripts } = require("./Scripts.js");
const { Html } = require("./Html.js");
const { AvifImages } = require("./AvifImages.js");
const { WebpImages } = require("./WebpImages.js");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
const Browsersync = (cb) => {
  reload(),
    browserSync.init({
      notify: false,
      open: true,
      logLevel: "silent",
      reloadOnRestart: false,
      server: true,
      watch: true,
      server: {
        baseDir: config.server,
        index: "index.html"
      },
    }),
    watch(config.images.watch, WebpImages, reload),
    watch(config.images.watch, AvifImages, reload),
    watch(config.scripts.watch, Scripts, reload),
    watch(config.styles.watch, Styles, reload),
    watch(config.html.watch, Html).on("change", browserSync.reload),
    cb();
}
module.exports = { Browsersync };
