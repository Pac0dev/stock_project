import React from 'react'

const OwnedStocks = ({stocks}) => {
  if(!stocks || !stocks.length) {
    return (<div className="stock-list row --none"><p className="col-12">No has comprado acciones aun.</p></div>)
  }
    return (
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {
                stocks?.map((stock) => (
                  <tr key={stock.symbol}>
                    <td>{stock.symbol}</td>
                    <td>{(stock.price * +stock.quantity ?? 1).toFixed(2)}</td>
                    <td>{stock.quantity}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    )
};

export default OwnedStocks
