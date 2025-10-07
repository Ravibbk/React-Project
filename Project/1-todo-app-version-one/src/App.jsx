import AppName from "./component/AppName";
import AppTodo from "./component/AppTodo";
import "./App.css";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import { useState } from "react";
function App() {



  const [todoItems, setTodoItems] = useState([]);


  const handleNewItem = (itemName, itemDuedate) => {
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDuedate },];
    setTodoItems(newTodoItems);
  };


  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemsName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
