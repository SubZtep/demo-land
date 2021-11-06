type TimelineItemProps = import("~/components/timeline/TimelineItem.vue").TimelineItemProps
type Project = TimelineItemProps & { description: string }
// type Projects = Project[]
// import useProject, { categories, tags } from "~/composables/useProject"

type Category = typeof import("~/composables/useProject").categories[number]
type Tag = typeof import("~/composables/useProject").tags[number]

declare module "~/projects.json" {
  const value:  Project[];
  export default value;
}
