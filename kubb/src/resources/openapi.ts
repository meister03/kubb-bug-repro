export const openapi = {
  "openapi": "3.0.0",
  "info": {
    "title": "Bug Reproduction",
    "version": "1.0.0"
  },
  "paths": {
    "/users/{userId}/info": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Update User Info",
        "description": "...",
        "operationId": "updateUserInfo",
        "parameters": [
          {
            "$ref": "#/components/parameters/userId"
          },
          {
            "$ref": "#/components/parameters/checkid"
          },
          {
            "$ref": "#/components/parameters/urlcheckid"
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
    "schemas": {
      "UserBody": {
        "type": "object",
        "description": "nothing important",
        "properties": {
          "id": {
            "type": "number"
          },
          "age": {
            "type": "number"
          },
          "name": {
            "type": "string"
          }
        }
      }
    },
    "parameters": {
      "userId": {
        "name": "userId",
        "in": "path",
        "description": "Executes the action in the context of the specified user.",
        "required": true,
        "schema": {
          "type": "string",
          "pattern": "[0-9]*",
          "example": 1234343434343
        }
      },
      "checkid": {
        "name": "checkid",
        "in": "query",
        "description": "Checks something",
        "schema": {
          "type": "string",
          "example": 1234343434343
        }
      },
      "urlcheckid": {
        "name": "urlcheckid",
        "in": "query",
        "description": "Checks something",
        "schema": {
          "type": "string",
          "example": 1234343434343
        }
      }
    }
  }
}