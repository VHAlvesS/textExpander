const textContent = document.querySelectorAll("[data-contentToExpand]");

const overflowCheckout = function (HtmlElement) {
  const cHeight = HtmlElement.clientHeight;
  const sHeight = HtmlElement.scrollHeight;
  return sHeight > cHeight;
};

textContent.forEach(function (Element) {
  Element.style.height =
    "calc(var(--line-height) * var(--lines-toShow) * 1rem)";
  const elementSize = overflowCheckout(Element);
  if (elementSize) {
    Element.setAttribute("data-overflow", "true");
    Element.style.height =
      "calc(var(--line-height) * var(--lines-toShow) * 1rem)";
  } else {
    Element.setAttribute("data-overflow", "false");
    Element.style.height = "initial";
    const removeItem = Element.parentNode.querySelector(
      "[data-contentToExpand-button]"
    );
    removeItem.style.display = "none";
  }

  // Show/Hide Button
  Element.parentNode
    .querySelector("[data-contentToExpand-button]")
    .addEventListener("click", function () {
      if (this.textContent === "Read More") {
        Element.style.height = "initial";
        this.textContent = "Read less";
        Element.setAttribute("data-overflow", "false");
        return;
      }
      if (this.textContent === "Read less") {
        Element.style.height =
          "calc(var(--line-height) * var(--lines-toShow) * 1rem)";
        this.textContent = "Read More";
        Element.setAttribute("data-overflow", "true");
        return;
      }
    });
});
