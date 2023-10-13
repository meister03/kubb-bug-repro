import YAML from "yaml"
import fs from "fs"

const swaggerDocument = YAML.parse(
	fs.readFileSync(`${process.cwd()}/src/resources/openapi.yaml`, "utf8")
)

fs.writeFileSync(
    `${process.cwd()}/src/resources/openapi.ts`,
    "export const openapi = " +
    JSON.stringify(swaggerDocument, null, 2)
)