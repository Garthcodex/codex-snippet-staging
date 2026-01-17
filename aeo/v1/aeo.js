(function () {
  // Codex AEO - STAGING DEBUG BUILD
  // Purpose: guarantee JSON-LD injection so we can validate the install pipeline end-to-end.

  console.log("Codex AEO: aeo.js running - injecting JSON-LD");

  // Avoid duplicates on reload
  document.querySelectorAll('script[data-codex-aeo="injected"]').forEach(n => n.remove());

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codex AEO",
    "url": "https://codex-aeo-co.com",
    "sameAs": []
  };

  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.setAttribute("data-codex-aeo", "injected");
  s.textContent = JSON.stringify(schema);
  document.head.appendChild(s);

  console.log("Codex AEO: JSON-LD injected");
})();
