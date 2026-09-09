import './SliderNavigation.scss'
import classNames from 'classnames'
import Button from '@/components/Button'

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /**
     * '' (default) | 'tile' | 'rounded'
     */
    mode,
    /**
     * '' (default) | 'abs-bottom'
     */
    position = '',
    /**
     * 'space-between' (default) | 'center'
     */
    justifyContent = 'space-between',
    isHiddenMobile,
    buttonMode = 'black-10'
  } = props

  return (
    <div
      className={classNames(className, 'slider-navigation', {
        [`slider-navigation--${mode}`]: mode,
        [`slider-navigation--${position}`]: position,
        [`slider-navigation--${justifyContent}`]: justifyContent,
        'hidden-mobile': isHiddenMobile,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode={buttonMode}
        iconSrc="/src/assets/sprite/arrow-left.svg"
        label="Previous slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': ''
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode={buttonMode}
        iconSrc="/src/assets/sprite/arrow-right.svg"
        label="Next slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': ''
        }}
      />
    </div>
  )
}

export default SliderNavigation  