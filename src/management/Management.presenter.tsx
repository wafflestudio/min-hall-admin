import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import Header from '../header/Header.container'
import Modal from '../utils/commons/modal/Modal.container'
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
interface IProps {
  onClickFilteringChange: any
  filtering: any
  onClickFilteringValue: any
  filterValue: any
  sortedData: any
  recent_use: any
  onClickStudentBlock: any
  onClickStudentUnBlock: any
}
const ManagementUI = (props: IProps) => {
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
                    {props.filterValue === '학번순' ? '최근 가입순' : '학번순'}
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
          {!props.sortedData &&
            props.recent_use?.studentDTOList.map((data: any, index: any) => (
              <>
                <SearchDetailWrapper>
                  <SearchDetailLeftPartWrapper>
                    <SearchDetailLeftImage src="./profile icon.svg" />
                    <SearchDetailLeftUserId>
                      유저 ID: {data.userId}
                    </SearchDetailLeftUserId>
                  </SearchDetailLeftPartWrapper>
                  <SearchDetailRightButtonsWrapper>
                    <SearchDetailRightWarningSign>
                      누적 경고횟수 : {data.warnings}
                    </SearchDetailRightWarningSign>
                    <SearchDetailRightUsageHistoryButton
                      id={data.userId}
                      onClick={onClickUserDetailOpen}
                    >
                      이용 내역
                    </SearchDetailRightUsageHistoryButton>
                    <SearchDetailRightUserBlockButton
                      id={data.userId}
                      disabled={!data.enabled}
                      onClick={props.onClickStudentBlock}
                    >
                      유저 차단하기
                    </SearchDetailRightUserBlockButton>
                    <SearchDetailRightUserBlockButtonCancel
                      id={data.userId}
                      disabled={data.enabled}
                      onClick={props.onClickStudentUnBlock}
                    >
                      차단 해제하기
                    </SearchDetailRightUserBlockButtonCancel>
                  </SearchDetailRightButtonsWrapper>
                </SearchDetailWrapper>
                {props.recent_use?.studentDTOList.length !== index + 1 && (
                  <SearchDetailLineDividerWrapper>
                    <SearchDetailLineDivider />
                  </SearchDetailLineDividerWrapper>
                )}
              </>
            ))}
          {props.sortedData?.studentDTOList.map((data: any, index: any) => (
            <>
              <SearchDetailWrapper>
                <SearchDetailLeftPartWrapper>
                  <SearchDetailLeftImage src="./profile icon.svg" />
                  <SearchDetailLeftUserId>
                    유저 ID: {data.userId}
                  </SearchDetailLeftUserId>
                </SearchDetailLeftPartWrapper>
                <SearchDetailRightButtonsWrapper>
                  <SearchDetailRightWarningSign>
                    누적 경고횟수 : {data.warnings}
                  </SearchDetailRightWarningSign>
                  <SearchDetailRightUsageHistoryButton
                    id={data.userId}
                    onClick={onClickUserDetailOpen}
                  >
                    이용 내역
                  </SearchDetailRightUsageHistoryButton>
                  <SearchDetailRightUserBlockButton
                    id={data.userId}
                    disabled={!data.enabled}
                    onClick={props.onClickStudentBlock}
                  >
                    유저 차단하기
                  </SearchDetailRightUserBlockButton>
                  <SearchDetailRightUserBlockButtonCancel
                    id={data.userId}
                    disabled={data.enabled}
                    onClick={props.onClickStudentUnBlock}
                  >
                    차단 해제하기
                  </SearchDetailRightUserBlockButtonCancel>
                </SearchDetailRightButtonsWrapper>
              </SearchDetailWrapper>
              {props.sortedData?.studentDTOList.length !== index + 1 && (
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
