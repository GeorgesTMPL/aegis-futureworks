# Aegis Futureworks

A responsive public website for Georges Temple's fictional Aegis universe. Built for GitHub Pages and `aegisfutureworks.com` with plain HTML, CSS, and JavaScript. There is no installation, build step, database, contact form, or paid hosting dependency.

## Preview

Open `index.html` in a browser, or serve this folder with a local web server. All site files and artwork are included. The website does not call external font, analytics, or application services.

## Publish on GitHub Pages

1. Create a repository named `aegis-futureworks` in your GitHub account. Choose **Public** for GitHub Free Pages hosting.
2. Upload the contents of this folder to the repository's root, including the `assets` folder, `CNAME`, and `.nojekyll`.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. Set the **Custom domain** to `aegisfutureworks.com` and save before changing your domain's DNS records.
5. Connect your domain through GoDaddy using the records below.
6. Once GitHub's DNS check and certificate provisioning complete, turn on **Enforce HTTPS** in Pages settings. GitHub notes that DNS propagation and certificate readiness can take up to 24 hours.

Your repository name does not need to match the domain. The `CNAME` file already contains the purchased domain.

## Connect your GoDaddy domain

In GoDaddy, open **Domain Portfolio → aegisfutureworks.com → DNS**. These instructions assume GoDaddy manages the domain's nameservers. If the nameservers point to another DNS provider, make the changes at that provider instead.

Set the following records. The `www` value uses your actual GitHub username followed by `.github.io`; it must not include the repository name or `https://`.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | GeorgesTMPL.github.io |

Replace GoDaddy's parking A record at `@` with the GitHub records. Replace an existing `www` CNAME if necessary. Preserve email records and unrelated subdomains. Remove only conflicting apex website A/AAAA/ALIAS/ANAME records after checking what they currently serve. Keep GoDaddy's default TTL unless there is a specific reason to change it.

For account-level domain verification, GitHub **Account Settings → Pages → Add a domain** provides a unique TXT record. Add the exact record GitHub displays in GoDaddy, verify it, and keep it in place. This unique value cannot be prepared before choosing the GitHub account.

Official instructions:

- [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub custom domains and DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GoDaddy A records](https://www.godaddy.com/help/edit-an-a-record-19239)
- [GoDaddy CNAME records](https://www.godaddy.com/help/add-a-cname-record-19236)

## Change the website

- `index.html`: page copy, section layout, site metadata, domain, navigation.
- `styles.css`: colors, typography, layouts, responsive styling.
- `script.js`: mobile navigation, division panels, and the three article texts.
- `assets/mark.svg`: editable Aegis shield mark.
- `assets/coastal-campus.jpg`: generated architectural concept photography, optimized for the site.
- `CNAME`: the domain for GitHub Pages.

The three articles and depicted campus are fictional creative material. The small footer identifies the site as a fictional organization while the main experience remains in-universe. No email addresses, phone numbers, invented clients, testimonials, or operational statistics are included.

## Validation

Checked in desktop and 390-pixel mobile layouts: artwork loads, no horizontal overflow, mobile navigation opens and closes after selection, expertise panels switch correctly, and article dialogs open and close with Escape. The JavaScript syntax check passed. Publishing and domain verification require access to the user's GitHub and GoDaddy accounts.
