import React from "react";
import s from './TableLeine.module.css';
import ButtonTabDelete from '../buttonTabDelete/ButtonTabDelete';
import ButtonTabEdit from '../buttonTabEdit/ButtonTabEdit';
import ButtonLearn from '../buttonTabLearn/ButtonTabLearn';

type TableLinePropsType = {
    packName: string
    cardsCount: number
    created: Date
    userName: string
    _id: string
    user_id: string
}

const TableLine: React.FC<TableLinePropsType> = props => {

    const{
        packName,
        cardsCount,
        created,
        userName,
        _id,
        user_id,
        ...restProps
    } = props

    const isPacksBelogsToUser = _id === user_id
    
    const newDate = new Intl.DateTimeFormat().format(new Date(created))
    
    return (
        <>
            <tr className={s.tableLine}>
                <td className={s.tableBodyItem}>{packName}</td>
                <td className={s.tableBodyItem}>{cardsCount}</td>
                <td className={s.tableBodyItem}>{newDate}</td>
                <td className={s.tableBodyItem}>{userName}</td>
                <td className={s.tableBodyItem}>
                    <div className={s.tableButtonsblock}>
                        {
                            isPacksBelogsToUser && <><ButtonTabDelete/> <ButtonTabEdit/></>
                        }
                        <ButtonLearn/>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableLine;