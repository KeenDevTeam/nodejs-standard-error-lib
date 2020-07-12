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
    protected readonly statusCode: number;

    /**
     * HTTP status message regarding the error
     */
    protected readonly statusMessage: string | undefined;

    /**
     * Is this a handled error
     */
    protected readonly isHandled: boolean;

    constructor(config?: HttpErrorParameters) {

        // parent class constructor
        super(config);

        this.statusCode = config!.statusCode;
        this.statusMessage = config!.statusMessage;
        this.isHandled = config!.isHandled;

        // set stacktrace
        Error.captureStackTrace(this, HttpError);
    }
}
