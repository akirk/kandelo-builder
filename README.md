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
- Bring my dotfiles: clone a public HTTP(S) repository, optionally select a branch/tag/commit, and map repository files or directories into `~/` using `source -> ~/destination` lines. Existing destinations get numbered `.kandelo-backup` backups. Sources are checked before linking; repository installers are not run. Dotfiles load in the interactive Bash shell before any builder prompt override. Requires Git and whatever tools the imported configuration uses. Repository contents are fetched at boot, not embedded in shared links.
- Dedicated prompt dropdown: image default, classic, green, minimal, two-line, or time and directory. Presets fill an always-visible inline `PS1=` field that remains editable. Save a named prompt to localStorage to select it again after a reload; saving the same name replaces that saved prompt. Up to 50 prompts are kept in this browser. Custom styles start an interactive Bash session after all recipe steps using a dedicated rc file, without replacing existing dotfiles. Custom PS1 supports normal Bash substitutions.
- Git clone steps offer an optional destination folder, changing into the cloned directory, and printing README.md (with lowercase readme.md fallback). New clone steps enable changing directory; printing the README and showing Git output are opt-in. Quiet cloning uses `--quiet` and redirects stdout to `/dev/null`, preserving errors on stderr. There is no final clear, so explicitly requested output stays visible. Later steps inherit the working directory, and a Bash handoff keeps it in the interactive session.
- Step types can be reused. Adding an ingredient is skipped when a step with identical effective settings already exists; edit the existing step before adding another of that type.
- Editable steps with move-up/down and remove controls.
- Live generated Bash script and inspectable boot descriptor.
- ScummVM game picker for the Kandelo freeware catalog, defaulting to Beneath a Steel Sky (`scummvm-play steel-sky`). Adding it selects the shell image (custom images are kept). Game data downloads on first launch.
- Copy launch URL and open Kandelo in a separate tab.
- URL-based recipe state and versioned JSON recipe export/import.
- The browser address stays clean for the default recipe and updates with readable fragment parameters such as `#v=1&title=Demo` when the recipe changes; Copy builder link shares the editable recipe. The URL is the only source for the current recipe; opening the bare builder URL always starts with defaults. Legacy local recipe drafts are removed on startup. Saved prompt libraries stay local; the recipe carries its selected PS1 value. Builder links work on GitHub Pages without server routes. Default settings are omitted. If startup steps change, the link lists them in order using parameters such as `step.1.kind=command&step.1.code=pwd`. Use `steps=0` for an empty list. Older compressed builder links are unsupported.
- Editable Kandelo host, image directory and working directory.

Every generated script clears startup output before running recipe steps, including an empty recipe. The welcome step also clears the terminal before showing its message, like the welcome demo in `../kandelo-demos`. Kandelo itself prints the full startup script before executing it.

## Launch protocol and limits

The output uses the same `#k1=base64url(gzip(JSON))` descriptor transport as `../kandelo-demos/build.py`. The descriptor names a root image and carries one gzip-compressed startup input with its UTF-8 byte length and SHA-256 digest. `boot.parameters.runScript` selects that input and `runScriptShell` is `bash`. The script stops at the first failing command.

Image presets refer to `https://kandelo.dev/vfs-groups/release-1/images/`. These are references to separately hosted artifacts, not embedded images or newly compiled distributions. They follow the sibling Kandelo image product names. Availability, ABI compatibility, tools and remote-fetch policy depend on the target deployment. A custom image must provide Bash, login and the tools its recipe needs. Tool notices are static hints, not runtime capability checks. The builder does not install packages.

Limits include 40 steps, 32 KiB compressed inline script, 64 KiB compressed descriptor and 300 KB imported recipe files. Links above 8 KiB get a transport warning. Recipes validate versions, step kinds, HTTP(S) URLs and absolute guest paths. Shell arguments are quoted and generated heredoc delimiters avoid collisions with file/script content. Arbitrary shell steps intentionally execute their authored code.

A link reproduces a boot recipe, not modified disk state, running processes or terminal history. Its contents are readable by anyone receiving it. Recipes live in the URL; bookmark or copy the builder link, or export a JSON file to keep an editable recipe. Only named prompt presets are stored in localStorage. No recipe content is uploaded by the builder. Running a link lets Kandelo fetch the referenced VFS and execute its startup script.

## Validation

```sh
npm test
npm run build
# With local dev server running and Google Chrome installed:
node test/browser.mjs
```

Eleven model tests check Unicode transport, script hashes and byte lengths, VFS selection, ordering, quoting, heredoc collisions malformed recipes and prompt handoff syntax. The Chrome smoke check covers generated links, adding/reordering/removing steps, VFS switching, URL restoration, renaming and mobile overflow. Screenshots go to `/tmp/`.

A complete guest boot on the public Kandelo deployment and GitHub Pages publication have not been verified.
