AFRAME.registerComponent("basic-cube", {
  init() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshLambertMaterial({
      // color: "blue",
    })
    let mesh = new THREE.Mesh(geometry, material)
    this.el.setObject3D("mesh", mesh)
  },
})
