import { useState,useEffect } from 'react'
import axios from 'axios';



function App() {
  const [dataPokemon, setDataPokemon] = useState([]);

  // useEffect(()=>{

  //   async function getData(){
  //     const data = await axios.get('https://pokeapi.co/api/v2/pokemon')
  //     setDataPokemon(data.data.results); 
  //     // console.log(dataPokemon)
  //   }
  //   getData();
  // },[])


  useEffect(()=>{
    // const aux = [];
    // const getData = Promise.allSettled(dataPokemon.map(async (e)=> await axios.get(e.url).then (res => aux.push(res.data.data))));
    // console.log(aux)

    async function teste() {
      const aux = [];
      for await (let pokemon of dataPokemon) {
        const res = await axios.get(pokemon.url);
        aux.push({
          nome: res.data.name
        })
      }
      console.log(aux)
    }

    teste();



  },[dataPokemon]);

//   const values = [1,2,3,4,5];

// const retorno = values.filter(item => item !== 5)
// console.log(retorno)


  return (
    <div className="App">
      oi
    </div>
  )
}

export default App
