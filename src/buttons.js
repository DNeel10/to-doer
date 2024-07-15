
export function createButton(text, onClick) {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = text;
  buttonElement.addEventListener('click', onClick);

  return buttonElement;
}
