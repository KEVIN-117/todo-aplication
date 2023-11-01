/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Todo } from "../interface/Todo";

export function useLocalStorage(key: string, defaultValues: Todo[]) {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(defaultValues);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      try {
        const localStorageTodos = window.localStorage.getItem(key);
        !localStorageTodos &&
          window.localStorage.setItem(key, JSON.stringify(defaultValues));

        const parseItem = !localStorageTodos
          ? defaultValues
          : JSON.parse(localStorageTodos);
        setLoading(!loading);
        setItem(parseItem);
      } catch (error) {
        setError(!error);
      }
    }, 2000);
  }, []);

  const saveItems = (newTodo: Todo[]) => {
    window.localStorage.setItem(key, JSON.stringify(newTodo));
    setItem(newTodo);
  };

  return {
    item,
    saveItems,
    loading,
    error,
  };
}
