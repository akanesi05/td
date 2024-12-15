import { useState } from "react";


export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([ {id:1,status:"完了",title:"うちわ",detail:"ファンサうちわ作る"},{id:2,status:"未完了",title:"新幹線",detail:"指定席取る"}]);

  const [todoDetail, setTodoDetail] = useState("")
  const [todoText, setTodoText] = useState("");
  const [todoId, setTodoId] = useState(incompleteTodos.length + 1)
  const [inprogressTodos, setProgressTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([
  
  ]);
  //const [todoDescription,setTodoDescription]=useState([])
  const onChangeTodotext = (event) => setTodoText(event.target.value);
  const onChangeTododetail = (event) => setTodoDetail(event.target.value);
  
  
  // const onClickAdd = () => {
  //   if (todoText == "") return/*空文字ならここで終了*/
  //   const newTodos = [...incompleteTodos, todoText];このコードだと配列のままなのでリストに追加されない
  //   setIncompleteTodos(newTodos);
  //   setTodoText("");/*入力した後からの配列にする*/
  // };
  const onClickAdd = () => {
    if (todoText == "")  return
    setIncompleteTodos([...incompleteTodos, { id: todoId, title: todoText, detail:todoDetail}])
    setTodoId(todoId + 1)
    setTodoText("")
  }
  const onClickDelete = (targetTodo) => {
    // const newTodos = [...incompleteTodos];
    // newTodos.splice(index, 1);/*特定の一覧のものを削除する*/
    // setIncompleteTodos(newTodos);/*その値をステートで更新する*/
    setIncompleteTodos(incompleteTodos.filter((todo) => todo !== targetTodo))
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

  
// 今はタイトルだけを変更している 追加した時にtitleとデテぃーるが
  return (
    <>
      <div>
        <h5>Live遠征の前にやること</h5>
        <input
          placeholder="やること"
          value={todoText}
          onChange={onChangeTodotext}
        />
         {/* <input
          placeholder="説明"
          value={todoDescription}
          onChange={onChangeTodoDescription}
        /> */}
        <input  placeholder="説明"value={todoDetail} type="todoDescription" label="説明" onChange={onChangeTododetail} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      {/* <div>
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
      </div> */}
      <div>
        <p className="title">リスト</p>
        <ul>
        {incompleteTodos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.status}</span>
            <span>{todo.detail}</span>
            <button onClick={() =>  onClickDelete(todo)}>削除</button>
          </li>
        ))}
      </ul>
      </div>
      
    </>
  );
};


