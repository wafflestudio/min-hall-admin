import Header from '../header/Header.container'
import {
  CalendarWrapper,
  ReserveUpdate,
  SeatMapBox,
  SeatMapWrapper,
  SeatOptionBox,
  SeatMapFirstBox,
  SeatMapSecondBox,
  CheckBox,
  AllClickText,
  MapDetailImageBox,
  MapStatusBox,
  FirstBoxWrapper,
  GrayBox,
  GrayBoxExplanation,
  SecondBoxWrapper,
  PinkBox,
  PinkBoxExplanation,
  ThirdBoxWrapper,
  SkyBlueBox,
  SkyBlueBoxExplanation,
  SeatStatusChangeBox,
  SeatStatusButton,
  SeatMapDetail,
  MaxNumberExplanation,
  MaxNumberSettingBox,
  MaxNumberFigureBox,
  MaxNumberFigure,
  MaxNumberInput,
  MaxNumberUnit,
  MaxNumberSaveButton,
  MaxNumberLine,
  HallTimeSettingBox,
  HallTimeExplanation,
  HallTimeSubExplanation,
  HallTimeWrapper,
  HallTimeHourWrapper,
  HallTimeHourInput,
  HallTimeHourText,
  HallTimeMinuteWrapper,
  HallTimeMinuteInput,
  HallTimeMinuteText,
  HallCloseTimeExplanation,
  HallCloseTimeWrapper,
  HallCloseTimeHourWrapper,
  HallCloseTimeHourInput,
  HallCloseTimeHourText,
  HallCloseTimeMinuteWrapper,
  HallCloseTimeMinuteInput,
  HallCloseTimeMinuteText,
  OpenHallSaveButton,
  CloseHallSaveButton,
  DailySeatUsageHistoryWrapper,
  DailySeatUsageHistroyBox,
  DailySeatHistroyExplanation,
  DailySeatHistoryMainLineDivider,
  DailySeatHistoryDetailBox,
  DailySeatHistoryLine,
  DailySeatStudentImage,
  DailySeatStudentId,
  DailySeatStudentReservationPeriod,
  DailySeatReservationHistory,
  DailySeatId,
} from './Main.styles'
import { useContext, useState } from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import Modal from '../utils/commons/modal/Modal.container'
import { ModalBackground } from '../utils/commons/modal/Modal.styles'
import { GlobalContext } from '../../pages/_app'

interface Iprops {
  boxCheck: any
  onClickCheckBox: any
  onChangeSeatOption: any
  buttonIsActive: any
}

