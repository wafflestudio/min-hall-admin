import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import Header from '../header/Header.container'
import Modal from '../utils/commons/modal/Modal.container'
import { ModalBackground } from '../utils/commons/modal/Modal.styles'
import {
  ClickTriangle,
  Filtering,
  FilteringById,
  FilteringByRecentUsage,
  FilteringModalBox,
  FilteringWrapper,
  SearchDetailLeftImage,
  SearchDetailLeftPartWrapper,
  SearchDetailLeftUserId,
  SearchDetailLineDivider,
  SearchDetailLineDividerWrapper,
  SearchDetailRightButtonsWrapper,
  SearchDetailRightUsageHistoryButton,
  SearchDetailRightUserBlockButton,
  SearchDetailRightUserBlockButtonCancel,
  SearchDetailRightWarningSign,
  SearchDetailWrapper,
  SearchLineDivider,
  SearchWrapper,
  UserManagement,
  UserManagmentWrapper,
  UserSearchInput,
  UserSearchInputImage,
  UserSearchInputWrapper,
  UserSearchText,
  UserSearchWrapper,
} from './Management.styles'
interface Iprops {
  onClickFilteringChange: any
  filtering: any
  onClickFilteringValue: any
  filterValue: any
}
const ManagementUI = (props: Iprops) => {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const { userDetail, onClickUserDetailOpen } = useContext(GlobalContext)
  return (
    <>
      {userDetail && (
        <>
          <Modal />
        </>
      )}
      <Header />
      <UserManagmentWrapper>
        <UserManagement>
          <SearchWrapper>
            <FilteringWrapper>
              <Filtering>{props.filterValue}</Filtering>
              {props.filtering && (
                <FilteringModalBox>
                  <FilteringByRecentUsage onClick={props.onClickFilteringValue}>
                    {props.filterValue === '최근 이용순'
                      ? '최근 가입순'
                      : '최근 이용순'}
                  </FilteringByRecentUsage>
                  <FilteringById onClick={props.onClickFilteringValue}>
                    {props.filterValue === '학번순' ? '최근 가입순' : '학번순'}
                  </FilteringById>
                </FilteringModalBox>
              )}
              <ClickTriangle
                onClick={props.onClickFilteringChange}
                filtering={props.filtering}
              ></ClickTriangle>
            </FilteringWrapper>
            <UserSearchWrapper>
              <UserSearchText>유저 검색</UserSearchText>
              <UserSearchInputWrapper>
                <UserSearchInput type="text" />
                <UserSearchInputImage src="./search.svg" />
              </UserSearchInputWrapper>
            </UserSearchWrapper>
          </SearchWrapper>
          <SearchLineDivider />
          {temp.map((_, index) => (
            <>
              <SearchDetailWrapper>
                <SearchDetailLeftPartWrapper>
                  <SearchDetailLeftImage src="./profile icon.svg" />
                  <SearchDetailLeftUserId>
                    유저 ID: 2018-00000
                  </SearchDetailLeftUserId>
                </SearchDetailLeftPartWrapper>
                <SearchDetailRightButtonsWrapper>
                  <SearchDetailRightWarningSign>
                    누적 경고횟수 : 0
                  </SearchDetailRightWarningSign>
                  <SearchDetailRightUsageHistoryButton
                    onClick={onClickUserDetailOpen}
                  >
                    이용 내역
                  </SearchDetailRightUsageHistoryButton>
                  <SearchDetailRightUserBlockButton>
                    유저 차단하기
                  </SearchDetailRightUserBlockButton>
                  <SearchDetailRightUserBlockButtonCancel>
                    차단 해제하기
                  </SearchDetailRightUserBlockButtonCancel>
                </SearchDetailRightButtonsWrapper>
              </SearchDetailWrapper>
              {temp.length !== index + 1 && (
                <SearchDetailLineDividerWrapper>
                  <SearchDetailLineDivider />
                </SearchDetailLineDividerWrapper>
              )}
            </>
          ))}
        </UserManagement>
      </UserManagmentWrapper>
    </>
  )
}

export default ManagementUI
