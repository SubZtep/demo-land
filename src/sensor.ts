// import { Entity, Scene } from "aframe"
// import * as THREE from "three"
// import { Camera } from "three"

const sensor = new AbsoluteOrientationSensor({ frequency: 60 })
// let scene: Scene
// let camera: Entity<Camera>
let scene
let obj
let debug: HTMLDivElement


const handleReading = (ev: Event) => {
  debug.innerHTML = sensor.quaternion.join("<br>")

  document.querySelector("#rot").object3D.quaternion.fromArray(sensor.quaternion)

  // For update A-Frame
  document.querySelector("#rot").getAttribute("rotation")
}

function run() {
  debug.innerHTML = "Run"

  Promise.all([
    navigator.permissions.query({ name: "accelerometer" }),
    navigator.permissions.query({ name: "magnetometer" }),
    navigator.permissions.query({ name: "gyroscope" }),
  ]).then(results => {
    if (results.every(result => result.state === "granted")) {
      debug.innerHTML = "Granted"

      obj = document.querySelector("#obj")
      sensor.addEventListener("reading", handleReading)
      sensor.start()
    } else {
      alert("No permissions to use AbsoluteOrientationSensor.")
    }
  })
}

window.addEventListener("load", () => {
  debug = document.querySelector("#debug") as unknown as HTMLDivElement
  scene = document.querySelector("a-scene")
  if (scene.hasLoaded) {
    run()
  } else {
    scene.addEventListener("loaded", run)
  }
})
