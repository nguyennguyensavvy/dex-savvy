import { Flex } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import FeatureBox from './components/FeatureSection/FeatureBox'
import { BannerBox } from './style'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = {
    margin: '0',
    width: '100%',
    maxWidth: '1440px',
    minHeight: '60vh',
    color: '#ffff',
  }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="#08121C"
        index={2}
        hasCurvedDivider={false}
        minHeight="90vh"
      >
        <BannerBox>
          <div className="about-box">
            <h1 className="hero-title">Win 200% per year with Savvycoin</h1>

            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sit sapien, morbi integer sed odio. Congue
              hendrerit feugiat donec rhoncus auctor amet.
            </p>

            <ConnectWalletButton mt="24px" scale="md" />
          </div>
          <img src="/images/home/chainBanner.png" alt="chain" className="chainBanner" />
        </BannerBox>

        <Flex>
          <FeatureBox />
        </Flex>
      </PageSection>
    </>
  )
}

export default Home
