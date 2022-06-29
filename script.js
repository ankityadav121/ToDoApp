var button = document.getElementById("btn");
var ip = document.getElementById("ipt");
var parent = document.getElementById("innerParent");

button.addEventListener("click", function()
{
  var value = ip.value;

  if(!value)
  {
    return
  }  

  

 var deleteBtn = document.createElement("button");
  deleteBtn.id="delte_btn";
  deleteBtn.setAttribute(
   "style", " height: 20px; float: right;margin:5px");
  deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"/>`;
  parent.appendChild(deleteBtn);

var editBtn = document.createElement("button");
  editBtn.id="edit_btn";
editBtn.setAttribute(
   "style", " height: 20px; float: right; margin:5px");
  editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  parent.appendChild(editBtn);

  var checkBox=document.createElement("input");
  checkBox.id="check_box";
  checkBox.setAttribute(
   "style", " height: 20px;width:20; float: right; margin:5px");
  checkBox.type="checkbox";
  parent.appendChild(checkBox);


var textNode = document.createElement("p");
  textNode.id="edit";
  textNode.setAttribute(
   "style", "font-size: 25px; font-style: italic ;margin-left:15px  ; display:block;max-width:300px;word-wrap:break-word");
  
  textNode.innerText = value;
  parent.appendChild(textNode);
  

 

  deleteBtn.addEventListener("click", function()
  {
    parent.removeChild(textNode);
    parent.removeChild(deleteBtn);
    parent.removeChild(editBtn);
    parent.removeChild(checkBox);
  })

  editBtn.addEventListener("click", function()
  {
    textNode.contentEditable=true;
  })

  checkBox.addEventListener("click", function()
  {
    if(!checkBox.checked){
       textNode.style.textDecoration="none"
    }
    else{
    textNode.style.textDecorationLine="line-through";
    }
  })

  ip.value = "";

});

