let arr=[];
let arr1=[];
let form=document.getElementById('form1');
let items=document.getElementById('itemlist');
form.addEventListener('submit',input);
function input (e)
{
    e.preventDefault();
    
     let text=document.getElementById('enter').value;
     document.getElementById('enter').value='';
    let myobj=
    {
      itemss:text
    }
    arr.push(myobj);
    let list=JSON.stringify(myobj);
    localStorage.setItem('list',list);
    //let arr1=JSON.parse(localStorage.getItem('list'));
    
      
      
    document.addEventListener('load',display);
    function display()
    {
      let arr1=JSON.parse(localStorage.getItem('list'));
      arr1.foreach(addtolist(item));
    }
      function addtolist(item){
      let list=document.querySelector('#list');
      list.innerHTML=`
       ${item.itemss}
      `;
      //console.log(1);
        
      /*let li=document.createElement('li');
       li.className='list-group-item';
       li.appendChild(document.createTextNode(text));
       let button=document.createElement('button');
       button.className='btn btn-danger btn-sm float-right delete';
      button.appendChild(document.createTextNode('X'));
      li.appendChild(button);*/
        items.appendChild(list);
    }
    
    /*document.addEventListener('load',function display(){
   let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(text));
    let button=document.createElement('button');
    button.className='btn btn-danger btn-sm float-right delete';
   button.appendChild(document.createTextNode('X'));
   li.appendChild(button);
     items.appendChild(li);
    });*/
    }


items.addEventListener('click',deleteitems);
function deleteitems (e)
{
  
   if(e.target.className=='btn btn-danger btn-sm float-right delete')
   {
     if(confirm('Are You Sure?')){
       e.target.parentElement.remove();}
   }
   
}

