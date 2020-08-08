/**
 * HTTP Bad request
 */

import { HttpError, HttpErrorParameters } from './http_error';

export type HttpBadRequestParameters = HttpErrorParameters & {

    /**
     * Validation errors
     */
    validationErrors: Array<any>
}

export class HttpBadRequest extends HttpError {

    /**
     * Validation error(s)
     */
    public readonly validationErrors: Array<any>;

    constructor(config?: HttpBadRequestParameters) {

        // parent class constructor
        super(config);

        this.validationErrors = config!.validationErrors;

        // set stacktrace
        Error.captureStackTrace(this, HttpBadRequest);

        // Set prototype to make instanceOf enabled
        Object.setPrototypeOf(this, HttpBadRequest.prototype);
    }
}
