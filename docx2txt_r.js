import { dir2array } from "https://js.sabae.cc/dir2array.js";

const docx2txt = async (src) => {
  const cmd = new Deno.Command("node", {
    args: ["docx2txt.js", src],
    stdout: "inherit", // そのままターミナルに表示
    stderr: "inherit",
  });
  const { code } = await cmd.output();
  //console.log("終了コード:", code);
  return code;
};

const path = "./data/";
const fns = await dir2array(path);
for (const fn of fns) {
  if (!fn.endsWith(".docx")) continue;
  console.log(path + fn);
  await docx2txt(path + fn);
}
