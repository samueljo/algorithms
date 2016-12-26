"use strict";
class Node {
    constructor(pos, parent, gCost, hCost, fCost) {
        this.pos = pos;
        this.parent = parent;
        this.gCost = gCost;
        this.hCost = hCost;
        this.fCost = fCost;
    }
}
exports.Node = Node;
//# sourceMappingURL=Node.js.map