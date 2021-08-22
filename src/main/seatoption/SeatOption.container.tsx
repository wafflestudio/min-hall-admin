import SeatOptionUI from './SeatOption.presenter'
import { useState } from 'react'
const SeatOption = () => {
  const [buttonIsActive, setButtonIsActive] = useState({
    maxNumber: true,
    hallOpen: true,
    hallClose: true,
  })
  const onChangeSeatOption = (event: any) => {
    if (event.target.id === 'maxNumber') {
      if (event.target.value !== event.target.defaultValue) {
        if (parseInt(event.target.value) > 99) {
          event.target.value = '99'
        } else {
          const result = {
            ...buttonIsActive,
            [event.target.id]: false,
          }
          setButtonIsActive(result)
        }
      }
    }
    if (
      event.target.id === 'hallOpenHour' ||
      event.target.id === 'hallOpenMinute'
    ) {
      if (event.target.value !== event.target.defaultValue) {
        if (
          event.target.id === 'hallOpenMinute' &&
          parseInt(event.target.value) > 59
        ) {
          event.target.value = '59'
        } else if (
          event.target.id === 'hallOpenHour' &&
          parseInt(event.target.value) > 23
        ) {
          event.target.value = '23'
        } else {
          const result = {
            ...buttonIsActive,
            hallOpen: false,
          }
          setButtonIsActive(result)
        }
      }
    }

    if (
      event.target.id === 'hallCloseHour' ||
      event.target.id === 'hallCloseMinute'
    ) {
      if (event.target.value !== event.target.defaultValue) {
        if (
          event.target.id === 'hallCloseMinute' &&
          parseInt(event.target.value) > 59
        ) {
          event.target.value = '59'
        } else if (
          event.target.id === 'hallCloseHour' &&
          parseInt(event.target.value) > 23
        ) {
          event.target.value = '23'
        } else {
          const result = {
            ...buttonIsActive,
            hallClose: false,
          }
          setButtonIsActive(result)
        }
      }
    }
  }
  return (
    <SeatOptionUI
      onChangeSeatOption={onChangeSeatOption}
      buttonIsActive={buttonIsActive}
    />
  )
}

export default SeatOption
