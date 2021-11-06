export const categories = ["Script", "Plugin", "Website", "WebApp", "Game", "NFT"] as const
export const tags = ["JavaScript", "React", "Vue", "CSS", "Unity3D", "VR", "PHP"] as const

export default function () {
  const toIcon = (name: typeof categories[number] | typeof tags[number]) => {
    switch (name) {
      case "PHP":
        return ["fab", "php"]
      case "Unity3D":
        return ["fab", "unity"]
      case "VR":
        return ["fas", "vr-cardboard"]
      case "JavaScript":
        return ["fab", "js"]
      case "React":
        return ["fab", "react"]
      case "CSS":
        return ["fab", "css3-alt"]
      case "Script":
        return ["fas", "code"]
      case "Game":
        return ["fas", "gamepad"]
      case "Plugin":
        return ["fas", "plug"]
      case "WebApp":
        return ["fas", "globe-stand"]
      case "NFT":
        return ["fas", "hand-holding-usd"]
      case "Website":
        return ["fas", "globe"]
      case "Vue":
        return ["fab", "vuejs"]
      default:
        return ["fas", "question"]
    }
  }

  return {
    toIcon,
  }
}
