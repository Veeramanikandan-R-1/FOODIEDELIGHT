import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './router';
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
