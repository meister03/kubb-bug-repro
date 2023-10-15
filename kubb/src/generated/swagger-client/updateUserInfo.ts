import client from "../client.js";
import type { ResponseConfig } from "../client.js";
import type { UpdateUserInfoMutationRequest, UpdateUserInfoMutationResponse, UpdateUserInfoPathParams, UpdateUserInfoQueryParams } from "../swagger-ts/UpdateUserInfo.js";

/**
    * @description ...
    * @summary Update User Info
    * @link /users/:userId/info
    */
export async function updateUserInfo<TData = UpdateUserInfoMutationResponse, TVariables = UpdateUserInfoMutationRequest>(userId: UpdateUserInfoPathParams["userId"], data?: TVariables, params?: UpdateUserInfoQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<TData>["data"]> {
   const { data: resData } = await client<TData, TVariables>({
      method: "put",
      url: `/users/${userId}/info`,
      params,
      data,
      ...options
   });
   
   return resData;
};