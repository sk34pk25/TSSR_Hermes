/* Mermaid 11 — rendu compatible avec Material instant navigation */
mermaid.initialize({ startOnLoad: false });

document$.subscribe(() => {
  const nodes = document.querySelectorAll(".mermaid:not([data-processed])");
  if (nodes.length) {
    mermaid.run({ nodes });
  }
});
