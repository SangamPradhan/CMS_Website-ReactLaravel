import { freeSet } from '@coreui/icons'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { DocsIcons } from 'src/components'
import { getIconsView } from '../brands/Brands.jsx'

const CoreUIIcons = () => {
  return (
    <>
      <DocsIcons />
      <CCard className="mb-4">
        <CCardHeader>Free Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(freeSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
