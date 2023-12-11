
export type UpdateUserInfoPathParams = {
    /**
     * @description Executes the action in the context of the specified user.
     * @type string
     * @example 1234343434343
    */
    userId: string;
};

export type UpdateUserInfoQueryParams = {
    /**
     * @description Checks something
     * @type string | undefined
     * @example 1234343434343
    */
    checkid?: string;
    /**
     * @description Checks something
     * @type string | undefined
     * @example 1234343434343
    */
    urlcheckid?: string;
};

/**
 * @description Successful response
*/
export type UpdateUserInfoQueryResponse = {
    /**
     * @type string | undefined
    */
    message?: string;
    /**
     * @type object | undefined
    */
    user?: {
        /**
         * @type string | undefined
        */
        userId?: string;
    };
};
