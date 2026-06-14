const fs = require('fs');
const html = fs.readFileSync('C:/Users/Anish/.gemini/antigravity-ide/brain/fe4401ec-ee0d-44fb-bc5f-e7d26352b8c0/.system_generated/steps/85/content.md', 'utf8');
const idx = html.indexOf('<div id="experience"');
console.log(html.substring(idx, idx + 4000));
