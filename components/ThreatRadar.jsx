"use client";

import { useEffect, useRef } from 'react';

export default function ThreatRadar() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const particles = [];
        const particleCount = 60; // Slightly less dense for radar clarity
        const connectionDistance = 120;
        const mouseRadius = 150;

        // Radar specific config
        let radarAngle = 0;
        const radarSpeed = 0.02;

        const mouse = {
            x: null,
            y: null
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            initParticles();
        };
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.baseSize = this.size;
                this.density = (Math.random() * 30) + 1;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;

                // 15% chance to be considered a "threat" node (flashes red instead of bright cyan)
                this.isThreat = Math.random() < 0.15;

                // For the flash effect
                this.flashIntensity = 0;
            }

            draw() {
                // Base colors
                let r = 0, g = 240, b = 255; // Cyan

                if (this.isThreat) {
                    r = 255; g = 50; b = 50; // Red
                }

                // If currently flashing from the radar sweep
                if (this.flashIntensity > 0) {
                    // Brighten and expand slightly
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.3 + this.flashIntensity})`;

                    // Draw glow halo
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size * (1 + this.flashIntensity * 2), 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();

                    this.flashIntensity -= 0.05; // Fade out quickly
                    if (this.flashIntensity < 0) this.flashIntensity = 0;
                }

                // Draw solid core
                ctx.fillStyle = `rgba(${this.isThreat ? '255, 50, 50' : '0, 240, 255'}, ${0.4 + this.flashIntensity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                // Mouse interaction loop
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let force = (mouseRadius - distance) / mouseRadius;

                    if (distance < mouseRadius) {
                        this.x += forceDirectionX * force * this.density * 0.05;
                        this.y += forceDirectionY * force * this.density * 0.05;
                    }
                }

                // Radar sweep detection
                const cx = canvas.width / 2;
                const cy = canvas.height / 2;
                let angleToCenter = Math.atan2(this.y - cy, this.x - cx);
                if (angleToCenter < 0) angleToCenter += Math.PI * 2; // Normalize to 0 - 2PI

                // Check if radar sweep just passed this node
                // radarAngle also goes from 0 to 2PI
                let angleDiff = Math.abs(angleToCenter - radarAngle);

                // Account for the wrap-around at 2PI
                if (angleDiff > Math.PI) {
                    angleDiff = Math.PI * 2 - angleDiff;
                }

                // If within a small wedge threshold, trigger flash
                if (angleDiff < 0.1 && this.flashIntensity === 0) {
                    this.flashIntensity = 1;
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (connectionDistance * connectionDistance)) {
                        let opacityValue = 1 - (distance / (connectionDistance * connectionDistance));

                        // Connections involving a threat glow red, otherwise cyan
                        let isThreatConnection = particles[a].isThreat || particles[b].isThreat;

                        ctx.strokeStyle = `rgba(${isThreatConnection ? '255,50,50' : '0,240,255'}, ${opacityValue * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const drawRadarBackground = () => {
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const maxRadius = Math.max(cx, cy) * 1.5;

            // Concentric circles
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let i = 1; i <= 4; i++) {
                ctx.beginPath();
                ctx.arc(cx, cy, (maxRadius / 4) * i, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Crosshairs
            ctx.beginPath();
            ctx.moveTo(cx, 0);
            ctx.lineTo(cx, canvas.height);
            ctx.moveTo(0, cy);
            ctx.lineTo(canvas.width, cy);
            ctx.stroke();

            // Radar Sweep Cones
            radarAngle += radarSpeed;
            if (radarAngle >= Math.PI * 2) radarAngle = 0;

            // Draw sweeping pie slice
            ctx.fillStyle = 'rgba(0, 240, 255, 0.1)';
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            // The arc goes back slightly from the current radar angle to create a trailing edge
            ctx.arc(cx, cy, maxRadius, radarAngle - 0.4, radarAngle, false);
            ctx.lineTo(cx, cy);
            ctx.fill();

            // Bright leading edge line
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.5)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.cos(radarAngle) * maxRadius, cy + Math.sin(radarAngle) * maxRadius);
            ctx.stroke();
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            // using subtle fill instead of clearRect creates a trailing motion blur effect for the nodes
            ctx.fillStyle = 'rgba(10, 10, 10, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawRadarBackground();

            // Draw connections FIRST so they sit behind nodes
            connectParticles();

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
        };

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] lg:h-[600px] relative pointer-events-auto rounded-lg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 pointer-events-none z-[1] ring-1 ring-[#2a2a2a] bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_95%)] rounded-lg" />

            <div className="absolute inset-2 z-0">
                <canvas ref={canvasRef} className="block w-full h-full rounded-md" />
            </div>

            <div className="absolute bottom-4 left-4 z-[2] flex flex-col gap-1 pointer-events-none tracking-widest">
                <div className="flex gap-2 items-center text-[10px] text-muted font-mono uppercase bg-[#111111]/80 backdrop-blur-sm px-2 py-1 rounded-sm border border-[#2a2a2a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Threat_Radar_Sweep_Active
                </div>
                <div className="flex gap-2 items-center text-[9px] text-muted font-mono uppercase bg-[#111111]/80 backdrop-blur-sm px-2 py-1 rounded-sm border border-[#2a2a2a]">
                    <span className="text-red-500">■</span> Anomalies  <span className="text-primary ml-2">■</span> Clear
                </div>
            </div>
        </div>
    );
}
