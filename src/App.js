import { useState } from "react";

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);
  const [todoText, setTodoText] = useState("");
  const [inprogressTodos, setProgressTodos] = useState(["進行中1", "進行中2"]);
  const [completeTodos, setCompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2",
  ]);
  const onChangeTodotext = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText == "") return/*空文字ならここで終了*/
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");/*入力した後からの配列にする*/
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);/*特定の一覧のものを削除する*/
    setIncompleteTodos(newTodos);/*その値をステートで更新する*/
  };
    
  const onClickComplete = (index) => {
    const newProgressTodos = [...incompleteTodos];
    newProgressTodos.splice(index, 1);

    const updatedProgressTodos = [...inprogressTodos, incompleteTodos[index]];

    setIncompleteTodos(newProgressTodos);
    setProgressTodos(updatedProgressTodos);
  }

  const onClickProgress = (index) => {
    const newcompleteTodos = [...inprogressTodos];
    newcompleteTodos.splice(index, 1);

    const updatedcompleteTodos = [...completeTodos, inprogressTodos[index]];

    setProgressTodos(newcompleteTodos);
    setCompleteTodos(updatedcompleteTodos);
  }
  return (
    <>
      <div>
        <input
          placeholder="追加フォーム"
          value={todoText}
          onChange={onChangeTodotext}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p className="title">未完了のTODO</p>
        {/*一覧を表示させる */}
        <ul>
          {incompleteTodos.map((todo,index) => (
            <li key={todo}>
              <div className="incomplete-area">
                <p className="title">{todo}</p>
                <button  onClick={() => onClickComplete(index)}>着手</button>
                <button  onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>進行中</p>
        <ul>
          {inprogressTodos.map((todo,index) => (
            <li key={todo}>
              <div className="incomplete-area">
                <p className="title">{todo}</p>
                <button>戻る</button>
                <button onClick={() => onClickProgress(index)}>完了</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>完了</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="incomplete-area">
                <p className="title">{todo}</p>
                <button>戻る</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


