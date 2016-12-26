"use strict";
const outOfBounds = (pos, upperLimit) => {
    return (pos[0] < 0 || pos[1] < 0 || pos[0] >= upperLimit || pos[1] >= upperLimit);
};
const isWalkable = (wall, pos, upperLimit) => {
    return !(wall[`${pos[0]} x ${pos[1]}`] || outOfBounds(pos, upperLimit));
};
exports.Maze = {
    toPosArray: (space) => {
        let pos = space.id.split(' x ');
        pos[0] = parseInt(pos[0]);
        pos[1] = parseInt(pos[1]);
        return pos;
    },
    walkable: (wall, current, upperLimit) => {
        const adjSquares = [];
        let row = current[0];
        let col = current[1];
        let up = row + 1;
        let down = row - 1;
        let left = col - 1;
        let right = col + 1;
        if (isWalkable(wall, [row, right], upperLimit)) {
            adjSquares.push([row, right]);
        }
        if (isWalkable(wall, [row, left], upperLimit)) {
            adjSquares.push([row, left]);
        }
        if (isWalkable(wall, [up, col], upperLimit)) {
            adjSquares.push([up, col]);
        }
        if (isWalkable(wall, [down, col], upperLimit)) {
            adjSquares.push([down, col]);
        }
        // if (isWalkable(wall, [up, right])) { adjSquares.push([up, right]); }
        // if (isWalkable(wall, [down, right])) { adjSquares.push([down, right]); }
        // if (isWalkable(wall, [up, left])) { adjSquares.push([up, left]); }
        // if (isWalkable(wall, [down, left])) { adjSquares.push([down, left]); }
        return adjSquares;
    }
};
//# sourceMappingURL=Maze.js.map