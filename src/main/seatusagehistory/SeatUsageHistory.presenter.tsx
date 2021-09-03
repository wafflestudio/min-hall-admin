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

interface IProps {
  dailyUsageHistoryArray: any
}

const SeatUsageHistoryUI = (props: IProps) => {
  const { onClickUserDetailOpen } = useContext(GlobalContext)
  return (
    <DailySeatUsageHistoryWrapper>
      <DailySeatUsageHistroyBox>
        <DailySeatHistroyExplanation>
          금일 좌석 이용내역
        </DailySeatHistroyExplanation>
        {props.dailyUsageHistoryArray.map((data: any) => (
          <>
            <DailySeatHistoryMainLineDivider />
            <DailySeatHistoryDetailBox>
              <DailySeatHistoryLine>
                <DailySeatStudentImage />
                <DailySeatStudentId>
                  유저 ID:{data.studentId}
                </DailySeatStudentId>
                <DailySeatId>좌석 ID: {data.seatId}</DailySeatId>
                <DailySeatStudentReservationPeriod>
                  예약 시간: {data.startAt.slice(11)} ~ {data.endAt.slice(11)}
                </DailySeatStudentReservationPeriod>
                <DailySeatStudentReservationPeriod>
                  예약 상태:
                  {new Date(data.endAt) > new Date() ? '예약중' : '사용 완료'}
                </DailySeatStudentReservationPeriod>
                <DailySeatReservationHistory
                  id={data.studentId}
                  onClick={onClickUserDetailOpen}
                >
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
