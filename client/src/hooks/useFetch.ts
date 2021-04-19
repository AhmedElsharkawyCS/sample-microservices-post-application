import { useState, useEffect, useCallback } from "react";

interface IFetchProps {
  url: string;
}
interface IMethodProps {
  url: string;
  method: "POST" | "DELETE" | "UPDATE";
  body?: object;
}
export function useFetch({ url }: IFetchProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<object>();
  const [data, setData] = useState<object | any>();

  const get = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error?.response);
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    get();
  }, [get]);
  return [loading, error, data];
}

export const onHttpRequest = async ({ method, url, body }: IMethodProps) => {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      method,
    });
    const json = await res.json();
    return json;
  } catch (error) {
    return error?.response;
  }
};
