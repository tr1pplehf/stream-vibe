import './Footer.scss'
import Socials from '@/components/Socials'

const Footer = (props) => {
  const {} = props
  const menuItems = [
    {
      title: 'Home',
      links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
      href: '/',
    },
    {
      title: 'Movies',
      links: ['Gernes', 'Trending', 'New Release', 'Popular'],
      href: '/movies',
    },
    {
      title: 'Shows',
      links: ['Gernes', 'Trending', 'New Release', 'Popular'],
      href: '/shows',
    },
    {
      title: 'Support',
      links: ['Contact Us'],
      href: '/support',
    },
    {
      title: 'Subscription',
      links: ['Plans', 'Features'],
      href: '/subscriptions',
    },
    {
      title: 'Connect With Us',
      socialLinks: [
        {
          label: 'Facebook',
          iconSrc: "/src/assets/sprite/facebook.svg"
        },
        {
          label: 'Twitter',
          iconSrc: "/src/assets/sprite/twitter.svg"
        },
        {
          label: 'LinkedIn',
          iconSrc: "/src/assets/sprite/linked-in.svg"
        }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, href, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a className="footer__menu-title h6" href={href}>{title}</a>
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
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}

export default Footer  