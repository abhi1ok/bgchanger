import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('#D2042D')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: '#D2042D' }}>Red</button>
          <button onClick={() => setColor('#AFE1AF')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: '#AFE1AF' }}>Green</button>
          <button onClick={() => setColor('aqua')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'aqua' }}>Blue</button>
          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: 'yellow' }}>Yellow</button>
        </div>
      </div>
    </div>
  );
}

export default App;
