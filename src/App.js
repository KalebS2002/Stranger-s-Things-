import "./App.css";

const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// So, for example, to call for all posts the url would just need to be:
// `${BASE_URL}/posts`

async function fetchUrl() {
  const response = await fetch(`${BASE_URL}/posts`);
  // waits until the request completes...
  console.log(response);
}
console.log(fetchUrl());

function App() {
  return (
    <div className="App">
      <h1>Dear World, hello!</h1>
    </div>
  );
}

export default App;
