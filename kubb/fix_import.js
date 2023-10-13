import fs from "fs"
import path from "path"

let counter = 0

const srcDir = "./src/generated"

try {
	fs.rmSync(path.join(srcDir, "index.ts"))
} catch (e) {
}

function checkFile(filePath) {
	const content = fs.readFileSync(filePath, "utf8")

	const updatedContent = content.replace(
		/from\s+["'](\..?\/[^"']+)["'];/g,
		(match, importPath) => {
			const jsImportPath = !importPath.includes(".js") ? importPath + ".js" : importPath
			return `from "${jsImportPath}";`
		}
	)

	if (content !== updatedContent) {
		fs.writeFileSync(filePath, updatedContent)
		counter++
	}
}

function iterateDirectory(directoryPath) {
	const files = fs.readdirSync(directoryPath)
	for (const file of files) {
		const filePath = path.join(directoryPath, file)
		const stats = fs.statSync(filePath)

		// Check if it is a file or directory
		if (stats.isFile()) {
			if (filePath.endsWith(".ts")) {
				checkFile(filePath)
			}
		} else if (stats.isDirectory()) {
			iterateDirectory(filePath)
		}
	}
}

// Start processing the directory
iterateDirectory(srcDir)