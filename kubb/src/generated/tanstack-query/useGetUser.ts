import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import client from "@kubb/swagger-client/client";
import type { GetUserQueryResponse, GetUserPathParams } from "../swagger-ts/GetUser.js";

export const getUserQueryKey = (userId: GetUserPathParams["userId"]) =>    [{url:`/users/${userId}`,params:{userId:userId}}] as const;

export function getUserQueryOptions <TData = GetUserQueryResponse, TError = unknown>(userId: GetUserPathParams["userId"], options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
  const queryKey = getUserQueryKey(userId, );
  
  return {
    queryKey,
    queryFn: () => {
      
      return client<TData, TError>({
        method: "get",
        url: `/users/${userId}`,
        
        
        ...options,
      }).then(res => res.data);
    },
  };
};

/**
 * @description ...
 * @summary Get public user details
 * @link /users/:userId
 */

export function useGetUser <TData = GetUserQueryResponse,TError = unknown>(userId: GetUserPathParams["userId"], options: { 
          query?: UseQueryOptions<TData, TError>,
          client?: Partial<Parameters<typeof client<TData, TError>>[0]>,
        } = {}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getUserQueryKey(userId, );
  
  const query = useQuery<TData, TError>({
    ...getUserQueryOptions<TData, TError>(userId, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
};
