# H5P Custom functions Interface

This holds the base class for interact with the H5P data .

## Test

```
node dist/test/test_skyclick.js
```

## Build

This will build the Javascript transpided code into `src/` or `test/`


```
tpc src/skyclick.ts
```

```
tpc test/test_skyclick.ts
```


Run compilde Javascript with:


```
node src/skyclick.js
```

or

```
node test/test_skyclick.js
```


## Production build

Write in the root of the project

```
tsc
```

this will output the compiled Javascript code into the `dist/` folder.
