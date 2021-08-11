import styled from '@emotion/styled'

export const ModalBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
`
export const ModalBox = styled.div`
  position: fixed;
  width: 460px;
  height: 500px;
  overflow-y: auto;
  margin: auto;
  background: #ffffff;
  border-radius: 5px;
  z-index: 2;
  top: 200px;
  left: 730px;
  overflow: auto;
`

export const CancelButton = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 28px;
  left: 412px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`

export const ReservationHistoryExplanation = styled.div`
  margin: 20px 0px 0px 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  text-transform: uppercase;
  color: #525252;
`

export const ReservationID = styled.div`
  margin: 2px 0px 0px 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #525252;
`
export const ReservationLineDivider = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 0;
  border: 2px solid #dbdbe3;
`
export const ReservationDetailHistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
`

export const ReservationDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #525252;
  align-items: center;
`
export const ReservationDetailDate = styled.span``
export const ReservationDetailWarning = styled.span`
  line-height: 21px;
  font-size: 14px;
  color: #fe6161;
  /* vertical-align: middle; */
`
export const ReservationDetailTime = styled.span`
  text-align: right;
`
export const ReservatioDetailLineDivider = styled.div`
  border: 1px solid #dbdbe3;
`
export const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(8px); */
`
