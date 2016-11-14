const isWalkable = (wall, pos) => {
  if (wall[`${pos[0]} x ${pos[1]}`] || pos[0] < 0 || pos[1] < 0) {
    return false;
  } else {
    return true;
  }
};

const Maze = {
  toPosArray: (space) => {
    let pos = space.id.split(' x ');
    pos[0] = parseInt(pos[0]);
    pos[1] = parseInt(pos[1]);
    return pos;
  },

  walkable: (wall, current) => {
    const adjSquares = [];
    let row = current[0];
    let col = current[1];
    let up = row + 1;
    let down = row - 1;
    let left = col - 1;
    let right = col + 1;

    if (isWalkable(wall, [row, right])) { adjSquares.push([row, right]); }
    if (isWalkable(wall, [row, left])) { adjSquares.push([row, left]); }
    if (isWalkable(wall, [up, col])) { adjSquares.push([up, col]); }
    if (isWalkable(wall, [down, col])) { adjSquares.push([down, col]); }
    // if (isWalkable(wall, [up, right])) { adjSquares.push([up, right]); }
    // if (isWalkable(wall, [down, right])) { adjSquares.push([down, right]); }
    // if (isWalkable(wall, [up, left])) { adjSquares.push([up, left]); }
    // if (isWalkable(wall, [down, left])) { adjSquares.push([down, left]); }

    return adjSquares;
  }
};

export default Maze;
