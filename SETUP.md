# Google Form RSVP setup (one-time)

I can't create a Google Form inside your Google account directly from this workspace. This included Apps Script creates the actual form and linked response spreadsheet in your account in about 2–3 minutes.

1. Open https://script.google.com/ while signed in to the Google account where you want to keep RSVP responses.
2. Click **New project**.
3. Open `google-apps-script/Code.gs` from this website project, copy its complete contents, and paste into the Apps Script editor (replace the starter code).
4. Save, select `createBhagwatKathaRsvpForm` in the function dropdown, and click **Run**.
5. Approve Google's requested permissions. The script creates a public RSVP form and a Google Sheet that collects responses.
6. In Apps Script, open **Execution log**. Copy the `PUBLIC FORM URL` value. The `EDIT FORM URL` is private to you; the `RESPONSE SHEET URL` is where guest responses will appear.
7. To embed the form on the website, convert the public URL to its embed form: use the same URL and add `?embedded=true` (or `&embedded=true` if it already has a query string).
8. Open `config.js` and paste that URL between the quotes for `GOOGLE_FORM_URL`.
9. Commit and push the project to GitHub. The RSVP form will then appear inside the website.

The form asks for name, mobile number, attendance status, planned visit date, estimated arrival time, member count, and an optional reason if unable to attend. Responses are stored in the linked Google Sheet automatically.

## Publish with GitHub Pages

1. Create a new GitHub repository (for example `bhagwat-katha-invitation`).
2. Upload the **contents** of this folder to the repository root (so `index.html` is at the root).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish. Your site URL will look like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

No build step, package installation, API key, or paid hosting is required. The website is static and can be hosted on GitHub Pages for free.
