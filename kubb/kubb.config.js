import { defineConfig } from "@kubb/core"
import createSwagger from "@kubb/swagger"
import createSwaggerClient from "@kubb/swagger-client"
import createSwaggerTs from "@kubb/swagger-ts"
import createSwaggerZod from "@kubb/swagger-zod"
import createSwaggerZodios from "@kubb/swagger-zodios"
import createSwaggerTanstackQuery from "@kubb/swagger-tanstack-query"

export default defineConfig({
	root: ".",
	hooks: {
		done: [
			"node yaml.js",
			"node fix_import.js"
		]
	},
	input: {
		path: "./src/resources/openapi.yaml"
	},
	output: {
		path: "./src/generated",
		clean: true,
		write: true
	},
	plugins: [
		createSwagger({ output: "swagger", validate: true }),
		createSwaggerClient({ output: "swagger-client" }),
		createSwaggerTs({ output: "swagger-ts" }),
		createSwaggerZod({ output: "zod" }),
		createSwaggerZodios({ output: "zodios" }),
		createSwaggerTanstackQuery({ output: "tanstack-query" })
	]
})