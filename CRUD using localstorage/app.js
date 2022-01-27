const submission = ()=>{
    var i = localStorage.length
    var index = localStorage.key(i-1)
    if (index == null){
        index = 0;
    }
    else{
        index = parseInt(index);
        index = index+1;
    }
    
    var newData = {
        NameData: document.forms["ToDoForm"]["Username"].value,
        EmailData : document.forms["ToDoForm"]["e-mail"].value
    };
    localStorage.setItem(index.toString(),JSON.stringify(newData));
} 
// show the data

const display = () =>{
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('DisplayData').appendChild(table);
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Username";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Email";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    // create tablerow according to the data
    for (var j=0; j < localStorage.length; j++){
        
        var DisplayData = JSON.parse(localStorage.getItem(localStorage.key(j)));
        //    creating row

        let rowData = document.createElement('tr');
       
        // inserting name in table
        
        let rowData_1 = document.createElement('td');
        rowData_1.setAttribute("contenteditable", true);
        rowData_1.setAttribute("id", "namedata");
        
        rowData_1.innerHTML = DisplayData.NameData;
        
        
        // inserting email into the table
        
        let rowData_2 = document.createElement('td');
        rowData_2.setAttribute("contenteditable", true);
        rowData_2.setAttribute("id", "emaildata");
        rowData_2.innerHTML = DisplayData.EmailData;


        // inserting edit button

        let rowData_3 = document.createElement('td');
        var Button_1 = document.createElement('button');
        Button_1.setAttribute('onclick',`EditData(${j})`);
        Button_1.setAttribute("id","edit_button");
        var Button_text_1 = document.createTextNode("edit");
        Button_1.appendChild(Button_text_1)
        rowData_3.appendChild(Button_1)


        // inserting delete button into the table

        let rowData_4 = document.createElement('td');
        var Button_2 = document.createElement('button');
        Button_2.setAttribute('onclick',`DeleteData(${j})`);
        Button_2.setAttribute("id","delete_button");
        var Button_text_2 = document.createTextNode("delete");
        Button_2.appendChild(Button_text_2)
        rowData_4.appendChild(Button_2)
        

        rowData.appendChild(rowData_1);
        rowData.appendChild(rowData_2);
        rowData.appendChild(rowData_3);
        rowData.appendChild(rowData_4);
        tbody.appendChild(rowData);

            
                 
    }
    
}

// edit the data

const EditData = Key=>{
    alert("edit data?")
    var key = Key.toString(); 
    
    const namedata = document.getElementById('namedata');
    const emaildata = document.getElementById('emaildata');
    UpdateData = JSON.parse(localStorage.getItem(localStorage.key(Key)));
    UpdateData.NameData = namedata.innerHTML;
    UpdateData.EmailData = emaildata.innerHTML;

    

    localStorage.setItem(key,JSON.stringify(UpdateData));
       
   
}

// delete the data

const DeleteData = Key=>{
    alert("delete data?") 
    if (localStorage.length==1){
        localStorage.clear();
    }
    else{
    var key = Key.toString()
    localStorage.removeItem(key);
}

    display();


}