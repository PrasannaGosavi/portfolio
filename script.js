const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

document.getElementById("bg").appendChild(renderer.domElement)

camera.position.z = 5


// create particles

const particlesGeometry = new THREE.BufferGeometry()

const particlesCount = 5000

const posArray = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount * 3; i++){

posArray[i] = (Math.random() - 0.5) * 10

}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray, 3)
)


const particlesMaterial = new THREE.PointsMaterial({

size:0.02,
color:0x38bdf8

})


const particlesMesh = new THREE.Points(
particlesGeometry,
particlesMaterial
)

scene.add(particlesMesh)



// animation

function animate(){

requestAnimationFrame(animate)

particlesMesh.rotation.y += 0.001

particlesMesh.rotation.x += 0.001

renderer.render(scene, camera)

}

animate()



// responsive

window.addEventListener('resize', () => {

camera.aspect = window.innerWidth / window.innerHeight

camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth, window.innerHeight)

})