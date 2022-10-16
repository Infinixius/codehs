const fs = require("fs")
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

function ask() {
	readline.question("Enter output from bookmarklet:", (input) => {
		var data = JSON.parse(input)
		const PATH  = `./UNIT${data.unit}/${data.lesson}/${data.title.replaceAll(":", "").replaceAll("+", "&").replaceAll("?", "").replaceAll("\"", "'")}.js`
		data.code = atob(data.code)

		if (!fs.existsSync(`./UNIT${data.unit}/`)) {
			fs.mkdirSync(`./UNIT${data.unit}/`)
		}

		if (!fs.existsSync(`./UNIT${data.unit}/${data.lesson}`)) {
			fs.mkdirSync(`./UNIT${data.unit}/${data.lesson}/`)
		}

		fs.writeFileSync(PATH, data.code)
		console.log(`Wrote to ${PATH}`)
		ask()
	})
}

ask()