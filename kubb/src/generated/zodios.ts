import { makeApi, Zodios } from "@zodios/core";
import { getUserQueryResponseSchema, getUserPathParamsSchema } from "./zod/getUserSchema.js";


      const endpoints = makeApi([
        {
          method: "get",
          path: "/users/:userId",
          description: `...`,
          requestFormat: "json",
          parameters: [
              
          {
            name: "GetUserPathParams",
            description: ``,
            type: "Path",
            schema: getUserPathParamsSchema
          }
        
          ],
          response: getUserQueryResponseSchema,
          errors: [
              
          ],
      }
      ]);

      export const api = new Zodios(endpoints);

      export default api;
    