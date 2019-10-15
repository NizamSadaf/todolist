
var form=document.getElementById('form1');
var items=document.getElementById('itemlist');
form.addEventListener('submit',input);
function input (e)
{
    e.preventDefault();
    
     var text=document.getElementById('enter').value;
     document.getElementById('enter').value='';
    
   var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(text));
    var button=document.createElement('button');
    button.className='btn btn-danger btn-sm float-right delete';
   button.appendChild(document.createTextNode('X'));
   li.appendChild(button);
     items.appendChild(li);
}

items.addEventListener('click',deleteitems);
function deleteitems (e)
{
   if(e.target.className=='btn btn-danger btn-sm float-right delete')
   {
       e.target.parentElement.remove();
   }
   window.alert("Comleted?");
}

