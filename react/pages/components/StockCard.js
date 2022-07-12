import { useState } from "react";
function StockCard({stock, handleBuyStock}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
          <div className="card col-sm m-2" key={stock.symbol}>
            <h3 className="h5 card-title">{stock.symbol}</h3>
            <div className="card-body">{stock.price}</div>
            <div className="card-footer d-inline-flex p-2 bd-highlight">
              <button onClick={() => handleBuyStock(stock, quantity)}>Comprar</button>
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
