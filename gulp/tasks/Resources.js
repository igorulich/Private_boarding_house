"use strict"
const { src, dest } = require("gulp");
const config = require("../../paths.js");

const Resources = (cb) => {
  return src(config.resources.src, { encoding: false })
    .pipe(dest(config.resources.dest)),
    cb();
}
module.exports = { Resources };
