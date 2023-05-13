const fs = require("fs")

const run = () => {
    const path = "./js/quotes.json"
    let fileData = fs.readFileSync(path)
    fileData = JSON.parse(fileData)

    let textMap = {}
    let uniqueQuotes = []

    for (let obj of fileData) {
        let quote = obj.text
        if (textMap[quote] === undefined) {
            textMap[quote] = true;
            uniqueQuotes.push(obj)
        } else {
            // skip
            console.log("Dup Found:", obj);
        }
    }
    console.log("Original: ", fileData.length);
    console.log("Dup Removed: ", uniqueQuotes.length);

    fs.writeFileSync(path, JSON.stringify(uniqueQuotes, null, 2))

}


run()