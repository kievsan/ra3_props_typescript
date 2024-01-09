import Stars from "./components/films_stars/Stars";

import './App.css';


function App() {
  return (
      <>
          <Stars />
          <Stars count={-10} />
          <Stars count={0} />
          <Stars count={1} />
          <Stars count={2} />
          <Stars count={3} />
          <Stars count={4} />
          <Stars count={5} />
          <Stars count={10.7} />
          {/* <Stars count={{number: 1}} />    ts Err! */}
          {/* <Stars count={"1"} />    ts Err! */}
      </>
  );
}

export default App;
