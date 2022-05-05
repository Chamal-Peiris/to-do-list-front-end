const frmTodo=document.querySelector<HTMLFormElement>("#frm-todo")!;
const txtToDoName=document.querySelector<HTMLInputElement>("#to-do-name")!;
const txtToDoDesc=document.querySelector<HTMLInputElement>("#to-do-desc")!;

frmTodo.addEventListener('submit',(e)=>{
    e.preventDefault();
   console.log('submitted');
});