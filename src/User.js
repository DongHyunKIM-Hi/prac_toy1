import axios from "axios";
import React from "react";
import useManage from "./useManage";

async function want_api(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}
export default function User({ id }) {
  const [state] = useManage(() => want_api(id));
  console.log(state);
  return <h1></h1>;
}
