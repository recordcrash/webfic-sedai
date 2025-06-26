import { useEffect, useState, useCallback } from "react";

export const usePersistState = <T,>(
  key: string,
  initialValue: T
): readonly [T, (value: T | ((prev: T) => T)) => void] => {
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setState(currentState => {
        const newValue =
          typeof value === "function"
            ? (value as (prev: T) => T)(currentState)
            : value;

        try {
          localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
          console.error(`Error saving ${key} to localStorage:`, error);
        }

        return newValue;
      });
    },
    [key]
  );

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  }, [key, state]);

  return [state, setValue] as const;
};
