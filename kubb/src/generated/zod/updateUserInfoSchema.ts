import { z } from "zod";

import { userBodySchema } from "./userBodySchema.js";


      /**
       * @description Successful response
       */
export const updateUserInfoMutationResponseSchema = z.object({"message": z.string().optional(),"user": z.object({"userId": z.string().optional()}).optional()});
export const updateUserInfoPathParamsSchema = z.object({"userId": z.string().describe(`Executes the action in the context of the specified user.`)});
export const updateUserInfoQueryParamsSchema = z.object({"checkid": z.string().describe(`Checks something`).optional(),"urlcheckid": z.string().describe(`Checks something`).optional()});

      /**
       * @description Updated user
       */
export const updateUserInfoMutationRequestSchema = z.lazy(() => userBodySchema);