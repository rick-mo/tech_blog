---
path: "/python/python"
category: "技術別"
tag: "Python"
title: "Pythonメモ"
date: "2020-04-26"
---

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

icon-gen 本体については特に機能追加とかバグ修正はないのだけど PNG ファイルから画素を抽出するのに利用している [pngjs](https://www.npmjs.com/package/pngjs) が `Node v9.x` 系で動作しないため、代替として [pngjs-nozlib](https://www.npmjs.com/package/pngjs-nozlib) へ乗り換えた。

<kbd>Ctrl</kbd> + <kbd>C</kbd>

> icon-gen 本体については特に機能追加とかバグ修正はないのだけど PNG ファイルから画素を抽出するのに利用している [pngjs](https://www.npmjs.com/package/pngjs) が Node v9.x 系で動作しないため、代替として [pngjs-nozlib](https://www.npmjs.com/package/pngjs-nozlib) へ乗り換えた。
> 
> <cite>[引用元](https://github.com/akabekobeko/akabeko.me)</cite>
[[note]]
|The quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog  
|The quick brown fox jumps over the lazy dog

[[important]]
|The quick brown fox jumps over the lazy dog

[[tip]]
|The quick brown fox jumps over the lazy dog

[[warning]]
|The quick brown fox jumps over the lazy dog

[[help]]
|The quick brown fox jumps over the lazy dog

|Normal|Center|Right|
|---|:-:|--:|
|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|
|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|
|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|
|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|
|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|The quick brown fox jumps over the lazy dog|

* List
    * List
        * List
* List
    * List
        * List
* List
    * List
        * List

番号リスト。

1. Number
2. Number
    1. 番号付きリスト 1_1
    1. 番号付きリスト 1_2
3. Number
4. Number
5. Number

---

![画像](ss-1.png "画像")

```js
/**
 * Generate the FAVICON files = require(a PNG images.
 */
export default class FaviconGenerator {
  /**
   * Generate a FAVICON image files (ICO and PNG) from the PNG images.
   *
   * @param {ImageInfo[]} images File information for the PNG files generation.
   * @param {String} dir Output destination the path of directory.
   * @param {Logger} logger Logger.
   *
   * @return {Promise} Promise object.
   */
  static generate (images, dir, logger) {
    const results = []
    return Promise
      .resolve()
      .then(() => {
        return FaviconGenerator._generateICO(images, dir, logger)
      })
      .then((icoFile) => {
        results.push(icoFile)
        return FaviconGenerator._generatePNG(images, dir, logger)
      })
      .then((pngFiles) => {
        return results.concat(pngFiles)
      })
  }
}
```

`youtube:https://www.youtube.com/embed/ZMap2mTrVu8`

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">2018/5/26 は <a href="https://t.co/YtRkXGIyEQ">https://t.co/YtRkXGIyEQ</a> でリアル アカベコと握手！</p>&mdash; アカベコ (@akabekobeko) <a href="https://twitter.com/akabekobeko/status/982220949817733120?ref_src=twsrc%5Etfw">2018年4月6日</a></blockquote>

## Comments from WordPress

<div class="wp-comment"></div>

* ![anonymous](https://www.gravatar.com/avatar/beb21939f6a5a1e3b48faa2d5eed358a?d=identicon) **anonymous** 2017-12-28T04:59:53Z
  > 
  > aaaaaaaaaaaaaaaaaaa
* ![akabeko](https://www.gravatar.com/avatar/c265a1a7dadb2713ff2262025e91d133?d=identicon) **[akabeko](https://akabeko.me/)** 2017-12-28T09:42:28Z
  > Reply Message
  > 
  > Sample
  > Sample
  > 
  > 
  > aaaa
