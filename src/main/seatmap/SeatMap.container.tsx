import React, { useRef, useState } from 'react'
import {
  create_refs,
  entireClick,
  entireRemove,
  halfClick,
} from './SeatMap.longcode'
import SeatMapUI from './SeatMap.presenter'

const SeatMap = () => {
  const falseBox = {
    wholeCheck: false,
    halfCheck: false,
  }
  const [boxCheck, setBoxCheck] = useState<any>({
    wholeCheck: false,
    halfCheck: false,
  })
  const [seatClicked, setSeatClicked] = useState<any>({})
  const refs = useRef(create_refs)
  const onClickCheckBox = (event: any) => {
    if (boxCheck[event.target.id] === false) {
      if (event.target.id === 'wholeCheck') {
        setSeatClicked(entireClick)
      } else if (event.target.id === 'halfCheck') {
        setSeatClicked(halfClick)
      }
      const checkResult = {
        ...falseBox,
        [event.target.id]: true,
      }
      setBoxCheck(checkResult)
    } else if (boxCheck[event.target.id] === true) {
      setSeatClicked(entireRemove)
      const checkResult = {
        ...falseBox,
      }
      setBoxCheck(checkResult)
    }
  }
  const onClickSeatBox = (event: any) => {
    if (seatClicked[event.target.id] === true) {
      if (
        Object.keys(seatClicked).filter((key) => seatClicked[key] === true)
          .length === 64 ||
        Object.keys(seatClicked).filter((key) => seatClicked[key] === true)
          .length === 33
      ) {
        setSeatClicked(entireRemove)
        setBoxCheck(falseBox)
      } else {
        const result = {
          ...seatClicked,
          [event.target.id]: false,
        }
        setSeatClicked(result)
      }
    } else {
      const result = {
        ...seatClicked,
        [event.target.id]: true,
      }
      setSeatClicked(result)
    }
  }
  return (
    <SeatMapUI
      onClickCheckBox={onClickCheckBox}
      boxCheck={boxCheck}
      onClickSeatBox={onClickSeatBox}
      seatClicked={seatClicked}
      refs={refs}
    />
  )
}

export default SeatMap
