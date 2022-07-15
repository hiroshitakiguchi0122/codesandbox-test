import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完リストから削除押下
const deleteFromIncollectList = (target) => {
  document.getElementById("incomplete-area").removeChild(target);
};

// 未完リストからの完了押下
const createIncompleteList = (text) => {
  const ul = document.createElement("ul");
  ul.className = "list-row";

  // liの中に入力したテキストを追加
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン押下
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    deleteFromIncollectList(completeTarget);

    const completeText = completeTarget.firstElementChild.innerText;
    completeTarget.textContent = null;

    const ul = document.createElement("ul");
    ul.className = "list-row";

    document.getElementById("complete-area").appendChild(ul);
    const li = document.createElement("li");
    li.innerText = completeText;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    ul.appendChild(li);
    ul.appendChild(backButton);
  });

  // 削除ボタン押下
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncollectList(deleteTarget);
  });

  // 追加
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);
  document.getElementById("incomplete-area").appendChild(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
