import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  useReservation_logQuery,
  useReservation_statusQuery,
} from '../seatmap/SeatMap.queries'
import SeatUsageHistoryUI from './SeatUsageHistory.presenter'

const SeatUsageHistory = () => {
  const { dateDetail } = useContext(GlobalContext)
  const dailyUsageHistoryArray: any = []
  const { data: reservationLogData } = useReservation_statusQuery(dateDetail)
  const temp_data = reservationLogData?.seatList
    .filter((data: any) => data.reservations.length > 0)
    .map((data: any) => data.reservations)
  console.log(
    temp_data?.map((data: any) =>
      data.map((key: any) => dailyUsageHistoryArray.push(key))
    )
  )
  console.log('reservationLog', dailyUsageHistoryArray)
  console.log(new Date('2021/07/09 10:30').getTime())
  console.log(new Date().getTime())
  return <SeatUsageHistoryUI dailyUsageHistoryArray={dailyUsageHistoryArray} />
}

export default SeatUsageHistory
