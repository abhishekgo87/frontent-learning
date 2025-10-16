import styles from "./Item.module.css";

const Item = ({ foodItem,  bought,handleBuyButton }) => {
  
  
  return (
    <li classNameName={`${styles["Ag-item"]} list-group-item ${bought &&

    'active'} `}>
      <span classNameName={styles["ag-span"]}>{foodItem}</span>
      <button
        classNameName={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        {" "}
        Buy{" "}
      </button>
    </li>
  );
};

export default Item;
