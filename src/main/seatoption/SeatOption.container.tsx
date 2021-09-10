import SeatOptionUI from './SeatOption.presenter'
import { useEffect, useState } from 'react'
import {
  useGet_settingsQuery,
  usePatch_settingsMutation,
} from './SeatOption.queries'
import { useRouter } from 'next/dist/client/router'
const SeatOption = () => {
  const router = useRouter()
  const [buttonIsActive, setButtonIsActive] = useState({
    maxNumber: true,
    hallOpen: true,
    hallClose: true,
  })
  const { data: get_settings_data, error } = useGet_settingsQuery(null)
  const openTimeHour = get_settings_data?.openTime.slice(0, 2)
  const openTimeMinute = get_settings_data?.openTime.slice(3, 5)
  const closeTimeHour = get_settings_data?.closeTime.slice(0, 2)
  const closeTimeMinute = get_settings_data?.closeTime.slice(3, 5)
  const wifiName_data = get_settings_data?.wiFiName
  const wifiPassword_data = get_settings_data?.wiFiPassword
  const [wifiName, setWifiName] = useState<string>('')
  const [wifiPassword, setWifiPassword] = useState<string>('')
  const [patchSettings] = usePatch_settingsMutation()
  const [wifiIsActive, setWifiIsActive] = useState<boolean>(true)
  const [maximumCap, setMaximumCap] = useState<number>()
  const [hallOpenHour, setHallOpenHour] = useState<string>('')
  const [hallOpenMinute, setHallOpenMinute] = useState<string>('')
  const [hallCloseHour, setHallCloseHour] = useState<string>('')
  const [hallCloseMinute, setHallCloseMinute] = useState<string>('')
  const onChangeWifiName = (event: any) => {
    if (event.target.value !== event.target.defaultValue) {
      setWifiName(event.target.value)
      setWifiIsActive(false)
      if (wifiPassword === '') {
        setWifiPassword(wifiPassword_data)
      }
    }
  }
  const onChangeWifiPassword = (event: any) => {
    if (event.target.value !== event.target.defaultValue) {
      setWifiPassword(event.target.value)
      setWifiIsActive(false)
      if (wifiName === '') {
        setWifiName(wifiName_data)
      }
    }
  }

  const onChangeSeatOption = (event: any) => {
    if (event.target.id === 'maxNumber') {
      if (event.target.value !== event.target.defaultValue) {
        if (parseInt(event.target.value) > 99) {
          event.target.value = '99'
          setMaximumCap(Number(event.target.value))
          const result = {
            ...buttonIsActive,
            [event.target.id]: false,
          }
          setButtonIsActive(result)
        } else {
          const result = {
            ...buttonIsActive,
            [event.target.id]: false,
          }
          setButtonIsActive(result)
          setMaximumCap(Number(event.target.value))
        }
      }
    }
    if (
      event.target.id === 'hallOpenHour' ||
      event.target.id === 'hallOpenMinute'
    ) {
      if (event.target.value !== event.target.defaultValue) {
        if (
          event.target.id === 'hallOpenMinute' &&
          parseInt(event.target.value) > 59
        ) {
          event.target.value = '59'
          setHallOpenMinute(event.target.value)
          const result = {
            ...buttonIsActive,
            hallOpen: false,
          }
          if (hallOpenHour === '') {
            setHallOpenHour(openTimeHour)
          }
          setButtonIsActive(result)
        } else if (
          event.target.id === 'hallOpenHour' &&
          parseInt(event.target.value) > 23
        ) {
          event.target.value = '23'
          setHallOpenHour(event.target.value)
          const result = {
            ...buttonIsActive,
            hallOpen: false,
          }
          setButtonIsActive(result)
          if (hallOpenMinute === '') {
            setHallOpenMinute(openTimeMinute)
          }
        } else if (event.target.id === 'hallOpenHour') {
          setHallOpenHour(event.target.value)
          const result = {
            ...buttonIsActive,
            hallOpen: false,
          }
          setButtonIsActive(result)
          if (hallOpenMinute === '') {
            setHallOpenMinute(openTimeMinute)
          }
        } else if (
          event.target.id === 'hallOpenMinute' &&
          parseInt(event.target.value) >= 30
        ) {
          event.target.value = '30'
          setHallOpenMinute(event.target.value)
          const result = {
            ...buttonIsActive,
            hallOpen: false,
          }
          setButtonIsActive(result)
          if (hallOpenHour === '') {
            setHallOpenHour(openTimeHour)
          }
        } else if (
          event.target.id === 'hallOpenMinute' &&
          parseInt(event.target.value) < 30 &&
          event.target.value.length === 2
        ) {
          event.target.value = '00'
          setHallOpenMinute(event.target.value)
          const result = {
            ...buttonIsActive,
            hallOpen: false,
          }
          setButtonIsActive(result)
          if (hallOpenHour === '') {
            setHallOpenHour(openTimeHour)
          }
        }
      }
    }
    if (
      event.target.id === 'hallCloseHour' ||
      event.target.id === 'hallCloseMinute'
    ) {
      if (event.target.value !== event.target.defaultValue) {
        if (
          event.target.id === 'hallCloseMinute' &&
          parseInt(event.target.value) > 59
        ) {
          event.target.value = '59'
          setHallCloseMinute(event.target.value)
          const result = {
            ...buttonIsActive,
            hallClose: false,
          }
          setButtonIsActive(result)
          if (hallCloseHour === '') {
            setHallCloseHour(closeTimeHour)
          }
        } else if (
          event.target.id === 'hallCloseHour' &&
          parseInt(event.target.value) > 23
        ) {
          event.target.value = '23'
          setHallCloseHour(event.target.value)
          const result = {
            ...buttonIsActive,
            hallClose: false,
          }
          if (hallCloseMinute === '') {
            setHallCloseMinute(closeTimeMinute)
          }
          setButtonIsActive(result)
        } else if (
          event.target.id === 'hallCloseMinute' &&
          parseInt(event.target.value) >= 30
        ) {
          event.target.value = '30'
          setHallCloseMinute(event.target.value)
          const result = {
            ...buttonIsActive,
            hallClose: false,
          }
          setButtonIsActive(result)
          if (hallCloseHour === '') {
            setHallCloseHour(closeTimeHour)
          }
        } else if (
          event.target.id === 'hallCloseMinute' &&
          parseInt(event.target.value) < 30 &&
          event.target.value.length === 2
        ) {
          event.target.value = '00'
          setHallCloseMinute(event.target.value)
          const result = {
            ...buttonIsActive,
            hallClose: false,
          }
          setButtonIsActive(result)
          if (hallCloseHour === '') {
            setHallCloseHour(closeTimeHour)
          }
        } else if (event.target.id === 'hallCloseHour') {
          setHallCloseMinute(event.target.value)
          const result = {
            ...buttonIsActive,
            hallClose: false,
          }
          setButtonIsActive(result)
          if (hallCloseMinute === '') {
            setHallCloseMinute(closeTimeMinute)
          }
        }
      }
    }
  }

  const onClickMaximumCap = async () => {
    const maxNumData = { maximumUserCapacity: maximumCap }
    const response = await patchSettings(maxNumData)
    if (Object.keys(response).find((key) => key === 'data')) {
      alert('성공적으로 변경하였습니다')
      location.reload()
    } else {
      alert('다시 시도하여주십시오')
    }
  }

  const onClickHallOpen = async () => {
    const HallOpen = `${hallOpenHour}:${hallOpenMinute}`
    const HallOpenData = { openTime: HallOpen }
    const response = await patchSettings(HallOpenData)
    if (Object.keys(response).find((key) => key === 'data')) {
      alert('성공적으로 변경하였습니다')
      location.reload()
    } else {
      alert('다시 시도하여주십시오')
    }
  }
  const onClickHallClose = async () => {
    const HallClose = `${hallCloseHour}:${hallCloseMinute}`
    const HallCloseData = { closeTime: HallClose }
    const response = await patchSettings(HallCloseData)
    if (Object.keys(response).find((key) => key === 'data')) {
      alert('성공적으로 변경하였습니다')
      location.reload()
    } else {
      alert('다시 시도하여주십시오')
    }
  }
  const onClickWifi = async () => {
    const wifiData = { wiFiName: wifiName, wiFiPassword: wifiPassword }
    const response = await patchSettings(wifiData)
    if (Object.keys(response).find((key) => key === 'data')) {
      alert('성공적으로 변경하였습니다')
      location.reload()
    } else {
      alert('다시 시도하여주십시오')
    }
  }

  useEffect(() => {
    if (error) {
      //@ts-ignore
      if (error?.status === 401 && !localStorage.getItem('error')) {
        localStorage.clear()
        localStorage.setItem('error', 'error-exists')
        router.push('/login')
      }
    } else if (!error) {
      localStorage.removeItem('error')
    }
  }, [error])
  return (
    <SeatOptionUI
      onChangeSeatOption={onChangeSeatOption}
      buttonIsActive={buttonIsActive}
      onChangeWifiName={onChangeWifiName}
      onChangeWifiPassword={onChangeWifiPassword}
      wifiIsActive={wifiIsActive}
      settingsData={get_settings_data}
      onClickMaximumCap={onClickMaximumCap}
      onClickHallOpen={onClickHallOpen}
      onClickHallClose={onClickHallClose}
      onClickWifi={onClickWifi}
    />
  )
}

export default SeatOption
