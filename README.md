# Galaxy
Electron + React app to manage Solr clusters

## Install

First, clone the repo via git:

```bash
git clone https://github.com/thereactleague/galaxy.git your-project-name
```

And then install dependencies.

```bash
$ cd your-project-name && npm install
```

### Run

```bash
$ npm i && npm start
```

## Directory Structure

- Your client javascript lives in app/js/.
  - stateless functional components live in app/js/components and are by convention have a name starting with a capital letter
  - containers for managing state live in app/js/containers and are called by convention called <component-name>Container
- Your client SCSS lives in app/scss.
- Your electron server code lives in root.

### Building

- Open up the app: `npm start`. This will also live reload everything, so don't worry about that.
- Lint everything: `npm run lint`
- Package the app for release: `npm dist`.

*Note: requires a node version >= 6.5 and an npm version >= 2.*
