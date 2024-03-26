import styles from "./NavItem.module.css";
interface content {
  text: string;
}
function NavItem({ text }: content) {
  return (
    <div className={styles.navItem}>
      {text}
      <span></span>
    </div>
  );
}
export default NavItem;
