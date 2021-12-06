import gsap from "gsap";

// Helpers
function getScale(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    return Math.min(distance / 800, 0.15);
}

function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

// Get demo blocks
const demo = document.querySelectorAll('.cb-demo');

// Circles
(function (el) {
    const container = el.querySelector('.cb-demo-heading');
    const shape = el.querySelectorAll('.cb-demo-shape');

    // Register handler on whole block
    el.addEventListener('mousemove', (e) => {

        // Get cursor position relative to box with text
        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        // Animate shapes
        gsap.to(shape, {
            x: x,
            y: y,
            duration: (i) => 1.4 - i * 0.2, // set different duration for every block
            stagger: 0.01,
            ease: "expo.out"
        })
    });
})(demo[0]);

// Stack circles
(function (el) {
    const container = el.querySelector('.cb-demo-heading');
    const shape = el.querySelectorAll('.cb-demo-shape');

    // Register handler on whole block
    el.addEventListener('mousemove', (e) => {

        // Get cursor position relative to box with text
        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        // Animate shapes
        gsap.to(shape, {
            x: x,
            y: y,
            duration: 1.2,
            stagger: 0.02,
            ease: "expo.out"
        });
    });
})(demo[1]);

// Triangles
(function (el) {
    const container = el.querySelector('.cb-demo-heading');
    const shape = el.querySelectorAll('.cb-demo-shape');

    // Register handler on whole block
    el.addEventListener('mousemove', (e) => {

        // Get cursor position relative to box with text
        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        // Normalize data
        const nY = y / rect.height;
        const nX = x / rect.width;

        // Normalize data (from center)
        const cY = (nY - 0.5) * 2;
        const cX = (nX - 0.5) * 2;

        const rotation = gsap.utils.clamp(-100, 100, cX * 150);

        // Animate shapes
        gsap.to(shape[0], {
            x: x,
            y: y,
            duration: 1,
            rotation: rotation,
            overwrite: true,
            ease: "expo.out"
        });

        gsap.to(shape[1], {
            x: x,
            y: y,
            duration: 2.5,
            rotation: rotation * 0.7,
            overwrite: true,
            ease: "expo.out"
        });

        gsap.to(shape[2], {
            x: x,
            y: y,
            duration: 7,
            rotation: 1.3,
            overwrite: true,
            ease: "expo.out"
        });
    });
})(demo[2]);

// Squares
(function (el) {
    const container = el.querySelector('.cb-demo-heading');
    const shape = el.querySelectorAll('.cb-demo-shape');

    // Register handler on whole block
    el.addEventListener('mousemove', (e) => {

        // Get cursor position relative to box with text
        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        // Normalize data
        const nY = y / rect.height;
        const nX = x / rect.width;

        // Normalize data (from center)
        const cY = (nY - 0.5) * 2;
        const cX = (nX - 0.5) * 2;

        // Calculate rotation
        const rotation = gsap.utils.clamp(-100, 100, cX * 150);

        // Animate first shape
        gsap.to(shape[0], {
            x: x,
            y: y,
            duration: 1,
            rotation: rotation,
            overwrite: true,
            ease: "expo.out"
        });

        // Animate second shape
        gsap.to(shape[1], {
            x: x,
            y: y,
            duration: 2.5,
            rotation: -rotation,
            overwrite: true,
            ease: "expo.out"
        });
    });
})(demo[3]);

// Jelly blob
(function (el) {
    const container = el.querySelector('.cb-demo-heading');
    const shape = el.querySelectorAll('.cb-demo-shape');

    // Save pos and velocity
    const pos = {x: 0, y: 0};
    const vel = {x: 0, y: 0};
    let loopStarted = false;

    // Register handler on whole block
    el.addEventListener('mousemove', (e) => {

        // Get cursor position relative to box with text
        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        // Animate object and calc velocity for every tick
        gsap.to(pos, {
            x: x,
            y: y,
            overwrite: true,
            ease: "expo.out",
            duration: 0.55,
            onUpdate: () => {vel.x = x - pos.x; vel.y = y - pos.y}
        });

        // Start loop
        if(!loopStarted) {
            loop();
            loopStarted = true;
        }
    });

    // Start render loop
    const loop = () => {

        // Calculate angle and scale based on velocity
        const rotation = getAngle(vel.x, vel.y);
        const scale = getScale(vel.x, vel.y);

        // Set transform data to shape
        gsap.set(shape, {
            x: pos.x,
            y: pos.y,
            rotation: rotation,
            scaleX: 1 + scale,
            scaleY: 1 - scale,
        });

        requestAnimationFrame(loop.bind(this));
    };
})(demo[4]);

// Stack circles
(function (el) {
    const container = el.querySelector('.cb-demo-heading');
    const shape = el.querySelectorAll('.cb-demo-shape');

    // Register handler on whole block
    el.addEventListener('mousemove', (e) => {

        // Get cursor position relative to box with text
        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        // Animate shapes
        gsap.to(shape, {
            x: x,
            y: y,
            duration: 1,
            stagger: 0.01,
            ease: "expo.out"
        });
    });
})(demo[5]);

// Last circles
(function (el) {
    const container = el.querySelector('.cb-demo-heading');
    const shape = el.querySelectorAll('.cb-demo-shape');

    // Register handler on whole block
    el.addEventListener('mousemove', (e) => {

        // Get cursor position relative to box with text
        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        // Animate shapes
        gsap.to(shape, {
            x: x,
            y: y,
            duration: (i) => 1.4 - i * 0.2, // set different duration for every block
            stagger: 0.01,
            ease: "expo.out"
        })
    });
})(demo[6]);