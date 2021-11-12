const links: SocialLink[] = [
  {
    icon: "codepen",
    alt: "CodePen",
    link: "https://codepen.io/SubZtep",
  },
  {
    icon: "github",
    alt: "GitHub",
    link: "https://github.com/SubZtep",
  },
  {
    icon: "instagram",
    alt: "Instagram",
    link: "https://www.instagram.com/subztep/",
  },
  {
    icon: "lastfm",
    alt: "Last.fm",
    link: "https://last.fm/user/hybridoma",
  },
  {
    icon: "linkedin",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/andrasserfozo/",
  },
  {
    icon: "pinterest",
    alt: "Pinterest",
    link: "https://pinterest.co.uk/subztep/",
  },
  {
    icon: "steam",
    alt: "Steam",
    link: "https://steamcommunity.com/id/subztep",
  },
  {
    icon: "twitter",
    alt: "Twitter",
    link: "https://twitter.com/SubZtep",
  },
  {
    icon: "youtube",
    alt: "YouTube",
    link: "https://www.youtube.com/c/AndrasSerfozo",
  },
]

function* linkGen(): IterableIterator<SocialLink> {
  while (true) {
    yield* links
  }
}

export default () => ({
  socialLink: linkGen(),
})
