import { useState } from 'react'
import { useData_sortedQuery } from '../message_popup/Message.queries'
import withAuth from '../utils/commons/hocs/withAuth'
import ManagementUI from './Management.presenter'
import {
  useStudent_blockMutation,
  useStudent_unblockMutation,
} from './Management.queries'

const Management = () => {
  const [filtering, setFiltering] = useState(false)
  const [filterValue, setFilterValue] = useState('최근 이용순')
  const { data: recent_use } = useData_sortedQuery('recent_use')
  const { data: recent_signin } = useData_sortedQuery('recent_signin')
  const [student_block] = useStudent_blockMutation()
  const [student_unblock] = useStudent_unblockMutation()
  const { data: idData } = useData_sortedQuery('id')
  const [sortedData, setSortedData] = useState(recent_use)
  const onClickFilteringChange = () => {
    if (filtering === true) {
      setFiltering(false)
    } else if (filtering === false) {
      setFiltering(true)
    }
  }
  const onClickFilteringValue = (event: any) => {
    if (event.target.innerText === '최근 이용순') {
      setSortedData(recent_use)
      setFilterValue(event.target.innerText)
      setFiltering(false)
    } else if (event.target.innerText === '최근 가입순') {
      setSortedData(recent_signin)
      setFilterValue(event.target.innerText)
      setFiltering(false)
    } else if (event.target.innerText === '학번순') {
      setSortedData(idData)
      setFilterValue(event.target.innerText)
      setFiltering(false)
    }
  }
  const onClickStudentBlock = async (event: any) => {
    const response = await student_block(Number(event.target.id))
    if (Object.keys(response).find((key) => key === 'data')) {
      alert('성공적으로 변경하였습니다')
      location.reload()
    } else {
      alert('다시 시도하여주십시오')
    }
  }
  const onClickStudentUnBlock = async (event: any) => {
    const response = await student_unblock(Number(event.target.id))
    if (Object.keys(response).find((key) => key === 'data')) {
      alert('성공적으로 변경하였습니다')
      location.reload()
    } else {
      alert('다시 시도하여주십시오')
    }
  }

  return (
    <ManagementUI
      onClickFilteringChange={onClickFilteringChange}
      filtering={filtering}
      onClickFilteringValue={onClickFilteringValue}
      filterValue={filterValue}
      sortedData={sortedData}
      recent_use={recent_use}
      onClickStudentBlock={onClickStudentBlock}
      onClickStudentUnBlock={onClickStudentUnBlock}
    />
  )
}

export default withAuth(Management)
