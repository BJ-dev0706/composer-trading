
import Chart from './components/Chart';
import Editer from './components/Editer';
import Help from './components/Help';
import Small from './components/Small';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Header />
      <div className='w-full min-h-full bg-[#ecedee] pt-[var(--toolbar-height)] sm:p-1 pb-8 md:pb-12 dotgrid'>
        <Small />
        <Editer />
        <Chart />
        <Help />
      </div>
    </div>
  )
}

export default App
