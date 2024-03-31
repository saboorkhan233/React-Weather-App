import { useState } from 'react';
import './App.css';
import search from './assets/icons/search.svg';
import { useStateContext } from './Context';
import { BackgroundLayout , WeatherCard, MiniCard } from './components'


function App() {
  const [input, setInput] = useState('')
  const {weather, thisLocation, values } = useStateContext()

  console.log(weather)

  return (
    <>
      <div className='w-full h-screen text-white px-8'>
        <nav className='w-full p-3 flex justify-between items-center'> {/* Removed 'justify-between' from here */}
          <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1> {/* Changed '3x1' to '3xl' for correct Tailwind CSS size */}
          <div className='bg-white w-48 overflow-hidden shadow-xl rounded flex items-center p-2 gap-2'> {/* Changed '2x1' to '2xl' for correct Tailwind CSS shadow size */}
            <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
            <input
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  // submit the form
                }
              }}
              type="text"
              className='focus:outline-none w-full text-[#212121] text-lg'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </nav>

        <BackgroundLayout></BackgroundLayout>

        <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard 
          place={thisLocation}
          windspeed={weather.windspeed}
          humidity={weather.humidity}
          temperature={weather.temp} 
          iconString={weather.conditions}
          conditions={weather.conditions}
        />


          <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
            {
              
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
            }
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
