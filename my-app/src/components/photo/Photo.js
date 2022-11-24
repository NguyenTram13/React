import React, { useEffect, useState } from "react";
// cài đặt và import axios
import axios from "axios";
const getRandomPhoto = async () => {
  //   return axios
  //     .get("https://picsum.photos/v2/list")
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
    const response = await axios.get("https://picsum.photos/v2/list");
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
  console.log("outside");
  const [data, setData] = useState();
  useEffect(() => {
    // document.title = "Welcome to useEffect";
    // console.log("inside");
    // getRandomPhoto().then((images) => {
    //   console.log(images);
    // });
    const getData = async () => {
      const data = await getRandomPhoto();
      console.log(data);
      setData(data);
    };
    getData();
  }, []);
  // api: https://picsum.photos/v2/list
  //
  return (
    <div>
      {/* <div className="grid grid-cols-4 gap-4 p-5"> */}
      {data &&
        data.map((item) => {
          <p key={item.id}>
            <img src={item.download_url} alt="" />
          </p>;
        })}
      ;
    </div>
    // </div>
  );
};

export default Photo;
