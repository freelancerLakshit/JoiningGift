

var arr =["27th June it is!", "This is such an exciting moment!", "Your hard work has paid off.","This is just the start.", "I love you!", "Stay Happiest!", "CONGRATULATIONS KASHISH!"]


function del(i){
    setTimeout(()=>{
        document.getElementById('text').innerHTML = arr[i];
    },i*1000)
}

function loop (){
    setTimeout(()=>{
        for(let i =0; i<arr.length; i++){
            del(i);
        }
        setTimeout(()=>{
            loop();
        }, 7000)
    }, 2000)
}

loop();

