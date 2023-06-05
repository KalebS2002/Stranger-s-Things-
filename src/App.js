import "./App.css";

const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = " https://strangers-things.herokuapp.com/${COHORT_NAME}";
const returned = await fetch(`${BASE_URL}/posts`);

// So, for example, to call for all posts the url would just need to be:
// `${BASE_URL}/posts`

function App() {
  return (
    <div className="App">
      <h1>Dear World, hello!</h1>
    </div>
  );
}

export default App;
