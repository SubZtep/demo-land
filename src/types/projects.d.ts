type Category = typeof import("~/composables/useProject").categories[number]
type Tag = typeof import("~/composables/useProject").tags[number]


interface Project {
  name: string
  created: string
  description: string
  tags: Array<typeof tags[number]>
  category: typeof categories[number]
  pictures?: string[]
  youtube?: string
  website?: string
  github?: string
  blog?: string
}

declare module "~/projects.json" {
  const value: Project[]
  export default value
}
