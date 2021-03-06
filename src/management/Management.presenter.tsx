import { useContext, useEffect } from 'react'
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
  onChangeIdSearch: any
  idSearch: any
}
const ManagementUI = (props: IProps) => {
  const DTO_FILTERDATA = props.recent_use?.studentDTOList.filter(
    (data: any) => data.userId === Number(props.idSearch)
  )
  const DTO_FILTERDATA2 = props.sortedData?.studentDTOList.filter(
    (data: any) => data.userId === Number(props.idSearch)
  )
  useEffect(() => {
    console.log(
      'DTO_Filterdata',
      props.sortedData?.studentDTOList.filter(
        (data: any) => data.userId === Number(props.idSearch)
      )
    )
    console.log(
      'DTO_Filterdata2',
      props.recent_use?.studentDTOList.filter(
        (data: any) => data.userId === Number(props.idSearch)
      )
    )
  }, [props.idSearch])
  const { userDetail, onClickUserDetailOpen } = useContext(GlobalContext)
  return (
    <div
      className="main-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
      }}
    >
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
                    {props.filterValue === '?????? ?????????'
                      ? '?????? ?????????'
                      : '?????? ?????????'}
                  </FilteringByRecentUsage>
                  <FilteringById onClick={props.onClickFilteringValue}>
                    {props.filterValue === '?????????' ? '?????? ?????????' : '?????????'}
                  </FilteringById>
                </FilteringModalBox>
              )}
              <ClickTriangle
                onClick={props.onClickFilteringChange}
                filtering={props.filtering}
              ></ClickTriangle>
            </FilteringWrapper>
            <UserSearchWrapper>
              <UserSearchText>?????? ??????</UserSearchText>
              <UserSearchInputWrapper>
                <UserSearchInput
                  type="text"
                  onChange={props.onChangeIdSearch}
                />
                <UserSearchInputImage src="./search.svg" />
              </UserSearchInputWrapper>
            </UserSearchWrapper>
          </SearchWrapper>
          <SearchLineDivider />
          {props.idSearch === ''
            ? !props.sortedData &&
              props.recent_use?.studentDTOList.map((data: any, index: any) => (
                <>
                  <SearchDetailWrapper>
                    <SearchDetailLeftPartWrapper>
                      <SearchDetailLeftImage src="./profile icon.svg" />
                      <SearchDetailLeftUserId>
                        ?????? ID: {data.userId}
                      </SearchDetailLeftUserId>
                    </SearchDetailLeftPartWrapper>
                    <SearchDetailRightButtonsWrapper>
                      <SearchDetailRightWarningSign>
                        ?????? ???????????? : {data.warnings}
                      </SearchDetailRightWarningSign>
                      <SearchDetailRightUsageHistoryButton
                        id={data.userId}
                        onClick={onClickUserDetailOpen}
                      >
                        ?????? ??????
                      </SearchDetailRightUsageHistoryButton>
                      <SearchDetailRightUserBlockButton
                        id={data.userId}
                        disabled={!data.enabled}
                        onClick={props.onClickStudentBlock}
                      >
                        ?????? ????????????
                      </SearchDetailRightUserBlockButton>
                      <SearchDetailRightUserBlockButtonCancel
                        id={data.userId}
                        disabled={data.enabled}
                        onClick={props.onClickStudentUnBlock}
                      >
                        ?????? ????????????
                      </SearchDetailRightUserBlockButtonCancel>
                    </SearchDetailRightButtonsWrapper>
                  </SearchDetailWrapper>
                  {props.recent_use?.studentDTOList.length !== index + 1 && (
                    <SearchDetailLineDividerWrapper>
                      <SearchDetailLineDivider />
                    </SearchDetailLineDividerWrapper>
                  )}
                </>
              ))
            : !props.sortedData &&
              DTO_FILTERDATA?.map((data: any, index: any) => (
                <>
                  <SearchDetailWrapper>
                    <SearchDetailLeftPartWrapper>
                      <SearchDetailLeftImage src="./profile icon.svg" />
                      <SearchDetailLeftUserId>
                        ?????? ID: {data.userId}
                      </SearchDetailLeftUserId>
                    </SearchDetailLeftPartWrapper>
                    <SearchDetailRightButtonsWrapper>
                      <SearchDetailRightWarningSign>
                        ?????? ???????????? : {data.warnings}
                      </SearchDetailRightWarningSign>
                      <SearchDetailRightUsageHistoryButton
                        id={data.userId}
                        onClick={onClickUserDetailOpen}
                      >
                        ?????? ??????
                      </SearchDetailRightUsageHistoryButton>
                      <SearchDetailRightUserBlockButton
                        id={data.userId}
                        disabled={!data.enabled}
                        onClick={props.onClickStudentBlock}
                      >
                        ?????? ????????????
                      </SearchDetailRightUserBlockButton>
                      <SearchDetailRightUserBlockButtonCancel
                        id={data.userId}
                        disabled={data.enabled}
                        onClick={props.onClickStudentUnBlock}
                      >
                        ?????? ????????????
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
          {props.idSearch === ''
            ? props.sortedData?.studentDTOList.map((data: any, index: any) => (
                <>
                  <SearchDetailWrapper>
                    <SearchDetailLeftPartWrapper>
                      <SearchDetailLeftImage src="./profile icon.svg" />
                      <SearchDetailLeftUserId>
                        ?????? ID: {data.userId}
                      </SearchDetailLeftUserId>
                    </SearchDetailLeftPartWrapper>
                    <SearchDetailRightButtonsWrapper>
                      <SearchDetailRightWarningSign>
                        ?????? ???????????? : {data.warnings}
                      </SearchDetailRightWarningSign>
                      <SearchDetailRightUsageHistoryButton
                        id={data.userId}
                        onClick={onClickUserDetailOpen}
                      >
                        ?????? ??????
                      </SearchDetailRightUsageHistoryButton>
                      <SearchDetailRightUserBlockButton
                        id={data.userId}
                        disabled={!data.enabled}
                        onClick={props.onClickStudentBlock}
                      >
                        ?????? ????????????
                      </SearchDetailRightUserBlockButton>
                      <SearchDetailRightUserBlockButtonCancel
                        id={data.userId}
                        disabled={data.enabled}
                        onClick={props.onClickStudentUnBlock}
                      >
                        ?????? ????????????
                      </SearchDetailRightUserBlockButtonCancel>
                    </SearchDetailRightButtonsWrapper>
                  </SearchDetailWrapper>
                  {props.sortedData?.studentDTOList.length !== index + 1 && (
                    <SearchDetailLineDividerWrapper>
                      <SearchDetailLineDivider />
                    </SearchDetailLineDividerWrapper>
                  )}
                </>
              ))
            : DTO_FILTERDATA2?.map((data: any, index: any) => (
                <>
                  <SearchDetailWrapper>
                    <SearchDetailLeftPartWrapper>
                      <SearchDetailLeftImage src="./profile icon.svg" />
                      <SearchDetailLeftUserId>
                        ?????? ID: {data.userId}
                      </SearchDetailLeftUserId>
                    </SearchDetailLeftPartWrapper>
                    <SearchDetailRightButtonsWrapper>
                      <SearchDetailRightWarningSign>
                        ?????? ???????????? : {data.warnings}
                      </SearchDetailRightWarningSign>
                      <SearchDetailRightUsageHistoryButton
                        id={data.userId}
                        onClick={onClickUserDetailOpen}
                      >
                        ?????? ??????
                      </SearchDetailRightUsageHistoryButton>
                      <SearchDetailRightUserBlockButton
                        id={data.userId}
                        disabled={!data.enabled}
                        onClick={props.onClickStudentBlock}
                      >
                        ?????? ????????????
                      </SearchDetailRightUserBlockButton>
                      <SearchDetailRightUserBlockButtonCancel
                        id={data.userId}
                        disabled={data.enabled}
                        onClick={props.onClickStudentUnBlock}
                      >
                        ?????? ????????????
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
    </div>
  )
}

export default ManagementUI
