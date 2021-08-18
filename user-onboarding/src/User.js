import React from "react";

export default function User(props) {
  const { details } = props;
  return (
    <div>
      <h3>{`${details.first_name} ${details.last_name}`}</h3>
      <div>{details.email}</div>
    </div>
  );
}
