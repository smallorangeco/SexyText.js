# SexyText.js
Is a jQuery plugin to make responsive and fluid sexy words, originally developed for [Small Orange](http://smallorange.co) framework.

## How to use

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.Sexytext.js"></script>
<script>
  $('h1,h2,h3').SexyText();
</script>

<h1>I'm default</h1>
<h1 data-compressor="1.5">I compress more</h1>
<h1 data-compressor="0.8">I compress less</h1>
<h1 data-max-font="70">70px is my max</h1>
<h1 data-min-font="30">30px is my min</h1>
<h1 data-trigger="920">I'm Fluid When < 920px</h1>
<h1 data-offset-right="100">I have 100px of Right Offset</h1>
<h1 style="display: inline">I'm an inlined element</h1>
<h1 data-max-font="70">Made with Love by</h1>
<h1>http://smallorange.co</h1>
```

And the text will be fluid (:

## Data Attributes
- data-compressor: Defines how much the text will change, less values, less compression, big values, big compression. Accept float values like 0.5, 0.8, 1.5. {Default: 1.0}

- data-min-font: Defines the minimum font-size. Accept integer values like 30, 40, 50. {Default: No Default}.

- data-max-font: Defines the maximum font-size. Accept integer values like 30, 40, 50. {Default: The own word font-size}.

- data-trigger: Defines the minimum viewport when SexyText.js will iterate. {Default: No Default}.

- data-offset-right: Defines the minimum right offset when the word is compressed. {Default: 0}

## Changelog
* `v 1.1` 
	* Support for Inline and Absolute Elements
	* Added "data-offset-right" Control
	* Released Minified Version
* `v 1.0` - Initial Release

## Help and Contribute
Yeah, use and develop it, we will like (:

Visit [Small Orange](http://smallorange.co)

Questions Felipe Rohde {felipe@smallorange.co}
