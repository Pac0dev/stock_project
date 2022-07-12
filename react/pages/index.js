import {Component, useEffect, useState} from 'react'
import Head from 'next/head'
import StockPrice from './components/stock-price';
import OwnedStocks from "./components/owned-stocks";

export default function Home() {
  const [mStocks, setMStocks] = useState([]);
  const [balance, setBalance] = useState(15000);
  useEffect(() => {
    const price = mStocks.reduce((acc, stock) => acc + stock.price * stock.quantity, 0);
    setBalance( (15000 - price.toFixed(2) >= 0) ? 15000 - price.toFixed(2) : 0);
  }, [mStocks] )
  return (
    <div>
      <Head>
        <title>Rastreador de Acciones</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Heading/>
      <div className="container">
        <CurrentStocks setMStocks={setMStocks} balance={balance}/>
        <MyStocks mStocks={mStocks}/>
      </div>
    </div>
  )
}

function Heading() {
  return (
    <div>
      <h1>Bienvenido al Rastreador de Acciones!</h1>
      <style jsx>{` div { text-align: center; }`}</style>
    </div>
  );
}

function CurrentStocks({setMStocks, balance, setBalance}) {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/stocks')
      .then(res => res.json())
      .then((data) => {
        setStocks(data)
      })
      .catch(console.log)
  }, []);


  return (
    <section>
      <h2 className="h3">Precios Actuales de las Acciones:</h2>
      <h3>Saldo restante: ${+balance.toFixed(2)}</h3>
      <StockPrice balance={balance} stocks={stocks} setStocks={setStocks} setMStocks={setMStocks} />
    </section>
  );
}

function MyStocks({mStocks}) {

    return (
      <section>
        <h2 className="h3">Acciones que tengo:</h2>
        <OwnedStocks stocks={mStocks}/>
      </section>
    );
}
