import React, { useState } from "react";
import "./App.css";
import { v4 } from "uuid";
import DragDropContextComponent from "./DragDropContextComponent";

const item = {
  id: v4(),
  name: "Create ToDoList in React",
};

const item2 = {
  id: v4(),
  name: "Upload the code to Github",
};

const item3 = {
  id: v4(),
  name: "Send Github link to Gidon",
};

function App() {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    todo: {
      title: "Todo",
      items: [item, item2, item3],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    done: {
      title: "Completed",
      items: [],
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    // Creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] };
    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);
      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      return prev;
    });
  };

  const addItem = () => {
    setState((prev) => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: text,
            },
            ...prev.todo.items,
          ],
        },
      };
    });

    setText("");
  };

  return (
    <div className="App">
      <h1 className="rootTitle">ToDo List</h1>
      <div className="addToDo">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addItem} className="btn">
          Add
        </button>
      </div>

      <DragDropContextComponent onDragEnd={handleDragEnd} appState={state} />
    </div>
  );
}

export default App;
