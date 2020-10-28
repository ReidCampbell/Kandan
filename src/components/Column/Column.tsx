import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { Button } from '@chakra-ui/core';

import Task from '../Task/Task';
import NewTaskModal from '../Task/NewTaskModal/NewTaskModal';
import { useDisclosure } from '@chakra-ui/core';
import { useCreateTicketMutation } from '../../generated/graphql';

const Container = styled.div`
  margin: 8px;
  width: 220px;
  display: flex;
  flex-direction: column;
  height: max-content;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div<TaskListProps>`
  padding: 1rem;
  flex-grow: 1;
  border-radius: 10px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : '#f0f5fa')};
  min-height: 100px;
`;

interface Column {
  id: string;
  title: string;
  tasksId: string[];
}

interface Task {
  id: string;
  content: string;
}

interface ColumnProps {
  column: any;
  // tasks: Task[];
  // newTask: (content: any) => any;
  // state: any;
}

interface TaskListProps {
  readonly isDraggingOver: boolean;
}

const Column: React.FC<ColumnProps> = ({ column }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleClick = (content: any, description: any) => {
  //   createNewTask(content, description);
  //   onClose();
  // };

  // const createNewTask = (content: any, description: any) => {
  //   const newId = `${Math.floor(Math.random() * Math.floor(100))}`;
  //   console.log(newId);
  //   const newState = {
  //     ...state,
  //     columns: {
  //       ...state.columns,
  //       [column.id]: {
  //         ...state.columns[column.id],
  //         taskIds: [...state.columns[column.id].taskIds, `task-${newId}`],
  //       },
  //     },
  //     tasks: {
  //       ...state.tasks,
  //       [`task-${newId}`]: {
  //         id: `task-${newId}`,
  //         content: content,
  //         description: description,
  //       },
  //     },
  //   };
  //   newTask(newState);
  // };

  return (
    <>
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id.toString()}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {column.tickets.map((ticket: any, index: number) => (
                <Task key={ticket.id} task={ticket} index={index} />
              ))}
              {provided.placeholder}
              <Button bg='#e7ecf8' color='#2a60e4' w='100%' onClick={onOpen}>
                Add Task
              </Button>
            </TaskList>
          )}
        </Droppable>
      </Container>
      <NewTaskModal
        isOpen={isOpen}
        onClose={onClose}
        // createNewTask={handleClick}
        columnId={column.id}
      />
    </>
  );
};

export default Column;
