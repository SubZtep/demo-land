export const categories = ["Script", "Game", "Plugin", "WebApp", "NFT", "Website"] as const
export const tags = ["PHP", "C#", "Unity3D", "VR", "JavaScript", "TypeScript", "React", "CSS", "Vue"] as const

export default function () {
  const toIcon = (name) => {
    switch (name) {
      case "PHP":
        return ["fab", "php"]
      case "C#":
        return ["fas", "code"]
      case "Unity3D":
        return ["fab", "unity"]
      case "VR":
        return ["fas", "vr-cardboard"]
      case "JavaScript":
        return ["fab", "js"]
      case "TypeScript":
        return ["fas", "code"]
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
        return ["fas", "globe"]
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