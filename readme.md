# [Barcode Validator](https://github.com/temideoye/barcode-validator/) [![npm package](https://badge.fury.io/js/barcode-validator.svg)](https://badge.fury.io/js/barcode-validator)

A tiny JavaScript library for validating barcodes.

Supported symbologies: EAN-13, EAN-8, UPC-A, and UPC-E. For more information on the validation algorithm, see official [GS1 guide](https://www.gs1.org/services/how-calculate-check-digit-manually) on calculating valid barcode check digits.

---

## Usage

First, `install barcode-validator` using npm:

```shell
npm i barcode-validator
```

Then, `import` the package into your module like so:

```js
import validbarcode from "barcode-validator";
// or const validbarcode = require("barcode-validator");
```

Pass it a `barcode (string or number)` for validation and get back a boolean.

```js
validbarcode("6151100036810"); // true
validbarcode(87162318); // true
validbarcode(972660036810); // false
```

## License

Barcode Validator is MIT licensed. See [license](./license) file for more information.
