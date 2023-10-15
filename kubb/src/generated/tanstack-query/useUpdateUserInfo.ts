import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { UpdateUserInfoMutationRequest, UpdateUserInfoMutationResponse, UpdateUserInfoPathParams, UpdateUserInfoQueryParams } from "../swagger-ts/UpdateUserInfo.js";

/**
 * @description ...
 * @summary Update User Info
 * @link /users/:userId/info
 */

export function useUpdateUserInfo <TData = UpdateUserInfoMutationResponse,TError = unknown,TVariables = UpdateUserInfoMutationRequest>(userId: UpdateUserInfoPathParams["userId"], params?: UpdateUserInfoQueryParams, options: {
          mutation?: UseMutationOptions<ResponseConfig<TData>, TError, TVariables>,
          client?: Partial<Parameters<typeof client<TData, TError, TVariables>>[0]>,
      } = {}): UseMutationResult<ResponseConfig<TData>, TError, TVariables> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
  
  return useMutation<ResponseConfig<TData>, TError, TVariables>({
    mutationFn: (data) => {
      
      return client<TData, TError, TVariables>({
        method: "put",
        url: `/users/${userId}/info`,
        data,
        params,
        
        ...clientOptions
      });
    },
    ...mutationOptions
  });
};
