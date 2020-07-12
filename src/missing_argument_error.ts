/**
 * Argument error
 */

import { ErrorBase, ErrorParameters } from './error_base';

export type MissingArgumentErrorParameters = ErrorParameters & {

    /**
     * Name of the argument
     */
    argumentName: string;
};

/**
 * Missing Argument Error
 */
export class MissingArgumentError extends ErrorBase {

    /**
     * Name of the argument
     */
    protected readonly argumentName: string;

    constructor(argumentName?: string) {

        if (!argumentName) { throw new Error('E_ARG_NAME'); }

        super({
            code: 'E_NO_ARG',
            message: `\'${argumentName}\' is not provided (null or undefined).`
        });

        this.argumentName = argumentName;

        // set stacktrace
        Error.captureStackTrace(this, MissingArgumentError);
    }
}
