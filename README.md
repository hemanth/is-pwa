# is-pwa

> Checks if a given URL is a PWA.


## Install

```
$ npm install --save is-pwa
```

## Usage

```js
const isPwa = require('is-pwa');

isPwa(<URL>)
  .then(score => {
    if(score>75) {
      console.log(`It is a PWA! With a lighthouse score of: ${score}`);
    } else {
      console.error('Sorry, it\'s not a PWA :(');
    }
  })
```

## API

### isPwa(input)

#### input

Type: `string`

URL of the PWA.


## CLI

```
$ npm install --global is-pwa
```

```
$ is-pwa 

  Checks if a given URL is a PWA.

  Usage

  Make sure you have ran `npm explore -g lighthouse -- npm run chrome&`

    $ is-pwa [input]

  Examples
    $ is-pwa https://jsfeatures.in
     It is a PWA! With a lighthouse score of: 80
  
    $ is-pwa https://h3manth.com
     Sorry, it's not a PWA :(
```


## License

MIT © [Hemanth.HM](https://h3manth.com)
