import React, { useRef, useState } from "react";
import axios from "axios";

const initialState = {
  hits: [],
  quety: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      // const newState= JSON.parse(JSON.stringify(state));
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
      break;
  }
};
const HackerNewsWithReducer = () => {
  const [state, dispath] = React.useReducer(hackerNewsReducer, initialState);
  //   const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [errorMessage, setErrorMessgage] = useState("");
  //   const [url, setUrl] = useState(
  //     `https://hn.algolia.com/api/v1/search?query=${query}`
  //   );
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispath({
      type: "SET_LOADING",
      payload: true,
    });

    try {
      const response = await axios.get(state.url);
      dispath({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispath({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispath({
        type: "SET_LOADING",
        payload: false,
      });
      dispath({
        type: "SET_ERROR",
        payload: `The error happend ${error}`,
      });
      //   setErrorMessgage(`The error happend ${error}`);
    }
  };
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          onChange={(e) =>
            dispath({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispath({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;