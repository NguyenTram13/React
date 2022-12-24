import { useEffect } from "react";
import { useRef, useState } from "react";
import "./App.scss";
import Blogs from "./components/Blogs";

// import Button from "./components/button/Button";
import Cart from "./components/cart/Cart";
import CartTailwind from "./components/cart/CartTailwin";
import Counter from "./components/counter/Counter";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Input from "./components/Input";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
import Photo from "./components/photo/Photo";
import SlideBarMenu from "./components/SlideBarMenu";
import StopWatch from "./components/StopWatch";
import TextareaAutoResize from "./components/TextareaAutoResize";
import Timer from "./components/Timer";
import useClickOutSide from "./hooks/useClickOutSide";
// import DoubleCounter from "./components/counter/DoubleCounter";
// import Game from "./components/tictactoe/Game";
// import Counter from "./components/counter/Counter";
// import Toggle from "./components/toggle/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";

/*

  * JSX:javascript XML:
  - render ra dom
  - cho phép viết code dễ dàng, dễ dọc, dễ bảo trì

  * ES6

  * babel

  --------------------------------
    * element = <div id="root">Hello World</div>: jsx
    * element = react.createElement('div', {id:'root'}, 'Hello world')
    * function createElement(elementType, props, ...children)
    * ElementType : 'div', 'p', 'span'
    * props : className, id, src , alt
    * ...children:
      * element2={<div>
      * <span>Hello </span>
      * <span>World</span> 
      * </div>}  
      * Element2 = react.createElement('div',{
      * children:[
      * reate.createElement('span', null, 'Hello'),
      * ' ',
      * reate.createElement('span', null, 'Hello'),
      * ]
      * })
  * components : chia nhỏ mọi thứ để dễ quản lý
  * props: properties 
*/
// function Feature() {
//   return (
//     <div class="feature">
//       <img src="" alt="" className="feature-img" />
//       <h3 className="feature-title">Title</h3>
//       <p className="feature-desc">
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
//         animi veritatis error sed in corrupti quae repudiandae beatae? Unde
//         repellat culpa eligendi ipsum dolo r, molestias saepe distinctio atque
//         consequatur in.
//       </p>
//      </div>
//   );
// }
// parent component

function App() {
  const { show, setShow, nodeRef } = useClickOutSide("button");
  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* < Game></>
       */}
      {/* <DoubleCounter></DoubleCounter> */}
      {/* <Button>Primary</Button> */}
      {/* <Cart></Cart>
      <div>
        <h2 className="py-3 text-[#ccc]">banhs us</h2>
      </div> */}
      {/* <CartTailwind></CartTailwind> */}
      {/* CartList */}
      {/* <Photo></Photo> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      <button
        onClick={() => setShow(true)}
        className="inline-bolock m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show Menu
      </button>
      <SlideBarMenu show={show} ref={nodeRef}></SlideBarMenu>
      <Dropdown></Dropdown>
      {/* <Blogs></Blogs> */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}
    </div>
  );
}

export default App;
