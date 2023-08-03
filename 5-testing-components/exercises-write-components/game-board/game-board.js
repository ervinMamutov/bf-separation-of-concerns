/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
  // debugger;
  const table = document.createElement('table');
  arrayOfArrays.forEach((row) => {
    const tr = document.createElement('tr');
    row.forEach((cell) => {
      const td = document.createElement('td');
      td.innerText = cell;
      tr.append(td);
    });
    table.append(tr);
  });

  return table;
};
