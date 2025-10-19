import { CSV } from "https://js.sabae.cc/CSV.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";

const shops = {};

const path = "./data/";
const fns = await dir2array(path);
let id = 1;
for (const fn of fns) {
  const ss = fn.split("/");
  const type = ss[0];
  const shop = ss[1];
  if (type == ".DS_Store" || shop == ".DS_Store") continue;

  let o = shops[shop];
  if (!o) {
    o = shops[shop] = { id, type, title: shop, nimg: 0 };
    id++;
  }
  console.log(type, shop);
  
  const ext = fn.toLowerCase().substring(fn.lastIndexOf("."));
  if (fn.endsWith(".txt")) {
    const txt = await Deno.readTextFile(path + fn);
    o.description = txt;
  } else if (ext.endsWith(".png") || ext.endsWith(".jpeg") || ext.endsWith(".jpg")) {
    const bin = await Deno.readFile(path + fn);
    o.nimg++;
    const fnimg = o.id + "_" + o.nimg + ext;
    await Deno.writeFile("./img/" + fnimg, bin);
    if (o.nimg == 1) {
      o.img = "https://code4fukui.github.io/sabaejazzfes2025/img/" + fnimg;
    }
  }
}

await Deno.writeTextFile("shops.csv", CSV.stringify(Object.values(shops)));
