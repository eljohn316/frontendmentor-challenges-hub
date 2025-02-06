import { useCallback, useEffect, useState } from 'react';

type InitialValue<T> = T | (() => T);

export function useLocalStorage<T>(
  key: string,
  initialValue: InitialValue<T>
): [T, (value: T) => void, () => void] {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error('Could not retrieve stored value', error);
      return initialValue;
    }
  });

  const setLocalStorageValue = useCallback(
    (newValue: T) => {
      try {
        setValue(newValue);

        localStorage.setItem(key, JSON.stringify(newValue));

        window.dispatchEvent(
          new StorageEvent('storage', {
            key,
            newValue: JSON.stringify(newValue)
          })
        );
      } catch (error) {
        console.error('Error saving value to `localStorage`:', error);
      }
    },
    [key]
  );

  const removeLocalStorageValue = useCallback(() => {
    setValue(initialValue);
    localStorage.removeItem(key);
  }, [initialValue, key]);

  useEffect(() => {
    const updatedAllTabs = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        setValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', updatedAllTabs);

    return () => {
      window.removeEventListener('storage', updatedAllTabs);
    };
  }, [key]);

  return [value, setLocalStorageValue, removeLocalStorageValue];
}
