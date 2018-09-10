const fs = require('fs');

const html = fs.readFileSync('./index.html').toString();
const files = fs.readdirSync('./src/data');

files.forEach(file => {
    if (file.search('.md') !== -1) {
        const extensionlessFile = file.replace(/\.md/, '');
        fs.mkdirSync(extensionlessFile);
        fs.writeFileSync(`${extensionlessFile}/index.html`, html);
    }
});
