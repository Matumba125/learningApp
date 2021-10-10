import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PacksListMain from '../../common/packsListMain/PacksListMain';
import {Redirect} from 'react-router-dom';
import {PATH} from '../routing/Routing';
import {getIsLoggedIn, getIsPrivate, getPacksPage, getPageCount, getSortPacks} from '../../store/selectots';
import {getCardsPacksTC} from '../../store/cardsPacksReducer';
import PacksListSidebar from '../../common/PacksListSidebar/PacksListSidebar';
import ListContainer from '../../common/ListContainer/ListContainer';


const Packs = () => {

    const dispatch = useDispatch()

    const currentPage = useSelector(getPacksPage)
    const pageCount = useSelector(getPageCount)
    const isPrivate = useSelector(getIsPrivate)
    const sortPacks = useSelector(getSortPacks)

    useEffect(()=>{
        dispatch(getCardsPacksTC())
    },[dispatch, currentPage, pageCount, isPrivate, sortPacks])

    const isLoggedIn = useSelector(getIsLoggedIn)

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }
    return (
        <>
            <ListContainer>
                <>
                    <PacksListSidebar />

                    <PacksListMain />
                </>
            </ListContainer>
        </>
    );
};

export default Packs;