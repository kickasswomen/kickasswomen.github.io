const fs = require('fs');

const html = fs.readFileSync('./index.html').toString();
const files = fs.readdirSync('./src/data');

files.forEach(file => {
    if (file.search('.md') !== -1) {
        fs.writeFileSync(file.replace(/\.md/, '.html'), html);
    }
});
