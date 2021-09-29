import { Link, Redirect } from 'react-router-dom';
import s from './Loginization.module.css';
import CardContainer from '../../common/cardContainer/CardContainer';
import GlobalTitle from '../../common/globalTitle/GlobalTitle';
import ListTitle from '../../common/listTitle/ListTitle';
import InputForm from '../../common/inputForm/InputForm';
import ButtonFormColor from '../../common/buttonFormColor/ButtonFormColor';
import Checkbox from '../../common/checkbox/checkbox';
import IsLoading from '../../common/isLoading/IsLoading';
import { PATH } from '../routing/Routing';
import React, {FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC, setLoginErrorAC} from '../../store/loginizationReducer';
import {getIsLoading, getIsLoggedIn, getLoginError} from '../../store/selectots';
import { authMeTC } from '../../store/authReducer';

const Loginization = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const dispatch = useDispatch();
  const error = useSelector(getLoginError)
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) dispatch(authMeTC());
  }, [isLoggedIn]);

  const onEmailChangeHandler = (getEmail: string) => {
    setEmail(getEmail);
    if (error) dispatch(setLoginErrorAC(''))
  };
  const onPasswordChangeHandler = (getPassword: string) => {
    setPassword(getPassword);
    if (error) dispatch(setLoginErrorAC(''))
  };
  const onRememberMeChangeHandler = () => {
    setRememberMe(!rememberMe);
  };
  const onClickHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      loginTC({
        email: email,
        password: password,
        rememberMe: rememberMe,
      })
    );
  };

  if (isLoggedIn) {
    return <Redirect to={PATH.PROFILE} />
  }

  return (
    <>

      <CardContainer>
        <>
          <div className={s.globalTitleBox}>
            <GlobalTitle />
          </div>

          <div className={s.listTitleBox}>
            <ListTitle text="Sign In" />
          </div>

          <form
            className={s.formWrap}
            onSubmit={onClickHandler}
          >
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
              pattern={
                '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'
              }
              title={
                'the password must be at least 8 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *'
              }
              value={password}
              onChangeText={onPasswordChangeHandler}
            />

            <Checkbox
              checked={rememberMe}
              name={'remember'}
              value={'remember'}
              text={'Remember me'}
              // checked={'checked'}
              onChange={onRememberMeChangeHandler} />
            {
              error && <p className={s.error}>{error}</p>
            }

            <div className={s.linkWrap}>
              <Link className={s.passForgot} to={PATH.PASSWORD_RECOVERY}>
                Forgot password
              </Link>
            </div>

            <div className={s.buttonContainer}>
              <ButtonFormColor text="Login" type={'submit'} />
            </div>

            <p className={s.formText}>Don’t have an account?</p>
          </form>

          <Link className={s.linkCardBottom} to={PATH.REGISTRATION}>
            Sign Up
          </Link>
        </>
      </CardContainer>
    </>
  );
};

export default Loginization;