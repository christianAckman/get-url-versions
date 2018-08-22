# get-url-versions
> Get different versions of a url

## Install

``
$ npm install get-url-versions
``

## Usage

```
const _guv = require('get-url-versions');

var urls = _guv.getURLs('www.google.com');

console.log(urls);
```

**Output:**

```
{
    url: "google.com",
    www: "www.google.com",
    http: "http://google.com",
    https: "https://google.com",
    http_www: "http://www.google.com",
    https_www: "https://www.google.com"
}
```