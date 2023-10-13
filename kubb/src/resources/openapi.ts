export const openapi = {
  "openapi": "3.0.0",
  "info": {
    "title": "Bug Reproduction",
    "version": "1.0.0"
  },
  "paths": {
    "/users/{userId}": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get public user details",
        "description": "...",
        "operationId": "getUser",
        "parameters": [
          {
            "$ref": "#/components/parameters/userId"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "User details retrieved successfully"
                    },
                    "user": {
                      "type": "object",
                      "properties": {
                        "userId": {
                          "type": "string",
                          "example": 1234343434343
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "parameters": {
      "userId": {
        "name": "userId",
        "in": "path",
        "description": "Executes the action in the context of the specified user.",
        "required": true,
        "schema": {
          "type": "string",
          "example": 1234343434343
        }
      }
    }
  }
}