const {client} = require("./client");


async function getString(key) {
    await client.expire(key, 10)  /// optional, it expires in 10 seconds to invlidate the key or cache data
    const data = await client.get(key) 
    console.log(data)
    return data
    }


async function setString(key, value) {
    const data = await client.set(key, value)
    return data
    }


setString("name", "justin")
getString("name")