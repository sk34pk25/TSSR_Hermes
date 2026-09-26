/* Mermaid 11 — initialisation + re-render après navigation instantanée Material */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof mermaid === "undefined") return;
  mermaid.initialize({ startOnLoad: false });
  const nodes = document.querySelectorAll('.mermaid:not([data-processed])');
  if (nodes.length) mermaid.run({ nodes });
});

document.addEventListener("md-nav$navigation", () => {
  if (typeof mermaid === "undefined") return;
  const nodes = document.querySelectorAll('.mermaid:not([data-processed])');
  if (nodes.length) mermaid.run({ nodes });
});
