import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  PseudoBox,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { MdFiberNew, MdWhatshot } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { ApolloClient } from '@apollo/client';

export interface WrapperProps {
  // client: ApolloClient<any>;
  // refetch: any;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width:51.95rem)' });
  // const [sort, setSort] = useState('top');

  return <Flex>{children}</Flex>;
};

export default Wrapper;
