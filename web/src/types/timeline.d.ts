type Category = "Game" | "Plugin" | "Script"

type TimelineItemProps = import("~/components/timeline/TimelineItem.vue").TimelineItemProps

interface TimelineItem extends TimelineItemProps {
  description: string
}
