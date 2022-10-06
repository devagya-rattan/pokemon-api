import React , {useState,useEffect} from "react";
import axios from "axios"

const App = () => {
  const [num, setNum] = useState();
  const [hello, setHello] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    return () => {
      async function getdata(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res) 
        setHello(res.data.name)
        setMoves(res.data.moves.length)
      }
      getdata()
    };
  });

  return (
    <>
      <p>you selected {num}</p>
      <p>my name is  {hello}</p>
      <p>my moves are  {moves}</p>
      <select
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="25">25</option>
      </select>
    </>
  );
};
export default App;
