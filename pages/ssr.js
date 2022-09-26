import React from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function ssr({ data }) {
  return (
    <div>
      <h1>List of todos</h1>

      {data.map((todos) => {
        return (
          <div key={todos.id}>
            <p>{todos.title}</p>
          </div>
        );
      })}
    </div>
  );
}
