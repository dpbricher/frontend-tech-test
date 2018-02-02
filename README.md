# SamKnows Front-End Technical Test

There are two parts to the test:

1. Currency Converter App (this should take no longer than an hour and a half)
2. Refactor flatten.js (this shouldn't take long)


## Part one: A currency conversion app

The task is to create a currency conversion app using Vue or React that looks
like the `currency-converter.png` image.
It's preferred that you write your own CSS/SCSS.

If you'd like to improve on the design, please go ahead but no
worries if you can't — this is the front-end test, not the design test!

For getting the conversion rates, use this API: http://api.fixer.io/latest?base=GBP

##### User stores:
- When the base currency is changed, the application should fetch new conversion rates
- When the 'switch' button is pressed, the values of the base and target are swapped
- When an amount is entered into the input, a converted amount is displayed

##### We're looking for:
- Functionality: it should work, obviously!
- Design: it looks like the design (or better).
- Code quality: code should be readable and maintainable.


## Part two: Refactoring

There's a file in this directory called `flatten.js`. It contains a function to
flatten an array or an object (discarding the keys).

```js
flatten([1, 2, [3, [[4], 5]], 6]); // [1, 2, 3, 4, 5, 6]
flatten({ hello: 1, world: [2, 3, { foo: [[4]]}] }); // [1, 2, 3, 4]
flatten([2, 'test']); // [2, 'test']
```

Non-object values like strings and numbers should just be passed through.

It's an okay function, but it could be a lot cleaner, and a lot shorter: this
function is written using only ES3, and because we don't support old versions
of Internet Explorer and we use Babel, you can use ES5 and ES2016.

##### We're looking for:
- It should work. Other than that, there isn't really a wrong answer. Just curious
to see what you'll do.


## When you're finished

Please ZIP up the entire project folder (except node_modules!) and email it back to us.
You will probably have to upload the file to Google Drive or similar in order to send it via email.

Thank you and good luck!
