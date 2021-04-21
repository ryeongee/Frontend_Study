/* jsx
function App() {
  const answer = "리액트";
  const name = undefined;
  return name || '값이 undefined 입니다.';
}

export default App;*/

// function App() {
//   const answer = "리액트";
//   const name = undefined;
//   return name || '값이 undefined 입니다.';
// }

// export default App;

//class
// import React, {Component} from 'react';
// import MyComponent from './MyComponent';
// class App extends Component {
//   render(){
//     const answer = "리액트";
//     const name = undefined;
//     return <MyComponent name='React'>리액트</MyComponent>;
//   }
// }

// export default App;

// import Counter from './Counter';

// const App = () => {
//   return (
//     <Counter />
//   );
// };

// export default App;

import Say from "./Say"

const App = () => {
  return <Say/>;
};

export default App;