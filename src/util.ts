/**
 * Utility functions
 */

import { ErrorParameters } from './error_base';

/**
 * Get default error message
 * @param code Error code or message (e.g. E_NOT_FOUND)
 */
export const getDefaultErrorMessage = (code: string | number): string => `Error '${code}' has been occurred.`;

/**
 * Get either default or predefined error message
 * @param code Error code or message (e.g. E_NOT_FOUND)
 * @param config Configuration object
 */
export const getEitherDefaultOrPredefinedErrorMessage = (config: ErrorParameters): string => {

    // set default error message
    let errorMessage = getDefaultErrorMessage(config.code);

    // error message is inherited from the error message
    if (config && config.error) {
        errorMessage = config.error.message;
    }

    // error message is overwritten by the user
    if (config && config.message) {
        errorMessage = config.message;
    }

    return errorMessage;
}
