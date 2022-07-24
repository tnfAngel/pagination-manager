import {
    IPaginationBuilderOptions,
    PaginationBuilder,
} from './PaginationBuilder';

/**
 * Pagination Manager Main Class.
 * @date 7/24/2022 - 7:44:35 PM
 *
 * @export
 * @class PaginationManager
 * @typedef {PaginationManager}
 * @template Page
 */
export class PaginationManager<Page> {
    /**
     * Array with all the pages.
     * @date 7/14/2022 - 4:55:47 PM
     *
     * @type {Page[]}
     */
    pages: Page[];

    /**
     * Pagination Builder Options.
     * @date 7/14/2022 - 4:57:07 PM
     *
     * @private
     * @type {IPaginationBuilderOptions}
     */
    private options: IPaginationBuilderOptions;

    /**
     * Returns the pages size starting with 0.
     * @date 7/14/2022 - 5:14:15 PM
     *
     * @type {!number}
     */
    pagesSize!: number;

    /**
     * Returns the pages size starting with 1.
     * @date 7/15/2022 - 1:41:19 AM
     *
     * @type {!number}
     */
    humanPagesSize!: number;

    /**
     * Returns the current page index starting with 0.
     * @date 7/14/2022 - 5:14:33 PM
     *
     * @type {!number}
     */
    currentPageIndex!: number;

    /**
     * Returns the current page index starting with 1.
     * @date 7/14/2022 - 5:14:50 PM
     *
     * @type {!number}
     */
    humanCurrentPageIndex!: number;

    /**
     * Returns the next page index starting with 0.
     * @date 7/14/2022 - 5:15:11 PM
     *
     * @type {!number}
     */
    nextPageIndex!: number;

    /**
     * Returns the next page index starting with 1.
     * @date 7/14/2022 - 5:15:24 PM
     *
     * @type {!number}
     */
    humanNextPageIndex!: number;

    /**
     * Returns the previous page index starting with 0.
     * @date 7/14/2022 - 5:15:39 PM
     *
     * @type {!number}
     */
    prevPageIndex!: number;

    /**
     * Returns the previous page index starting with 1.
     * @date 7/14/2022 - 5:16:40 PM
     *
     * @type {!number}
     */
    humanPrevPageIndex!: number;

    /**
     * Returns an human-readable string with the human current page index and the human page size.
     * @date 7/14/2022 - 5:17:25 PM
     *
     * @type {!string}
     */
    pageIndicator!: string;

    /**
     * Returns the current page element.
     * @date 7/14/2022 - 5:17:36 PM
     *
     * @type {Page}
     */
    currentPage!: Page;

    /**
     * Creates an instance of PaginationManager.
     * @date 7/13/2022 - 3:18:12 PM
     *
     * @constructor
     * @param {PaginationBuilder} paginationBuilder
     */
    constructor(paginationBuilder: PaginationBuilder<Page>) {
        this.pages = paginationBuilder.pages;
        this.options = paginationBuilder.options;
        this.setup();
    }

    /**
     * Private constructor setup method.
     * @date 7/13/2022 - 6:28:02 PM
     *
     * @private
     */
    private setup(): void {
        this.humanPagesSize = this.pages.length || 1;
        this.pagesSize = (this.pages.length || 1) - 1;

        this.currentPageIndex = this.currentPageIndex
            ? this.currentPageIndex
            : 0;

        this.currentPageIndex = this.getPageIndex(this.currentPageIndex);

        this.humanCurrentPageIndex = this.currentPageIndex + 1;

        this.nextPageIndex = this.getPageIndex(this.currentPageIndex + 1);

        this.humanNextPageIndex = this.nextPageIndex + 1;

        this.prevPageIndex = this.getPageIndex(this.currentPageIndex - 1);

        this.humanPrevPageIndex = this.prevPageIndex + 1;

        this.pageIndicator = `${this.humanCurrentPageIndex}/${this.humanPagesSize}`;

        this.currentPage = this.pages[this.currentPageIndex];
    }

    /**
     * Calculates the pages index by passing an unsafe index.
     * @date 7/13/2022 - 6:32:30 PM
     *
     * @param {number} pageIndex
     * @returns {number}
     */
    getPageIndex(pageIndex: number): number {
        if (this.options.infinitePages) {
            pageIndex = pageIndex > -1 ? pageIndex : this.pagesSize;
            pageIndex = pageIndex < this.pagesSize + 1 ? pageIndex : 0;
        } else {
            pageIndex = pageIndex > -1 ? pageIndex : 0;
            pageIndex =
                pageIndex < this.pagesSize + 1 ? pageIndex : this.pagesSize;
        }

        return pageIndex;
    }

    /**
     * Gets the current page.
     * @date 7/13/2022 - 6:28:29 PM
     *
     * @returns {Page}
     */
    getCurrentPage(): Page {
        this.setup();
        return this.currentPage;
    }

    /**
     * Gets all pages
     * @date 7/24/2022 - 7:21:02 PM
     *
     * @returns {Page[]}
     */
    getPages(): Page[] {
        this.setup();
        return this.pages;
    }

    /**
     * Goes to the next page and returns it.
     * @date 7/14/2022 - 4:25:45 PM
     *
     * @returns {Page}
     */
    next(): Page {
        this.currentPageIndex = this.currentPageIndex + 1;
        this.setup();
        return this.currentPage;
    }

    /**
     * Goes to the previous page and returns it.
     * @date 7/14/2022 - 4:26:32 PM
     *
     * @returns {Page}
     */
    prev(): Page {
        this.currentPageIndex = this.currentPageIndex - 1;
        this.setup();
        return this.currentPage;
    }

    /**
     * Goes to the first page and returns it.
     * @date 7/14/2022 - 4:27:15 PM
     *
     * @returns {Page}
     */
    first(): Page {
        this.currentPageIndex = 0;
        this.setup();
        return this.currentPage;
    }

    /**
     * Goes to the last page and returns it.
     * @date 7/14/2022 - 4:27:26 PM
     *
     * @returns {Page}
     */
    last(): Page {
        this.currentPageIndex = this.pagesSize;
        this.setup();
        return this.currentPage;
    }

    /**
     * Sets the page by its index starting with 0.
     * @date 7/14/2022 - 4:28:26 PM
     *
     * @param {number} pageIndex
     * @returns {Page}
     */
    setPage(pageIndex: number): Page {
        this.currentPageIndex = pageIndex;
        this.setup();
        return this.currentPage;
    }

    /**
     * Sets the page by its index starting with 1.
     * @date 7/14/2022 - 4:54:17 PM
     *
     * @param {number} humanPageIndex
     * @returns {Page}
     */
    setHumanPage(humanPageIndex: number): Page {
        this.currentPageIndex = humanPageIndex - 1;
        this.setup();
        return this.currentPage;
    }

    /**
     * Gets a page by its index starting with 0.
     * @date 7/14/2022 - 4:54:28 PM
     *
     * @param {number} pageIndex
     * @returns {Page}
     */
    getPage(pageIndex: number): Page {
        this.setup();
        return this.pages[this.getPageIndex(pageIndex)];
    }

    /**
     * Gets a page by its index starting with 1.
     * @date 7/14/2022 - 4:54:51 PM
     *
     * @param {number} humanPageIndex
     * @returns {Page}
     */
    getHumanPage(humanPageIndex: number): Page {
        this.setup();
        return this.pages[this.getPageIndex(humanPageIndex - 1)];
    }
}
