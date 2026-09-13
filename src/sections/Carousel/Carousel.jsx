import './Carousel.scss'
import { Image } from 'minista/assets'

const Carousel = () => {
  const carouselItems = [
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/1.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/2.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/3.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/4.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/5.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/6.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/7.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/8.jpg'
        },
      ]
    },
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/9.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/10.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/11.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/12.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/13.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/14.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/15.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/16.jpg'
        },
      ]
    },
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/17.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/18.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/19.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/20.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/21.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/22.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/23.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/24.jpg'
        },
      ]
    },
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/25.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/26.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/27.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/28.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/29.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/30.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/31.jpg'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/32.jpg'
        },
      ]
    },
  ]

  return (
    <div className="carousel">
      {/* Влево */}
      <div className="carousel__groups">
        <div className="carousel__group">
          {carouselItems[0].items.map(({ imgSrc }, index) => (
            <a className="carousel__card" key={index}>
              <Image className="carousel__image" src={imgSrc} />
            </a>
          ))}
        </div>

        <div className="carousel__group">
          {carouselItems[0].items.map(({ imgSrc }, index) => (
            <a className="carousel__card" key={index}>
              <Image className="carousel__image" src={imgSrc} />
            </a>
          ))}
        </div>
      </div>

      {/* Вправо */}
      <div className="carousel__groups carousel__groups--reverse">
        <div className="carousel__group">
          {carouselItems[1].items.map(({ imgSrc }, index) => (
            <a className="carousel__card" key={index}>
              <Image className="carousel__image" src={imgSrc} />
            </a>
          ))}
        </div>

        <div className="carousel__group">
          {carouselItems[1].items.map(({ imgSrc }, index) => (
            <a className="carousel__card" key={index}>
              <Image className="carousel__image" src={imgSrc} />
            </a>
          ))}
        </div>
      </div>

      {/* Влево */}
      <div className="carousel__groups">
        <div className="carousel__group">
          {carouselItems[2].items.map(({ imgSrc }, index) => (
            <a className="carousel__card" key={index}>
              <Image className="carousel__image" src={imgSrc} />
            </a>
          ))}
        </div>

        <div className="carousel__group">
          {carouselItems[2].items.map(({ imgSrc }, index) => (
            <a className="carousel__card" key={index}>
              <Image className="carousel__image" src={imgSrc} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel  