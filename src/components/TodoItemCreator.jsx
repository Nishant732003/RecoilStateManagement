import React from 'react'
import { textState, todoListState } from '../store/atom/inputField';
import { useRecoilState,useSetRecoilState } from 'recoil';
const TodoItemCreator = () => {
    const [text, setText] = useRecoilState(textState);
    const setTodoList = useSetRecoilState(todoListState);
    const addItem = () => {
        setTodoList((oldTodolist) => [
            ...oldTodolist,

            {
                id: getId(),
                text: text,
                isComplete: false,
                
            }
          
        ]);
        setText('');
    }
    const onChange = (e) => {
        setText(e.target.value);
}
  return (
    <div>
          <input type="text" value={text} onChange={onChange} />
          <button onClick={addItem}> Add</button>
    </div>
  )
}

let id = 0;
function getId() {
    return id++;
}
export default TodoItemCreator;
