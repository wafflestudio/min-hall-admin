import styled from '@emotion/styled'
interface IProps {
  filtering: any
}

export const UserManagmentWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;
`

export const UserManagement = styled.div`
  background: #ffffff;
  width: 100%;
  height: 1183px;
  border-radius: 10px;
  overflow-y: auto;
`
export const SearchWrapper = styled.div`
  margin: 25px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FilteringWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Filtering = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`
export const ClickTriangle = styled.div`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: ${(props: IProps) => props.filtering && '15px solid #555'};
  border-bottom: ${(props: IProps) => !props.filtering && '15px solid #555'};
  cursor: pointer;
`

export const UserSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

export const UserSearchText = styled.span`
  margin-right: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`

export const UserSearchInputWrapper = styled.div`
  width: 281px;
  height: 40px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid #525252;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const UserSearchInput = styled.input`
  width: 253px;
  height: 35px;
  font-size: 21px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  line-height: 31px;
  color: #525252;
  border: none;
  outline: none;
  z-index: 0;
`

export const UserSearchInputImage = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`
export const SearchLineDivider = styled.div`
  width: 100%;
  height: 0px;
  border: 2px solid #dbdbe3;
`

export const SearchDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 31px 30px;
`
export const SearchDetailLeftPartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SearchDetailLeftImage = styled.img`
  width: 29px;
  height: 33px;
`
export const SearchDetailLeftUserId = styled.span`
  margin-left: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #525252;
`
export const SearchDetailRightButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchDetailRightWarningSign = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #525252;
`
export const SearchDetailRightUsageHistoryButton = styled.button`
  margin-left: 30px;
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
export const SearchDetailRightUserBlockButton = styled.button`
  margin-left: 30px;
  width: 281px;
  height: 54px;
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

export const SearchDetailRightUserBlockButtonCancel = styled.button`
  margin-left: 30px;
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
export const SearchDetailLineDividerWrapper = styled.div`
  padding: 0px 30px;
`
export const SearchDetailLineDivider = styled.div`
  width: 100%;
  height: 0;
  border: 2px solid #dbdbe3;
`

export const FilteringModalBox = styled.div`
  position: fixed;
  left: 30px;
  top: 228px;
  background: #ffffff;
  width: 176px;
  height: 140px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  padding: 20px 30px 25px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FilteringByRecentUsage = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 36px;
  color: #525252;
  cursor: pointer;
`

export const FilteringById = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 36px;
  color: #525252;
  cursor: pointer;
`
