/**
 * Error base class
 */

import { getEitherDefaultOrPredefinedErrorMessage } from './util';

export type ErrorParameters = {

    /**
     * Error code
     */
    code: string | number;

    /**
     * Overridden error message
     */
    message?: string | undefined;

    /**
     * The main error occurred
     */
    error?: Error | undefined;
};

export abstract class ErrorBase extends Error {

    /**
     * Error code
     */
    protected readonly code: string | number;

    /**
     * Human-friendly error message
     */
    readonly message: string;

    constructor(config?: ErrorParameters) {

        if (!config) { throw new Error('E_NO_CONFIG'); }

        // generate error message
        const errorMessage = getEitherDefaultOrPredefinedErrorMessage(config);

        super(errorMessage);

        this.code = config.code;
        this.message = errorMessage;

        if (config.error) {
            // copy the default stacktrace
            this.stack = config.error.stack;
        }

        // set stacktrace
        Error.captureStackTrace(this, ErrorBase);

        // Set prototype to make instanceOf enabled
        Object.setPrototypeOf(this, ErrorBase.prototype);
    }
}
