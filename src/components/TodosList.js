import React from "react";

export default function TodosList() {
  return (
    <>
      <p>
        {localStorage.getItem('Task')}
      </p>
    </>
  );
}
