import React, {useState} from 'react';
import s from './Registration.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import GlobalTitle from '../../common/globalTitle/GlobalTitle';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import ButtonFormCancel from '../../common/buttonFormCancel/ButtonFormCancel'
import IsLoading from '../../common/isLoading/IsLoading';
import {Redirect} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {registerTC, setErrorAC} from '../../store/registrationReducer';
import {getIsLoading, getRegistrationError, getRegistrationStatus} from '../../store/selectots';
import {PATH} from '../routing/Routing';

const Registration = () => {

    //testing comment

    const dispatch = useDispatch();

    const error = useSelector(getRegistrationError)
    const registered = useSelector(getRegistrationStatus)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [passwordsUnmatch, setPasswordsUnmatch] = useState<boolean>(false)

    const onEmailChangeHandler = (gainedEmail: string) => {
        setEmail(gainedEmail)
        if (error) dispatch(setErrorAC(''))
    }
    const onPasswordChangeHandler = (gainedPassword: string) => {
        setPassword(gainedPassword)
    }
    const onPasswordConfirmChangeHandler = (gainedPasswordConfirm: string) => {
        setConfirmPassword(gainedPasswordConfirm)
        setPasswordsUnmatch(false)
    }

    const onClickHandler = () => {
        if (password === confirmPassword) {
            dispatch(registerTC(
                {
                    email: email,
                    password: password
                }
            ))
        } else {
            setPasswordsUnmatch(true)
        }

    }

    if (registered) {
        return <Redirect to={PATH.LOGIN} />
    }

    return (
    <>

        <CardContainer>
            <>
                <div className={s.globalTitleBox}>
                    <GlobalTitle />
                </div>

                <div className={s.listTitleBox}>
                    <ListTitle
                        text='Sign Up'
                    />
                </div>

                <form className={s.formWrap} action="" method="">

                    <InputForm
                        text={'Email'}
                        inputType={'email'}
                        placeholder={'Please enter email'}
                        title={'Please enter email'}
                        value={email}
                        onChangeText={onEmailChangeHandler}
                    />

                    <InputForm
                        text={'Password'}
                        inputType={'password'}
                        placeholder={'Please enter password'}
                        pattern={'(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'}
                        title={'the password must be at least 8 characters long including, one number, one capital letter, one small letter.'}
                        value={password}
                        onChangeText={onPasswordChangeHandler}
                    />

                    <InputForm
                        text={'Сonfirm password'}
                        inputType={'password'}
                        placeholder={'Please confirm password'}
                        pattern={'(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'}
                        title={'Please confirm password'}
                        value={confirmPassword}
                        onChangeText={onPasswordConfirmChangeHandler}
                    />
                    {
                        error && <p className={s.error}>{error}</p>
                    }

                    {
                        passwordsUnmatch && <p className={s.error}>Passwords don't match</p>
                    }

                    <div className={s.buttonsContainer}>

                        <ButtonFormCancel/>

                        <div className={s.buttonContainer}>
                            <ButtonFormColor
                                text='Register'
                                onClick={onClickHandler}
                            />
                        </div>
                    </div>
                </form>
            </>
        </CardContainer>
    </>

    );
};

export default Registration;