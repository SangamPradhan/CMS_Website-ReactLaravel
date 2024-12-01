import { flagSet } from '@coreui/icons'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { DocsIcons } from 'src/components'
import { getIconsView } from '../brands/Brands.jsx'

const CoreUIIcons = () => {
  return (
    <>
      <DocsIcons />
      <CCard className="mb-4">
        <CCardHeader>Flag Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(flagSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
