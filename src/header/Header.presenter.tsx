import {
  MainHeader,
  SnuLogoBox,
  MenuListBox,
  SeatBox,
  SeatImg,
  SeatText,
  ChatBox,
  ChatImg,
  ChatText,
  ListBulletsBox,
  ListBulletsImg,
  ListBulletsText,
} from './Header.styles'

interface Iprops {
  MainPageRoute: any
  menuClick: any
  onClickMenuList: any
}

const HeaderUI = (props: Iprops) => {
  return (
    <MainHeader>
      <SnuLogoBox onClick={props.MainPageRoute}></SnuLogoBox>
      <MenuListBox>
        <SeatBox color={props.menuClick.seat}>
          <SeatImg
            id="seat"
            onClick={props.onClickMenuList}
            src={
              props.menuClick.seat ? './seat(color).svg' : './seat(noColor).svg'
            }
          />
          <SeatText id="seat" onClick={props.onClickMenuList}>
            좌석관리
          </SeatText>
        </SeatBox>
        <ChatBox color={props.menuClick.chat}>
          <ChatImg
            id="chat"
            onClick={props.onClickMenuList}
            src={
              props.menuClick.chat ? './chat(color).svg' : './chat(noColor).svg'
            }
          />
          <ChatText id="chat" onClick={props.onClickMenuList}>
            메세지
          </ChatText>
        </ChatBox>
        <ListBulletsBox color={props.menuClick.listbullets}>
          <ListBulletsImg
            id="listbullets"
            onClick={props.onClickMenuList}
            src={
              props.menuClick.listbullets
                ? './ListBullets(color).svg'
                : './ListBullets(noColor).svg'
            }
          ></ListBulletsImg>
          <ListBulletsText id="listbullets" onClick={props.onClickMenuList}>
            유저 관리
          </ListBulletsText>
        </ListBulletsBox>
      </MenuListBox>
    </MainHeader>
  )
}

export default HeaderUI
