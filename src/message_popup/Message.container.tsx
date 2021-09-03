import { useEffect, useState } from 'react'
import withAuth from '../utils/commons/hocs/withAuth'
import MessageUI from './Message.presenter'
import {
  useGet_messagesQuery,
  usePost_popupMessageMutation,
} from './Message.queries'

const Message = () => {
  const { data: messageData } = useGet_messagesQuery(null)
  const [popUpMessageUpdate] = usePost_popupMessageMutation()
  console.log(messageData)
  const [messageCount, setMessageCount] = useState({
    allUsersCount: 0,
    warningCount: 0,
  })
  const [popUpMessage, setPopUpMessage] = useState<string>('')

  const onChangeMessageCount = (event: any) => {
    if (event.target.id === 'allUsersCount') {
      if (event.target.value.length > 100) {
        return
      } else {
        const result = {
          ...messageCount,
          [event.target.id]: event.target.value.length,
        }
        setMessageCount(result)
        setPopUpMessage(event.target.value)
      }
    }

    if (event.target.id === 'warningCount') {
      if (event.target.value.length > 100) {
        return
      } else {
        const result = {
          ...messageCount,
          [event.target.id]: event.target.value.length,
        }
        setMessageCount(result)
      }
    }
  }
  const onClickPopUpMessage = async () => {
    const temp_message = { message: popUpMessage }
    const response = await popUpMessageUpdate(temp_message)
    if (Object.keys(response).find((key) => key === 'data')) {
      alert('성공적으로 변경하였습니다')
      location.reload()
    } else {
      alert('다시 시도하여주십시오')
    }
  }
  return (
    <MessageUI
      messageCount={messageCount}
      onChangeMessageCount={onChangeMessageCount}
      onClickPopUpMessage={onClickPopUpMessage}
    />
  )
}

export default withAuth(Message)
