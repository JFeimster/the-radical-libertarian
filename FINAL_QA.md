# Final QA

## Run Local Server

```powershell
cd "C:\Users\jason\OneDrive\Desktop\Flash UI\The Radical Libertarian"
python -m http.server 8080
```

## Run Audits

```powershell
& ".\scripts\qa-audit.ps1"
& ".\scripts\launch-check.ps1"
```

## Manual URLs

- http://localhost:8080/
- http://localhost:8080/qa.html
- http://localhost:8080/launch.html
- http://localhost:8080/sitemap.html
- http://localhost:8080/search.html
- http://localhost:8080/newsletter.html
- http://localhost:8080/tools/
- http://localhost:8080/resources/
