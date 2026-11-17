/*
 * Hex warning error screen (400-level errors).
 *
 * Used by 404.html (GitHub Pages shows it for any missing URL) and by
 * index.html when a markdown file can't be loaded (HTTP 400-499).
 *
 * Usage:
 *   showHexError({ code: 404, label: 'NOT FOUND', backHref: '#', backText: 'Back to Hub' });
 *   hideHexError();
 *
 * Based on "Evangelion-Style-Hexagon-Warning-Error-Page" by G-Lao
 * https://github.com/GLAO274/Evangelion-Style-Hexagon-Warning-Error-Page
 * MIT License, Copyright (c) 2024 G-Lao. Permission is hereby granted, free of
 * charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to
 * the following conditions: The above copyright notice and this permission
 * notice shall be included in all copies or substantial portions of the
 * Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 * Text glitch effect from https://gist.github.com/CodeMyUI/10043172a4e21152656d5aa8c7613af1
 */
(function () {
    const STATUS_LABELS = {
        400: 'BAD REQUEST',
        401: 'AUTHORIZATION REQUIRED',
        403: 'FORBIDDEN',
        404: 'NOT FOUND',
        405: 'METHOD NOT ALLOWED',
        408: 'REQUEST TIMEOUT',
        410: 'GONE',
        429: 'TOO MANY REQUESTS'
    };

    const CSS = `
        #hex-error { position: fixed; inset: 0; z-index: 100000; background: #000; overflow: hidden;
            display: flex; align-items: center; justify-content: center; user-select: none; }
        #hex-error .hex-grid { position: absolute; top: 0; left: 0; }
        #hex-error .hex-grid svg { position: absolute; }
        #hex-error .hex { stroke: #000; stroke-width: 2; }
        #hex-error .inner-hex { fill: none; stroke: #000; stroke-width: 1; }
        #hex-error .color-original { fill: #ff0000; }
        #hex-error .color-dark { fill: #990000; }
        #hex-error .color-black { fill: #000000; }
        #hex-error .warning-text { fill: #000; font-family: Arial, sans-serif; font-size: 12px;
            font-weight: bold; text-anchor: middle; dominant-baseline: middle; }
        #hex-error .hex-center { position: relative; z-index: 1; display: flex; flex-direction: column;
            align-items: center; gap: 0.1vh; color: #fff; font-family: Arial, sans-serif; text-align: center; }
        #hex-error .hex-code { position: relative; font-size: min(200px, 35vw); margin: 0; letter-spacing: 7px;
            line-height: 1; white-space: nowrap; font-weight: bold; }
        #hex-error .hex-label { position: relative; font-size: max(4vw, 20px); margin: 0; white-space: nowrap;
            max-width: 100vw; overflow: hidden; text-overflow: ellipsis; }
        #hex-error .hex-message { margin: 1.25rem 1rem 0; font-size: 1rem; max-width: 32rem;
            background: rgba(0, 0, 0, 0.75); padding: 0.5rem 0.9rem; border-radius: 4px; user-select: text; }
        #hex-error .hex-back { margin-top: 1rem; display: inline-block; padding: 0.6rem 1.2rem;
            background: #000; color: #fff; border: 2px solid #ff0000; border-radius: 4px;
            font: bold 1rem Arial, sans-serif; text-decoration: none; letter-spacing: 1px; cursor: pointer; }
        #hex-error .hex-back:hover, #hex-error .hex-back:focus-visible { background: #ff0000; color: #000; outline: none; }
        #hex-error .glitch { animation: hex-glitch 1s linear infinite; }
        #hex-error .glitch::before, #hex-error .glitch::after { content: attr(data-text); position: absolute; left: 0; width: 100%; }
        #hex-error .glitch::before { animation: hex-glitch-top 1s linear infinite; clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%); }
        #hex-error .glitch::after { animation: hex-glitch-bottom 1.5s linear infinite; clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%); }
        @keyframes hex-glitch { 2%, 64% { transform: translate(2px, 0) skew(0deg); } 4%, 60% { transform: translate(-2px, 0) skew(0deg); } 62% { transform: translate(0, 0) skew(5deg); } }
        @keyframes hex-glitch-top { 2%, 64% { transform: translate(2px, -2px); } 4%, 60% { transform: translate(-2px, 2px); } 62% { transform: translate(13px, -1px) skew(-13deg); } }
        @keyframes hex-glitch-bottom { 2%, 64% { transform: translate(-2px, 0); } 4%, 60% { transform: translate(-2px, 0); } 62% { transform: translate(-22px, 5px) skew(21deg); } }
        @media (prefers-reduced-motion: reduce) {
            #hex-error .glitch, #hex-error .glitch::before, #hex-error .glitch::after { animation: none; }
            #hex-error .glitch::before, #hex-error .glitch::after { display: none; }
        }
        @media print { #hex-error { display: none; } }
    `;

    const SVG_NS = 'http://www.w3.org/2000/svg';
    const STATES = ['color-original', 'color-dark', 'color-black'];
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let resizeHandler = null;

    function pick(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function hexPoints(w, h, shrink) {
        const pad = w * (1 - shrink) / 2;
        const top = h * 0.5 * (1 - shrink);
        const bottom = h * 0.5 + h * 0.5 * shrink;
        return [
            [w * 0.25 * shrink + pad, top], [w * 0.75 * shrink + pad, top],
            [w * shrink + pad, h * 0.5], [w * 0.75 * shrink + pad, bottom],
            [w * 0.25 * shrink + pad, bottom], [pad, h * 0.5]
        ].map(p => p.join(',')).join(' ');
    }

    function addText(svg, x, y, text) {
        const el = document.createElementNS(SVG_NS, 'text');
        el.setAttribute('x', x);
        el.setAttribute('y', y);
        el.setAttribute('class', 'warning-text');
        el.textContent = text;
        svg.appendChild(el);
        return el;
    }

    function setState(hex, innerHex, state) {
        hex.setAttribute('class', `hex ${state}`);
        innerHex.setAttribute('class', `inner-hex ${state}`);
        hex.dataset.state = state;
    }

    // Red -> dark -> (red or black) -> red, every 5-10 seconds, like the original.
    function flicker(grid, hex, innerHex, textMid, messages) {
        if (!grid.isConnected) return; // Stop once the screen is gone.
        const current = hex.dataset.state;
        const next = current === 'color-original' ? 'color-dark'
            : current === 'color-dark' ? (Math.random() > 0.5 ? 'color-original' : 'color-black')
            : 'color-original';
        setState(hex, innerHex, next);
        textMid.textContent = pick(messages);
        setTimeout(() => flicker(grid, hex, innerHex, textMid, messages), Math.random() * 5000 + 5000);
    }

    function buildGrid(grid, messages) {
        grid.innerHTML = '';
        const w = 100, h = 86.6, spacing = 50;
        const perRow = Math.ceil(window.innerWidth * 1.2 / (w + spacing));
        const rows = Math.ceil(window.innerHeight * 1.2 / (h / 2));
        const outer = hexPoints(w, h, 1);
        const inner = hexPoints(w, h, 0.85);

        for (let row = 0; row < rows; row++) {
            for (let i = 0; i < perRow; i++) {
                const svg = document.createElementNS(SVG_NS, 'svg');
                svg.setAttribute('width', w);
                svg.setAttribute('height', h);
                svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
                svg.setAttribute('aria-hidden', 'true');

                const hex = document.createElementNS(SVG_NS, 'polygon');
                hex.setAttribute('points', outer);
                svg.appendChild(hex);
                const innerHex = document.createElementNS(SVG_NS, 'polygon');
                innerHex.setAttribute('points', inner);
                svg.appendChild(innerHex);

                addText(svg, w / 2, h * 0.3, '▲');
                const textMid = addText(svg, w / 2, h * 0.5, pick(messages));
                addText(svg, w / 2, h * 0.7, '▼');

                setState(hex, innerHex, pick(STATES));
                svg.style.left = `${i * (w + spacing) + (row % 2 ? w * 0.75 : 0) - w * 0.5}px`;
                svg.style.top = `${row * (h / 2) - h * 0.5}px`;
                grid.appendChild(svg);

                if (!reduceMotion) {
                    setTimeout(() => flicker(grid, hex, innerHex, textMid, messages), Math.random() * 5000);
                }
            }
        }
    }

    function hideHexError() {
        const old = document.getElementById('hex-error');
        if (old) old.remove();
        if (resizeHandler) window.removeEventListener('resize', resizeHandler);
        resizeHandler = null;
    }

    function showHexError(options) {
        const opts = options || {};
        const code = String(opts.code || 404);
        const label = (opts.label || STATUS_LABELS[code] || 'ERROR').toUpperCase();
        const messages = ['WARNING', `ERROR ${code}`];

        hideHexError();
        if (!document.getElementById('hex-error-style')) {
            const style = document.createElement('style');
            style.id = 'hex-error-style';
            style.textContent = CSS;
            document.head.appendChild(style);
        }

        const screen = document.createElement('div');
        screen.id = 'hex-error';
        screen.setAttribute('role', 'alert');
        screen.innerHTML = `
            <div class="hex-grid"></div>
            <div class="hex-center">
                <h1 class="hex-code glitch"></h1>
                <p class="hex-label glitch"></p>
                ${opts.message ? '<p class="hex-message"></p>' : ''}
                ${opts.backHref ? '<a class="hex-back"></a>' : ''}
            </div>
        `;
        const codeEl = screen.querySelector('.hex-code');
        codeEl.textContent = code;
        codeEl.dataset.text = code;
        const labelEl = screen.querySelector('.hex-label');
        labelEl.textContent = label;
        labelEl.dataset.text = label;
        if (opts.message) screen.querySelector('.hex-message').textContent = opts.message;
        if (opts.backHref) {
            const back = screen.querySelector('.hex-back');
            back.href = opts.backHref;
            back.textContent = opts.backText || 'Go Back';
        }

        document.body.appendChild(screen);
        const grid = screen.querySelector('.hex-grid');
        buildGrid(grid, messages);

        let resizeTimer;
        resizeHandler = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => buildGrid(grid, messages), 150);
        };
        window.addEventListener('resize', resizeHandler);

        const back = screen.querySelector('.hex-back');
        if (back) back.focus();
    }

    window.showHexError = showHexError;
    window.hideHexError = hideHexError;
})();
