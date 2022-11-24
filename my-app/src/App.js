import "./App.css";
import Photo from "./components/photo/Photo";
import Game from "./components/tictactoe/Game";
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
//         repellat culpa eligendi ipsum dolor, molestias saepe distinctio atque
//         consequatur in.
//       </p>
//     </div>
//   );
// }
// parent component
function App() {
  return (
    <div>
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      {/* <Game></Game> */}
      <Photo></Photo>
    </div>
  );
}

export default App;
