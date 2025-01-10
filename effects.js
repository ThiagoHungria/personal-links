class BackgroundEffect {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.particles = [];

        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('.background-effect').appendChild(this.renderer.domElement);

        // Criar partículas
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xB91C1C });

        for (let i = 0; i < 100; i++) {
            const particle = new THREE.Mesh(geometry, material);
            particle.position.set(
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10
            );
            this.particles.push(particle);
            this.scene.add(particle);
        }

        this.camera.position.z = 5;
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.particles.forEach(particle => {
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
        });

        this.renderer.render(this.scene, this.camera);
    }
}