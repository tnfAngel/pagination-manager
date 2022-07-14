import { PaginationManagerError } from '../util';

/**
 * Page Type.
 * @date 7/13/2022 - 6:19:44 PM
 *
 * @export
 * @typedef {Page}
 */
export type Page = any;

/**
 * Pagination Builder Options Interface.
 * @date 7/13/2022 - 6:19:13 PM
 *
 * @export
 * @interface IPaginationBuilderOptions
 * @typedef {IPaginationBuilderOptions}
 */
export interface IPaginationBuilderOptions {
    infinitePages: boolean;
}

/**
 * Pagination Builder Class.
 * @date 7/13/2022 - 6:20:04 PM
 *
 * @export
 * @class PaginationBuilder
 * @typedef {PaginationBuilder}
 */
export class PaginationBuilder {
    pages: Page[];
    options: IPaginationBuilderOptions;

    /**
     * Creates an instance of PaginationBuilder.
     * @date 7/13/2022 - 6:20:31 PM
     *
     * @constructor
     */
    constructor() {
        this.pages = [];
        this.options = {
            infinitePages: false,
        };
    }

    /**
     *  Adds a page to the pages array.
     * @date 7/13/2022 - 6:25:11 PM
     *
     * @param {Page} page
     * @returns {this}
     */
    addPage(page: Page) {
        this.pages.push(page);
        return this;
    }

    /**
     * Adds pages to the pages array.
     * @date 7/13/2022 - 6:25:02 PM
     *
     * @param {Page[]} pages
     * @returns {this}
     */
    addPages(pages: Page[]) {
        pages.forEach((page) => this.addPage(page));
        return this;
    }

    /**
     * Sets the pages of the pages array.
     * @date 7/13/2022 - 6:22:12 PM
     *
     * @param {Page[]} pages
     * @returns {this}
     */
    setPages(pages: Page[]) {
        if (Array.isArray(pages)) {
            this.pages = pages;
        } else {
            throw new PaginationManagerError(
                'INVALID_PARAMETER_TYPE',
                'setPages method must use an array of pages.'
            );
        }
        return this;
    }

    /**
     * Sets the options for Pagination Builder
     * @date 7/13/2022 - 6:25:35 PM
     *
     * @param {IPaginationBuilderOptions} options
     * @returns {this}
     */
    setOptions(options: IPaginationBuilderOptions) {
        if (typeof options === 'object' && options !== null) {
            this.options = options;
        } else {
            throw new PaginationManagerError(
                'INVALID_PARAMETER_TYPE',
                'setOptions method must use an object of options.'
            );
        }
        return this;
    }
}