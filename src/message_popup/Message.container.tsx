import { useState } from 'react'
import MessageUI from './Message.presenter'

const Message = () => {
  const [messageCount, setMessageCount] = useState({
    allUsersCount: 0,
    warningCount: 0,
  })

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

  return (
    <MessageUI
      messageCount={messageCount}
      onChangeMessageCount={onChangeMessageCount}
    />
  )
}

export default Message
