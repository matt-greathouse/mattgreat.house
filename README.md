# mattgreat.house

The source for [mattgreat.house](https://mattgreat.house): a React, TypeScript, Vite, and Tailwind CSS site.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. The generated static files are in `dist/`.

## Deploy

GitHub Actions contains a manually run workflow named **Yeet to mattgreat.house**. It always checks out and deploys `main`—it does not deploy automatically on push.

Before the first run, add these GitHub repository secrets:

| Secret | Value |
| --- | --- |
| `DEPLOY_HOST` | `mattgreat.house` |
| `DEPLOY_USER` | `matt` |
| `DEPLOY_SSH_PRIVATE_KEY` | An SSH private key whose public key is authorized for the `matt` account on the server. |
| `DEPLOY_KNOWN_HOSTS` | The complete `known_hosts` entry for `mattgreat.house`, obtained from a trusted machine with `ssh-keyscan -H mattgreat.house`. |

The deploy account needs passwordless `sudo` permission for `rsync`, because the site is published to Nginx's web root at `/usr/share/nginx/html/`.

To publish, open the repository's **Actions** tab, choose **Yeet to mattgreat.house**, then select **Run workflow** while on `main`.
