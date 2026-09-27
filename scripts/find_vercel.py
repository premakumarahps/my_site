import os, re

base = r"d:\1.Antigravity Projects"
for root, dirs, files in os.walk(base):
    if any(x in root for x in ["node_modules", ".next", ".git", "dist"]):
        continue
    for file in files:
        if file.endswith((".md", ".json", ".ts", ".tsx", ".js")):
            fp = os.path.join(root, file)
            try:
                with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    matches = re.findall(r"https?://[a-zA-Z0-9_\-\.]*vercel\.app[^\s\"\'\<\>]*", content)
                    if matches:
                        print(f"{os.path.relpath(fp, base)}: {set(matches)}")
            except Exception:
                pass
