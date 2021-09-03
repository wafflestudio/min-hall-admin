import { useContext, useEffect, useState } from 'react'
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
  HalfCheckBox,
  HalfClickText,
} from './SeatMap.styles'
import {
  useReservation_statusQuery,
  useSeat_disableMutation,
  useSeat_enableMutation,
} from './SeatMap.queries'
import { GlobalContext } from '../../../pages/_app'

interface IProps {
  onClickCheckBox: any
  boxCheck: any
  onClickSeatBox: any
  seatClicked: any
  refs: any
}
const SeatMapUI = (props: IProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const year = String(selectedDate?.getFullYear())
  const month = String(Number(selectedDate?.getMonth()) + 1).padStart(2, '0')
  const date = String(selectedDate?.getDate()).padStart(2, '0')
  const year_month_date = `${year}/${month}/${date}`
  const { setDateDetail } = useContext(GlobalContext)
  const { data: reservationData } = useReservation_statusQuery(year_month_date)

  const [disableSeat] = useSeat_disableMutation()
  const [enableSeat] = useSeat_enableMutation()

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const seats_modification = [
    {
      ...reservationData?.seatList[0],
      top: '282.35px',
      left: '28.8px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[1],
      top: '343.6px',
      left: '28.8px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[2],
      top: '405.88px',
      left: '28.8px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[3],
      top: '467.13px',
      left: '28.8px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[4],
      top: '282.35px',
      left: '152.65px',
      tranform: 0,
    },
    {
      ...reservationData?.seatList[5],
      top: '343.6px',
      left: '152.65px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[6],
      top: '405.88px',
      left: '152.65px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[7],
      top: '467.13px',
      left: '152.65px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[8],
      top: '160.9px',
      left: '170.9px',
      transform: 'matrix(0.87, -0.55, 0.46, 0.86, 0, 0)',
    },
    {
      ...reservationData?.seatList[9],
      top: '138.06px',
      left: '209.3px',
      transform: 'matrix(0.87, -0.55, 0.46, 0.86, 0, 0)',
    },
    {
      ...reservationData?.seatList[10],
      top: '430.8px',
      left: '303.39px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[11],
      top: '430.8px',
      left: '361.95px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[12],
      top: '537.72px',
      left: '303.39px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[13],
      top: '537.72px',
      left: '361.95px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[14],
      top: '29.07px',
      left: '331.23px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[15],
      top: '210px',
      left: '304px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[16],
      top: '168.17px',
      left: '409.96px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[17],
      top: '211.76px',
      left: '409.96px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[18],
      top: '339.45px',
      left: '341.79px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[19],
      top: '339.45px',
      left: '385.95px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[20],
      top: '29.07px',
      left: '396.51px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[21],
      top: '29.07px',
      left: '461.8px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[22],
      top: '96.54px',
      left: '519.41px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[23],
      top: '261.59px',
      left: '519.41px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[24],
      top: '337.37px',
      left: '519.41px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[25],
      top: '142.21px',
      left: '319.71px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[26],
      top: '142.21px',
      left: '363.87px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[27],
      top: '253.29px',
      left: '262.1px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[28],
      top: '76.82px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[29],
      top: '129.76px',
      left: '777.67px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[30],
      top: '182.7px',
      left: '777.67px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[31],
      top: '234.6px',
      left: '777.67px',
      tranform: 0,
    },
    {
      ...reservationData?.seatList[32],
      top: '289.62px',
      left: '777.67px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[33],
      top: '342.56px',
      left: '777.67px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[34],
      top: '395.5px',
      left: '777.67px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[35],
      isAvailable: true,
      top: '448.44px',
      left: '777.67px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[36],
      top: '129.76px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[37],
      top: '181.66px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[38],
      top: '234.6px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[39],
      top: '289.62px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[40],
      top: '342.56px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[41],
      top: '395.5px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[42],
      top: '448.44px',
      left: '657.66px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[43],
      top: '76.82px',
      left: '777.67px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[44],
      top: '31.14px',
      left: '906.32px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[45],
      top: '31.14px',
      left: '963.92px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[46],
      top: '153.63px',
      left: '841.93px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[47],
      top: '153.63px',
      left: '958.16px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[48],
      top: '244.98px',
      left: '841.03px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[49],
      top: '244.98px',
      left: '958.16px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[50],
      top: '365.4px',
      left: '906.32px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[51],
      top: '365.4px',
      left: '963.92px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[52],
      top: '31.14px',
      left: '1085.85px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[53],
      top: '31.14px',
      left: '1174.18px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[54],
      top: '153.63px',
      left: '1073.37px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[55],
      top: '153.63px',
      left: '1182.82px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[56],
      top: '244.98px',
      left: '1073.37px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[57],
      top: '244.98px',
      left: '1182.82px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[58],
      top: '432.87px',
      left: '1059.93px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[59],
      top: '432.87px',
      left: '1117.54px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[60],
      top: '540.83px',
      left: '1059.93px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[61],
      top: '540.83px',
      left: '1117.54px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[62],
      top: '394.43px',
      left: '1255.79px',
      transform: 0,
    },
    {
      ...reservationData?.seatList[63],
      top: '451.56px',
      left: '1255.79px',
      transform: 0,
    },
  ]
  const seat_clicked = Object.keys(props.seatClicked).filter(
    (key) => props.seatClicked[key] === true
  )
  console.log('seat_clicked', seat_clicked)
  const one = []
  const one_name: any = []
  const two = []
  for (let seat of seats_modification) {
    for (let key of seat_clicked) {
      if (seat.seatId === key) {
        one.push(seat.isAvailable)
        one_name.push(seat.seatId)
        two.push(seat.isReserved)
      }
    }
  }
  console.log('one_name', one_name)
  const seat_disable = one.filter((data) => data === false)
  const seat_enable = one.filter((data) => data === true)
  const seat_warningMessage = two.filter((data) => data === false)
  const onClickSeatDisable = async () => {
    const temp_name = { seats: one_name }
    if (seat_disable.length > 0) {
      window.alert('사용불가 좌석이 포함되어있습니다.')
    } else {
      try {
        await disableSeat(temp_name)
        alert('사용불가 좌석으로 변경하였습니다')
        location.reload()
      } catch (error) {
        window.alert(error.message)
      }
    }
  }
  const onClickSeatEnable = async () => {
    const temp_name = { seats: one_name }
    if (seat_enable.length > 0) {
      window.alert('사용가능 좌석이 포함되어있습니다.다시 체크하여주십시오.')
    } else {
      try {
        await enableSeat(temp_name)
        alert('사용불가 좌석을 해제하였습니다.')
        location.reload()
      } catch (error) {
        window.alert(error.message)
      }
    }
  }
  useEffect(() => {
    const temp: any = []
    reservationData?.seatList.forEach((data: any, index: number) => {
      if (data.isReserved === true) {
        temp.push(index)
      }
    })
    function colorChange() {
      if (temp.length > 0) {
        const temp2 = temp.map((data: any) => props.refs.current[data])
        temp2.map(
          (data: any) => (data.current.style.backgroundColor = '#cbcbd3')
        )
      } else return
    }
    colorChange()
  }, [reservationData])

  useEffect(() => {
    setDateDetail(year_month_date)
  }, [selectedDate])

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
        <CheckBox
          type="checkbox"
          id="wholeCheck"
          onChange={props.onClickCheckBox}
          checked={props.boxCheck.wholeCheck}
        ></CheckBox>
        <AllClickText>전체 선택</AllClickText>
        <HalfCheckBox
          type="checkbox"
          id="halfCheck"
          onChange={props.onClickCheckBox}
          checked={props.boxCheck.halfCheck}
        />
        <HalfClickText>부분 선택</HalfClickText>
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
        {seats_modification.map((data, index) => (
          <Chairs
            top={data.top}
            left={data.left}
            transform={data.transform}
            key={index}
            id={data.seatId}
            onClick={props.onClickSeatBox}
            seatClicked={props.seatClicked[data.seatId]}
            seatColor={data.isAvailable}
            ref={props.refs.current[index]}
          >
            {data.seatId}
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
        <SeatDisableButton
          disabled={seat_clicked.length <= 0 || seat_disable.length > 0}
          onClick={onClickSeatDisable}
        >
          사용 불가 좌석으로 변경
        </SeatDisableButton>
        <SeatDisableCancelButton
          disabled={
            Object.keys(props.seatClicked).length <= 0 ||
            seat_disable.length === 0
          }
          onClick={onClickSeatEnable}
        >
          사용 불가 해제
        </SeatDisableCancelButton>
        <SeatWarningMessageButton
          disabled={
            Object.keys(props.seatClicked).length <= 0 ||
            seat_warningMessage.length > 0 ||
            seat_clicked.length === 0
          }
        >
          해당 좌석 예약자에게 경고 보내기
        </SeatWarningMessageButton>
      </SeatStatusChangeBox>
    </SeatMapBox>
  )
}

export default SeatMapUI
