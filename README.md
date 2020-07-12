# SpeedUP SMS notification

SpeedUP standard error library.

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

## Installation

```sh

# NPM
npm i @speedup/error --save

# Yarn
yarn install @speedup/error

```

## Usage

```js

const { ApplicationError, HttpError } = require('@speedup/error').default;

throw new ApplicationError({
    code: 'E_NOT_FOUND'
});

```

```ts

import { ApplicationError, HttpError } from '@speedup/error';

throw new ApplicationError({
    code: 'E_NOT_FOUND'
});

```

And you're good to go!

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@speedup/error.svg?color=orange
[npm-url]: https://npmjs.org/package/@speedup/error
[downloads-image]: https://img.shields.io/npm/dt/@speedup/error.svg
[downloads-url]: https://npmjs.org/package/@speedup/error