import styled from '@emotion/styled'

export const SeatMapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.57%;
  justify-content: space-between;
`
export const SeatMapBox = styled.div`
  width: 74.5%;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px;
`

export const SeatMapFirstBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SeatOptionBox = styled.div`
  width: 20.7%;
  /* height: 1183px; */
  background: #ffffff;
  border-radius: 10px;
`

export const ReserveUpdate = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #525252;
`
export const DateAndCalendar = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: 700;
`

export const CalendarWrapper = styled.div`
  max-width: 282px;
  width: 100%;
  height: 52px;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`
export const SeatMapSecondBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  top: 90px;
  align-items: center;
  margin-top: 81px;
`
export const CheckBox = styled.input`
  width: 22px;
  height: 22px;
`

export const AllClickText = styled.span`
  font-size: 21px;
  line-height: 31px;
  font-family: 'Noto Sans KR', sans-serif;
  margin-left: 12px;
  font-weight: 700;
  color: #525252;
`
export const MapDetailImageBox = styled.div`
  margin-top: 19px;
  width: 100%;
  height: 601px;
  border: 2px solid #dbdbe3;
  border-radius: 10px;
`
export const MapStatusBox = styled.div`
  width: 427.56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px auto 0px auto;
  justify-content: space-between;
`
export const FirstBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const GrayBox = styled.div`
  width: 26px;
  height: 26px;
  background: #cbcbd3;
`
export const GrayBoxExplanation = styled.div`
  margin-left: 11.78px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 21px;
  line-height: 31px;
  font-weight: 700;
  color: #525252;
`
export const SecondBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PinkBox = styled.div`
  width: 26px;
  height: 26px;
  background: #e3c2bd;
`

export const PinkBoxExplanation = styled.div`
  margin-left: 11.78px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 21px;
  line-height: 31px;
  font-weight: 700;
  color: #525252;
`
export const ThirdBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SkyBlueBox = styled.div`
  width: 26px;
  height: 26px;
  background: rgba(33, 211, 211, 0.3);
`
export const SkyBlueBoxExplanation = styled.div`
  margin-left: 11.78px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 21px;
  line-height: 31px;
  font-weight: 700;
  color: #525252;
`
export const SeatStatusChangeBox = styled.div`
  margin-top: 124px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 140px;
`

export const SeatStatusButton = styled.button`
  width: 360px;
  height: 68px;
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
export const SeatMapDetail = styled.div`
  padding: 2.11% 7.52% 0px 7.52%;
  display: flex;
  flex-direction: column;
`

export const MaxNumberSettingBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const MaxNumberExplanation = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  color: #525252;
`
export const MaxNumberFigureBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 59px;
`
export const MaxNumberFigure = styled.div`
  width: 45.7%;
  height: 79px;
  border: 2px solid #dbdbe3;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const MaxNumberInput = styled.input`
  width: 80%;
  height: 59px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  line-height: 59px;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  border: 0;
  outline: none;
  color: #525252;
`
export const MaxNumberUnit = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  font-family: 'Noto Sans KR', sans-serif;
  color: #525252;
  font-weight: 500;
`

export const MaxNumberSaveButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 68px;
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

export const MaxNumberLine = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 0px;
  border: 2px solid #dbdbe3;
`

export const HallTimeSettingBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`

export const HallTimeExplanation = styled.div`
  font-size: 18px;
  line-height: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #525252;
`

export const HallTimeSubExplanation = styled.div`
  margin-top: 40px;
  font-size: 15px;
  line-height: 31px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #9c9d9e;
  font-weight: 700;
`

export const HallTimeWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HallTimeHourWrapper = styled.div`
  width: 45.7%;
  height: 79px;
  border: 2px solid #dbdbe3;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HallTimeHourInput = styled.input`
  width: 80%;
  height: 59px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  line-height: 59px;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  border: 0;
  outline: none;
  color: #525252;
`

export const HallTimeHourText = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  font-family: 'Noto Sans KR', sans-serif;
  color: #525252;
  font-weight: 500;
`

export const HallTimeMinuteWrapper = styled.div`
  width: 45.7%;
  height: 79px;
  border: 2px solid #dbdbe3;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const HallTimeMinuteInput = styled.input`
  width: 80%;
  height: 59px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  line-height: 59px;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  border: 0;
  outline: none;
  color: #525252;
`
export const HallTimeMinuteText = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  font-family: 'Noto Sans KR', sans-serif;
  color: #525252;
  font-weight: 500;
`

export const HallCloseTimeExplanation = styled.div`
  margin-top: 80px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 31px;
  color: #9c9d9e;
`
export const HallCloseTimeWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HallCloseTimeHourWrapper = styled.div`
  width: 45.7%;
  height: 79px;
  border: 2px solid #dbdbe3;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HallCloseTimeHourInput = styled.input`
  width: 80%;
  height: 59px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  line-height: 59px;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  border: 0;
  outline: none;
  color: #525252;
`
export const HallCloseTimeHourText = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  font-family: 'Noto Sans KR', sans-serif;
  color: #525252;
  font-weight: 500;
`

export const HallCloseTimeMinuteWrapper = styled.div`
  width: 45.7%;
  height: 79px;
  border: 2px solid #dbdbe3;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const HallCloseTimeMinuteInput = styled.input`
  width: 80%;
  height: 59px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  line-height: 59px;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  border: 0;
  outline: none;
  color: #525252;
`

export const HallCloseTimeMinuteText = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  font-family: 'Noto Sans KR', sans-serif;
  color: #525252;
  font-weight: 500;
`

export const OpenHallSaveButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 68px;
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

export const CloseHallSaveButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 68px;
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

export const DailySeatUsageHistoryWrapper = styled.div`
  width: 100%;
  max-height: 701px;
  overflow: auto;
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
