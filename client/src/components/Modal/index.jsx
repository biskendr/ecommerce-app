import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { dispatchCloseModal } from '@/utils/modalUtils'
import modals from '@/modals'

export default function Modal() {
  const { name } = useSelector((state) => state.modal)
  const modal = modals.find((m) => m.name === name)

  const modalRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        dispatchCloseModal()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div ref={modalRef} className="modal">
      {modal && <modal.element />}
    </div>
  )
}
