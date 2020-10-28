import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  comments: PaginatedComments;
  comment?: Maybe<Comment>;
  board?: Maybe<Board>;
  tickets: Array<Ticket>;
  ticket?: Maybe<Ticket>;
  kandanColumns: Array<KandanColumn>;
  kandanColumn?: Maybe<KandanColumn>;
  me?: Maybe<User>;
  users: Array<User>;
};


export type QueryCommentsArgs = {
  ticketId: Scalars['Int'];
  limit: Scalars['Int'];
};


export type QueryCommentArgs = {
  id: Scalars['Int'];
};


export type QueryBoardArgs = {
  id: Scalars['Int'];
};


export type QueryTicketsArgs = {
  kandanColumnId: Scalars['Int'];
};


export type QueryTicketArgs = {
  id: Scalars['Int'];
};


export type QueryKandanColumnsArgs = {
  boardId: Scalars['Int'];
};


export type QueryKandanColumnArgs = {
  id: Scalars['Int'];
};

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  comments: Array<Comment>;
  hasMore: Scalars['Boolean'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  text: Scalars['String'];
  creatorId: Scalars['Float'];
  ticketId: Scalars['Float'];
  creator: User;
  ticket: Ticket;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  boardId?: Maybe<Scalars['Int']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  creatorId: Scalars['Float'];
  kandanColumnId: Scalars['Float'];
  creator: User;
  kandanColumn: KandanColumn;
  comments?: Maybe<Array<Comment>>;
  textSnippet: Scalars['String'];
};

export type KandanColumn = {
  __typename?: 'KandanColumn';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  boardId: Scalars['Float'];
  board: Board;
  tickets?: Maybe<Array<Ticket>>;
};

