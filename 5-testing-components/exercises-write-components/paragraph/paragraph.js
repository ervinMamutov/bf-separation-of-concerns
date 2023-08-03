/**
 * render a paragraph with optional styling
 *
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
export const paragraph = (text, classList = []) => {
  // see the last example for a hint
  const p = document.createElement('p');
  p.innerText = text;

  classList.forEach((classItem) => {
    console.log(classItem);
    p.classList.add(classItem);
  });
  return p;
};
