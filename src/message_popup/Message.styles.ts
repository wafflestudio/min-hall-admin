import styled from '@emotion/styled'

export const PopUpWrapper = styled.section`
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PopUpAllUsersMessage = styled.div`
  width: 47.6%;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;
`
export const PopUpWarningMessage = styled.div`
  width: 47.6%;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;
`
export const PopUpAllUsersMessageTitle = styled.div`
  margin: 25px 0px 0px 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`
export const PopUpAllUsersMessageBoxWrapper = styled.div`
  margin: 236px 30px 0px 30px;
`
export const PopUpAllUsersMessageBox = styled.textarea`
  padding: 25px 30px 0px 30px;
  width: 100%;
  height: 400px;
  border: 2px solid #dbdbe3;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  color: #525252;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  ::placeholder {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 31px;
  }
`
export const PopUpAllUsersMessageCount = styled.div`
  margin: 15px 30px 0px 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #9c9d9e;
  font-size: 21px;
  line-height: 31px;
`
export const PopUpAllUsersRegisterButtonWrapper = styled.div`
  margin: 74px 239px 298px 239px;
`
export const PopUpAllUsersRegisterButton = styled.button`
  width: 100%;
  height: 68px;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? '#ececef' : '#21d3d3')};
  border: 0;
  color: ${(props) => (props.disabled ? '#b5b5bf' : '#ffffff')};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  line-height: 31px;
  font-size: 21px;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
  :active {
    filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
  }
  cursor: pointer;
`

export const PopUpWarningMessageTitle = styled.div`
  margin: 25px 0px 0px 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`
export const PopUpWarningMessageWrapper = styled.div`
  margin: 236px 30px 0px 30px;
`

export const PopUpWarningMessageBox = styled.textarea`
  padding: 25px 30px 0px 30px;
  width: 100%;
  height: 400px;
  border: 2px solid #dbdbe3;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  color: #525252;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  ::placeholder {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 31px;
  }
`

export const PopUpWarningMessageCount = styled.div`
  margin: 15px 30px 0px 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #9c9d9e;
  font-size: 21px;
  line-height: 31px;
`

export const PopUpWarningMessageRegisterButtonWrapper = styled.div`
  margin: 74px 239px 298px 239px;
`
export const PopUpWarningMessageRegisterButton = styled.button`
  width: 100%;
  height: 68px;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? '#ececef' : '#21d3d3')};
  border: 0;
  color: ${(props) => (props.disabled ? '#b5b5bf' : '#ffffff')};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  line-height: 31px;
  font-size: 21px;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
  :active {
    filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
  }
  cursor: pointer;
`