export type Board = {
  __typename?: 'Board';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  creatorId: Scalars['Float'];
  kandanColumns?: Maybe<Array<KandanColumn>>;
  creator: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  updateComment?: Maybe<Comment>;
  deleteComment: Scalars['Boolean'];
  createBoard: Board;
  updateBoard?: Maybe<Board>;
  deleteBoard: Scalars['Boolean'];
  moveTicketToColumn: Ticket;
  createTicket: Ticket;
  updateTicket?: Maybe<Ticket>;
  deleteTicket: Scalars['Boolean'];
  createKandanColumn: KandanColumn;
  updateKandanColumn?: Maybe<KandanColumn>;
  deleteKandanColumn: Scalars['Boolean'];
  uploadAvatar: Scalars['String'];
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationCreateCommentArgs = {
  text: Scalars['String'];
  ticketId: Scalars['Int'];
};


export type MutationUpdateCommentArgs = {
  text: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationCreateBoardArgs = {
  input: BoardInput;
};


export type MutationUpdateBoardArgs = {
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteBoardArgs = {
  id: Scalars['Int'];
};


export type MutationMoveTicketToColumnArgs = {
  kandanColumnId: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationCreateTicketArgs = {
  input: TicketInput;
};


export type MutationUpdateTicketArgs = {
  text: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteTicketArgs = {
  id: Scalars['Int'];
};


export type MutationCreateKandanColumnArgs = {
  boardId: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationUpdateKandanColumnArgs = {
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteKandanColumnArgs = {
  id: Scalars['Int'];
};


export type MutationUploadAvatarArgs = {
  avatar: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type BoardInput = {
  title: Scalars['String'];
};

export type TicketInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  kandanColumnId: Scalars['Float'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'avatar'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type CreateKandanColumnMutationVariables = Exact<{
  boardId: Scalars['Int'];
  title: Scalars['String'];
}>;


export type CreateKandanColumnMutation = (
  { __typename?: 'Mutation' }
  & { createKandanColumn: (
    { __typename?: 'KandanColumn' }
    & Pick<KandanColumn, 'title'>
  ) }
);

export type CreateTicketMutationVariables = Exact<{
  input: TicketInput;
}>;


export type CreateTicketMutation = (
  { __typename?: 'Mutation' }
  & { createTicket: (
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'title' | 'description'>
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MoveTicketToColumnMutationVariables = Exact<{
  id: Scalars['Int'];
  kandanColumnId: Scalars['Int'];
}>;


export type MoveTicketToColumnMutation = (
  { __typename?: 'Mutation' }
  & { moveTicketToColumn: (
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'kandanColumnId'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UploadAvatarMutationVariables = Exact<{
  avatar: Scalars['String'];
}>;


export type UploadAvatarMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadAvatar'>
);

export type BoardQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BoardQuery = (
  { __typename?: 'Query' }
  & { board?: Maybe<(
    { __typename?: 'Board' }
    & Pick<Board, 'title' | 'creatorId'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ), kandanColumns?: Maybe<Array<(
      { __typename?: 'KandanColumn' }
      & Pick<KandanColumn, 'id' | 'title'>
      & { tickets?: Maybe<Array<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'kandanColumnId' | 'title'>
        & { comments?: Maybe<Array<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'text'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  avatar
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateKandanColumnDocument = gql`
    mutation CreateKandanColumn($boardId: Int!, $title: String!) {
  createKandanColumn(boardId: $boardId, title: $title) {
    title
  }
}
    `;
export type CreateKandanColumnMutationFn = Apollo.MutationFunction<CreateKandanColumnMutation, CreateKandanColumnMutationVariables>;

/**
 * __useCreateKandanColumnMutation__
 *
 * To run a mutation, you first call `useCreateKandanColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKandanColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKandanColumnMutation, { data, loading, error }] = useCreateKandanColumnMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateKandanColumnMutation(baseOptions?: Apollo.MutationHookOptions<CreateKandanColumnMutation, CreateKandanColumnMutationVariables>) {
        return Apollo.useMutation<CreateKandanColumnMutation, CreateKandanColumnMutationVariables>(CreateKandanColumnDocument, baseOptions);
      }
export type CreateKandanColumnMutationHookResult = ReturnType<typeof useCreateKandanColumnMutation>;
export type CreateKandanColumnMutationResult = Apollo.MutationResult<CreateKandanColumnMutation>;
export type CreateKandanColumnMutationOptions = Apollo.BaseMutationOptions<CreateKandanColumnMutation, CreateKandanColumnMutationVariables>;
export const CreateTicketDocument = gql`
    mutation createTicket($input: TicketInput!) {
  createTicket(input: $input) {
    title
    description
  }
}
    `;
export type CreateTicketMutationFn = Apollo.MutationFunction<CreateTicketMutation, CreateTicketMutationVariables>;

/**
 * __useCreateTicketMutation__
 *
 * To run a mutation, you first call `useCreateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTicketMutation, { data, loading, error }] = useCreateTicketMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTicketMutation(baseOptions?: Apollo.MutationHookOptions<CreateTicketMutation, CreateTicketMutationVariables>) {
        return Apollo.useMutation<CreateTicketMutation, CreateTicketMutationVariables>(CreateTicketDocument, baseOptions);
      }
export type CreateTicketMutationHookResult = ReturnType<typeof useCreateTicketMutation>;
export type CreateTicketMutationResult = Apollo.MutationResult<CreateTicketMutation>;
export type CreateTicketMutationOptions = Apollo.BaseMutationOptions<CreateTicketMutation, CreateTicketMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MoveTicketToColumnDocument = gql`
    mutation moveTicketToColumn($id: Int!, $kandanColumnId: Int!) {
  moveTicketToColumn(id: $id, kandanColumnId: $kandanColumnId) {
    id
    kandanColumnId
  }
}
    `;
export type MoveTicketToColumnMutationFn = Apollo.MutationFunction<MoveTicketToColumnMutation, MoveTicketToColumnMutationVariables>;

/**
 * __useMoveTicketToColumnMutation__
 *
 * To run a mutation, you first call `useMoveTicketToColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveTicketToColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveTicketToColumnMutation, { data, loading, error }] = useMoveTicketToColumnMutation({
 *   variables: {
 *      id: // value for 'id'
 *      kandanColumnId: // value for 'kandanColumnId'
 *   },
 * });
 */
export function useMoveTicketToColumnMutation(baseOptions?: Apollo.MutationHookOptions<MoveTicketToColumnMutation, MoveTicketToColumnMutationVariables>) {
        return Apollo.useMutation<MoveTicketToColumnMutation, MoveTicketToColumnMutationVariables>(MoveTicketToColumnDocument, baseOptions);
      }
export type MoveTicketToColumnMutationHookResult = ReturnType<typeof useMoveTicketToColumnMutation>;
export type MoveTicketToColumnMutationResult = Apollo.MutationResult<MoveTicketToColumnMutation>;
export type MoveTicketToColumnMutationOptions = Apollo.BaseMutationOptions<MoveTicketToColumnMutation, MoveTicketToColumnMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UploadAvatarDocument = gql`
    mutation uploadAvatar($avatar: String!) {
  uploadAvatar(avatar: $avatar)
}
    `;
export type UploadAvatarMutationFn = Apollo.MutationFunction<UploadAvatarMutation, UploadAvatarMutationVariables>;

/**
 * __useUploadAvatarMutation__
 *
 * To run a mutation, you first call `useUploadAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadAvatarMutation, { data, loading, error }] = useUploadAvatarMutation({
 *   variables: {
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useUploadAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UploadAvatarMutation, UploadAvatarMutationVariables>) {
        return Apollo.useMutation<UploadAvatarMutation, UploadAvatarMutationVariables>(UploadAvatarDocument, baseOptions);
      }
export type UploadAvatarMutationHookResult = ReturnType<typeof useUploadAvatarMutation>;
export type UploadAvatarMutationResult = Apollo.MutationResult<UploadAvatarMutation>;
export type UploadAvatarMutationOptions = Apollo.BaseMutationOptions<UploadAvatarMutation, UploadAvatarMutationVariables>;
export const BoardDocument = gql`
    query board($id: Int!) {
  board(id: $id) {
    title
    creatorId
    creator {
      username
    }
    kandanColumns {
      id
      title
      tickets {
        id
        kandanColumnId
        title
        comments {
          text
        }
      }
    }
  }
}
    `;

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBoardQuery(baseOptions?: Apollo.QueryHookOptions<BoardQuery, BoardQueryVariables>) {
        return Apollo.useQuery<BoardQuery, BoardQueryVariables>(BoardDocument, baseOptions);
      }
export function useBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardQuery, BoardQueryVariables>) {
          return Apollo.useLazyQuery<BoardQuery, BoardQueryVariables>(BoardDocument, baseOptions);
        }
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>;
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>;
export type BoardQueryResult = Apollo.QueryResult<BoardQuery, BoardQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;