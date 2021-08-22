import { useState } from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import {
  SeatMapBox,
  SeatMapFirstBox,
  ReserveUpdate,
  CalendarWrapper,
  SeatMapSecondBox,
  CheckBox,
  AllClickText,
  MapDetailImageBox,
  A1toA8Table,
  Btable,
  BtableCircle,
  CtableFirstSector,
  CtableSecondSector,
  CtableThirdSector,
  CtableFourthSector,
  CtableFifthSector,
  DtableFirstSector,
  DtableSecondSector,
  DtableThirdSector,
  DtableFourthSector,
  DtableFifthSector,
  DtableSixthSector,
  Etable,
  Ftable,
  Gtable,
  Htable,
  Itable,
  Chairs,
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
  SeatDisableButton,
  SeatDisableCancelButton,
  SeatWarningMessageButton,
} from './SeatMap.styles'
interface IProps {
  onClickCheckBox: any
  boxCheck: any
}
const SeatMapUI = (props: IProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  const seats = [
    { name: 'A1', top: '282.35px', left: '28.8px', transform: 0 },
    { name: 'A2', top: '343.6px', left: '28.8px', transform: 0 },
    { name: 'A3', top: '405.88px', left: '28.8px;', transform: 0 },
    { name: 'A4', top: '467.13px', left: '28.8px', transform: 0 },
    { name: 'A5', top: '282.35px', left: '152.65px', transform: 0 },
    { name: 'A6', top: '343.6px', left: '152.65px', transform: 0 },
    { name: 'A7', top: '405.88px', left: '152.65px', transform: 0 },
    { name: 'A8', top: '467.13px', left: '152.65px', transform: 0 },
    {
      name: 'B1',
      top: '160.9px',
      left: '170.9px',
      transform: 'matrix(0.87, -0.55, 0.46, 0.86, 0, 0)',
    },
    {
      name: 'B2',
      top: '138.06px',
      left: '209.3px',
      transform: 'matrix(0.87, -0.55, 0.46, 0.86, 0, 0)',
    },
    {
      name: 'C1',
      top: '430.8px',
      left: '303.39px',
      transform: 0,
    },
    {
      name: 'C2',
      top: '430.8px',
      left: '361.95px',
      transform: 0,
    },
    { name: 'C3', top: '537.72px', left: '303.39px', transform: 0 },
    { name: 'C4', top: '537.72px', left: '361.95px', transform: 0 },
    { name: 'D1', top: '29.07px', left: '331.23px', transform: 0 },
    { name: 'D2', top: '29.07px', left: '396.51px', transform: 0 },
    { name: 'D3', top: '29.07px', left: '461.8px', transform: 0 },
    { name: 'D4', top: '96.54px', left: '519.41px', transform: 0 },
    { name: 'D5', top: '261.59px', left: '519.41px', transform: 0 },
    { name: 'D6', top: '337.37px', left: '519.41px', transform: 0 },
    { name: 'D7', top: '142.21px', left: '319.71px', transform: 0 },
    { name: 'D8', top: '142.21px', left: '363.87px', transform: 0 },
    { name: 'D9', top: '253.29px', left: '262.1px', transform: 0 },
    { name: 'D10', top: '210px', left: '304px', transform: 0 },
    { name: 'D11', top: '168.17px', left: '409.96px', transform: 0 },
    { name: 'D12', top: '211.76px', left: '409.96px', transform: 0 },
    { name: 'D13', top: '339.45px', left: '341.79px', transform: 0 },
    { name: 'D14', top: '339.45px', left: '385.95px', transform: 0 },
    { name: 'E1', top: '76.82px', left: '657.66px', transform: 0 },
    { name: 'E2', top: '129.76px', left: '657.66px', transform: 0 },
    { name: 'E3', top: '181.66px', left: '657.66px', transform: 0 },
    { name: 'E4', top: '234.6px', left: '657.66px', transform: 0 },
    { name: 'E5', top: '289.62px', left: '657.66px', transform: 0 },
    { name: 'E6', top: '342.56px', left: '657.66px', tranform: 0 },
    { name: 'E7', top: '395.5px', left: '657.66px', transform: 0 },
    { name: 'E8', top: '448.44px', left: '657.66px', transform: 0 },
    { name: 'E9', top: '76.82px', left: '777.67px', transform: 0 },
    { name: 'E10', top: '129.76px', left: '777.67px', transform: 0 },
    { name: 'E11', top: '182.7px', left: '777.67px', transform: 0 },
    { name: 'E12', top: '234.6px', left: '777.67px', transform: 0 },
    { name: 'E13', top: '289.62px', left: '777.67px', transform: 0 },
    { name: 'E14', top: '342.56px', left: '777.67px', transform: 0 },
    { name: 'E15', top: '395.5px', left: '777.67px', transform: 0 },
    { name: 'E16', top: '448.44px', left: '777.67px', transform: 0 },
    { name: 'F1', top: '31.14px', left: '906.32px', transform: 0 },
    { name: 'F2', top: '31.14px', left: '963.92px', transform: 0 },
    { name: 'F3', top: '153.63px', left: '841.03px', transform: 0 },
    { name: 'F4', top: '153.63px', left: '958.16px', transform: 0 },
    { name: 'F5', top: '244.98px', left: '841.03px', transform: 0 },
    { name: 'F6', top: '244.98px', left: '958.16px', transform: 0 },
    { name: 'F7', top: '365.4px', left: '906.32px', transform: 0 },
    { name: 'F8', top: '365.4px', left: '963.92px', transform: 0 },
    { name: 'G1', top: '31.14px', left: '1085.85px', transform: 0 },
    { name: 'G2', top: '31.14px', left: '1174.18px', transform: 0 },
    { name: 'G3', top: '153.63px', left: '1073.37px', transform: 0 },
    { name: 'G4', top: '153.63px', left: '1182.82px', transform: 0 },
    { name: 'G5', top: '244.98px', left: '1073.37px', transform: 0 },
    { name: 'G6', top: '244.98px', left: '1182.82px', transform: 0 },
    { name: 'H1', top: '432.87px', left: '1059.93px', transform: 0 },
    { name: 'H2', top: '432.87px', left: '1117.54px', transform: 0 },
    { name: 'H3', top: '540.83px', left: '1059.93px', transform: 0 },
    { name: 'H4', top: '540.83px', left: '1117.54px', transform: 0 },
    { name: 'I1', top: '394.43px', left: '1255.79px', transform: 0 },
    { name: 'I2', top: '451.56px', left: '1255.79px', transform: 0 },
  ]
  return (
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
        <CheckBox type="checkbox" onChange={props.onClickCheckBox}></CheckBox>
        <AllClickText>전체 선택</AllClickText>
      </SeatMapSecondBox>
      <MapDetailImageBox>
        <A1toA8Table />
        <Btable />
        <BtableCircle />
        <CtableFirstSector />
        <CtableSecondSector />
        <CtableThirdSector />
        <CtableFourthSector />
        <CtableFifthSector />
        <DtableFirstSector />
        <DtableSecondSector />
        <DtableThirdSector />
        <DtableFourthSector />
        <DtableFifthSector />
        <DtableSixthSector />
        <Etable />
        <Ftable src="./ftable.svg" />
        <Gtable src="./gtable.svg" />
        <Htable src="./htable.svg" />
        <Itable src="./itable.svg" />
        {seats.map((data, index) => (
          <Chairs
            top={data.top}
            left={data.left}
            transform={data.transform}
            key={index}
          >
            {data.name}
          </Chairs>
        ))}
      </MapDetailImageBox>
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
        <SeatDisableButton disabled={true}>
          사용 불가 좌석으로 변경
        </SeatDisableButton>
        <SeatDisableCancelButton disabled={true}>
          사용 불가 해제
        </SeatDisableCancelButton>
        <SeatWarningMessageButton disabled={true}>
          해당 좌석 예약자에게 경고 보내기
        </SeatWarningMessageButton>
      </SeatStatusChangeBox>
    </SeatMapBox>
  )
}

export default SeatMapUI
