const frmTodo = document.querySelector<HTMLFormElement>("#frm-todo")!;
const txtToDoName = document.querySelector<HTMLInputElement>("#to-do-name")!;
const txtToDoDesc = document.querySelector<HTMLInputElement>("#to-do-desc")!;
const tblPending = document.querySelector<HTMLTableElement>("#tbl-pending")!;
const tblCompleted= document.querySelector<HTMLTableElement>("#tbl-completed")!;
frmTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    let rowElm = document.createElement("tr");
    let html = `
            <td ><span class="material-symbols-outlined done">
                done
            </span></td>
            <td>${txtToDoName.value}</td>
            <td>${txtToDoDesc.value}</td>
 `;
    rowElm.innerHTML = html;
    tblPending.querySelector("tbody")!.append(rowElm);
    frmTodo.reset();
});
// <span class="material-symbols-outlined">
//     close
//     </span>
tblPending.querySelector("tbody")!.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).classList.contains('done')) {
        const elm = e.target as HTMLElement;
        const row = elm.closest<HTMLTableRowElement>('tr')!;
        console.log(elm);
        console.log(row);
        row.remove();
        row.querySelector("span")!.classList.remove('done');
        row.querySelector("span")!.classList.add('remove');
        row.querySelector("span")!.innerText='close';
        tblCompleted.querySelector("tbody")!.append(row) ;  //appending  to completed
    }
});

tblCompleted.querySelector("tbody")!.addEventListener('click',(e)=>{
    if ((e.target as HTMLElement).classList.contains('remove')) {
        const elm = e.target as HTMLElement;
        const row = elm.closest<HTMLTableRowElement>('tr')!;
        console.log(elm);
        console.log(row);
        row.remove();
        row.querySelector("span")!.classList.remove('remove');
        row.querySelector("span")!.classList.add('done');
        row.querySelector("span")!.innerText='done';
        tblPending.querySelector("tbody")!.append(row) ;  //appending  to completed
    }
});