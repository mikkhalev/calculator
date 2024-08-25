import './scss/global.scss'
import './scss/reset.scss'
import Calculator from "./components/calculator/calculator";
import {Provider} from "react-redux";
import store from "../src/redux/store";
function App() {
  return (
      <Provider store={store}>
          <div className={`App`}>
              <Calculator/>
          </div>
      </Provider>
  );
}

export default App;
