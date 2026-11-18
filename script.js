document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("action-btn");
  const output = document.getElementById("output");
  let clickCount = 0;

  btn.addEventListener("click", () => {
    clickCount++;
    output.textContent = `Button clicked ${clickCount} time(s)!`;
  });
});