const MainUI = (props: Iprops) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  const { userDetail, onClickUserDetailOpen } = useContext(GlobalContext)
  const seatStatusChange = [
    '사용 불가 좌석으로 변경',
    '사용 불가 해제',
    '해당 좌석 예약자에게 경고 보내기',
  ]
  return (
    <>
      {userDetail && (
        <>
          <Modal />
        </>
      )}
      <Header />
      <SeatMapWrapper>
        <SeatMapBox>
          <SeatMapFirstBox>
            <ReserveUpdate>좌석 예약 현황</ReserveUpdate>
            <CalendarWrapper>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid
                  container
                  justify="space-around"
                  style={{
                    height: '52px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <KeyboardDatePicker
                    style={{ height: '52px', margin: '10px' }}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </CalendarWrapper>
          </SeatMapFirstBox>
          <SeatMapSecondBox>
            <CheckBox
              type="checkbox"
              onChange={props.onClickCheckBox}
            ></CheckBox>
            <AllClickText>전체 선택</AllClickText>
          </SeatMapSecondBox>
          <MapDetailImageBox></MapDetailImageBox>
          <MapStatusBox>
            <FirstBoxWrapper>
              <GrayBox></GrayBox>
              <GrayBoxExplanation>예약된 좌석</GrayBoxExplanation>
            </FirstBoxWrapper>
            <SecondBoxWrapper>
              <PinkBox></PinkBox>
              <PinkBoxExplanation>사용 불가</PinkBoxExplanation>
            </SecondBoxWrapper>
            <ThirdBoxWrapper>
              <SkyBlueBox></SkyBlueBox>
              <SkyBlueBoxExplanation>빈 좌석</SkyBlueBoxExplanation>
            </ThirdBoxWrapper>
          </MapStatusBox>
          <SeatStatusChangeBox>
            {seatStatusChange.map((text, index) => (
              <SeatStatusButton key={index} disabled={true}>
                {text}
              </SeatStatusButton>
            ))}
          </SeatStatusChangeBox>
        </SeatMapBox>
        <SeatOptionBox>
          <SeatMapDetail>
            <MaxNumberSettingBox>
              <MaxNumberExplanation>
                최대 사용가능인원 인원 수 설정
              </MaxNumberExplanation>
              <MaxNumberFigureBox>
                <MaxNumberFigure>
                  <MaxNumberInput
                    id="maxNumber"
                    type="number"
                    defaultValue="54"
                    onChange={props.onChangeSeatOption}
                  ></MaxNumberInput>
                  <MaxNumberUnit>명</MaxNumberUnit>
                </MaxNumberFigure>
              </MaxNumberFigureBox>
              <MaxNumberSaveButton disabled={props.buttonIsActive.maxNumber}>
                변경사항 저장
              </MaxNumberSaveButton>
              <MaxNumberLine></MaxNumberLine>
            </MaxNumberSettingBox>
            <HallTimeSettingBox>
              <HallTimeExplanation>홀 이용시간 설정</HallTimeExplanation>
              <HallTimeSubExplanation>홀 오픈 시간</HallTimeSubExplanation>
              <HallTimeWrapper>
                <HallTimeHourWrapper>
                  <HallTimeHourInput
                    id="hallOpenHour"
                    type="number"
                    maxLength={2}
                    defaultValue="08"
                    onChange={props.onChangeSeatOption}
                  ></HallTimeHourInput>
                  <HallTimeHourText>시</HallTimeHourText>
                </HallTimeHourWrapper>
                <HallTimeMinuteWrapper>
                  <HallTimeMinuteInput
                    id="hallOpenMinute"
                    type="number"
                    maxLength={2}
                    defaultValue="00"
                    onChange={props.onChangeSeatOption}
                  ></HallTimeMinuteInput>
                  <HallTimeMinuteText>분</HallTimeMinuteText>
                </HallTimeMinuteWrapper>
              </HallTimeWrapper>
              <OpenHallSaveButton disabled={props.buttonIsActive.hallOpen}>
                변경사항 저장
              </OpenHallSaveButton>
              <HallCloseTimeExplanation>홀 폐쇄 시간</HallCloseTimeExplanation>
              <HallCloseTimeWrapper>
                <HallCloseTimeHourWrapper>
                  <HallCloseTimeHourInput
                    id="hallCloseHour"
                    type="number"
                    maxLength={2}
                    defaultValue="20"
                    onChange={props.onChangeSeatOption}
                  ></HallCloseTimeHourInput>
                  <HallCloseTimeHourText>시</HallCloseTimeHourText>
                </HallCloseTimeHourWrapper>
                <HallCloseTimeMinuteWrapper>
                  <HallCloseTimeMinuteInput
                    id="hallCloseMinute"
                    type="text"
                    maxLength={2}
                    onChange={props.onChangeSeatOption}
                    defaultValue="00"
                  ></HallCloseTimeMinuteInput>
                  <HallCloseTimeMinuteText>분</HallCloseTimeMinuteText>
                </HallCloseTimeMinuteWrapper>
              </HallCloseTimeWrapper>
              <CloseHallSaveButton disabled={props.buttonIsActive.hallClose}>
                변경사항 저장
              </CloseHallSaveButton>
            </HallTimeSettingBox>
          </SeatMapDetail>
        </SeatOptionBox>
      </SeatMapWrapper>
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
    </>
  )
}

export default MainUI
