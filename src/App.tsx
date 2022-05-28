import Header from './components/Header'
import MainSection from './components/MainSection'
import store from './redux/store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainSection />
    </Provider>
  )
}
