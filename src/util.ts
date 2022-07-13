
/**
 * Throws an error.
 * @date 7/13/2022 - 6:18:40 PM
 *
 * @export
 * @class PaginationManagerError
 * @typedef {PaginationManagerError}
 * @extends {Error}
 */
export class PaginationManagerError extends Error {

    /**
     * Creates an instance of PaginationManagerError.
     * @date 7/13/2022 - 6:18:32 PM
     *
     * @constructor
     * @param {string} code
     * @param {string} message
     */
    constructor(code: string, message: string) {
        super(`(${code.toUpperCase()}) ${message}`);
        this.name = 'PaginationManagerError';
    }
}
