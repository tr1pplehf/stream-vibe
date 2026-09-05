import './Icon.scss'
import classNames from 'classnames'
import { Sprite } from 'minista/assets'


const Icon = (props) => {
  const {
    className,
    src,
    hasFill = false,
  } = props

  return (
    <span className={classNames(className, 'icon')}>
      <Sprite
        src={src}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}

export default Icon  