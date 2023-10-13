import client from "../client.js";
import type { ResponseConfig } from "../client.js";
import type { GetUserQueryResponse, GetUserPathParams } from "../swagger-ts/GetUser.js";

/**
    * @description ...
    * @summary Get public user details
    * @link /users/:userId
    */
export async function getUser<TData = GetUserQueryResponse>(userId: GetUserPathParams["userId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<TData>["data"]> {
   const { data: resData } = await client<TData>({
      method: "get",
      url: `/users/${userId}`,
      ...options
   });
   
   return resData;
};