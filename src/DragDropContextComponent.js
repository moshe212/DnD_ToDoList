import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import _ from "lodash";
import "./DragDropContextComponent.css";
import DroppableComponent from "./DroppableComponent";

function DragDropContextComponent(props) {
  return (
    <div className="DragDropContext">
      <DragDropContext onDragEnd={props.onDragEnd}>
        {_.map(props.appState, (data, key) => {
          // console.log("data", data, key);
          return (
            <div key={key} className={"column"}>
              <h3>{data.title}</h3>
              <DroppableComponent Propkey={key} Propdata={data} />
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DragDropContextComponent;
