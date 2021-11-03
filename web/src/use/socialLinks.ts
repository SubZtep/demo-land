// import codepen from "~/assets/icons/brands/codepen.svg?raw"
// import github from "~/assets/icons/brands/github.svg?raw"
// import instagram from "~/assets/icons/brands/instagram.svg?raw"
// import lastfm from "~/assets/icons/brands/lastfm.svg?raw"
// import linkedin from "~/assets/icons/brands/linkedin.svg?raw"
// import pinterest from "~/assets/icons/brands/pinterest.svg?raw"
// import steam from "~/assets/icons/brands/steam.svg?raw"
// import twitter from "~/assets/icons/brands/twitter.svg?raw"
// import youtube from "~/assets/icons/brands/youtube.svg?raw"

const links: SocialLink[] = [
  // {
  //   icon: codepen,
  //   alt: "CodePen",
  //   link: "https://codepen.io/SubZtep",
  // },
  // {
  //   icon: github,
  //   alt: "GitHub",
  //   link: "https://github.com/SubZtep",
  // },
  // {
  //   icon: instagram,
  //   alt: "Instagram",
  //   link: "https://www.instagram.com/subztep/",
  // },
  // {
  //   icon: lastfm,
  //   alt: "Last.fm",
  //   link: "https://last.fm/user/hybridoma",
  // },
  // {
  //   icon: linkedin,
  //   alt: "LinkedIn",
  //   link: "https://www.linkedin.com/in/andrasserfozo/",
  // },
  // {
  //   icon: pinterest,
  //   alt: "Pinterest",
  //   link: "https://pinterest.co.uk/subztep/",
  // },
  // {
  //   icon: steam,
  //   alt: "Steam",
  //   link: "https://steamcommunity.com/id/subztep",
  // },
  // {
  //   icon: twitter,
  //   alt: "Twitter",
  //   link: "https://twitter.com/SubZtep",
  // },
  // {
  //   icon: youtube,
  //   alt: "YouTube",
  //   link: "https://www.youtube.com/c/AndrasSerfozo",
  // },
]

function* linkGen(): IterableIterator<SocialLink> {
  while (true) {
    yield* links
  }
}

export default () => ({
  socialLink: linkGen(),
})
