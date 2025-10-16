import styles from "./container.module.css";

const Container = ({children}) => {
 return <div classNameName={styles.container}>{children}</div>
};

export default Container;