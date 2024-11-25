import * as database from "./utils/database.js"
import { key } from "./api.js"

database.connectDatabase("my-database")
console.log(database.type)
database.disconectDatabase()
console.log(key)