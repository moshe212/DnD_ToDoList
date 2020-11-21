import React from "react";
import "./DragableComponent.css";
import { Draggable } from "react-beautiful-dnd";

function DragableComponent(props) {
  return (
    <div>
      <Draggable
        key={props.Propkey}
        index={props.Propindex}
        draggableId={props.PropdraggableId}
        onDragEnd={props.onDragEnd}
      >
        {(provided, snapshot) => {
          console.log(snapshot);
          return (
            <div
              className={`item ${snapshot.isDragging && "dragging"}`}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {props.Propel.name}
            </div>
          );
        }}
      </Draggable>
    </div>
  );
}

export default DragableComponent;
