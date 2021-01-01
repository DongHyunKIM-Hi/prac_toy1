import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        loading: true,
        users: null,
        error: null,
      };
    case "success":
      return {
        loading: false,
        users: action.data,
        error: null,
      };
    case "error":
      return {
        loading: false,
        users: null,
        error: action.data,
      };
    default:
      throw new Error("문제 발생");
  }
}

export default function useManage(want) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    users: null,
    error: null,
  });

  const getApi = async () => {
    dispatch({ type: "loading" });
    try {
      const response = await want();
      console.log(response);
      dispatch({ type: "success", data: response });
    } catch (e) {
      dispatch({ type: "error", data: e });
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return [state];
}
