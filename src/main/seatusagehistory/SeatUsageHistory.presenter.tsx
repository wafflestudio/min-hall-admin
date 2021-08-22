import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  DailySeatUsageHistoryWrapper,
  DailySeatUsageHistroyBox,
  DailySeatHistroyExplanation,
  DailySeatHistoryMainLineDivider,
  DailySeatHistoryDetailBox,
  DailySeatHistoryLine,
  DailySeatStudentImage,
  DailySeatStudentId,
  DailySeatId,
  DailySeatStudentReservationPeriod,
  DailySeatReservationHistory,
} from './SeatUsageHistory.stlyes'
const SeatUsageHistoryUI = () => {
  const { onClickUserDetailOpen } = useContext(GlobalContext)
  return (
    <DailySeatUsageHistoryWrapper>
      <DailySeatUsageHistroyBox>
        <DailySeatHistroyExplanation>
          금일 좌석 이용내역
        </DailySeatHistroyExplanation>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <>
            <DailySeatHistoryMainLineDivider />
            <DailySeatHistoryDetailBox>
              <DailySeatHistoryLine>
                <DailySeatStudentImage />
                <DailySeatStudentId>유저 ID: 2018 -00000</DailySeatStudentId>
                <DailySeatId>좌석 ID: 13</DailySeatId>
                <DailySeatStudentReservationPeriod>
                  예약 시간: 10:00 ~ 12:30
                </DailySeatStudentReservationPeriod>
                <DailySeatStudentReservationPeriod>
                  예약 상태: 사용 완료
                </DailySeatStudentReservationPeriod>
                <DailySeatReservationHistory onClick={onClickUserDetailOpen}>
                  유저 이용 내역
                </DailySeatReservationHistory>
              </DailySeatHistoryLine>
            </DailySeatHistoryDetailBox>
          </>
        ))}
      </DailySeatUsageHistroyBox>
    </DailySeatUsageHistoryWrapper>
  )
}

export default SeatUsageHistoryUI
