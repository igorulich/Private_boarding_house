"use strict"
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const svgSprite = require("gulp-svg-sprite");

const Sprite = (cb) => {
  return (
    src(config.sprite.src)
      .pipe(
        svgSprite({
          shape: {
            spacing: {
              padding: 5,
            },
          },
          mode: {
            css: {
              dest: ".",
              layout: "diagonal",
              sprite: "./sprite.svg",
              bust: false,
              prefix: ".%s",
              render: {
                scss: {
                  dest: "../../src/scss/_sprite.scss",
                },
              },
            },
          },
        })
      )
  )
    .pipe(dest(config.sprite.dest)),
    cb();
}
module.exports = { Sprite };
