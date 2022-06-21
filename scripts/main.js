let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Top_image.jpg'){
        myImage.setAttribute('src','images/Top_image02.jpg');
    }
    else{
        myImage.setAttribute('src','images/Top_image.jpg');
    }
}