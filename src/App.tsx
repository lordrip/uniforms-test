import { useCallback, useState } from 'react';
import { AutoForm } from 'uniforms-unstyled';
import './App.css';
import { bridge as schema } from './GuestSchema.ts';

export function GuestFormBasic() {
  const [model, setModel] = useState({
    firstName: 'John',
    lastName: 'Doe',
    workExperience: 15,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const onChange = useCallback((key: string , value: unknown) => {
    setModel((state) => ({ ...state, [key]: value }));
    console.log(model);
  }, [model]);

  return <AutoForm schema={schema} model={model} onChange={onChange} />;
}

function App() {
  return (
    <>
      <GuestFormBasic />
    </>
  )
}

export default App
