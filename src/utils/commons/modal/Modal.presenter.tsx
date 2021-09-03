import { useContext } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import { useReservation_detailQuery } from '../../../main/seatmap/SeatMap.queries'
import {
  CancelButton,
  ModalBackground,
  ModalBox,
  ModalBoxWrapper,
  ReservationDetail,
  ReservationDetailDate,
  ReservationDetailHistoryBox,
  ReservationDetailTime,
  ReservationDetailWarning,
  ReservationHistoryExplanation,
  ReservationID,
  ReservationLineDivider,
} from './Modal.styles'

const ModalUI = () => {
  const { onClickUserDetailClose, userId } = useContext(GlobalContext)
  const { data: detailData } = useReservation_detailQuery(Number(userId))
  console.log('userId', detailData)
  return (
    <>
      <ModalBackground onClick={onClickUserDetailClose} />
      <ModalBoxWrapper>
        <ModalBox>
          <CancelButton onClick={onClickUserDetailClose}>X</CancelButton>
          <ReservationHistoryExplanation>
            이용 내역
          </ReservationHistoryExplanation>
          <ReservationID>ID: {userId}</ReservationID>
          <ReservationLineDivider />
          {detailData?.reservations.map((data: any, idx: any) => (
            <ReservationDetailHistoryBox key={idx}>
              <ReservationDetail>
                <ReservationDetailDate>
                  {data.startAt.slice(0, 11)}
                </ReservationDetailDate>
                {data.isWarned && (
                  <ReservationDetailWarning>
                    예약 후 사용하지 않음
                  </ReservationDetailWarning>
                )}
                <ReservationDetailTime>{`${data.startAt.slice(
                  11
                )} ~ ${data.endAt.slice(11)}`}</ReservationDetailTime>
              </ReservationDetail>
              {detailData?.reservations.length !== idx + 1 && (
                <ReservationLineDivider />
              )}
            </ReservationDetailHistoryBox>
          ))}
        </ModalBox>
      </ModalBoxWrapper>
    </>
  )
}

export default ModalUI
