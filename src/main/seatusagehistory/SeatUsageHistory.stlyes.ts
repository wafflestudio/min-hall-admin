import styled from '@emotion/styled'

export const DailySeatUsageHistoryWrapper = styled.div`
  width: 100%;
  padding: 0 1.57% 1.57% 1.57%;
`

export const DailySeatUsageHistroyBox = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  height: 100%;
  border: 0.1px solid lightgray;
`

export const DailySeatHistroyExplanation = styled.div`
  margin-top: 25px;
  margin-left: 30px;
  margin-bottom: 25px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`

export const DailySeatHistoryMainLineDivider = styled.div`
  width: 100%;
  height: 0px;
  border: 2px solid #dbdbe3;
`
export const DailySeatHistoryDetailBox = styled.div`
  margin: 0px 30px 40px 30px;
`

export const DailySeatHistoryLine = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const DailySeatStudentImage = styled.div`
  width: 1.61%;
  height: 33px;
  background-image: url('./profile icon.svg');
  background-size: cover;
`

export const DailySeatStudentId = styled.div`
  margin-left: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`
export const DailySeatId = styled.div`
  margin-left: 150px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`
export const DailySeatStudentReservationPeriod = styled.div`
  margin-left: 150px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`

export const DailySeatReservationStatus = styled.div`
  margin-left: 150px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`

export const DailySeatReservationHistory = styled.button`
  margin-left: 150px;
  width: 281px;
  height: 54px;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? '#ececef' : '#21d3d3')};
  border: 0;
  color: ${(props) => (props.disabled ? '#b5b5bf' : '#ffffff')};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  line-height: 31px;
  font-size: 21px;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.2));
  :active {
    filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
  }
  cursor: pointer;
`
