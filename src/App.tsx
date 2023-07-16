import { useState } from 'react';
import { AutoForm } from 'uniforms-unstyled';
import './App.css';
import { bridge as schema } from './GuestSchema.ts';

export function GuestFormBasic() {
  return <AutoForm schema={schema} onSubmit={console.log} />;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GuestFormBasic />
    </>
  )
}

export default App
