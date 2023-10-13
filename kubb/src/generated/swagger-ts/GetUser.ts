
export type GetUserPathParams = {
    /**
     * @description Executes the action in the context of the specified user.
     * @type string
     * @example 1234343434343
    */
    userId: string;
};

/**
 * @description Successful response
*/
export type GetUserQueryResponse = {
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
