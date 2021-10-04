import React, {DetailedHTMLProps} from "react";
import s from './ModalTitle.module.css';

type ModalTitlePropsType = {
    text: string,
}

const ModalTitle = (props: ModalTitlePropsType) => {

    return (
        <h3 className={s.modalTitle}>
        Add new pack
    </h3>
    )
}

export default ModalTitle