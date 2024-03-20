const fs = require('fs');
const path = require('path');

function generateFolderStructureTree(folderPath, prefix = '') {
    const files = fs.readdirSync(folderPath);
    let tree = '';

    files.forEach((file, index) => {
        if (file !== 'node_modules') { // Skip node_modules folder
            const filePath = path.join(folderPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                tree += `${prefix}${index === files.length - 1 ? '└──' : '├──'} ${file}\n`;
                tree += generateFolderStructureTree(filePath, `${prefix}${index === files.length - 1 ? '   ' : '│  '}`);
            } else {
                tree += `${prefix}${index === files.length - 1 ? '└──' : '├──'} ${file}\n`;
            }
        }
    });

    return tree;
}

// Usage: Provide the path to the root folder of your React Native project
const folderPath = './src';
console.log(generateFolderStructureTree(folderPath));
