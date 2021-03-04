import codepen from "../assets/icons/brands/codepen.svg"
import github from "../assets/icons/brands/github.svg"
import instagram from "../assets/icons/brands/instagram.svg"
import lastfm from "../assets/icons/brands/lastfm.svg"
import linkedin from "../assets/icons/brands/linkedin.svg"
import pinterest from "../assets/icons/brands/pinterest.svg"
import steam from "../assets/icons/brands/steam.svg"
import twitter from "../assets/icons/brands/twitter.svg"
import youtube from "../assets/icons/brands/youtube.svg"

const links: SocialLink[] = [
  {
    icon: codepen,
    alt: "CodePen",
    link: "https://codepen.io/SubZtep",
  },
  {
    icon: github,
    alt: "GitHub",
    link: "https://github.com/SubZtep",
  },
  {
    icon: instagram,
    alt: "Instagram",
    link: "https://www.instagram.com/subztep/",
  },
  {
    icon: lastfm,
    alt: "Last.fm",
    link: "https://last.fm/user/hybridoma",
  },
  {
    icon: linkedin,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/andrasserfozo/",
  },
  {
    icon: pinterest,
    alt: "Pinterest",
    link: "https://pinterest.co.uk/subztep/",
  },
  {
    icon: steam,
    alt: "Steam",
    link: "https://steamcommunity.com/id/subztep",
  },
  {
    icon: twitter,
    alt: "Twitter",
    link: "https://twitter.com/SubZtep",
  },
  {
    icon: youtube,
    alt: "YouTube",
    link: "https://www.youtube.com/channel/UCy1JFooPXHose1GKoPZVxMg",
  },
]

function* linkGen() {
  while (true) {
    yield* links
  }
}

export default () => ({
  socialLink: linkGen()
})
