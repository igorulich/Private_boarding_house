"use strict"
const rimraf = require("rimraf");

 const Clean=(cb)=> {
   rimraf.sync(["assets"]), cb();
}
module.exports = { Clean }
// , "./src/scss/_sprite.scss",
