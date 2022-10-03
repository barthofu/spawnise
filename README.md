# Spawnise

Promisify the native node.js `spawn` function!

## Description

This simple package lets you run commands on your device asynchronously using promises through the `spawn` function.
In fact, it uses the [cross-spawn](https://www.npmjs.com/package/cross-spawn) library under the hood in order to have a more consistent spawn. 

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/en/) `>= 14.x.x`
- [npm](https://npmjs.com/) `>= 8.x.x`

### Installing

```bash
npm install spawnise
```
or
```bash
yarn add spawnise
```

## Usage

```ts
import { spawn } from 'spawnise';

async function run() {

	console.log('starting install dependencies')

	const child = await spawn('npm install')

	console.log('dependencies installed!')
}

run()
```
## Contributing

Pull requests are welcome. 

### Building for production

To run the production build use the npm build script:

```javascript
npm run build
```

Before the build is actually made the tests will be executed, the dist folder will be removed and then the build will be made.

## License
ISC License

Copyright (c) barthofu