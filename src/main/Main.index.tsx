import Header from '../header/Header.container'

import { MainWrapper, MainInnerWrapper, SeatMapWrapper } from './Main.styles'
import { useContext } from 'react'
import Modal from '../utils/commons/modal/Modal.container'
import { GlobalContext } from '../../pages/_app'
import SeatMap from './seatmap/SeatMap.container'
import SeatOption from './seatoption/SeatOption.container'
import SeatUsageHistory from './seatusagehistory/SeatUsageHistory.container'
import withAuth from '../utils/commons/hocs/withAuth'
import { connect } from 'react-redux'

const Main = (props: any) => {
  const { userDetail } = useContext(GlobalContext)
  return (
    <>
      {userDetail && (
        <>
          <Modal />
        </>
      )}
      <Header />
      <MainWrapper>
        <MainInnerWrapper>
          <SeatMapWrapper>
            <SeatMap />
            <SeatOption />
          </SeatMapWrapper>
          <SeatUsageHistory />
        </MainInnerWrapper>
      </MainWrapper>
    </>
  )
}

function mapStateToProps(state: any) {
  return { toDos: state }
}

export default connect(mapStateToProps)(withAuth(Main))
