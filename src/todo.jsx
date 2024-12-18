import { useState } from "react";
import "./styles.css";

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
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  };
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
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="incomplete-area">
                <p className="title">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>進行中</p>
        <ul>
          {inprogressTodos.map((todo) => (
            <li key={todo}>
              <div className="incomplete-area">
                <p className="title">{todo}</p>
                <button>戻る</button>
                <button>完了</button>
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

