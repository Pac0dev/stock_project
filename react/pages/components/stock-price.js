import StockCard from "./StockCard";
import styles from '../styles.module.css';
import Modal from "./modal";
import { useState } from "react";
const StockPrice = ({stocks, setStocks, setMStocks, balance}) => {
  const [showModal, setShowModal] = useState(false);
  if (!stocks || !stocks.length) {
    return (<div className="stock-list row --none"><p className="col-12">No hay acciones que mostrar.</p></div>)
  }

  const handleBuyStock = (stock, quantity) => {
    if(balance - (+stock.price * quantity) <= 0) {
      setShowModal(true);
      return;
    }
    stock.quantity = stock.quantity ? stock.quantity + quantity : stock.quantity = quantity;
    setStocks(stocks => stocks.map(s => s.symbol === stock.symbol ? stock : s));
    //not repeat objects and just increase quantity
    setMStocks((mStocks) => {
      if(mStocks?.some(s => s.symbol === stock.symbol)) {
        return mStocks.map(s => s.symbol === stock.symbol ? stock : s);
      } else {
        if(mStocks?.length) {
          return [...mStocks, stock];
        } else {
          return [stock];
        }
      }
    })
  }
  return (
    <div className={styles.cards}>
      <Modal showModal={showModal} setShowModal={() => setShowModal(false)}/>
      {
        stocks.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} handleBuyStock={handleBuyStock}/>
        ))
      }
    <style jsx>{`
              .stock-list {
                  margin-block-start: 1em;
                  margin-block-end: 1em;
                  margin-top: 0;
                  margin-bottom: 1rem;
              }
          `}</style>
   </div>
  )
};

export default StockPrice
