import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  
  return  <li  className= {`${styles['Ag-item']} list-group-item `}>
  <span className="ag-span">
     { foodItem} </span>
    </li>;
};

export default Item;
