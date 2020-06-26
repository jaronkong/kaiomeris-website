
import Link from "next/link";
import { withRouter } from "next/router";

import styles from './NavButton.module.scss'

const NavButton = props => {
  const getButtonStyle = () => {
    const returnStyles = [styles.button];
    if (props.router.pathname === props.path) {
      returnStyles.push(styles.on);
    }
    return returnStyles.join(' ');
  }
  return (
    <Link href={props.path}>
      <div
        // className={styles.button `${
        //   props.router.pathname === props.path ? "active" : ""
        //   }`}
        className={getButtonStyle()}
      >
        <span className="Label">{props.label}</span>
      </div>
    </Link>
  )
};

export default withRouter(NavButton);