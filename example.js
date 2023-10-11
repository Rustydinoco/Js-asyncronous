const token = Math.floor(Math.random()*812345);

function Login(username) {
    return new Promise((resolve,reject)=>{
        console.log('processing username...')
        setTimeout(() => {
            if(username != "bilalach04"){
                reject('username not found')
            }
            resolve(token);
            
        }, 500);
    });
    
};

function getKey (token){
    return new Promise((resolve,reject)=>{
        console.log('Get Token... ')
        setTimeout(() => {
            if(!token){
                reject('Token not found')
            }
            resolve();
        }, 500);
    });
};




async function UserResult(){
    try {
        const token= await Login("bilalach04")
        const Key= await getKey(token)
        console.log(`hai token anda adalah ${token}`)
    } catch (error) {
        console.log('error')
    }



    
}

UserResult()