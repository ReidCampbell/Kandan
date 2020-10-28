import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { useDisclosure } from '@chakra-ui/core';

const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  box-shadow: -1px 1px 13px -6px rgba(125, 125, 125, 0.87);
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props: ContainerProps) =>
    props.isDragging ? 'lightgreen' : 'white'};
`;

interface ContainerProps {
  readonly isDragging: boolean;
}

export default function Task({ task, index }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Draggable draggableId={task.id.toString()} index={index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            onDoubleClick={onOpen}
          >
            {task.title}
          </Container>
        )}
      </Draggable>
      {/* <TaskModal task={task} isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
}
