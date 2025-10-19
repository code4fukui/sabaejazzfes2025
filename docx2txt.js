const mammoth = require("mammoth");
const fs = require('fs');

const src = process.argv[2];
const dst = src.substring(0, src.lastIndexOf(".")) + ".txt";

mammoth.extractRawText({ path: src })
  .then(result => {
    const text = result.value;
    console.log(text);
    fs.writeFileSync(dst, text, 'utf8');
  })
  .catch(err => console.error(err));
