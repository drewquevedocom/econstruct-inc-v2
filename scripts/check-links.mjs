const base = process.argv[2] ?? "http://127.0.0.1:3000";
const seen = new Set();
const queue = ["/"];
const results = [];
const hrefRe = /href="([^"#]+)"/g;

while (queue.length) {
  const path = queue.shift();
  if (!path || seen.has(path)) {
    continue;
  }

  seen.add(path);

  try {
    const response = await fetch(`${base}${path}`, { redirect: "manual" });
    results.push({ path, status: response.status });

    if (response.status !== 200) {
      continue;
    }

    const html = await response.text();
    let match;

    while ((match = hrefRe.exec(html)) !== null) {
      const href = match[1];
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        !href.startsWith("/")
      ) {
        continue;
      }

      queue.push(href);
    }
  } catch (error) {
    results.push({ path, status: "ERROR", error: String(error) });
  }
}

console.log(JSON.stringify(results, null, 2));

const bad = results.filter((result) => result.status !== 200);

if (bad.length) {
  console.error(JSON.stringify(bad, null, 2));
  process.exit(1);
}
