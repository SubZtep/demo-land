type TimelineItemProps = import("~/components/timeline/TimelineItem.vue").TimelineItemProps
type Project = TimelineItemProps & { description: string }
type Projects = Project[]

declare module "~/projects.json" {
  const value: Projects;
  export default value;
}
