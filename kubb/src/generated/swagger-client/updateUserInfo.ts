import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { UpdateUserInfoQueryResponse, UpdateUserInfoPathParams, UpdateUserInfoQueryParams } from "../swagger-ts/UpdateUserInfo.js";

/**
     * @description ...
     * @summary Update User Info
     * @link /users/:userId/info
     */
export async function updateUserInfo (userId: UpdateUserInfoPathParams["userId"], params?: UpdateUserInfoQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<UpdateUserInfoQueryResponse>["data"]> {
    const { data: resData } = await client<UpdateUserInfoQueryResponse>({
        method: "get",
        url: `/users/${userId}/info`,
        params,
        ...options
    });
    
    return resData;
};