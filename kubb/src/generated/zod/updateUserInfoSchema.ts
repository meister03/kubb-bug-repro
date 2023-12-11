import { z } from "zod";


export const updateUserInfoPathParamsSchema = z.object({"userId": z.string().describe(`Executes the action in the context of the specified user.`).regex(new RegExp('[0-9]*'))});
export const updateUserInfoQueryParamsSchema = z.object({"checkid": z.string().describe(`Checks something`).optional(),"urlcheckid": z.string().describe(`Checks something`).optional()});

      /**
       * @description Successful response
       */
export const updateUserInfoQueryResponseSchema = z.object({"message": z.string().optional(),"user": z.object({"userId": z.string().optional()}).optional()});