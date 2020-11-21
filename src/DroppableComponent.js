import React from "react";
import { Droppable } from "react-beautiful-dnd";

import DragableComponent from "./DragableComponent";

function DroppableComponent(props) {
  return (
    <div className="Droppable">
      <Droppable droppableId={props.Propkey} onDragEnd={props.onDragEnd}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={"droppable-col"}
            >
              {props.Propdata.items.map((el, index) => {
                return (
                  <DragableComponent
                    Propel={el}
                    key={el.id}
                    Propindex={index}
                    PropdraggableId={el.id}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

export default DroppableComponent;
