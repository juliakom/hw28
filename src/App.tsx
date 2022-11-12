import React, { ReactElement, FC} from 'react';


interface CardI {
  num: number;
  text: string;
}

const Card: FC<CardI> = (props: CardI): ReactElement => {
  return (
    <p>{props.text.repeat(props.num)}</p>
  )
}

function App() {
  return (
    <div className="App">
      <Card num ={3} text="Some text! "/>
    </div>
  );
}

export default App;