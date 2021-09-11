import {
  LoginConfirmButton,
  LoginDetailWrapper,
  LoginHeaderWrapper,
  LoginIDInput,
  LoginMainPageWrapper,
  LoginPasswordInput,
  LoginText,
  LoginWholeWrapper,
  SNULogo,
  SNULogoWrapper,
} from './Login.styles'

interface IProps {
  loginActive: any
  loginInputColorChange: any
  buttonActive: any
  idRef: any
  passwordRef: any
  loginValidation: any
}

const LoginUI = (props: IProps) => {
  return (
    <div
      className="main-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
      }}
    >
      <LoginWholeWrapper>
        <LoginHeaderWrapper>
          <SNULogoWrapper>
            <SNULogo src="./SNU_logo.svg" />
          </SNULogoWrapper>
        </LoginHeaderWrapper>
        <LoginMainPageWrapper>
          <LoginDetailWrapper>
            <LoginText>로그인</LoginText>
            <LoginIDInput
              id="id"
              type="text"
              placeholder="ID"
              onChange={props.loginInputColorChange}
              idColor={props.loginActive.idActive}
              ref={props.idRef}
            ></LoginIDInput>
            <LoginPasswordInput
              id="password"
              type="password"
              placeholder="PASSWORD"
              onChange={props.loginInputColorChange}
              pwColor={props.loginActive.passwordActive}
              ref={props.passwordRef}
            ></LoginPasswordInput>
            <LoginConfirmButton
              disabled={props.buttonActive}
              buttonColor={props.buttonActive}
              onClick={props.loginValidation}
            >
              확인
            </LoginConfirmButton>
          </LoginDetailWrapper>
        </LoginMainPageWrapper>
      </LoginWholeWrapper>
    </div>
  )
}

export default LoginUI
