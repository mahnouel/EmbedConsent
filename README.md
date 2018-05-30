# Embed Consent

postpone embed loading until user gives consent

## Installation

`npm install embed-consent` 

[![npm](https://img.shields.io/npm/v/embed-consent.svg?style=flat-square)](https://www.npmjs.com/package/embed-consent)

## Usage

```html
<article class="js-embed" data-embed-src="https://www.youtube.com/embed/flLc6LmAG6c">
  Please confirm you like to load this YouTube video:
  <button class="js-embed__opener">Okay</button>
</article>
```
The `data-embed-id` attribute can be used to set a cookie when the user gives consent. After that the embed permission request won't show itself for the next 90 days.

```js
import EmbedConsent from 'embed-consent'

const embed = new EmbedConsent()
embed.enable()
```


