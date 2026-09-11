import './Devices.scss'
import Section from '@/layouts/Sections'
import DeviceCard from '@/components/DeviceCard'
import Grid from '@/components/Grid'
import deviceItems from './items/deviceItems'

const Devices = () => {
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