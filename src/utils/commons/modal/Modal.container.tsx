import ModalUI from './Modal.presenter'

interface Iprops {
  onClickUserDetailClose: any
}

const Modal = (props: Iprops) => {
  return <ModalUI onClickUserDetailClose={props.onClickUserDetailClose} />
}

export default Modal
