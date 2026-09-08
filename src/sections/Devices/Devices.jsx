import './Devices.scss'
import Section from '@/layouts/Sections'
import DeviceCard from '@/components/DeviceCard'
import Grid from '@/components/Grid'

const Devices = (props) => {
  const {} = props
  const deviceItems = [
    {
      title: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: '/src/assets/sprite/smartphone.svg'
    },
    {
      title: 'Tablet',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: '/src/assets/sprite/tablet.svg'
    },
    {
      title: 'Smart TV',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: '/src/assets/sprite/smart-tv.svg'
    },
    {
      title: 'Laptops',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: '/src/assets/sprite/laptop.svg'
    },
    {
      title: 'Gaming Consoles',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: '/src/assets/sprite/gaming-console.svg'
    },
    {
      title: 'VR Headsets ',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
      imgSrc: '/src/assets/sprite/vr-headset.svg'
    },
  ]

  return (
    <Section
      title="We Provide you streaming experience across various devices."
      titleId="devices-title"
      description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
    >
      <Grid columns="3">
        {deviceItems.map((deviceItem, index) => (
          <DeviceCard {...deviceItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Devices  