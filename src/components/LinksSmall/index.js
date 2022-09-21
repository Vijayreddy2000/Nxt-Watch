import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import VideoContext from '../../context/VideoContext'

import {
  SidebarLinks,
  NavLink,
  LinksContainer,
  LinkText,
  SidebarSmall,
} from './styledComponents'

class NavigationBar extends Component {
  renderSmallTabItems = () => (
    <VideoContext.Consumer>
      {value => {
        const {darkTheme, activeTab, changeTab} = value
        const bgColor = darkTheme ? '#212121' : '#f9f9f9'
        const textColor = darkTheme ? '#ffffff' : '#000000'
        const activeTabBg = darkTheme ? '#616e7c' : '#616e7c'

        const onClickTabHome = () => {
          changeTab('Home')
        }
        const onClickTabTrending = () => {
          changeTab('Trending')
        }
        const onClickTabGaming = () => {
          changeTab('Gaming')
        }
        const onClickTabSaved = () => {
          changeTab('Saved')
        }

        return (
          <>
            <SidebarSmall bgColor={bgColor}>
              <SidebarLinks>
                <NavLink to="/">
                  <LinksContainer
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size="25"
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <LinkText color={textColor}>Home</LinkText>
                  </LinksContainer>
                </NavLink>

                <NavLink to="/trending">
                  <LinksContainer
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size="25"
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <LinkText color={textColor}>Trending</LinkText>
                  </LinksContainer>
                </NavLink>

                <NavLink to="/gaming">
                  <LinksContainer
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size="25"
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <LinkText color={textColor}>Gaming</LinkText>
                  </LinksContainer>
                </NavLink>

                <NavLink to="/saved-videos">
                  <LinksContainer
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size="25"
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <LinkText color={textColor}>Saved Videos</LinkText>
                  </LinksContainer>
                </NavLink>
              </SidebarLinks>
            </SidebarSmall>
          </>
        )
      }}
    </VideoContext.Consumer>
  )

  render() {
    return <>{this.renderSmallTabItems()}</>
  }
}
export default NavigationBar
