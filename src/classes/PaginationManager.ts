import {
    Page,
    IPaginationBuilderOptions,
    PaginationBuilder,
} from './PaginationBuilder';

/**
 * Pagination Manager Main Class.
 * @date 7/13/2022 - 6:26:37 PM
 *
 * @export
 * @class PaginationManager
 * @typedef {PaginationManager}
 */
export class PaginationManager {
    pages: Page[];
    options: IPaginationBuilderOptions;
    pagesSize!: number;
    currentPageIndex!: number;
    humanCurrentPageIndex!: number;
    nextPageIndex!: number;
    humanNextPageIndex!: number;
    prevPageIndex!: number;
    humanPrevPageIndex!: number;
    pageIndicator!: string;
    currentPage: Page;

    /**
     * Creates an instance of PaginationManager.
     * @date 7/13/2022 - 3:18:12 PM
     *
     * @constructor
     * @param {PaginationBuilder} paginationBuilder
     */
    constructor(paginationBuilder: PaginationBuilder) {
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
        this.pagesSize = this.pages.length;

        this.currentPageIndex = this.currentPageIndex
            ? this.currentPageIndex
            : 0;

        this.currentPageIndex = this.getPageIndex(this.currentPageIndex);

        this.humanCurrentPageIndex = this.currentPageIndex + 1 || 1;

        this.nextPageIndex = this.getPageIndex(this.currentPageIndex + 1);

        this.humanNextPageIndex = this.nextPageIndex + 1;

        this.prevPageIndex = this.getPageIndex(this.currentPageIndex - 1);

        this.humanPrevPageIndex = this.prevPageIndex + 1;

        this.pageIndicator = `${this.humanCurrentPageIndex}/${this.pagesSize}`;

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

    getPages(): Page {
        this.setup();
        return this.pages;
    }

    next(): Page {
        this.currentPageIndex = this.currentPageIndex + 1;
        this.setup();
        return this.currentPage;
    }

    prev(): Page {
        this.currentPageIndex = this.currentPageIndex - 1;
        this.setup();
        return this.currentPage;
    }

    first(): Page {
        this.currentPageIndex = 0;
        this.setup();
        return this.currentPage;
    }

    last(): Page {
        this.currentPageIndex = this.pagesSize - 1;
        this.setup();
        return this.currentPage;
    }

    setPage(page: Page): Page {
        this.currentPageIndex = page;
        this.setup();
        return this.currentPage;
    }

    setHumanPage(humanPageIndex: number): Page {
        this.currentPageIndex = humanPageIndex - 1;
        this.setup();
        return this.currentPage;
    }

    getPage(pageIndex: number): Page {
        this.setup();
        return this.pages[this.getPageIndex(pageIndex)];
    }

    getHumanPage(humanPageIndex: number): Page {
        this.setup();
        return this.pages[this.getPageIndex(humanPageIndex - 1)];
    }
}
