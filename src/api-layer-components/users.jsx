import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { fetchUsers } from "../api/usersApi"
import { withAsync } from "../helpers/with-async"
import { apiStatus } from "../constants/api-status"
import { useApiStatus } from "../api/hooks/useApiStatus"
import LazyLoader from "./lazy-loader"
import { useApi } from "../api/hooks/useApi"

const useFetchUsers = () => {
  const {
    data: users,
    exec: initFetchUsers, //execute
    status: fetchUsersStatus,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isError: isFetchUsersStatusError,
    isSuccess: isFetchUsersStatusSuccess,
  } = useApi(() => fetchUsers().then((response) => response.data))

  return {
    users,
    initFetchUsers,
    fetchUsersStatus,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusSuccess,
    isFetchUsersStatusError,
  }
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`

const ContentContainer = styled.div`
  width: 50%;
`

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`

function Users() {
  const { users, initFetchUsers, isFetchUsersStatusPending } = useFetchUsers()

  useEffect(() => {
    initFetchUsers()
  }, [])

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>
        <LazyLoader
          show={isFetchUsersStatusPending}
          delay={500}
          default="Fetch Users"
        />
      </FetchButton>
      <FlexContainer>
        <ContentContainer>
          {users
            ? users.map((user, index) => (
                <React.Fragment key={index}>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </React.Fragment>
              ))
            : null}
        </ContentContainer>
      </FlexContainer>
    </Container>
  )
}
export default Users
