import './Icon.scss'
import classNames from 'classnames'
import { Svg } from 'minista/assets'


const Icon = (props) => {
  const {
    className,
    name,
  } = props

  return (
    <span className={classNames(className, 'icon')}>
      <Svg src={}/>
    </span>
  )
}

export default Icon  