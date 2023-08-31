import styles from "./Button.module.css";
import { ReactNode, MouseEventHandler } from "react";

export enum BUTTON_TYPES {
  primary = "primary",
  back = "back",
}

export type ButtonProps = {
  type: BUTTON_TYPES;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
