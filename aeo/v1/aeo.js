(function () {
  function inject() {
    // remove duplicates
    document.querySelectorAll('#codex-aeo-ldjson').forEach(n => n.remove());

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Codex AEO",
      "url": "https://codex-aeo-co.com"
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "codex-aeo-ldjson";
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);

    console.log("Codex AEO: injected ld+json");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();

