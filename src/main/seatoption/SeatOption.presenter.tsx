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
  WifiSettingBox,
  WifiSettingText,
  WifiNameBox,
  WifiNameText,
  WifiNameInput,
  WifiPasswordBox,
  WifiPasswordText,
  WifiPasswordInput,
  WifiSaveButton,
} from './SeatOption.styles'
interface IProps {
  onChangeSeatOption: any
  buttonIsActive: any
  onChangeWifiName: any
  onChangeWifiPassword: any
  wifiIsActive: any
  settingsData: any
  onClickMaximumCap: any
  onClickHallOpen: any
  onClickHallClose: any
  onClickWifi: any
}

const SeatOptionUI = (props: IProps) => {
  console.log(typeof props.settingsData?.openTime.slice(0, 2))
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
                defaultValue={props.settingsData?.maximumUserCapacity}
                onChange={props.onChangeSeatOption}
              />
              <MaxNumberUnit>명</MaxNumberUnit>
            </MaxNumberFigure>
          </MaxNumberFigureBox>
          <MaxNumberSaveButton
            disabled={props.buttonIsActive.maxNumber}
            onClick={props.onClickMaximumCap}
          >
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
                defaultValue={props.settingsData?.openTime.slice(0, 2)}
                onChange={props.onChangeSeatOption}
              />
              <HallTimeHourText>시</HallTimeHourText>
            </HallTimeHourWrapper>
            <HallTimeMinuteWrapper>
              <HallTimeMinuteInput
                id="hallOpenMinute"
                type="number"
                maxLength={2}
                defaultValue={props.settingsData?.openTime.slice(3, 5)}
                onChange={props.onChangeSeatOption}
              />
              <HallTimeMinuteText>분</HallTimeMinuteText>
            </HallTimeMinuteWrapper>
          </HallTimeWrapper>
          <OpenHallSaveButton
            disabled={props.buttonIsActive.hallOpen}
            onClick={props.onClickHallOpen}
          >
            변경사항 저장
          </OpenHallSaveButton>
          <HallCloseTimeExplanation>홀 폐쇄 시간</HallCloseTimeExplanation>
          <HallCloseTimeWrapper>
            <HallCloseTimeHourWrapper>
              <HallCloseTimeHourInput
                id="hallCloseHour"
                type="number"
                maxLength={2}
                defaultValue={props.settingsData?.closeTime.slice(0, 2)}
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
                defaultValue={props.settingsData?.closeTime.slice(3, 5)}
              ></HallCloseTimeMinuteInput>
              <HallCloseTimeMinuteText>분</HallCloseTimeMinuteText>
            </HallCloseTimeMinuteWrapper>
          </HallCloseTimeWrapper>
          <CloseHallSaveButton
            disabled={props.buttonIsActive.hallClose}
            onClick={props.onClickHallClose}
          >
            변경사항 저장
          </CloseHallSaveButton>
        </HallTimeSettingBox>
        <MaxNumberLine />
        <WifiSettingBox>
          <WifiSettingText>WIFI 설정</WifiSettingText>
          <WifiNameBox>
            <WifiNameText>와이파이 이름:</WifiNameText>
            <WifiNameInput
              type="text"
              onChange={props.onChangeWifiName}
              defaultValue={props.settingsData?.wiFiName}
            ></WifiNameInput>
          </WifiNameBox>
          <WifiPasswordBox>
            <WifiPasswordText>와이파이 비밀번호:</WifiPasswordText>
            <WifiPasswordInput
              type="text"
              onChange={props.onChangeWifiPassword}
              defaultValue={props.settingsData?.wiFiPassword}
            ></WifiPasswordInput>
          </WifiPasswordBox>
          <WifiSaveButton
            disabled={props.wifiIsActive}
            onClick={props.onClickWifi}
          >
            변경사항 저장
          </WifiSaveButton>
        </WifiSettingBox>
      </SeatMapDetail>
    </SeatOptionBox>
  )
}

export default SeatOptionUI
