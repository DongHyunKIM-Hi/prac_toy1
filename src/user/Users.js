import axios from "axios";
import React, { useState } from "react";
import useManage from "./useManage";
import User from "./User";

async function want_api() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}
export default function Users() {
  const [state] = useManage(want_api);
  const [want_id, setId] = useState(1);
  if (state.loading) return <div>로딩중...</div>;
  if (state.error) return <div>오류 발생</div>;
  if (!state.users) return <div>정보가 없습니다</div>;
  return (
    <div>
      {state.users.map((user) => (
        <li key={user.id} onClick={() => setId(user.id)}>
          {user.name}
        </li>
      ))}
      <div>선택된 사용자의 이름 {want_id}</div>
      <User id={want_id} />
    </div>
  );
}
