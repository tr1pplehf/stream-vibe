import './Footer.scss'
import Socials from '@/components/Socials'
import menuItems from './items/menuItems'
import extraLinksItems from './items/extraLinkItems'
import { getUrl } from '@/utils/getUrl'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, href, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a className="footer__menu-title h6" href={getUrl(href)}>{title}</a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link, index) => (
                    <li className="footer__menu-item" key={index}>
                      <a className="footer__menu-link" href="/">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2026">2026</time> AnimeVibe, All Rights Reserved.
          </p>
          <div className="footer__extra-links">
            {extraLinksItems.map((link, index) => (
              <a className="footer__extra-link" href="/" key={index}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer  