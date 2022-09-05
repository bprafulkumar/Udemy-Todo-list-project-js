var btn = document.getElementById('btn-click')

var unorderedList = document.getElementById('unorderedlist')

var inputItem = document.getElementById('inputbox')

var Obj= [];


btn.addEventListener('click', function(){
 
    

 if(inputItem.value===''){
        alert('Enter a vaild TODO item')
    }
    else{
        var createdElement = document.createElement('li');
        var textnode = document.createTextNode(inputItem.value)
        // textnode= inputItem.name
        createdElement.append(textnode)
        
       var order = unorderedList.appendChild(createdElement)
    }
    inputItem.value = ''
})



