# Way of Furqan

A simple, responsive first frontend for a Quran learning platform. This preview uses plain HTML, CSS, and JavaScript, so it needs no package installation, API keys, or paid services.

## Preview in GitHub Codespaces

1. Open the **Terminal** in Codespaces.
2. Run `python3 -m http.server 8000`.
3. When Codespaces offers to open port **8000**, choose **Open in Browser**.
4. To stop the local server, return to the terminal and press **Ctrl+C**.

You can also open `index.html` directly in a browser, but the local server gives the most reliable preview.

## What's included

- `index.html` contains the homepage, course examples, About and Contact sections, and three portal entry cards.
- `styles.css` contains the responsive black-and-white design and Arabic text styling.
- `script.js` controls the mobile navigation and clearly labels portal access as not yet available.

Course descriptions are sample content. Login, enrolment, payments, chat, video calls, and contact submissions are not implemented. The hero photograph is loaded from Unsplash and needs an internet connection; the rest of the site is local.

## Separate app previews

The three role applications have separate entry pages and share a small design stylesheet:

- `apps/students/index.html` — Students & Parents
- `apps/mentors/index.html` — Mentors
- `apps/admin/index.html` — Super Admin
- `shared/app.css` — shared black-and-white responsive design

To preview them in Codespaces:

1. Open the **Terminal** in the project folder.
2. Run `python3 -m http.server 8000`.
3. Open the **Ports** tab and choose **Open in Browser** for port **8000**.
4. Add one of these paths after the address in the browser:
	- `/apps/students/`
	- `/apps/mentors/`
	- `/apps/admin/`

Each page is a separate static frontend entry point. The shared stylesheet keeps their appearance consistent. A future deployment can publish these folders on separate subdomains; the deployment will need to include the shared stylesheet with each app. This phase has no authentication, backend, database, payments, messaging, or video calls. The preview contains no real student information. Any future role permissions must be checked by the server, not only by the frontend.
