// ===============================
// Codex AEO — STAGING DEBUG BUILD
// ===============================

// PROOF THAT THE SCRIPT EXECUTED
window.__CODEX_AEO_RAN__ = (window.__CODEX_AEO_RAN__ || 0) + 1;
console.log("Codex AEO: aeo.js executed", window.__CODEX_AEO_RAN__);

// WAIT FOR DOM, THEN INJECT JSON-LD
(function () {
  function injectJSONLD() {
    try {
      // Remove any previous injection
      document.querySelectorAll('#codex-aeo-ldjson').forEach(el => el.remove());

      const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Codex AEO",
        "url": "https://codex-aeo-co.com"
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "codex-aeo-ldjson";
      script.textContent = JSON.stringify(schema);

      document.head.appendChild(script);

      console.log("Codex AEO: JSON-LD injected successfully");
    } catch (err) {
      console.error("Codex AEO: JSON-LD injection failed", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectJSONLD);
  } else {
    injectJSONLD();
  }
})();


