const frmTodo = document.querySelector<HTMLFormElement>("#frm-todo")!;
const txtToDoName = document.querySelector<HTMLInputElement>("#to-do-name")!;
const txtToDoDesc = document.querySelector<HTMLInputElement>("#to-do-desc")!;
const tblPending = document.querySelector<HTMLTableElement>("table")!;
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
});

tblPending.querySelector("tbody")!.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).classList.contains('done')) {
        const elm = e.target as HTMLElement;
        const row = elm.closest<HTMLTableRowElement>('tr')!;
        console.log(elm);
        console.log(row);
        row.remove();
0
    }
});