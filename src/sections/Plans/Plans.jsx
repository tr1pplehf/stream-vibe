import './Plans.scss'
import Section from '@/layouts/Sections'
import Grid from '@/components/Grid'
import PlanCard from '@/components/PlanCard'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import Tabs from '@/components/Tabs'
import planItems from './items/planItems'

const Plans = () => {
  const tabsTitle = 'plans-tabs'
  const tabsNavigationId = 'plans-tabs-navigation'

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-title"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={(
        <TabsNavigation
          title={tabsTitle}
          id={tabsNavigationId}
          items={planItems}
        />
      )}
    >
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={planItems.map((planGroup) => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          children: (
            <Grid columns="3">
              {planGroup.items.map((planItem, index) => (
                <PlanCard {...planItem} key={index} />
              ))}
            </Grid>
          )
        }))}
      />
    </Section>
  )
}

export default Plans  