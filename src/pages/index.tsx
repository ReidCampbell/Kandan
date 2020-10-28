import React from 'react';
import Layout from '../components/Layout';
import { Button, Flex, Spinner, Stack } from '@chakra-ui/core';
import { withApollo } from '../utils/withApollo';
import {
  BoardDocument,
  BoardQuery,
  useBoardQuery,
  useCreateKandanColumnMutation,
  useMoveTicketToColumnMutation,
} from '../generated/graphql';
import Column from '../components/Column/Column';
import { DragDropContext } from 'react-beautiful-dnd';

const Index = () => {
  const [move] = useMoveTicketToColumnMutation();
  const [createKandanColumn] = useCreateKandanColumnMutation();
  const handleCreateColumn = async () => {
    await createKandanColumn({
      variables: {
        title: 'New',
        boardId: 1,
      },
      refetchQueries: [{ query: BoardDocument, variables: { id: 1 } }],
    });
  };

  const {
    data,
    loading,
    error,
    fetchMore,
    variables,
    refetch,
    client,
  } = useBoardQuery({
    variables: {
      id: 1,
    },
    notifyOnNetworkStatusChange: true,
    partialRefetch: true,
  });

  if (!loading && !data) {
    return <div>Your query failed : {error?.message}</div>;
  }

  const onDragEnd = async (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }

    await move({
      variables: {
        id: parseInt(draggableId),
        kandanColumnId: parseInt(destination.droppableId),
      },

      refetchQueries: [{ query: BoardDocument, variables: { id: 1 } }],
    }).catch(e => console.log(e));

    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Layout>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {data?.board?.kandanColumns?.map(column => {
              return <Column key={column.id} column={column} />;
            })}

            <Button onClick={handleCreateColumn}>Create New Column</Button>
          </>
        )}
      </Layout>
    </DragDropContext>
  );
};

export default withApollo({ ssr: false })(Index);
