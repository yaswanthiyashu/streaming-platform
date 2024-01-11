import "./App.css";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import { store } from './redux/store'
import { Route, Routes } from "react-router-dom";
import FullMovie from "./components/FullMovie/FullMovie";
import PageNotFound from "./components/PageNotFound/PageNotFound";


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/movie/:movie_id" element={<FullMovie />}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
