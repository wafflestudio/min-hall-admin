import { useState } from 'react'
import ManagementUI from './Management.presenter'

const Management = () => {
  const [filtering, setFiltering] = useState(false)
  const [filterValue, setFilterValue] = useState('최근 가입순')
  const onClickFilteringChange = () => {
    if (filtering === true) {
      setFiltering(false)
    } else if (filtering === false) {
      setFiltering(true)
    }
  }
  const onClickFilteringValue = async (event: any) => {
    await setFilterValue(event.target.innerText)
    await setFiltering(false)
  }
  return (
    <ManagementUI
      onClickFilteringChange={onClickFilteringChange}
      filtering={filtering}
      onClickFilteringValue={onClickFilteringValue}
      filterValue={filterValue}
    />
  )
}

export default Management
