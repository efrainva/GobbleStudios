require('isomorphic-fetch')

const url = `https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"id":"8488041028","first":3}`

async function getposts () { 
    const data = await fetch(url)
    .then(data => data.json)
    console.log(data)
    return data
}

exports.handeler = async function(event,
    context,callback){
        const posts = await getposts();
    callback(null,{
        status_code:200,
        body:"started"
    })
}