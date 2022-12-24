import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  //   const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessgage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessgage(`The error happend ${error}`);
    }
  };
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
