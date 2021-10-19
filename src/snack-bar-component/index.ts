import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

const fs = require("fs");

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function snackBarComponent(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    const buffer = fs.readFileSync("../files/snack-bar-component.txt");

    tree.create("src/tests/snack-bar.component.ts", buffer);
    return;
  };
}