import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import client from "@kubb/swagger-client/client";
import type { UpdateUserInfoQueryResponse, UpdateUserInfoPathParams, UpdateUserInfoQueryParams } from "../swagger-ts/UpdateUserInfo.js";

export const updateUserInfoQueryKey = (userId: UpdateUserInfoPathParams["userId"], params?: UpdateUserInfoQueryParams) =>     [{url:`/users/${userId}/info`,params:{userId:userId}},...(params ? [params] : [])] as const;
      export function updateUserInfoQueryOptions <TData = UpdateUserInfoQueryResponse, TError = unknown>(userId: UpdateUserInfoPathParams["userId"], params?: UpdateUserInfoQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
        const queryKey = updateUserInfoQueryKey(userId, params);

        return {
          queryKey,
          queryFn: () => {
            
            return client<TData, TError>({
              method: "get",
              url: `/users/${userId}/info`,
              params,
              
              ...options,
            }).then(res => res.data);
          },
        };
      };
      
/**
 * @description ...
 * @summary Update User Info
 * @link /users/:userId/info
 */

export function useUpdateUserInfo <TData = UpdateUserInfoQueryResponse, TError = unknown>(userId: UpdateUserInfoPathParams["userId"], params?: UpdateUserInfoQueryParams, options: {
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? updateUserInfoQueryKey(userId, params);

  const query = useQuery<TData, TError>({
    ...updateUserInfoQueryOptions<TData, TError>(userId, params, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
};
