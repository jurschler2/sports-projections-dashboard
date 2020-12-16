import './App.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from 'react-router-dom';
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import Routes from './components/Routes';

const STORE = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__
    //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
    //     : f => f
  )
);

function App() {
  return (
    <div className="App">
    <Provider store={STORE}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>  
  </div>
  );
}

export default App;
