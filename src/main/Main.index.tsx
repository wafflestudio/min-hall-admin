import Header from '../header/Header.container'

import { SeatMapWrapper } from './Main.styles'
import { useContext } from 'react'
import Modal from '../utils/commons/modal/Modal.container'
import { GlobalContext } from '../../pages/_app'
import SeatMap from './seatmap/SeatMap.container'
import SeatOption from './seatoption/SeatOption.container'
import SeatUsageHistory from './seatusagehistory/SeatUsageHistory.container'

const Main = () => {
  const { userDetail } = useContext(GlobalContext)

  return (
    <>
      {userDetail && (
        <>
          <Modal />
        </>
      )}
      <Header />
      <SeatMapWrapper>
        <SeatMap />
        <SeatOption />
      </SeatMapWrapper>
      <SeatUsageHistory />
    </>
  )
}

export default Main
