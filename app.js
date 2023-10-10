const request = (url)=>{
    return new Promise((resolve,reject)=>{
        const delay =Math.floor(Math.random()*4000)+500;
        setTimeout(() => {
            if (delay > 3000) {
                reject('Timeout Connection')
                
            } resolve(`success : ${url} ${delay} ms`)
        },delay);
    })
    
}

async function requestTimeOut(){
    try{
        let result = await request('abcd.com')
        console.log(result)
    }
    catch{
        console.log('Error : connection timeout')
    }
}
requestTimeOut()