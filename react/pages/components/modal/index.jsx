import styles from '../../styles.module.css';
function Modal({showModal = false, setShowModal = () => {}, children}) {
  return (
      <div className={`${styles.overlay} ${showModal === false ? styles.hidden : ''}`}>
        <div className={`${styles.modal}`}>
          <h3 className={`${styles.header}`}>
            Sin saldo
          </h3>
          <p className={`${styles.body}`}>
            No tienes saldo suficiente para comprar esta acción.
          </p>
          <button className="btn btn-primary" onClick={setShowModal}>Ok</button>
        </div>
      </div>
  )
}

export default Modal;
