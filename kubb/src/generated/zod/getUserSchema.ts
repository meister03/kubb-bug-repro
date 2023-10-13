import { z } from "zod";


export const getUserPathParamsSchema = z.object({"userId": z.string().describe(`Executes the action in the context of the specified user.`)});

      /**
       * @description Successful response
       */
export const getUserQueryResponseSchema = z.object({"message": z.string().optional(),"user": z.object({"userId": z.string().optional()}).optional()});