var NoOfData = data.length;
const DisplayData = document.body
const display = i=>{

    let markup = document.createElement("div");
    markup.innerHTML=`<div>
                            <h2>${data[i].name}</h2>
                            <p><img src="${data[i].image}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3075/3075906.png';" ></p>
                            <p><audio src="${data[i].url}" controls preload> </audio></p>
                            
                        </div>`;
    DisplayData.appendChild(markup);
    
}
const PlayAudio = ()=>{
    var x = document.getElementById("myAudio");
    x.play();

}
for (var i=0; i<NoOfData; i++ ){

    
    display(i);
}
