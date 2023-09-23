import LocationSelection from 'components/pages/LocationSelection'

import Header from 'components/common/Header'

const LocationSelectionPage = () => {
  return (
    <>
      <Header
        title='거래 희망 장소'
        color='#3A3A3A'
        backgroundColor='bg-white'
      />
      <LocationSelection />
    </>
  )
}

export default LocationSelectionPage
