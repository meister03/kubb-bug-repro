import { makeApi, Zodios } from "@zodios/core";
import { updateUserInfoMutationResponseSchema, updateUserInfoPathParamsSchema, updateUserInfoQueryParamsSchema, updateUserInfoMutationRequestSchema } from "./zod/updateUserInfoSchema.js";


      const endpoints = makeApi([
        {
          method: "put",
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
        ,
          {
            name: "id",
            description: ``,
            type: "Body",
            schema: updateUserInfoMutationRequestSchema.schema.shape['id']
          }
        ,
          {
            name: "age",
            description: ``,
            type: "Body",
            schema: updateUserInfoMutationRequestSchema.schema.shape['age']
          }
        ,
          {
            name: "name",
            description: ``,
            type: "Body",
            schema: updateUserInfoMutationRequestSchema.schema.shape['name']
          }
        
          ],
          response: updateUserInfoMutationResponseSchema,
          errors: [
              
          ],
      }
      ]);

      export const api = new Zodios(endpoints);

      export default api;
    