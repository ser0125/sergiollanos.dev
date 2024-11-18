export const colorText = (nameElement: HTMLElement) => {
  if (nameElement && nameElement.textContent) {
    nameElement.innerHTML = nameElement.textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    const spans = nameElement.querySelectorAll("span");

    document.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      spans.forEach((span, index) => {
        const spanRect = span.getBoundingClientRect();

        if (
          mouseX >= spanRect.left &&
          mouseX <= spanRect.right &&
          mouseY >= spanRect.top &&
          mouseY <= spanRect.bottom
        ) {
          span.style.background =
            "linear-gradient(90deg, #6a0dad, #b066ff)";
          span.style.webkitBackgroundClip = "text";
          span.style.color = "transparent";
        } else {
          span.style.background = "none";
          span.style.color = "black";
        }
      });
    });
  }
};