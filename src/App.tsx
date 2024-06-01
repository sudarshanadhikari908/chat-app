
import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './appRoutes';
import { store } from './shared/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  );
}

export default App;
