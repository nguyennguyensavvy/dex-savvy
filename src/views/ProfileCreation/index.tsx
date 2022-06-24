import Page from 'components/Layout/Page'
import PageLoader from 'components/Loader/PageLoader'
import { useProfile } from 'state/profile/hooks'
import ProfileCreationProvider from './contexts/ProfileCreationProvider'
import Header from './Header'
import Steps from './Steps'

const ProfileCreation = () => {
  const { isInitialized, isLoading } = useProfile()

  if (!isInitialized || isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ProfileCreationProvider>
        <Page>
          <Header />
          <Steps />
        </Page>
      </ProfileCreationProvider>
    </>
  )
}

export default ProfileCreation
