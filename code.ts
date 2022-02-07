async function main() {
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
}

const annotations:any[] = [];

for (const node of figma.currentPage.selection) {
  if ("children" in node) {
    for (let i=0; i < node.children.length; i++) {
      if (node.children[i].type == 'INSTANCE') {
        annotations.push(node.children[i].name)
      }
    }
  }
}
console.log(annotations)
figma.closePlugin();
