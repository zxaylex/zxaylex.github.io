import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"
import { experienceItems } from "@/lib/site-data"

export default function ExperienceTimeline() {
  return (
    <Timeline defaultValue={4}>
      {experienceItems.map((item) => (
        <TimelineItem key={item.id} step={item.id} className="transition-colors duration-300">
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent className="leading-relaxed">{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}