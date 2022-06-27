import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { getFullDisplayBalance } from 'utils/formatBalance'
import tokens from '../../config/constants/tokens'
import useTokenBalance from '../../hooks/useTokenBalance'
import { footerLinks } from './config/footerConfig'
import GlobalSettings from './GlobalSettings'
import { useMenuItems } from './hooks/useMenuItems'
import UserMenu from './UserMenu'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const Menu = (props) => {
  const { isDark, setTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const showPhishingWarningBanner = false

  const menuItems = useMenuItems()

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  const { balance: svcBalance, fetchStatus: svcFetchStatus } = useTokenBalance(tokens.svc.address)

  const svcBalanceDisplay = getFullDisplayBalance(svcBalance, 18, 3)

  return (
    <UikitMenu
      linkComponent={(linkProps) => {
        return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
      }}
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      banner={showPhishingWarningBanner && typeof window !== 'undefined' && <PhishingWarningBanner />}
      isDark={isDark}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      svcBalance={svcBalanceDisplay}
      svcFetchStatus={svcFetchStatus}
      links={menuItems}
      subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      footerLinks={getFooterLinks}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy CAKE')}
      {...props}
    />
  )
}

export default Menu
