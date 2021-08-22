import Header from '../header/Header.container'
import {
  PopUpWrapper,
  PopUpAllUsersMessage,
  PopUpWarningMessage,
  PopUpAllUsersMessageTitle,
  PopUpAllUsersMessageBox,
  PopUpAllUsersMessageBoxWrapper,
  PopUpAllUsersMessageCount,
  PopUpAllUsersRegisterButtonWrapper,
  PopUpAllUsersRegisterButton,
  PopUpWarningMessageTitle,
  PopUpWarningMessageWrapper,
  PopUpWarningMessageBox,
  PopUpWarningMessageCount,
  PopUpWarningMessageRegisterButtonWrapper,
  PopUpWarningMessageRegisterButton,
} from './Message.styles'

interface IProps {
  messageCount: any
  onChangeMessageCount: any
}

const MessageUI = (props: IProps) => {
  return (
    <>
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
            <PopUpAllUsersRegisterButton>입력 완료</PopUpAllUsersRegisterButton>
          </PopUpAllUsersRegisterButtonWrapper>
        </PopUpAllUsersMessage>
        <PopUpWarningMessage>
          <PopUpWarningMessageTitle>
            경고 팝업 메세지 작성
          </PopUpWarningMessageTitle>
          <PopUpWarningMessageWrapper>
            <PopUpWarningMessageBox
              id="warningCount"
              placeholder="메세지를 입력해주세요"
              maxLength={100}
              onChange={props.onChangeMessageCount}
            />
          </PopUpWarningMessageWrapper>
          <PopUpWarningMessageCount>
            {props.messageCount.warningCount}/100
          </PopUpWarningMessageCount>
          <PopUpWarningMessageRegisterButtonWrapper>
            <PopUpWarningMessageRegisterButton>
              입력완료
            </PopUpWarningMessageRegisterButton>
          </PopUpWarningMessageRegisterButtonWrapper>
        </PopUpWarningMessage>
      </PopUpWrapper>
    </>
  )
}

export default MessageUI
