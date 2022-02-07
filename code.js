const annotations = [];
for (const node of figma.currentPage.selection) {
    if ("children" in node) {
        for (let i = 0; i < node.children.length; i++) {
            //filter only instances of components
            if (node.children[i].type == 'INSTANCE') {
                annotations.push(node.children[i].name);
            }
        }
    }
}
console.log(annotations);
figma.closePlugin();
