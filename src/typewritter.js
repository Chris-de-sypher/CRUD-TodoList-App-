/** @format */

var textarea = document.getElementById("typing");

var customNodeCreator = function (character) {
  // Add character to input placeholder
  textarea.placeholder = textarea.placeholder + character;

  // Return null to skip internal adding of dom node
  return null;
};

var onRemoveNode = function ({ character }) {
  if (textarea.placeholder) {
    // Remove last character from input placeholder
    textarea.placeholder = textarea.placeholder.slice(0, -1);
  }
};

var typewriters = new Typewriter(null, {
  loop: true,
  delay: 85,
  onCreateTextNode: customNodeCreator,
  onRemoveNode: onRemoveNode,
});

typewriters.typeString("Type to add an item....").pauseFor(1000).start();
/* typewriterfor placeholder-end*/
