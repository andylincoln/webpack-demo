var styles = require('./main.css');

module.exports = function () {

  var element = document.createElement("h1");
  element.innerHTML = "Hello, Andy!";
  // Attach the generated class name
  element.className = styles.redButton;

  return element;
};
