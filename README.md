# Kandelo Builder

A static, browser-only prototype inspired by step-library. Pick a VFS image, compose an ordered startup recipe, and copy a launch link or open it in Kandelo. No backend, API keys, or upload service.

## Run locally

```sh
npm ci
npm run dev
```

## GitHub Pages

Push this directory to a GitHub repository with a `main` branch. Under **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included `.github/workflows/pages.yml` tests, builds and deploys `dist/`. Vite uses relative asset paths, so repository subpaths work without configuration. Deployment has not been run as part of this prototype.

For another static host, run `npm run build` and serve `dist/` over HTTP(S). Do not open `index.html` directly from disk.

## What it supports

- Filesystem dropdown (shell is labeled Default): shell, Python, Perl, Nginx, Nginx/PHP, Nginx/Python, Redis, Ruby Todo, LAMP, web stack, WordPress, WordPress family and platform rootfs, plus a custom remote wasm32 VFS.
- Product references follow the sibling repository’s `pages-vfs-product-gallery.json`; Python and Perl are additional repository image products. Activities such as Doom or Node can share the shell image rather than having their own VFS.
- Welcome message, shell commands, file creation, Python, Perl and Git clone steps.
- Dedicated prompt dropdown: image default, classic, green, minimal, two-line, or time and directory. Presets fill an always-visible inline `PS1=` field that remains editable. Save a named prompt to localStorage to select it again after a reload; saving the same name replaces that saved prompt. Up to 50 prompts are kept in this browser. Custom styles start an interactive Bash session after all recipe steps using a dedicated rc file, without replacing existing dotfiles. Custom PS1 supports normal Bash substitutions.
- Git clone steps offer an optional destination folder, changing into the cloned directory, and printing README.md (with lowercase readme.md fallback). New clone steps enable changing directory; printing the README and showing Git output are opt-in. Quiet cloning uses `--quiet` and redirects stdout to `/dev/null`, preserving errors on stderr. There is no final clear, so explicitly requested output stays visible. Later steps inherit the working directory, and a Bash handoff keeps it in the interactive session.
- Step types can be reused. Adding an ingredient is skipped when a step with identical effective settings already exists; edit the existing step before adding another of that type.
- Editable steps with move-up/down and remove controls.
- Live generated Bash script and inspectable boot descriptor.
- Copy launch URL and open Kandelo in a separate tab.
- Local draft persistence and versioned JSON recipe export/import.
- The browser address automatically updates with a compressed `#recipe1=` configuration; Copy builder link shares the editable recipe. A shared URL takes precedence over the recipient’s local draft. Saved prompt libraries stay local; the recipe carries its selected PS1 value. Builder links work on GitHub Pages without server routes.
- Editable Kandelo host, image directory and working directory.

Every generated script clears startup output before running recipe steps, including an empty recipe. The welcome step also clears the terminal before showing its message, like the welcome demo in `../kandelo-demos`. Kandelo itself prints the full startup script before executing it.

## Launch protocol and limits

The output uses the same `#k1=base64url(gzip(JSON))` descriptor transport as `../kandelo-demos/build.py`. The descriptor names a root image and carries one gzip-compressed startup input with its UTF-8 byte length and SHA-256 digest. `boot.parameters.runScript` selects that input and `runScriptShell` is `bash`. The script stops at the first failing command.

Image presets refer to `https://kandelo.dev/vfs-groups/release-1/images/`. These are references to separately hosted artifacts, not embedded images or newly compiled distributions. They follow the sibling Kandelo image product names. Availability, ABI compatibility, tools and remote-fetch policy depend on the target deployment. A custom image must provide Bash, login and the tools its recipe needs. Tool notices are static hints, not runtime capability checks. The builder does not install packages.

Limits include 40 steps, 32 KiB compressed inline script, 64 KiB compressed descriptor and 300 KB imported recipe files. Links above 8 KiB get a transport warning. Recipes validate versions, step kinds, HTTP(S) URLs and absolute guest paths. Shell arguments are quoted and generated heredoc delimiters avoid collisions with file/script content. Arbitrary shell steps intentionally execute their authored code.

A link reproduces a boot recipe, not modified disk state, running processes or terminal history. Its contents are readable by anyone receiving it. Drafts live only in this browser's clearable localStorage; export a JSON file to retain an editable recipe. No recipe content is uploaded by the builder. Running a link lets Kandelo fetch the referenced VFS and execute its startup script.

## Validation

```sh
npm test
npm run build
# With local dev server running and Google Chrome installed:
node test/browser.mjs
```

Eleven model tests check Unicode transport, script hashes and byte lengths, VFS selection, ordering, quoting, heredoc collisions malformed recipes and prompt handoff syntax. The Chrome smoke check covers generated links, adding/reordering/removing steps, VFS switching, saved drafts, renaming and mobile overflow. Screenshots go to `/tmp/`.

A complete guest boot on the public Kandelo deployment and GitHub Pages publication have not been verified.
