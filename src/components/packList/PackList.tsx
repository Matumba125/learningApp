import { Link } from 'react-router-dom';
import s from './PackList.module.css';
import CardListContainer from '../../common/cardListContainer/CardListContainer';
import ListTitle from '../../common/listTitle/ListTitle';
import InputSearch from '../../common/inputSearch/InputSearch';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor'
import { useSelector } from 'react-redux';
import { getCardsSelector } from '../../store/selectots';

const PackList = () => {

    const cards = useSelector(getCardsSelector)


    return (
        <>
            <CardListContainer>
                <>
                    <div className={s.packListWrap}>

                        <Link className={s.linkCardList} to={''}>
                            <ListTitle text="Pack Name" />
                        </Link>

                        <div className={s.searchBox}>
                            <div className={s.inputWrap}>
                                <InputSearch
                                    placeholder={'Search...'} />
                            </div>
                            <div className={s.buttonWrap}>
                                <ButtonFormColor
                                    text={'Add new card'}
                                />
                            </div>

                        </div>
                        <span className={s.cardListText}>This pack is empty. Click add new card to fill this pack</span>
                    </div>
                </>

            </CardListContainer>
        </>
    )
}

export default PackList