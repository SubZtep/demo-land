import { useMagicKeys } from "@vueuse/core"

export default function () {
  const keys = useMagicKeys()
  const ctrlK = keys["Ctrl+K"]
  watchOnce(ctrlK, () => {
    if (
      confirm(`It’s a small page. Please go with CTRL+F, thanks!

(ｏ・_・)ノ”(ノ_<、)

Oh, btw it’s all static. You want to see the page source don’t you,
should I open it for you?`)
    ) {
      const win = window.open(
        "https://github.com/SubZtep/demo-land/blob/main/src/pages/i.vue",
        "_blank",
        "fullscreen=1,menubar=0,status=0,titlebar=0"
      )
      win &&
        useTimeoutFn(() => {
          win.close()
          alert("(ﾉ>ω<)ﾉ :｡･:*:･ﾟ’★,｡･:*:･ﾟ’☆")
        }, 3693)
    }
  })
}
