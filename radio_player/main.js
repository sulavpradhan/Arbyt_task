var NoOfData = data.length;
const DisplayData = document.body
const display = i=>{

    let markup = document.createElement("div");
    markup.innerHTML=`<div>
                            <h2>${data[i].name}</h2>
                            <p><img src="${data[i].image}"></p>
                            <p><a href="${data[i].url}">click to play</a></p>
                        </div>`;
    DisplayData.appendChild(markup);
    
}
for (var i=0; i<NoOfData; i++ ){

    
    display(i);
}