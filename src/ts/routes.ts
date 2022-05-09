const token=sessionStorage.getItem('token')??localStorage.getItem('key');
if(!token){
    if(location.pathname==='/'||location.pathname==='/index.html'){
        location.replace('welcome.html');
    }

}else{
    if(location.pathname==='/'||location.pathname==='/signup.html'){
        location.replace('index.html');
    }
}