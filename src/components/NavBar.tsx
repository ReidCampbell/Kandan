import React from 'react';
import {
  Box,
  Link,
  Flex,
  Avatar,
  Image,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const apolloClient = useApolloClient();
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  let body = null;

  if (loading) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link mr={5}>Login</Link>
        </NextLink>
        <NextLink href='/register'>
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Menu>
          <MenuButton>
            <Avatar size='sm' src={data.me.avatar ? data.me.avatar : ''} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push('/user')}>
              Profile Page
            </MenuItem>
            <MenuItem
              onClick={async () => {
                await logout();
                await apolloClient.resetStore();
                router.push('/');
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    );
  }
  return (
    <>
      <Box bg='white' boxShadow='lg' p={4} position='sticky' top={0} zIndex={1}>
        <Flex mx='auto' maxWidth='800px' align='center'>
          <NextLink href='/'>
            {/* <Image src='/Reidditlogo.png' h='50px' cursor='pointer' /> */}
            KANDAN
          </NextLink>
          <Box ml='auto'>{body}</Box>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
