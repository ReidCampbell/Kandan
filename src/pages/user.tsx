import React from 'react';
import Container from '../components/Container';
import { Box, Heading } from '@chakra-ui/core';
import { withApollo } from '../utils/withApollo';
import { useMeQuery, useUploadAvatarMutation } from '../generated/graphql';
import NavBar from '../components/NavBar';

const User: React.FC = ({}) => {
  const { data, loading } = useMeQuery();
  const [uploadAvatar] = useUploadAvatarMutation();

  if (loading) {
    return (
      <Container>
        <div>loading...</div>
      </Container>
    );
  }

  if (!data?.me) {
    return (
      <Container>
        <Box>Could not find user</Box>
      </Container>
    );
  }

  // const uploadFile = async (e: any) => {
  //   console.log('Uploading....');

  //   const files = e.target.files;
  //   const formData = new FormData();
  //   formData.append('file', files[0]);
  //   formData.append('upload_preset', 'kandan');
  //   const res = await fetch(
  //     'https://api.cloudinary.com/v1_1/dkzdgf49j/upload',
  //     {
  //       method: 'POST',
  //       body: formData,
  //     }
  //   );

  //   const file = await res.json();

  //   await uploadAvatar({
  //     variables: { avatar: file.url },
  //     update: cache => {
  //       cache.evict({ fieldName: 'posts:{}' });
  //     },
  //   }).catch(e => console.log(e));
  // };

  return (
    <>
      <NavBar />
      <Box
        maxW='800px'
        w='100%'
        h='100%'
        mx='auto'
        minHeight='calc(100vh - 109px)'
      >
        <Heading>{data.me.username}</Heading>

        <form
          onSubmit={async e => {
            e.preventDefault();
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor='file'>
              Select a new avatar
              <input
                type='file'
                id='file'
                name='file'
                placeholder='Upload Image'
                required
                // onChange={uploadFile}
              />
            </label>
          </fieldset>
        </form>
      </Box>
    </>
  );
};

export default withApollo({ ssr: true })(User);
