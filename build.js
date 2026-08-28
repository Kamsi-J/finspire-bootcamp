const fs = require("fs");
const key = process.env.KORAPAY_KEY || "";
fs.writeFileSync("config.js", `window.KORAPAY_KEY = "${key}";\n`);
