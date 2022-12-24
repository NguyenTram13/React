import React, { useEffect, useState } from "react";
// cài đặt và import axios
import axios from "axios";
const getRandomPhoto = async (page) => {
  //   return axios
  //     .get("https://picsum.photos/v2/list?page=2&limit=8")
  //     .then((response) => {
  //       // handle success
  //       console.log(response);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     });
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const Photo = () => {
  //     useEffect(calback, [dependencies]) gồm 2 tham số
  //cách 1
  //     useEffect(function calback(){
  //        site-effects
  //     }, []); sau dấu phẩy là dependencies
  //cách 2
  // console.log("outside");
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const loadMore = () => {
    // console.log(nextPage);

    const getData = async () => {
      const dataNew = await getRandomPhoto(nextPage);
      // console.log(data);
      setData([...data, ...dataNew]);
      setNextPage(nextPage + 1);
    };
    getData();
  };
  useEffect(() => {
    // document.title = "Welcome to useEffect";
    // console.log("inside");
    // getRandomPhoto().then((images) => {
    //   console.log(images);
    // });
    // const getData = async (nextPage) => {
    //   const data = await getRandomPhoto();
    //   console.log(data);
    //   setData(data);
    // };
    // getData();
    loadMore();
  }, []);
  // api: https://picsum.photos/v2/list
  //
  return (
    <div className="w-full">
      <div className=" grid grid-cols-12 gap-4 p-5">
        {data &&
          data.map((item, index) => {
            return (
              <div className="col-span-3 " key={`${item.download_url}${index}`}>
                <img
                  className="rounded-lg object-cover shadow-md w-[200px] h-[150px]"
                  src={item.download_url}
                  alt={item.author}
                />
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <button
          onClick={loadMore}
          className="inline-block   btn btn-primary bg-black p-3 text-white "
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default Photo;
