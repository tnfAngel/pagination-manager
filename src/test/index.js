const { PaginationBuilder, PaginationManager } = require('../../build/index');

const pagesBuilder = new PaginationBuilder()
    .addPages([{ hi: 'this is a page' }, { hi: 'this isnother a page' }])
    .setOptions({ infinitePages: true });

const paginationManager = new PaginationManager(pagesBuilder);

console.log('1');

console.log(paginationManager)

console.log(paginationManager.getCurrentPage());

console.log(paginationManager.next());

console.log('2')

console.log(paginationManager);

console.log(paginationManager.getCurrentPage());

console.log(paginationManager.next());

console.log(paginationManager);