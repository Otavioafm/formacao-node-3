async function connectDatabase(dataName) {
    
    console.log("Conectando ao Database: "+dataName)
}
async function disconectDatabase(dataName) {

    console.log("Disconectando ao Database: "+dataName)
}
const type={
    userType: "admin"
}

export  {connectDatabase, disconectDatabase, type}
