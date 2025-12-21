let child_process = require("child_process")
let fs = require("fs")

try {
    child_process.execSync("git add .")
    child_process.execSync("git commit -m update")
    child_process.execSync("git pull")
}
catch (error) { 
    // pass
}

child_process.execSync(`vsce publish patch -p ${fs.readFileSync("../token/vsce.personal-access.token")}`)
child_process.execSync("git push")
