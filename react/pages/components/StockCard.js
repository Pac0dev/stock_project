import { useState } from "react";
import styles from '../styles.module.css';
function StockCard({stock, handleBuyStock}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
          <div className={styles.card} key={stock.symbol}>
            <h3 className={styles.title}>{stock.symbol}</h3>
            <span className={styles.price}>${stock.price}</span>
            <div className={styles.footer}>
              <button className="btn btn-primary mr-2" onClick={() => {
                handleBuyStock(stock, quantity);
                setQuantity(1);
              }}>
                Comprar
              </button>
              <input
                min={1}
                type='number'
                className='form-control'
                placeholder='Cantidad'
                value={quantity}
                onChange={({target}) => {
                  setQuantity( +target.value > 0 ? +target.value : 1);
                }}
              />
            </div>
          </div>
    </>
   );
}

export default StockCard;
