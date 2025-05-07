"use strict"

async function getRecipes(url, limit=1) {
    let response = await fetch(url)
    const decoder = new TextDecoder("utf-8")
    for await (const chunk of response.body) 
    {
        console.log(decoder.decode(chunk, {stream: true}));
    }
}

let url = "https://dummyjson.com/recipes"
getRecipes(url)