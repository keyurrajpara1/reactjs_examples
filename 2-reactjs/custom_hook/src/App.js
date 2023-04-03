import './App.css';
import useFetchApiData from "./useFetchApiData";

function App() {
  const apiUrl1 = "https://inshorts.deta.dev/news?category=science";
  const {data:news, loading:loading1, error:error1} = useFetchApiData(apiUrl1);

  const apiUrl2 = "https://reqres.in/api/users/";
  const {data:users, loading:loading2, error:error2} = useFetchApiData(apiUrl2);
  return (
    <div className="App">
      <h1>Custom React Hook (Data Fetching)</h1>
      {loading1 && <h3>Loading...</h3>}
      {error1 && <h3>Error: Something went wrong</h3>}
      {news.length}
      <div>
        <pre>
          {JSON.stringify(news, undefined, 2)}
        </pre>
      </div>

      <br /><br />
      <hr /><hr />

      {loading2 && <h3>Loading...</h3>}
      {error2 && <h3>Error: Something went wrong</h3>}
      {users.length}
      <div>
        <pre>
          {JSON.stringify(users, undefined, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
