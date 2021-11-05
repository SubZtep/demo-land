// import type { IconPack } from "@fortawesome/fontawesome-common-types"
import { library } from "@fortawesome/fontawesome-svg-core"
// import { fad } from "@fortawesome/pro-duotone-svg-icons"
// import { fal } from "@fortawesome/pro-light-svg-icons"
// import { far } from "@fortawesome/pro-regular-svg-icons"
// import { fas } from "@fortawesome/pro-solid-svg-icons"
// import { fat } from "@fortawesome/pro-thin-svg-icons"

// library.add(fad as IconPack)
// library.add(fal as IconPack)
// library.add(far as IconPack)
// library.add(fas as IconPack)
// library.add(fat as IconPack)
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { faCodepen } from "@fortawesome/free-brands-svg-icons/faCodepen"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faLastfm } from "@fortawesome/free-brands-svg-icons/faLastfm"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest"
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
library.add(faCodepen, faGithub, faInstagram, faLastfm, faLinkedin, faPinterest, faSteam, faTwitter, faYoutube)

import { faSliders } from "@fortawesome/pro-regular-svg-icons/faSliders"
library.add(faSliders)

import { faTrash } from "@fortawesome/pro-regular-svg-icons/faTrash"
library.add(faTrash)

export { FontAwesomeIcon }

// export { library }
