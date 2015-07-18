ts-babel
============

TypeScript codes written in ECMAScript 2015 (ES6) for examining "tsc --target es6 && babel"

##Usage

```shell
npm install
npm run tsc-babel # For examining "tsc --target es6 && babel". You can see the result at tsc-babel directory.
npm run tsc-only  # For examining "tsc --target es5". You can see the result at tsc-only directory.
```

Currently, both `npm run tsc-babel` and `npm run tsc-only` fail at tsc.

You can change the TypeScript version used by editing package.json (The specified commit is the newest in the master branch on 18th of July, 2015).
