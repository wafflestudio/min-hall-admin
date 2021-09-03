import styled from '@emotion/styled'

interface IProps {
  top?: any
  left?: any
  transform?: any
  seatClicked?: any
  seatColor?: any
}

export const SeatMapBox = styled.div`
  width: 1431px;
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

export const ReserveUpdate = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #525252;
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
export const HalfCheckBox = styled.input`
  margin-left: 20px;
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
export const HalfClickText = styled.span`
  font-size: 21px;
  line-height: 31px;
  font-family: 'Noto Sans KR', sans-serif;
  margin-left: 12px;
  font-weight: 700;
  color: #525252;
`
export const MapDetailImageBox = styled.div`
  position: relative;
  margin-top: 19px;
  width: 1371px;
  height: 601px;
  border: 2px solid #dbdbe3;
  border-radius: 10px;
`
export const A1toA8Table = styled.div`
  position: absolute;
  width: 62.49px;
  height: 275.53px;
  top: 253.48px;
  left: 75.52px;
  background: #e6e6e9;
  border-radius: 5px;
`
export const Btable = styled.div`
  position: absolute;
  top: 80.4px;
  left: 100.82px;
  background: #e6e6e9;
  width: 151.42px;
  height: 60px;
  transform: rotate(-30deg);
  border-radius: 5px;
`

export const BtableCircle = styled.div`
  position: absolute;
  width: 165px;
  height: 75px;
  top: 115px;
  left: 120px;
  border-radius: 75px / 32.5px;
  background: white;
  transform: rotate(-30deg);
`

export const DtableFirstSector = styled.div`
  position: absolute;
  width: 186.03px;
  height: 54.58px;
  top: 75.12px;
  left: 319.15px;
  background: #e6e6e9;
  border-radius: 5px;
`
export const DtableSecondSector = styled.div`
  position: absolute;
  width: 53.69px;
  height: 294.41px;
  top: 76.01px;
  left: 451.93px;
  background: #e6e6e9;
  border-radius: 5px;
  /* transform: rotate(90deg); */
`
export const DtableThirdSector = styled.div`
  position: absolute;
  width: 83.94px;
  height: 54.58px;
  top: 147.72px;
  left: 492.31px;
  background: #e6e6e9;
  border-radius: 5px;
`
export const DtableFourthSector = styled.div`
  position: absolute;
  width: 83.94px;
  height: 54.58px;
  top: 191.68px;
  left: 492.31px;
  background: #e6e6e9;
  border-radius: 5px;
`
export const DtableFifthSector = styled.div`
  position: absolute;
  width: 53.69px;
  height: 170px;
  background: #e6e6e9;
  border-radius: 5px;
  top: 209.35px;
  left: 385.54px;
  transform: rotate(-45deg);
`
export const DtableSixthSector = styled.div`
  position: absolute;
  width: 53.69px;
  height: 170px;
  background: #e6e6e9;
  border-radius: 5px;
  top: 209.35px;
  left: 300.54px;
  transform: rotate(45deg);
`
export const CtableFirstSector = styled.div`
  position: absolute;
  width: 158.79px;
  height: 69.15px;
  background: #e6e6e9;
  border-radius: 5px;
  top: 466.14px;
  left: 262.34px;
`
export const CtableSecondSector = styled.div`
  position: absolute;
  width: 100px;
  height: 10px;
  background: white;
  top: 466.14px;
  left: 321px;
`

export const CtableThirdSector = styled.div`
  position: absolute;
  width: 58px;
  height: 0px;
  border-top: 10px solid white;
  border-left: 58px solid transparent;
  top: 466px;
  left: 263.34px;
`
export const CtableFourthSector = styled.div`
  position: absolute;
  width: 100px;
  height: 10px;
  background: white;
  top: 525.29px;
  left: 321px;
`
export const CtableFifthSector = styled.div`
  position: absolute;
  width: 58px;
  height: 0px;
  border-top: 10px solid white;
  border-right: 58px solid transparent;
  top: 525.29px;
  left: 263.34px;
  transform: rotate(180deg);
`

export const Etable = styled.div`
  position: absolute;
  width: 62.49px;
  height: 402.75px;
  top: 76.01px;
  left: 703.04px;
  background: #e6e6e9;
  border-radius: 5px;
`
export const Ftable = styled.img`
  position: absolute;
  width: 130.84px;
  height: 273.2px;
  top: 76.01px;
  left: 879.53px;
`
export const Gtable = styled.img`
  position: absolute;
  width: 191.53px;
  height: 271.74px;
  top: 76.01px;
  left: 1049.68px;
`
export const Htable = styled.img`
  position: absolute;
  width: 158.79px;
  height: 69.15px;
  top: 466.14px;
  left: 1013.15px;
`

export const Itable = styled.img`
  position: absolute;
  width: 58.82px;
  height: 182.61px;
  top: 344.69px;
  left: 1283.37px;
`
export const Chairs = styled.div`
  position: absolute;
  width: 32.13px;
  height: 32.66px;
  top: ${(props: IProps) => props.top};
  left: ${(props: IProps) => props.left};
  background: ${(props: IProps) =>
    props.seatColor ? 'rgba(33,211,211,0.3)' : '#e3c2bd'};
  border-radius: 5px;
  border: ${(props: IProps) => (props.seatClicked ? '1px solid black' : '0')};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #525252;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${(props: IProps) => props.transform};
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

export const SeatDisableButton = styled.button`
  width: 437px;
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
export const SeatDisableCancelButton = styled.button`
  width: 437px;
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
export const SeatWarningMessageButton = styled.button`
  width: 437px;
  height: 68px;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? '#ececef' : '#fe6161')};
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
