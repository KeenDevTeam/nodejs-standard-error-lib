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

    constructor(config?: MissingArgumentErrorParameters) {

        if (!config) { throw new Error('E_NO_CONFIG'); }

        super({
            ...(config as ErrorParameters),
            message: `\'${config!.argumentName}\' is not provided (null or undefined).`
        });

        this.argumentName = config!.argumentName;

        // set stacktrace
        Error.captureStackTrace(this, MissingArgumentError);
    }
}
