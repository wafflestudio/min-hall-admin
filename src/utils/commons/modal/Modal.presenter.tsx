import { useContext } from 'react'
import { GlobalContext } from '../../../../pages/_app'
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
  const temp = [1, 2, 3, 4, 5, 6, 7, 8]
  const { onClickUserDetailClose } = useContext(GlobalContext)
  return (
    <>
      <ModalBackground onClick={onClickUserDetailClose} />
      <ModalBoxWrapper>
        <ModalBox>
          <CancelButton onClick={onClickUserDetailClose}>X</CancelButton>
          <ReservationHistoryExplanation>
            이용 내역
          </ReservationHistoryExplanation>
          <ReservationID>ID: 2018-00000</ReservationID>
          <ReservationLineDivider />
          {temp.map((_, idx) => (
            <ReservationDetailHistoryBox key={idx}>
              <ReservationDetail>
                <ReservationDetailDate>2021 / 07 / 21</ReservationDetailDate>
                <ReservationDetailWarning>
                  예약 후 사용하지 않음
                </ReservationDetailWarning>
                <ReservationDetailTime>15:00 - 17:30 </ReservationDetailTime>
              </ReservationDetail>
              {temp.length !== idx + 1 && <ReservationLineDivider />}
            </ReservationDetailHistoryBox>
          ))}
        </ModalBox>
      </ModalBoxWrapper>
    </>
  )
}

export default ModalUI
