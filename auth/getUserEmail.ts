'use server'

const users = [
    {id: 1, email: "john@doe.com"}
]

const delay= (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getUserEmail(id) {
    await delay(5000);
    return // ???
}  
