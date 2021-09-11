import Header from '../header/Header.container'
import {
  PopUpWrapper,
  PopUpAllUsersMessage,
  PopUpAllUsersMessageTitle,
  PopUpAllUsersMessageBox,
  PopUpAllUsersMessageBoxWrapper,
  PopUpAllUsersMessageCount,
  PopUpAllUsersRegisterButtonWrapper,
  PopUpAllUsersRegisterButton,
} from './Message.styles'

interface IProps {
  messageCount: any
  onChangeMessageCount: any
  onClickPopUpMessage: any
}

const MessageUI = (props: IProps) => {
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
      <Header />
      <PopUpWrapper>
        <PopUpAllUsersMessage>
          <PopUpAllUsersMessageTitle>
            전체 사용자에게 보낼 팝업 메세지 작성
          </PopUpAllUsersMessageTitle>
          <PopUpAllUsersMessageBoxWrapper>
            <PopUpAllUsersMessageBox
              id="allUsersCount"
              placeholder="메세지를 입력해주세요"
              maxLength={100}
              onChange={props.onChangeMessageCount}
            />
          </PopUpAllUsersMessageBoxWrapper>
          <PopUpAllUsersMessageCount>
            {props.messageCount.allUsersCount}/100
          </PopUpAllUsersMessageCount>
          <PopUpAllUsersRegisterButtonWrapper>
            <PopUpAllUsersRegisterButton onClick={props.onClickPopUpMessage}>
              입력 완료
            </PopUpAllUsersRegisterButton>
          </PopUpAllUsersRegisterButtonWrapper>
        </PopUpAllUsersMessage>
      </PopUpWrapper>
    </div>
  )
}

export default MessageUI
