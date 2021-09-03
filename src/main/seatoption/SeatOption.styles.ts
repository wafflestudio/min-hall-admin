import styled from '@emotion/styled'
export const SeatOptionBox = styled.div`
  width: 20.7%;
  /* height: 1183px; */
  background: #ffffff;
  border-radius: 10px;
`

export const DateAndCalendar = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: 700;
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
  margin-top: 30px;
`
export const MaxNumberFigure = styled.div`
  width: 155px;
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
  margin-top: 30px;
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
  margin-top: 30px;
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
  margin-top: 15px;
  font-size: 15px;
  line-height: 31px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #9c9d9e;
  font-weight: 700;
`

export const HallTimeWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HallTimeHourWrapper = styled.div`
  width: 155px;
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
  width: 155px;
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
  margin-top: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 31px;
  color: #9c9d9e;
`
export const HallCloseTimeWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HallCloseTimeHourWrapper = styled.div`
  width: 155px;
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
  width: 155px;
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
  margin-top: 30px;
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
  margin-top: 30px;
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

export const WifiSettingBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const WifiSettingText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #525252;
`
export const WifiNameBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 31px;
`
export const WifiNameText = styled.span`
  color: #9c9d9e;
`
export const WifiNameInput = styled.input`
  padding-left: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 31px;
  width: 206px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid #dbdbe3;
  outline: none;
`
export const WifiPasswordBox = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 31px;
`
export const WifiPasswordText = styled.span`
  color: #9c9d9e;
`
export const WifiPasswordInput = styled.input`
  padding-left: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 31px;
  width: 180px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid #dbdbe3;
  outline: none;
`

export const WifiSaveButton = styled.button`
  margin-top: 40px;
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
