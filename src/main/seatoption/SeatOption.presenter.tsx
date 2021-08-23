import {
  SeatOptionBox,
  SeatMapDetail,
  MaxNumberSettingBox,
  MaxNumberExplanation,
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
  OpenHallSaveButton,
  HallCloseTimeExplanation,
  HallCloseTimeWrapper,
  HallCloseTimeHourWrapper,
  HallCloseTimeHourInput,
  HallCloseTimeHourText,
  HallCloseTimeMinuteWrapper,
  HallCloseTimeMinuteInput,
  HallCloseTimeMinuteText,
  CloseHallSaveButton,
} from './SeatOption.styles'
interface IProps {
  onChangeSeatOption: any
  buttonIsActive: any
}

const SeatOptionUI = (props: IProps) => {
  return (
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
              />
              <MaxNumberUnit>명</MaxNumberUnit>
            </MaxNumberFigure>
          </MaxNumberFigureBox>
          <MaxNumberSaveButton disabled={props.buttonIsActive.maxNumber}>
            변경사항 저장
          </MaxNumberSaveButton>
          <MaxNumberLine />
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
              />
              <HallTimeHourText>시</HallTimeHourText>
            </HallTimeHourWrapper>
            <HallTimeMinuteWrapper>
              <HallTimeMinuteInput
                id="hallOpenMinute"
                type="number"
                maxLength={2}
                defaultValue="00"
                onChange={props.onChangeSeatOption}
              />
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
              />
              <HallCloseTimeHourText>시</HallCloseTimeHourText>
            </HallCloseTimeHourWrapper>
            <HallCloseTimeMinuteWrapper>
              <HallCloseTimeMinuteInput
                id="hallCloseMinute"
                type="text"
                maxLength={2}
                onChange={props.onChangeSeatOption}
                defaultValue="00"
              />
              <HallCloseTimeMinuteText>분</HallCloseTimeMinuteText>
            </HallCloseTimeMinuteWrapper>
          </HallCloseTimeWrapper>
          <CloseHallSaveButton disabled={props.buttonIsActive.hallClose}>
            변경사항 저장
          </CloseHallSaveButton>
        </HallTimeSettingBox>
      </SeatMapDetail>
    </SeatOptionBox>
  )
}

export default SeatOptionUI
