const {client} = require("./client");

async function addToStack(key, value) {
    const data = await client.lpush(key, value)
    console.log(data)
}

async function removeFromStack(key) {
    const data = await client.lpop(key) // blpop(key, blocking time) ("fruits", 10) is also an option blocking time is in seconds
    console.log(data)
}

async function getStack(key) {
    const data = await client.lrange(key, 0, -1)
    console.log(data)
}

addToStack("stack", "rahul")
getStack("stack")
removeFromStack("stack")
getStack("stack")