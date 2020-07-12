/**
 * Application error
 */

import { ErrorBase, ErrorParameters } from './error_base';

/**
 * Application Error
 */
export class ApplicationError extends ErrorBase {

    constructor(config?: ErrorParameters) {
        super(config);

        // set stacktrace
        Error.captureStackTrace(this, ApplicationError);
    }
}
