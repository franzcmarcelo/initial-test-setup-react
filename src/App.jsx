import { Counter, Information } from './components';

const App = () => {
  return (
    <>
      <Counter initialValue={100} />
      <hr />
      <Information title='Hola!' name='Franz' />
    </>
  )
}

export default App;