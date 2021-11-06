import { useMagicKeys } from "@vueuse/core"

export default function () {
  const keys = useMagicKeys()
  const ctrlK = keys['Ctrl+K']
  watchOnce(ctrlK, () => {
    alert('It’s a small page. Please go with CTRL+F, thanks!\n\n(ｏ・_・)ノ”(ノ_<、)')
  })
}
