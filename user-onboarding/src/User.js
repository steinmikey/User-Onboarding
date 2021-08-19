import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
  border: solid red 2px;
  padding: 5px 5px 10px;
  margin: 10px;
  width: 22%;
  background: black;
  color: beige;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    padding: 5px;
    margin: 0px;
  }
`;

export default function User(props) {
  const { details } = props;
  return (
    <StyledUser>
      <h3>{`${details.first_name} ${details.last_name}`}</h3>
      <div>{details.email}</div>
    </StyledUser>
  );
}
