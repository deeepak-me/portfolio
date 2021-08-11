# Portfolio Website

This is a portfolio website that we are building for ourselves. Feel free to fork this and use for your own, please do attribute us.

This repo uses a [starter pack for eleventy](https://github.com/clenemt/eleventy-webpack).
To see how it works you can read [TEMPLATE-README.md]

One question you might think is why the heck do you need webpack for a simple landing page ?
To be honest you don't need it, but here it contributes some really great developer experience,
while contributing almost nothing to the production build bundle also we get babel for bundling up things.
So in a way using webpack is justified.

## Design
These are the design files

### Mobile
[Mobile Design](design/mobile-pixel_2_xl.svg)

### Desktop
WIP

## Usage

First install the dependencies:

```sh
npm install
```

Then you can:

| Command               | Description                                   |
| --------------------- | --------------------------------------------- |
| **`npm run start`**   | Run your website on http://localhost:8080     |
| **`npm run build`**   | Build your production website inside `/_site` |
| **`npm run format`**  | Run prettier on all filles except `/_site`    |
| **`npm run analyze`** | Output info on your bundle size               |

Make sure you use the correct node.js version:

```sh
# with bash nvm 
nvm use `cat .nvmrc`
# with windows nvm
nvm use $(cat .nvmrc)
# or just install the version specified inside `.nvmrc`
```

## License

The repo is initialised using a starter template from [eleventy webpack starter](https://github.com/clenemt/eleventy-webpack) which is licensed under MIT License which you can find at [Repo Template License](TEMPLATE-LICENSE) This is also the first commit in this repo. In essence the first commit is licensed under MIT License, and also is not attributed to [me](https://github.com/lallenfrancisl/) and [Deepak](https://github.com/deeepak-me/)

The rest of the commits in the repo is licensed under [AGPL 3.0](LICENSE)

Designs are licensed under Creative Commons Attribution-NonCommercial 4.0 International License

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Portfolio website</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://allenfrancis.me" property="cc:attributionName" rel="cc:attributionURL">Allen Francis</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/lallenfrancisl/portfolio/" rel="dct:source">https://github.com/lallenfrancisl/portfolio/</a>.

