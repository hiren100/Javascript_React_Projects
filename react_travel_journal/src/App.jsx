import logo from './assets/react.svg';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Data from './data'


function App() {
  console.log(Data)
  const CardData = Data.map(item => {
     return <Card 
      key={item}
      item={item}
     />
   })

  return (


    <div>
      <Header/>
      <div className='card-container'>
        {CardData}
      </div>
    </div>



  );
}

export default App;
