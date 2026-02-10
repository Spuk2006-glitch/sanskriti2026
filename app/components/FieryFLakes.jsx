'use client';

import { useEffect, useRef } from 'react';

export default function FireyFlakes() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute float a_size;
      attribute vec3 a_color;
      attribute float a_alpha;
      varying vec3 v_color;
      varying float v_alpha;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        gl_PointSize = a_size;
        v_color = a_color;
        v_alpha = a_alpha;
      }
    `;

    // Fragment shader
    const fragmentShaderSource = `
      precision mediump float;
      varying vec3 v_color;
      varying float v_alpha;
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;
        float alpha = v_alpha * (1.0 - smoothstep(0.3, 0.5, dist));
        gl_FragColor = vec4(v_color, alpha);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const sizeLocation = gl.getAttribLocation(program, 'a_size');
    const colorLocation = gl.getAttribLocation(program, 'a_color');
    const alphaLocation = gl.getAttribLocation(program, 'a_alpha');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const maxParticles = 300; // Increased for better coverage

    function createParticle(isInitial = false) {
      // 1. WIDER SPAWN: Instead of one point, spawn anywhere along bottom or right side
      let x, y;
      if (Math.random() > 0.5) {
        x = Math.random() * 2.0 - 1.0; // Random X across screen (-1 to 1)
        y = -1.1; // Below bottom
      } else {
        x = 1.1; // Past right edge
        y = Math.random() * 2.0 - 1.0; // Random Y
      }

      // If initial load, scatter them everywhere immediately
      if (isInitial) {
        x = Math.random() * 2.4 - 1.2;
        y = Math.random() * 2.4 - 1.2;
      }

      // 2. WIDER ANGLE: PI * 0.75 is 135deg (Top-Left). 
      // We increase the variance from 0.3 to 1.5 for a "sweep" effect
      const baseAngle = Math.PI * 0.85;
      const angle = baseAngle + (Math.random() - 0.5) * 1.5;
      const speed = 0.002 + Math.random() * 0.004;

      const colorType = Math.random();
      let color = colorType < 0.3 ? [1.0, 0.4, 0.1] : colorType < 0.6 ? [1.0, 0.7, 0.1] : [1.0, 0.2, 0.0];

      return {
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 6,
        life: 1.0,
        color: color
      };
    }

    // Initialize
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    function animate() {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE); // Changed to Additive blending for "Glow"

      const positions = [], sizes = [], colors = [], alphas = [];

      particles.forEach((p, i) => {
        // 3. MORE TURBULENCE: Waves to make them feel less like straight lines
        p.x += p.vx + Math.sin(Date.now() * 0.001 + i) * 0.001;
        p.y += p.vy + Math.cos(Date.now() * 0.001 + i) * 0.0005;

        p.life -= 0.003;

        // Reset if out of bounds or dead
        if (p.life <= 0 || p.x < -1.2 || p.y > 1.2 || p.x > 1.2 || p.y < -1.2) {
          Object.assign(p, createParticle());
        }

        positions.push(p.x, p.y);
        sizes.push(p.size);
        colors.push(...p.color);
        alphas.push(p.life);
      });

      // Update Buffers
      const updateBuffer = (data, loc, size) => {
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STREAM_DRAW);
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
      };

      updateBuffer(positions, positionLocation, 2);
      updateBuffer(sizes, sizeLocation, 1);
      updateBuffer(colors, colorLocation, 3);
      updateBuffer(alphas, alphaLocation, 1);

      gl.drawArrays(gl.POINTS, 0, particles.length);
      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" style={{ zIndex: 9999 }} />;
}