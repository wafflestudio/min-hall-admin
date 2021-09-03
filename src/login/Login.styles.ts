import styled from '@emotion/styled'
interface IProps {
  idColor?: boolean
  pwColor?: boolean
  buttonColor?: boolean
}

export const LoginWholeWrapper = styled.div`
  width: 1920px;
  height: 100%;
`

export const LoginHeaderWrapper = styled.section`
  width: 1920px;
  height: 122px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  display: flex;
`
export const SNULogoWrapper = styled.div`
  width: 72px;
  height: 72px;
  margin: auto;
`
export const SNULogo = styled.img`
  width: 100%;
  height: 100%;
`

export const LoginMainPageWrapper = styled.section`
  margin: 30px;
  background: #ffffff;
  border-radius: 10px;
  width: 1860px;
  height: 1183px;
  display: flex;
`

export const LoginDetailWrapper = styled.div`
  margin: auto;
  width: 437px;
  height: 315px;
  display: flex;
  flex-direction: column;
`

export const LoginText = styled.div`
  margin: 0 auto;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`
export const LoginIDInput = styled.input`
  margin-top: 30px;
  width: 437px;
  height: 68px;
  border: ${(props: IProps) =>
    props.idColor ? '3px solid #21d3d3' : '3px solid #b5b5bf'};
  box-sizing: border-box;
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  outline: none;
  padding-left: 20px;
  ::placeholder {
    color: #b5b5bf;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 21px;
    line-height: 31px;
  }
`
export const LoginPasswordInput = styled.input`
  margin-top: 30px;
  width: 437px;
  height: 68px;
  border: ${(props: IProps) =>
    props.pwColor ? '3px solid #21d3d3' : '3px solid #b5b5bf'};
  box-sizing: border-box;
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  outline: none;
  padding-left: 20px;
  ::placeholder {
    color: #b5b5bf;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 21px;
    line-height: 31px;
  }
`

export const LoginConfirmButton = styled.button`
  margin-top: 30px;
  width: 437px;
  height: 68px;
  background: ${(props: IProps) => (props.buttonColor ? '#ececef' : '#21d3d3')};
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  color: ${(props: IProps) => (props.buttonColor ? '#b5b5bf' : '#ffffff')};
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
  :active {
    filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
  }
  border: 0;
  cursor: pointer;
  outline: none;
`
