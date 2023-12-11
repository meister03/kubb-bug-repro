import { makeApi, Zodios } from "@zodios/core";
import { updateUserInfoQueryResponseSchema, updateUserInfoPathParamsSchema, updateUserInfoQueryParamsSchema } from "./zod/updateUserInfoSchema.js";

const endpoints = makeApi([
        {
          method: "get",
          path: "/users/:userId/info",
          description: `...`,
          requestFormat: "json",
          parameters: [
              
          {
            name: "userId",
            description: `Executes the action in the context of the specified user.`,
            type: "Path",
            schema: updateUserInfoPathParamsSchema.shape['userId']
          }
        ,
          {
            name: "checkid",
            description: `Checks something`,
            type: "Query",
            schema: updateUserInfoQueryParamsSchema.shape['checkid']
          }
        ,
          {
            name: "urlcheckid",
            description: `Checks something`,
            type: "Query",
            schema: updateUserInfoQueryParamsSchema.shape['urlcheckid']
          }
        
          ],
          response: updateUserInfoQueryResponseSchema,
          errors: [
              
          ],
      }
      ]);

      export const api = new Zodios(endpoints);

      export default api;
    