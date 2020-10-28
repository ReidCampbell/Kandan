import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/core';
import { Textarea } from '@chakra-ui/core';
import {
  BoardDocument,
  useCreateTicketMutation,
} from '../../../generated/graphql';

function NewTaskModal({ isOpen, onClose, columnId }: any) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [createTicket] = useCreateTicketMutation();

  const handleCreateTicket = async () => {
    await createTicket({
      variables: {
        input: { title, description, kandanColumnId: columnId },
      },
      refetchQueries: [{ query: BoardDocument, variables: { id: 1 } }],
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Task</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <h4>Title</h4>
          <Textarea
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
            resize='none'
          />
          <h4>Description</h4>
          <Textarea
            onChange={(e: any) => {
              setDescription(e.target.value);
            }}
          />
        </ModalBody>

        <ModalFooter>
          <Button variantColor='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={handleCreateTicket}>
            Secondary Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default NewTaskModal;
