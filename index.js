const btn = document.querySelector("#btn");
const add = document.querySelector("#add");
const item = document.querySelector("#item");
const clearItem = document.querySelector("#clearItem");

/**todo 추가 버튼 이벤트*/
function addTodo() {
  if (!add.value) {
    //입력한 내용이 없다면
    alert("내용을 입력하세요.");
  } else {
    const list = document.createElement("li");
    const edit = document.createElement("button"); //수정 버튼 추가
    const del = document.createElement("button"); //삭제 버튼 추가
    list.textContent = add.value;
    item.append(list);
    list.append(edit);
    edit.textContent = "edit";
    edit.addEventListener("click", editTodo);
    list.append(del);
    del.textContent = "X";
    del.addEventListener("click", delTodo);
    const complete = document.createElement("button"); //완료 버튼 추가
    complete.textContent = "O";
    list.append(complete);
    complete.addEventListener("click", completeTodo);
    add.value = ""; //작업이 끝나면 입력창 초기화
  }
}

/**enter 입력 시 todo 추가 */
function addTodoEnter(e) {
  if (e.keyCode == 13) {
    const list = document.createElement("li");
    const edit = document.createElement("button"); //수정 버튼 추가
    const del = document.createElement("button"); //삭제 버튼 추가
    list.textContent = add.value;
    item.append(list);
    list.append(edit);
    edit.textContent = "edit";
    edit.addEventListener("click", editTodo);
    list.append(del);
    del.textContent = "X";
    del.addEventListener("click", delTodo);
    const complete = document.createElement("button"); //완료 버튼 추가
    complete.textContent = "O";
    list.append(complete);
    complete.addEventListener("click", completeTodo);
    add.value = ""; //작업이 끝나면 입력창 초기화
  }
}

btn.addEventListener("click", addTodo);
add.addEventListener("keydown", addTodoEnter);

/**edit 이벤트 */
function editTodo(e) {
  const editList = e.target.parentElement;
  const newContent = prompt("수정할 내용을 입력하세요."); //alter창에서 입력받은 값 가져오기
  if (newContent !== null) {
    editList.childNodes[0].nodeValue = newContent;
  }
}

/**todo 삭제 버튼 이벤트 */
function delTodo(e) {
  const delList = e.target.parentElement;
  delList.remove();
}
