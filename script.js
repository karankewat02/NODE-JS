
let urlInput = document.querySelector('input');
let button = document.querySelector("button");


button.addEventListener('click',()=>{
    urlValue = urlInput.value;
    sendURL(urlValue)
})

function sendURL(URL){

    window.location.href=`http://localhost:4000/download?URL=${URL}`
    
    // fetch(`http://localhost:4000/download?URL=${URL}`,{
    //     method : 'GET'
    // }).then(res => res.json())
    // .then(json => console.log(json));

}