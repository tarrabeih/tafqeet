Tafqeet Arabic Numbers
Convert numbers to Arabic words (تفقيط) with proper formatting and commas.

Installation

```bash
npm install tafqeet-arabic-numbers
```

Quick Example

```javascript
const tafqeet = require("tafqeet-arabic-numbers");

// Convert numbers to Arabic words
console.log(tafqeet.tafqeet(123));
// Output:
// {
// words: "مائة و ثلاثة و عشرون",
// formattedNumber: "١٢٣",
// fullText: "١٢٣ (مائة و ثلاثة و عشرون)"
// }

console.log(tafqeet.tafqeet(1500));
// {
// words: "ألف و خمسمائة",
// formattedNumber: "١٬٥٠٠",
// fullText: "١٬٥٠٠ (ألف و خمسمائة)"
// }
```

Usage

```javascript
const tafqeet = require("tafqeet-arabic-numbers");

// Simple conversion
const result = tafqeet.tafqeet(123456);
console.log(result.words); // "مائة و ثلاثة و عشرون ألفاً و أربعمائة و ستة و خمسون"
console.log(result.formattedNumber); // "١٢٣٬٤٥٦"
console.log(result.fullText); // "١٢٣٬٤٥٦ (مائة و ثلاثة و عشرون ألفاً و أربعمائة و ستة و خمسون)"

// Large numbers
const bigNumber = tafqeet.tafqeet(123456789);
console.log(bigNumber.words);
// "مائة و ثلاثة و عشرون مليوناً و أربعمائة و ستة و خمسون ألفاً و سبعمائة و تسعة و ثمانون"
```

# Features

Convert numbers to Arabic words

Format numbers with Arabic commas

Support for large numbers (millions, billions)

Proper Arabic grammar rules

Returns both formatted numbers and words

# API

tafqeet(number)
Returns an object with:

words: Arabic words representation

formattedNumber: Number with Arabic numerals and commas

fullText: Combined formatted number and words

## By Ahmad Tarrabeih
