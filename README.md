# BabyId

A tiny, secure, URL-friendly, unique string ID generator for JavaScript.

# Install
 ```
npm i babyid
```

# Import
```js
const BabyId=require("babyid");
```

# Use
```js
const shortParam=BabyId.generate();
console.log(shortParam);
```

# Examples
* By Default length of 7 argument is passed
```js
const shortParam=BabyId.generate();
console.log(shortParam);
//m86ZLZL
```

* Even if  length smaller than 7 is passed ,default string length is 7
```js
const shortParam=BabyId.generate(5);
console.log(shortParam);
//49ZBjZQ
```

* If length over 7 is passed respective string length is returned
```js
const shortParam=BabyId.generate(11);
console.log(shortParam);
//33z76XRcISd
```


# 🔴DONT'S
* Passing other dataType except Numbers Like Strings
```js
const shortParam=BabyId.generate("nine);
console.log(shortParam);
//
```
# BabyId
