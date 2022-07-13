# Pagination Manager

## Summary

- Pagination Manager is an useful framework for improving the use of object pagination in APIs like Discord.

- Framework developed by `tnfAngel`#6557.

## Usage

### CommonJS

```js

const { PaginationBuilder, PaginationManager } = require('pagination-manager');

const pagesBuilder = new PaginationBuilder()
    .addPages([{ hi: 'this is a page' }, { hi: 'this is another page'}])
    .setOptions({ infinitePages: true });

const paginationManager = new PaginationManager(pagesBuilder);

console.log(
    paginationManager.getCurrentPage()
); // { hi: 'this is a page' }

console.log(
    paginationManager.next();
); // { hi: 'this is another page'}

console.log(
    paginationManager.getCurrentPage()
); // { hi: 'this is another page'}


```

### TypeScript

```ts

import { PaginationBuilder, PaginationManager } from 'pagination-manager';

const pagesBuilder = new PaginationBuilder()
    .addPages([{ hi: 'this is a page' }, { hi: 'this is another page'}])
    .setOptions({ infinitePages: true });

const paginationManager = new PaginationManager(pagesBuilder);

console.log(
    paginationManager.getCurrentPage()
); // { hi: 'this is a page' }

console.log(
    paginationManager.next();
); // { hi: 'this is another page'}

console.log(
    paginationManager.getCurrentPage()
); // { hi: 'this is another page'}


```

## Documentation

### Pagination Manager Classes

-   PaginationBuilder | `.PaginationBuilder()` -> PaginationBuilder

Builder class for setup the pagination manager and configure the options.

```js
const paginationBuilder = new PaginationBuilder()
    .addPages([Page1, Page2, Page3]) // Adds multiple pages objects.
    .addPage(Page4) // Adds unique page object.
    .setPages([Page5, Page6, Page7]) // Sets pages objects.
    .setOptions({ infinitePages: false }); // Pagination Manager options. infinitePages means if when reaching the end of pages, the current page will return to the beginning and vice versa.

const paginationManager = new PaginationManager(paginationBuilder);
```

-   PaginationManager | `.PaginationManager(PaginationBuilder)` -> PaginationManager

Main class, provide all manager methods and properties.

```js
const paginationManager = new PaginationManager(paginationBuilder); // PaginationBuilder constructor here.
```

### Pagination Manager Class Methods

-   GetCurrentPage | `.getCurrentPage()` -> CurrentPage

Returns the current active page. Default to 0.

```js
PaginationManager.getCurrentPage();
```

-   GetPages | `.getPages()` -> Pages

Returns alls the pages passed in PaginationBuilder class.

```js
PaginationManager.getPages();
```

-   Next | `.next()` -> Page

Sets the current page to the next page and return it.

```js
PaginationManager.next();
```

-   Prev | `.prev()` -> Page

Sets the current page to the previous page and return it.

```js
PaginationManager.prev();
```

-   First | `.first()` -> Page

Sets the current page to the first page and return it.

```js
PaginationManager.first();
```

-   Last | `.last()` -> Page

Sets the current page to the last page and return it.

```js
PaginationManager.last();
```

-   SetPage | `.setPage(page)` -> Page

Sets the current page to the page provided and return it. Pages will start with 0.

```js
PaginationManager.setPage(0);
```

-   SetHumanPage | `.setHumanPage(page)` -> Page

Sets the current page to the page provided and return it. Same as SetPage but pages will start with 1.

```js
PaginationManager.setHumanPage(1);
```

-   GetPage | `.getPage(page)` -> Page

Returns the page provided. Pages will start with 0.

```js
PaginationManager.getPage(0);
```

-   GetHumanPage | `.getHumanPage(page)` -> Page

Returns the page provided. Same as GetPage but pages will start with 1.

```js
PaginationManager.getHumanPage(1);
```

### Pagination Manager Class Property's

-   Pages | `.pages` -> Page[]

Returns alls the pages passed in PaginationBuilder class.

```js
PaginationManager.pages; // [...]
```

-   Options | `.options` -> PaginationBuilderOptions

Returns the options passed in PaginationBuilder class.

```js
PaginationManager.options; // {...}
```

-   PagesSize | `.pagesSize` -> number

Returns the pages size starting with 1.

```js
PaginationManager.pagesSize; // 4
```

-   CurrentPageIndex | `.currentPageIndex` -> number

Returns the current page index starting with 0.

```js
PaginationManager.currentPageIndex; // 0
```

-   HumanCurrentPageIndex | `.humanCurrentPageIndex` -> number

Returns the current page index starting with 1.

```js
PaginationManager.humanCurrentPageIndex; // 1
```

-   NextPageIndex | `.nextPageIndex` -> number

Returns the next page index starting with 0.

```js
PaginationManager.NextPageIndex; // 1
```

-   HumanNextPageIndex | `.humanNextPageIndex` -> number

Returns the next page index starting with 1.

```js
PaginationManager.humanNextPageIndex; // 2
```

-   PrevPageIndex | `.prevPageIndex` -> number

Returns the prev page index starting with 0.

```js
PaginationManager.prevPageIndex; // 0
```

-   HumanPrevPageIndex | `.humanPrevPageIndex` -> number

Returns the prev page index starting with 1.

```js
PaginationManager.humanPrevPageIndex; // 1
```

-   PageIndicator | `.pageIndicator` -> string

Returns an human-readable string with the human current page index and the human page size.

```js
PaginationManager.pageIndicator; // 1/4
```

-   CurrentPage | `.currentPage` -> CurrentPage

Returns the current page object.

```js
PaginationManager.currentPage; // {...}
```

## Installation

_If you have installation issues, join our [support server](https://discord.gg/8RNAdpK)._

> Node Package Manager (NPM)

1. **Open:** Terminal/CMD
2. **Put:** `npm i pagination-manager`

> Yarn

1. **Open:** Terminal/CMD
2. **Put:** `yarn add pagination-manager`
