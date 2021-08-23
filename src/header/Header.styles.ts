import styled from '@emotion/styled'

export const MainHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  height: 122px;
  align-items: center;
`

export const SnuLogoBox = styled.div`
  width: 72px;
  height: 72px;
  background-image: url('./SNU_logo.svg');
  margin-left: 30px;
  cursor: pointer;
`

export const MenuListBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`
export const SeatBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  text-align: center;
  color: ${(props) => (props.color ? '#21d3d3' : '#9c9d9e')};
  align-items: center;
  cursor: pointer;
`

export const SeatImg = styled.img`
  width: 40px;
  height: 40px;
`
export const SeatText = styled.span``

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  text-align: center;
  color: ${(props) => (props.color ? '#21d3d3' : '#9c9d9e')};
  align-items: center;
  cursor: pointer;
  margin-left: 70px;
`

export const ChatImg = styled.img`
  width: 40px;
  height: 40px;
`
export const ChatText = styled.span``

export const ListBulletsBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  text-align: center;
  color: ${(props) => (props.color ? '#21d3d3' : '#9c9d9e')};
  align-items: center;
  cursor: pointer;
  margin-left: 70px;
`

export const ListBulletsImg = styled.img`
  width: 40px;
  height: 40px;
`

export const ListBulletsText = styled.span``
