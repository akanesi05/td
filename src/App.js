import { useState } from "react";


export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([ {id:1,status:"完了",title:"タスク1",detail:"タスク１の詳細です"},{id:2,status:"未完了",title:"タスク2",detail:"タスク2の詳細です"}]);

  
  const [todoText, setTodoText] = useState("");
  const [inprogressTodos, setProgressTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([
  
  ]);
  const [todoDescription,setTodoDescription]=useState([])
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
    /* onClick〇〇と関数の名前を決めて定義していい*/
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

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  

  return (
    <>
      <div>
        <h5>Live遠征の前にやること</h5>
        <input
          placeholder="追加フォーム"
          value={todoText}
          onChange={onChangeTodotext}
        />
         {/* <input
          placeholder="説明"
          value={todoDescription}
          onChange={onChangeTodoDescription}
        /> */}
        <input type="todoDescription" label="説明" />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p className="title">未完了</p>
        <ul>
          {incompleteTodos.map((todo,index) => (
            <li key={todo.id}>
              <div className="incomplete-area">
                <p className="title">{todo.title}</p>
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
                <button onClick={() => onClickBack(index)}>戻る  </button>
                <button onClick={() => onClickProgress(index)}>完了</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>完了</p>
        <ul>
          {completeTodos.map((todo,index) => (
            <li key={todo}>
              <div className="incomplete-area">
                <p className="title">{todo}</p>
                <button onClick={() =>  onClickBack(index)} >戻る</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


