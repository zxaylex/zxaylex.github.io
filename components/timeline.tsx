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

const items = [
  {
    id: 1,
    date: "July 2025 - August 2025",
    title: "IT Intern | PERA Multipurpose Cooperative",
    description:
      "Leveraged the skills in web development. Developed skills in hardware and networks.",
  },
  {
    id: 2,
    date: "March 2025",
    title: "Backend Developer | Sentient Solutions",
    description:
      "Developed skills in Blockchain app development using various programming languages such as Motoko and Vyper. The created projects with the team were competed against national competitions.",
  },
  {
    id: 3,
    date: "October 2024",
    title: "Python AI Trainer | Outlier AI",
    description:
      "Trained AI models based on hallucination, context, failure, response. Leveraged the skills in Python",
  },
  {
    id: 4,
    date: "March 2020",
    title: "Software Development Freelance",
    description:
      "Creating automation scripts, research papers, software for research, websites to local and foreign clients.",
  },
]

export default function ExperienceTimeline() {
  return (
    <Timeline defaultValue={4}>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}