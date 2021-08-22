import { useState } from 'react'
import SeatMapUI from './SeatMap.presenter'

const SeatMap = () => {
  const [boxCheck, setBoxCheck] = useState(false)

  const onClickCheckBox = (event: any) => {
    setBoxCheck(event.target.checked)
  }
  return <SeatMapUI onClickCheckBox={onClickCheckBox} boxCheck={boxCheck} />
}

export default SeatMap
