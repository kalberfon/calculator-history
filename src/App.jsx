import { useEffect, useMemo, useState } from 'react';
import './App.css';
import AlignButton from './components/AlignButton';
import Button from './components/Button';
import GridKeys from './components/GridKeys';
import GridPanel from './components/GridPanel';
import InputDialog from './components/InputDialog';
import { useAddDigitOnInput, useHistory } from './hooks/history';
import Core from './services';

function App() {
  const { input: dialogInput } = useHistory();
  const [input, setInput] = useState(dialogInput);
  const {onDispatch: digitOnInputDispatch} = useAddDigitOnInput(input)
  useEffect(() => {
    digitOnInputDispatch(input)
  }, [input]);

  return (
    <GridPanel>
      <InputDialog value={dialogInput} onResult={(result) => {Core.onResult(input)}}/>
      <GridKeys>
        <Button digit={'1'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'2'} clicked={(digit) => setInput(digit)} />
        <Button digit={'3'} clicked={(digit) => setInput(digit)} />

        <Button digit={'4'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'5'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'6'} clicked={(digit) => setInput(digit)}/>
        
        <Button digit={'7'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'8'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'9'} clicked={(digit) => setInput(digit)}/>
        
        <Button style={{gridColumn: "2/2"}} digit={'0'} />
      </GridKeys>
      <AlignButton direction={'horizontal'}>
        <Button digit={'*'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'%'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'+'} clicked={(digit) => setInput(digit)}/>
        <Button digit={'='} clicked={(digit) => setInput(digit)}/>
      </AlignButton>
    </GridPanel>
  );
}

export default App;
