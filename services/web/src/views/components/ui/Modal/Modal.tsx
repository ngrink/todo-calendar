import React, { FC } from "react";
import cn from "classnames";
import { IoIosClose } from "react-icons/io";

import cl from "./Modal.module.scss";

type ModalProps = {
  active: boolean;
  children: React.ReactNode;
  close(): void;
};

export const Modal: FC<ModalProps> = ({ active, children, close }) => {
  return (
    <div
      className={cn(cl.modal, {
        [cl.active]: active,
      })}
      onClick={close}
    >
      <div className={cl.contentWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={cl.content}>{children}</div>
        <div className={cl.closeBtn} onClick={close}>
          <IoIosClose size={21} />
        </div>
      </div>
    </div>
  );
};
