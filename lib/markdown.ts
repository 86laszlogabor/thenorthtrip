function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// nagyon basic markdown: h1-h3, p, ul/li, code inline, link
export function markdownToHtml(md: string): string {
  const lines = md.replaceAll("\r\n", "\n").split("\n");

  let html = "";
  let inList = false;

  const flushList = () => {
    if (inList) {
      html += "</ul>";
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      flushList();
      continue;
    }

    // headings
    if (line.startsWith("### ")) {
      flushList();
      html += `<h3>${escapeHtml(line.slice(4))}</h3>`;
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      html += `<h2>${escapeHtml(line.slice(3))}</h2>`;
      continue;
    }
    if (line.startsWith("# ")) {
      flushList();
      html += `<h1>${escapeHtml(line.slice(2))}</h1>`;
      continue;
    }

    // list items
    if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      const item = escapeHtml(line.slice(2));
      html += `<li>${formatInline(item)}</li>`;
      continue;
    }

    flushList();

    // paragraph
    html += `<p>${formatInline(escapeHtml(line))}</p>`;
  }

  flushList();
  return html;
}

function formatInline(s: string): string {
  // inline code: `code`
  s = s.replace(/`([^`]+)`/g, (_m, g1) => `<code>${g1}</code>`);

  // links: [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text, url) => {
    const safeUrl = url.startsWith("http") || url.startsWith("/") ? url : "#";
    const isExternal = /^https?:\/\//i.test(safeUrl);
    const rel = isExternal ? ` rel="nofollow sponsored noopener noreferrer"` : "";
    const target = isExternal ? ` target="_blank"` : "";
    return `<a href="${safeUrl}"${target}${rel}>${text}</a>`;
  });

  return s;
}
