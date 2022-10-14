import { useEffect, useState } from "react";

export default function useLoading(initialValue, time) {
  const [isLoading, setIsLoading] = useState(initialValue);
  useEffect(() => {
    if (time) {
      const timer = setTimeout(() => {
        setIsLoading(!initialValue);
      }, time);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);
  return { isLoading, setIsLoading };
}
