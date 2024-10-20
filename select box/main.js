const framework = document.getElementById("framework")
const btnAdd = document.getElementById("btnAdd")

const btnRemove = document.getElementById("btnRemove")
const list =document.getElementById("list")

btnAdd.addEventListener("click",(event)=>{
    event.preventDefault();
    if (framework.value == ''){
        alert('Please enter a framework name');
        return;
    }

    const option = new Option(framework.value, framework.value);
    list.add(option,undefined);
    framework.value = "";
})

btnRemove.addEventListener("click",(e)=>{
    //save the selected options
    for(let i =0; i<list.options.length; i++){
        selected[i] = list.options[i].selected;

    }

    let index = list.options.length;

    while(index--){
        if(selected[inbox]){
            list.remove(index)
        }
    }
})

