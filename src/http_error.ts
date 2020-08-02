/**
 * HTTP error
 */

import { ErrorBase, ErrorParameters } from './error_base';

export type HttpErrorParameters = ErrorParameters & {

    /**
     * Status code
     */
    statusCode: number;

    /**
     * Status message
     */
    statusMessage: string | undefined;

    /**
     * Is this a handled error
     */
    isHandled: boolean;
};

export class HttpError extends ErrorBase {

    /**
     * HTTP status regarding the error
     */
    public readonly statusCode: number;

    /**
     * HTTP status message regarding the error
     */
    public readonly statusMessage: string | undefined;

    /**
     * Is this a handled error
     */
    public readonly isHandled: boolean;

    constructor(config?: HttpErrorParameters) {

        // parent class constructor
        super(config);

        this.statusCode = config!.statusCode;
        this.statusMessage = config!.statusMessage;
        this.isHandled = config!.isHandled;

        // set stacktrace
        Error.captureStackTrace(this, HttpError);

        // Set prototype to make instanceOf enabled
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
