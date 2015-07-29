# batch-generator [![Build Status](https://travis-ci.org/kollavarsham/batch-generator.svg?branch=master)](https://travis-ci.org/kollavarsham/batch-generator)

> My neat module


## Install

```
$ npm install --save batch-generator
```


## Usage

```js
var batchGenerator = require('batch-generator');

batchGenerator('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global batch-generator
```
```
$ batch-generator --help

  Usage
    batch-generator [input]

  Example
    batch-generator
    unicorns & rainbows

    batch-generator ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### batchGenerator(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [](http://kollavarsham.org)
