import { Link } from 'react-router-dom';
import s from './PasswordRecovery.module.css';
import CardContainer from '../cardContainer/CardContainer';
import GlobalTitle from '../globalTitle/GlobalTitle';
import ListTitle from '../listTitle/ListTitle';
import InputForm from '../inputForm/InputForm';
import ButtonFormColor from '../buttonFormColor/ButtonFormColor';
import { PATH } from '../routing/Routing';




const PasswordRecovery = () => {
    return (
            <CardContainer>
                <>
                    <div className={s.globalTitleBox}>
                        <GlobalTitle />
                    </div>

                    <div className={s.listTitleBox}>
                        <ListTitle
                        text='Forgot your password?'
                        />
                    </div>

                    <form className={s.formWrap} action="" method="">

                        <InputForm
                            text={''}
                            type={'email'}
                            placeholder={'Email'}
                            title={'Please enter your email'}
                        />

                        <p className={`${s.cardText} ${s.cardTextTop}`}>
                            Enter your email address and we will send you further instructions
                        </p>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text='Send Instructions' />
                        </div>

                        <p className={`${s.cardText} ${s.cardTextBottom}`}>
                            Did you remember your password?
                        </p>

                    </form>

                    <Link className={s.linkCardBottom} to={PATH.LOGIN}>Try logging in</Link>

                </>
            </CardContainer>
    );
};

export default PasswordRecovery;