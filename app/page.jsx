"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const projects = [
  {
    title: "Iran Visa Services",
    category: "01 / Website design",
    image: "/Images/safar.png",
    alt: "Iran Visa website design",
    description:
      "A confident, travel-focused website that makes visa services clear and easy to explore.",
  },
  {
    title: "Sepi Food",
    category: "02 / Food & hospitality",
    image: "/Images/Sepi%20doof.png",
    alt: "Sepi Food website design",
    description:
      "A warm restaurant experience pairing expressive food photography with a simple online journey.",
  },
  {
    title: "Fine Dining App",
    category: "03 / Food & hospitality app",
    image:
      "/Images/Fine%20Dining%20App%20Mockup%20with%20Fresh%20Ingredients.png",
    alt: "Fine-dining app displayed on a phone, with a gold interface, featured grilled steak, ingredient details, and food photography",
    description:
      "A mobile dining concept with an elegant gold interface, featured dishes, ingredient details, ratings, and a clear order flow.",
  },
  {
    title: "Aryana",
    category: "04 / E-commerce",
    image: "/Images/Cover.png",
    alt: "Aryana fashion website design",
    description:
      "An editorial storefront that gives a fashion collection room to speak for itself.",
  },
  {
    title: "Elena",
    category: "05 / Photography website",
    image: "/Images/Cover%202.png",
    alt: "Elena photography website design",
    description:
      "A portrait-led portfolio that turns quiet imagery into a memorable digital identity.",
  },
  {
    title: "Avazana",
    category: "06 / Visual identity",
    image: "/Images/Avazana%20logo.png",
    alt: "Avazana logo",
    description:
      "A visual identity for Voices of Afghan Women, built to feel clear, human, and distinct.",
  },
  {
    title: "Skyle Beauty",
    category: "07 / E-commerce",
    image: "/Images/Beauty.webp",
    alt: "Skyle Beauty product page",
    description:
      "A considered product experience balancing beauty imagery with straightforward shopping.",
  },
  {
    title: "SE ONE",
    category: "08 / Education & UI/UX",
    image: "/Images/se%20one%20case%20study.webp",
    alt: "SE ONE English-learning case study showing responsive mobile and desktop screens, personalized learning plans, speaking practice, and course discovery",
    description:
      "A responsive English-learning experience with personalized study plans, speaking practice, interactive lessons, course discovery, and progress tracking for learners at different levels.",
  },
  {
    title: "Sepanta Ahriman",
    category: "09 / Music & entertainment",
    image: "/Images/dimond.webp",
    alt: "Sepanta Ahriman metal band website with red-and-black visuals, concert events, biography, music videos, tickets, and contact sections",
    description:
      "A dark, high-impact website for an Afghan metal band, bringing its visual identity, concert listings, biography, videos, and ticket information together.",
  },
];

const featuredVideo = "/videos/portfolio-motion-study.m4v";
const ahrimanVideos = [
  {
    title: "Dive into Death",
    location: "Paris",
    description:
      "A dramatic, stage-lit performance frame featuring the vocalist, presented as the Paris video entry.",
    src: "https://cdn.dribbble.com/userupload/48590246/file/89a1150533fe69f568f16f1e9aec6624.mp4",
  },
  {
    title: "Kabul Flight",
    location: "Kabul",
    description:
      "A stark, monochrome guitar visual gives this Kabul video entry a distinct look.",
    src: "/videos/ahriman-kabul-flight.m4v",
  },
  {
    title: "Death in Hell",
    location: "Sweden",
    description:
      "A green-lit drummer performance image anchors the Sweden video entry.",
    src: "https://cdn.dribbble.com/userupload/48568278/file/ae8ce5e75bdb1a35ab6cdf1406aabf9f.mp4",
  },
  {
    title: "Evil and Good",
    location: "Tehran",
    description:
      "Red lighting and raised hands in the crowd set the tone for the Tehran video entry.",
    src: "/videos/ahriman-evil-and-good.m4v",
  },
];
const blobShapes = [
  "M200 20C300 20 380 100 380 200C380 300 300 380 200 380C100 380 20 300 20 200C20 100 100 20 200 20Z",
  "M230 30C320 50 390 130 360 230C335 320 270 390 180 370C90 350 10 290 30 190C50 100 130 10 230 30Z",
  "M180 25C280 10 385 90 375 195C365 300 290 375 195 385C100 395 25 320 25 215C25 120 85 40 180 25Z",
];

function Letters({ text, className = "" }) {
  return (
    <span className={`${styles.letterLine} ${className}`} aria-label={text}>
      {Array.from(text).map((letter, index) => (
        <span
          className={styles.letterMask}
          key={`${letter}-${index}`}
          aria-hidden="true"
        >
          <i style={{ "--letter-index": index }}>
            {letter === " " ? "\u00a0" : letter}
          </i>
        </span>
      ))}
    </span>
  );
}

function ProjectCard({ project, priority = false }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority={priority}
          sizes="(max-width: 700px) 78vw, (max-width: 1100px) 42vw, 32vw"
        />
        <span className={styles.projectArrow} aria-hidden="true">
          ↗
        </span>
      </div>
      <div className={styles.projectInfo}>
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span className={styles.projectIndex} aria-hidden="true">
          Selected work
        </span>
      </div>
    </article>
  );
}

function ProjectMarquee() {
  return (
    <section className={styles.work} id="work" aria-labelledby="work-title">
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>01 / Portfolio</p>
          <h2 id="work-title" className={styles.scrollReveal}>
            Selected work.
          </h2>
        </div>
        <p className={styles.scrollHint}>
          A selection of recent projects · Scroll to explore
        </p>
      </div>
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          <div className={styles.projectGroup}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                priority={index === 0}
              />
            ))}
          </div>
          <div className={styles.projectGroup} aria-hidden="true">
            {projects.map((project) => (
              <ProjectCard key={`repeat-${project.title}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SketchBoard() {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const ratioRef = useRef(1);
  const strokesRef = useRef([]);
  const redoRef = useRef([]);
  const activeStrokeRef = useRef(null);
  const [penColor, setPenColor] = useState("#2b5fe0");
  const [penSize, setPenSize] = useState(4);
  const [tool, setTool] = useState("pen");
  const [hasDrawing, setHasDrawing] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [shareStatus, setShareStatus] = useState("");

  const redraw = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(ratioRef.current, 0, 0, ratioRef.current, 0, 0);

    for (const stroke of strokesRef.current) {
      if (stroke.type === "clear") {
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.setTransform(ratioRef.current, 0, 0, ratioRef.current, 0, 0);
        continue;
      }
      if (!stroke.points.length) continue;
      const points = stroke.points.map((point) => ({
        x: point.x * width,
        y: point.y * height,
      }));
      context.save();
      context.globalCompositeOperation =
        stroke.type === "eraser" ? "destination-out" : "source-over";
      context.strokeStyle = stroke.color;
      context.fillStyle = stroke.color;
      context.lineWidth = stroke.size * (width / stroke.referenceWidth);
      context.lineCap = "round";
      context.lineJoin = "round";
      if (points.length === 1) {
        context.beginPath();
        context.arc(
          points[0].x,
          points[0].y,
          context.lineWidth / 2,
          0,
          Math.PI * 2,
        );
        context.fill();
      } else {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        points.slice(1).forEach((point) => context.lineTo(point.x, point.y));
        context.stroke();
      }
      context.restore();
    }
    if (activeStrokeRef.current) {
      const activeStroke = activeStrokeRef.current;
      const points = activeStroke.points.map((point) => ({
        x: point.x * width,
        y: point.y * height,
      }));
      if (points.length) {
        context.save();
        context.globalCompositeOperation =
          activeStroke.type === "eraser" ? "destination-out" : "source-over";
        context.strokeStyle = activeStroke.color;
        context.fillStyle = activeStroke.color;
        context.lineWidth =
          activeStroke.size * (width / activeStroke.referenceWidth);
        context.lineCap = "round";
        context.lineJoin = "round";
        if (points.length === 1) {
          context.beginPath();
          context.arc(
            points[0].x,
            points[0].y,
            context.lineWidth / 2,
            0,
            Math.PI * 2,
          );
          context.fill();
        } else {
          context.beginPath();
          context.moveTo(points[0].x, points[0].y);
          points.slice(1).forEach((point) => context.lineTo(point.x, point.y));
          context.stroke();
        }
        context.restore();
      }
    }
  };

  const syncHistory = () => {
    setCanUndo(strokesRef.current.length > 0);
    setCanRedo(redoRef.current.length > 0);
    let lastClear = -1;
    strokesRef.current.forEach((stroke, index) => {
      if (stroke.type === "clear") lastClear = index;
    });
    setHasDrawing(
      strokesRef.current
        .slice(lastClear + 1)
        .some((stroke) => stroke.type !== "clear"),
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(bounds.width * ratio);
      canvas.height = Math.round(bounds.height * ratio);
      ratioRef.current = ratio;
      redraw();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();
    return () => resizeObserver.disconnect();
  }, []);

  const getPoint = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return {
      x: (event.clientX - bounds.left) / bounds.width,
      y: (event.clientY - bounds.top) / bounds.height,
    };
  };

  const startDrawing = (event) => {
    event.preventDefault();
    const canvas = event.currentTarget;
    if (!canvas.getContext("2d")) return;
    canvas.setPointerCapture(event.pointerId);
    drawingRef.current = true;
    const point = getPoint(event);
    lastPointRef.current = point;
    activeStrokeRef.current = {
      type: tool,
      color: penColor,
      size: penSize,
      referenceWidth: canvas.clientWidth,
      points: [point],
    };
    redoRef.current = [];
    setHasDrawing(true);
    redraw();
  };

  const continueDrawing = (event) => {
    if (!drawingRef.current) return;
    const stroke = activeStrokeRef.current;
    if (!stroke) return;
    const point = getPoint(event);
    const canvas = event.currentTarget;
    const context = canvas.getContext("2d");
    const previous = lastPointRef.current;
    if (!context || !previous) return;
    context.save();
    context.globalCompositeOperation =
      stroke.type === "eraser" ? "destination-out" : "source-over";
    context.beginPath();
    context.moveTo(
      previous.x * canvas.clientWidth,
      previous.y * canvas.clientHeight,
    );
    context.lineTo(point.x * canvas.clientWidth, point.y * canvas.clientHeight);
    context.strokeStyle = stroke.color;
    context.lineWidth = stroke.size;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
    context.restore();
    stroke.points.push(point);
    lastPointRef.current = point;
  };

  const stopDrawing = () => {
    if (activeStrokeRef.current?.points.length) {
      strokesRef.current.push(activeStrokeRef.current);
      syncHistory();
    }
    activeStrokeRef.current = null;
    drawingRef.current = false;
    lastPointRef.current = null;
  };

  const undo = () => {
    const stroke = strokesRef.current.pop();
    if (!stroke) return;
    redoRef.current.push(stroke);
    redraw();
    syncHistory();
  };

  const redo = () => {
    const stroke = redoRef.current.pop();
    if (!stroke) return;
    strokesRef.current.push(stroke);
    redraw();
    syncHistory();
  };

  const clearBoard = () => {
    if (!strokesRef.current.length) return;
    strokesRef.current.push({ type: "clear", points: [] });
    redoRef.current = [];
    redraw();
    syncHistory();
  };

  const downloadBlob = (blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sepanta-design-sketch.png";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const exportImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const output = document.createElement("canvas");
    output.width = canvas.width;
    output.height = canvas.height;
    const context = output.getContext("2d");
    if (!context) return null;
    context.fillStyle = "#f6f2eb";
    context.fillRect(0, 0, output.width, output.height);
    context.drawImage(canvas, 0, 0);
    return new Promise((resolve) => output.toBlob(resolve, "image/png"));
  };

  const saveImage = async () => {
    const blob = await exportImage();
    if (!blob) return;
    downloadBlob(blob);
    setShareStatus("PNG saved to your downloads.");
  };

  const shareOnWhatsApp = async () => {
    const shareText = "Here is my design sketch.";
    const whatsappWindow = window.open(
      `https://wa.me/989130772988?text=${encodeURIComponent(shareText)}`,
      "_blank",
      "noopener,noreferrer",
    );
    const blob = await exportImage();
    if (!blob) {
      whatsappWindow?.close();
      return;
    }
    downloadBlob(blob);
    setShareStatus(
      "PNG downloaded. Attach it in the WhatsApp chat with +98 913 077 2988.",
    );
  };

  return (
    <>
      <div className={styles.sketchBoard}>
        <canvas
          ref={canvasRef}
          className={styles.sketchCanvas}
          aria-label="Sketch board. Draw with a mouse, finger, or pen."
          onPointerDown={startDrawing}
          onPointerMove={continueDrawing}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
          onLostPointerCapture={stopDrawing}
        />
        <span
          className={styles.sketchHint}
          style={{ opacity: hasDrawing ? 0 : 1 }}
          aria-hidden="true"
        >
          Draw anything — a layout, a logo, a rough idea
        </span>
      </div>
      <div className={styles.sketchTools}>
        {[
          ["#2b5fe0", "Blue pen"],
          ["#151a1f", "Black pen"],
          ["#10a7c4", "Teal pen"],
        ].map(([color, label]) => (
          <button
            key={color}
            type="button"
            data-pen-color={color}
            className={penColor === color ? styles.selectedPen : ""}
            aria-label={label}
            aria-pressed={penColor === color}
            onClick={() => setPenColor(color)}
          />
        ))}
        <label className={styles.customColor} title="Custom pen color">
          <span>Custom</span>
          <input
            type="color"
            value={penColor}
            aria-label="Custom pen color"
            onChange={(event) => {
              setPenColor(event.target.value);
              setTool("pen");
            }}
          />
        </label>
        <button
          type="button"
          className={tool === "eraser" ? styles.activeTool : ""}
          aria-pressed={tool === "eraser"}
          onClick={() =>
            setTool((current) => (current === "eraser" ? "pen" : "eraser"))
          }
        >
          Eraser
        </button>
        <input
          type="range"
          min="2"
          max="16"
          value={penSize}
          aria-label="Pen size"
          onChange={(event) => setPenSize(Number(event.target.value))}
        />
        <output className={styles.penSizeValue}>{penSize}px</output>
        <button
          type="button"
          onClick={undo}
          disabled={!canUndo}
          aria-label="Undo last stroke"
        >
          Undo
        </button>
        <button
          type="button"
          onClick={redo}
          disabled={!canRedo}
          aria-label="Redo stroke"
        >
          Redo
        </button>
        <button type="button" onClick={clearBoard} disabled={!hasDrawing}>
          Clear
        </button>
        <button type="button" onClick={saveImage} disabled={!hasDrawing}>
          Save PNG
        </button>
        <button
          type="button"
          className={styles.whatsappButton}
          onClick={shareOnWhatsApp}
          disabled={!hasDrawing}
        >
          Send on WhatsApp ↗
        </button>
      </div>
      {shareStatus && (
        <p className={styles.sketchStatus} role="status" aria-live="polite">
          {shareStatus}
        </p>
      )}
    </>
  );
}

export default function Page() {
  const rootRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen && !orderOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOrderOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen, orderOpen]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.classList.toggle(styles.inView, entry.isIntersecting),
        ),
      { threshold: 0.18 },
    );
    root
      .querySelectorAll(
        `.${styles.scrollReveal}, .${styles.skills}, .${styles.projectVisual}`,
      )
      .forEach((item) => revealObserver.observe(item));
    const firstLine = root.querySelector(`.${styles.firstLine}`);
    const secondLine = root.querySelector(`.${styles.secondLine}`);
    const blob = root.querySelector(`.${styles.heroArtwork}`);
    const badge = root.querySelector(`.${styles.rotatingBadge}`);
    const progress = root.querySelector(`.${styles.progress}`);
    const nav = root.querySelector(`.${styles.navigation}`);
    const indicator = root.querySelector(`.${styles.navIndicator}`);
    const navLinks = Array.from(nav?.querySelectorAll("a") ?? []);
    const navHandlers = new Map();
    const morph = root.querySelector(`#${styles.blobPath}`);
    const caseRows = root.querySelector(`.${styles.caseRows}`);
    const trail = root.querySelector(`.${styles.projectTrail}`);
    const trailBase = root.querySelector(`.${styles.trailBase}`);
    const trailProgress = root.querySelector(`.${styles.trailProgress}`);
    const trailMarker = root.querySelector(`.${styles.trailMarker}`);
    let activeNav = null;
    let frame = 0;
    let shapeIndex = 0;
    let trailLength = 0;
    const markNav = (link) => {
      if (!indicator) return;
      if (!link) {
        indicator.style.opacity = "0";
        return;
      }
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.transform = `translateX(${link.offsetLeft - 5}px)`;
      indicator.style.opacity = "1";
      navLinks.forEach((item) =>
        item.classList.toggle(styles.navActive, item === link),
      );
    };
    const onNavLeave = () => markNav(activeNav);
    navLinks.forEach((link) => {
      const onEnter = () => markNav(link);
      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("focus", onEnter);
      navHandlers.set(link, onEnter);
    });
    nav?.addEventListener("mouseleave", onNavLeave);
    const buildTrail = () => {
      if (!caseRows || !trail || !trailBase || !trailProgress || !trailMarker)
        return;
      const projects = Array.from(
        caseRows.querySelectorAll(`.${styles.caseProject}`),
      );
      const width = caseRows.clientWidth;
      const height = caseRows.clientHeight;
      trail.setAttribute("viewBox", `0 0 ${width} ${height}`);
      trail.setAttribute("width", String(width));
      trail.setAttribute("height", String(height));
      if (!projects.length) return;
      const points = projects.map((project, index) => ({
        x: index % 2 ? width * 0.7 : width * 0.3,
        y: project.offsetTop + project.offsetHeight / 2,
      }));
      let path = `M${points[0].x} ${points[0].y}`;
      for (let index = 1; index < points.length; index += 1) {
        const from = points[index - 1];
        const to = points[index];
        const middle = (from.y + to.y) / 2;
        path += ` C${from.x} ${middle},${to.x} ${middle},${to.x} ${to.y}`;
      }
      trailBase.setAttribute("d", path);
      trailProgress.setAttribute("d", path);
      trailLength = trailBase.getTotalLength();
      trailProgress.style.strokeDasharray = String(trailLength);
    };
    buildTrail();
    const trailResize = new ResizeObserver(buildTrail);
    if (caseRows) trailResize.observe(caseRows);
    const update = () => {
      const y = window.scrollY;
      const viewport = window.innerHeight;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - viewport,
      );
      progress?.style.setProperty("--page-progress", String(y / maxScroll));
      let currentNav = null;
      let closestDistance = Infinity;
      navLinks.forEach((link) => {
        const section = root.querySelector(link.getAttribute("href"));
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          // Only consider sections that are within the viewport or slightly above
          if (rect.top <= viewport * 0.5 && distance < closestDistance) {
            closestDistance = distance;
            currentNav = link;
          }
        }
      });
      if (currentNav !== activeNav) {
        activeNav = currentNav;
        markNav(activeNav);
      }
      if (!reduceMotion) {
        const amount = Math.max(0, Math.min(1, y / viewport));
        if (firstLine) {
          firstLine.style.transform = `translateY(${-140 * amount}px) scale(${1 - 0.45 * amount})`;
          firstLine.style.opacity = String(1 - Math.min(1, amount / 0.7));
        }
        if (secondLine) {
          secondLine.style.transform = `translateX(${60 * amount}px) scale(${1 + 0.12 * amount})`;
          secondLine.style.opacity = String(1 - Math.min(1, amount / 0.6));
        }
        if (blob) blob.style.setProperty("--hero-scroll", `${amount * 220}px`);
        if (badge) badge.style.transform = `rotate(${y * 0.22}deg)`;
        const bridge = root.querySelector(`.${styles.bridge}`);
        if (bridge) {
          const bounds = bridge.getBoundingClientRect();
          const p = Math.max(
            0,
            Math.min(
              1,
              -bounds.top / Math.max(1, bridge.offsetHeight - viewport),
            ),
          );
          const gap = root.querySelector(`.${styles.bridgeGap}`);
          if (gap) {
            const gapProgress = Math.max(0, Math.min(1, p / 0.55));
            gap.style.height = `${gapProgress * viewport * 0.34}px`;
          }
          root
            .querySelector(`.${styles.bridgeIdeas}`)
            ?.style.setProperty("--bridge-shift", `${-p * 6}vw`);
          root
            .querySelector(`.${styles.bridgeInterfaces}`)
            ?.style.setProperty("--bridge-shift", `${p * 6}vw`);
          const caption = root.querySelector(`.${styles.bridgeCaption}`);
          if (caption) {
            const visible = Math.max(0, Math.min(1, (p - 0.42) / 0.3));
            caption.style.opacity = String(visible);
            caption.style.transform = `translateY(${(1 - visible) * 20}px)`;
          }
        }
        const stackCards = root.querySelectorAll(`.${styles.processCard}`);
        stackCards.forEach((card, index) => {
          if (index === stackCards.length - 1) return;
          const next = stackCards[index + 1];
          const distance =
            next.getBoundingClientRect().top - card.getBoundingClientRect().top;
          const amount = Math.max(
            0,
            Math.min(1, (viewport * 0.5 - distance) / (viewport * 0.5 - 26)),
          );
          card.style.transform = `scale(${1 - 0.06 * amount})`;
        });
        const caseProjects = root.querySelectorAll(`.${styles.caseProject}`);
        caseProjects.forEach((project, index) => {
          const visual = project.querySelector(`.${styles.projectVisual}`);
          if (!visual) return;
          const bounds = project.getBoundingClientRect();
          const p = Math.max(
            0,
            Math.min(1, (viewport - bounds.top) / (viewport + bounds.height)),
          );
          const map = (value, stops, output) => {
            for (let i = 1; i < stops.length; i += 1) {
              if (value <= stops[i]) {
                const amount =
                  (value - stops[i - 1]) / (stops[i] - stops[i - 1]);
                return output[i - 1] + (output[i] - output[i - 1]) * amount;
              }
            }
            return output[output.length - 1];
          };
          visual.style.opacity = String(
            map(p, [0, 0.3, 0.7, 1], [0.05, 1, 1, 0.1]),
          );
          visual.style.transform = `translateY(${map(p, [0, 0.35, 0.65, 1], [120, 0, 0, -90])}px) scale(${map(p, [0, 0.35, 0.65, 1], [0.7, 1, 1, 0.82])}) rotate(${map(p, [0, 0.35, 0.65, 1], [index % 2 ? 6 : -6, 0, 0, index % 2 ? -3 : 3])}deg)`;
        });
        if (
          trailLength &&
          caseRows &&
          trailBase &&
          trailProgress &&
          trailMarker
        ) {
          const bounds = caseRows.getBoundingClientRect();
          const p = Math.max(
            0,
            Math.min(
              1,
              (viewport * 0.7 - bounds.top) / (bounds.height + viewport * 0.15),
            ),
          );
          trailProgress.style.strokeDashoffset = String(trailLength * (1 - p));
          const point = trailBase.getPointAtLength(
            Math.max(0.001, p) * trailLength,
          );
          trailMarker.setAttribute(
            "transform",
            `translate(${point.x} ${point.y})`,
          );
          trailMarker.style.opacity = p > 0.01 ? "1" : "0";
        }
      }
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const onPointer = (event) => {
      if (reduceMotion || window.scrollY > window.innerHeight) return;
      blob?.style.setProperty(
        "--pointer-x",
        String(event.clientX / window.innerWidth - 0.5),
      );
      blob?.style.setProperty(
        "--pointer-y",
        String(event.clientY / window.innerHeight - 0.5),
      );
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    let morphTimer;
    if (!reduceMotion && morph) {
      morph.style.transition = "d 5s ease-in-out";
      morphTimer = window.setInterval(() => {
        shapeIndex = (shapeIndex + 1) % blobShapes.length;
        morph.setAttribute("d", blobShapes[shapeIndex]);
      }, 5000);
    }
    update();
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      nav?.removeEventListener("mouseleave", onNavLeave);
      navHandlers.forEach((handler, link) => {
        link.removeEventListener("mouseenter", handler);
        link.removeEventListener("focus", handler);
      });
      cancelAnimationFrame(frame);
      window.clearInterval(morphTimer);
      trailResize.disconnect();
    };
  }, []);

  return (
    <main
      className={`${styles.page} ${menuOpen ? styles.menuOpen : ""}`}
      ref={rootRef}
    >
      <div className={styles.progress} aria-hidden="true" />
      <header className={styles.header}>
        <a className={styles.wordmark} href="#top" aria-label="Home">
          <Image
            src="/brand/sepanta-logo.png"
            alt="Sepanta Ali Alizadeh — UI/UX Designer"
            width={220}
            height={61}
            priority
          />
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <i className={styles.navIndicator} />
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#pick">Brief</a>
        </nav>
        <a className={styles.headerCta} href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
        <button
          className={styles.menuToggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>
      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {[
          ["Work", "#work"],
          ["Process", "#process"],
          ["About", "#about"],
          ["Brief", "#pick"],
          ["Contact", "#contact"],
        ].map(([label, href], index) => (
          <a
            href={href}
            key={href}
            style={{ "--menu-index": index }}
            onClick={() => setMenuOpen(false)}
          >
            <small>{String(index + 1).padStart(2, "0")}</small>
            {label}
          </a>
        ))}
        <p>Independent designer · UI/UX &amp; visual design</p>
      </nav>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroArtwork} aria-hidden="true">
          <div className={`${styles.heroLayer} ${styles.blobLayer}`}>
            <svg className={styles.blobSvg} viewBox="0 0 400 400">
              <path id={styles.blobPath} d={blobShapes[0]} />
            </svg>
          </div>
          <div className={`${styles.heroLayer} ${styles.selectionLayer}`}>
            <span>Hero · 1440 × 900</span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className={`${styles.heroLayer} ${styles.curveLayer}`}>
            <svg viewBox="0 0 400 400">
              <path d="M50 310L110 190M350 90L290 200" />
              <path
                className={styles.drawingCurve}
                d="M50 310C110 90 290 400 350 90"
              />
              <rect x="44" y="304" width="12" height="12" />
              <rect x="344" y="84" width="12" height="12" />
              <circle cx="110" cy="190" r="4.5" />
              <circle cx="290" cy="200" r="4.5" />
            </svg>
          </div>
          <div className={`${styles.heroLayer} ${styles.aaLayer}`}>
            <span>Aa</span>
          </div>
          <div className={`${styles.heroLayer} ${styles.dotsLayer}`}>
            <i />
            <i />
            <i />
          </div>
          <div className={`${styles.heroLayer} ${styles.cursorLayer}`}>
            <span>↖</span>
            <b>Sepanta</b>
          </div>
          <span className={styles.heroVertical}>UI/UX · VISUAL DESIGN</span>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            Independent designer · Digital experiences
          </p>
          <h1 id="hero-title">
            <Letters text="Designing" className={styles.firstLine} />
            <Letters
              text="what’s next."
              className={`${styles.secondLine} ${styles.italicLine}`}
            />
          </h1>
          <p className={styles.intro}>
            I’m Sepanta Ali Alizadeh, a UI/UX and visual designer creating
            clear, characterful digital experiences and identities that connect
            with people.
          </p>
          <a className={styles.heroLink} href="#work">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
          <div className={styles.heroActions}>
            <span className={styles.badgeWrap}>
              <svg className={styles.rotatingBadge} viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  fill="none"
                  stroke="currentColor"
                />
                <defs>
                  <path
                    id="badgeCircle"
                    d="M60 60m-40 0a40 40 0 1 1 80 0a40 40 0 1 1-80 0"
                  />
                </defs>
                <text fontSize="11" letterSpacing="3" fill="currentColor">
                  <textPath href="#badgeCircle">
                    UI/UX · VISUAL DESIGN · UI/UX · VISUAL DESIGN ·
                  </textPath>
                </text>
              </svg>
              <span aria-hidden="true">↓</span>
            </span>
          </div>
        </div>
      </section>

      <ProjectMarquee />

      <section className={styles.bridge} aria-label="Ideas become interfaces">
        <div className={styles.bridgeInner}>
          <div className={`${styles.bridgeWord} ${styles.bridgeIdeas}`}>
            Ideas
          </div>
          <div className={styles.bridgeGap}>
            <div className={styles.bridgeTrack}>
              {projects.map((project) => (
                <div className={styles.bridgeTile} key={project.title}>
                  <Image src={project.image} alt="" fill sizes="240px" />
                  <span>{project.title}</span>
                </div>
              ))}
              {projects.map((project) => (
                <div
                  className={styles.bridgeTile}
                  key={`bridge-repeat-${project.title}`}
                  aria-hidden="true"
                >
                  <Image src={project.image} alt="" fill sizes="240px" />
                  <span>{project.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.bridgeWord} ${styles.bridgeInterfaces}`}>
            Interfaces
          </div>
          <p className={styles.bridgeCaption}>
            Good design bridges what people need and what they can do. That gap
            is where I work.
          </p>
        </div>
      </section>

      <section className={styles.caseWork} aria-label="Project details">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>02 / Selected projects</p>
            <h2 className={styles.scrollReveal}>Made with intention.</h2>
          </div>
          <span className={styles.years}>2024 — 2026</span>
        </div>
        <div className={styles.caseRows}>
          <svg className={styles.projectTrail} aria-hidden="true">
            <path className={styles.trailBase} fill="none" />
            <path className={styles.trailProgress} fill="none" />
            <g className={styles.trailMarker}>
              <circle r="15" />
              <path d="M-5 5L-4 2L4-6L7-3L-1 5Z" />
            </g>
          </svg>
          {projects.map((project, index) => (
            <article
              className={`${styles.caseProject} ${index % 2 ? styles.caseFlip : ""}`}
              key={`case-${project.title}`}
            >
              <div className={styles.projectVisual}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 800px) 92vw, 50vw"
                />
              </div>
              <div className={styles.caseCopy}>
                <p className={styles.eyebrow}>{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.ahriman}
        id="ahriman"
        aria-labelledby="ahriman-title"
      >
        <div className={styles.ahrimanHeading}>
          <div>
            <p className={styles.eyebrow}>03 / Music &amp; entertainment</p>
            <h2 id="ahriman-title" className={styles.scrollReveal}>
              Sepanta Ahriman.
            </h2>
          </div>
          <p>
            A bold digital home for an Afghan metal band. The red-and-black
            visual system carries through the band story, concert events, video
            library, tickets, and contact details.
          </p>
        </div>
        <figure className={styles.ahrimanCover}>
          <Image
            src="/Images/dimond.webp"
            alt="Sepanta Ahriman website concept, with demonic band imagery, red-and-black art direction, and concert navigation"
            fill
            sizes="(max-width: 800px) 94vw, 88vw"
          />
          <figcaption>
            Website concept · Visual identity &amp; digital experience
          </figcaption>
        </figure>
        <div className={styles.ahrimanVideoHeading}>
          <p className={styles.eyebrow}>Video library</p>
          <p>Four featured videos from the band website.</p>
        </div>
        <div className={styles.ahrimanVideoGrid}>
          {ahrimanVideos.map((video, index) => (
            <article className={styles.ahrimanVideoCard} key={video.title}>
              <div className={styles.ahrimanVideoFrame}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${video.title} — ${video.location}`}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support this video.{" "}
                  <a href={video.src}>Open it directly.</a>
                </video>
                <span className={styles.ahrimanVideoNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.ahrimanVideoInfo}>
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.location}</p>
                </div>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.legacyMotion}>
          <p className={styles.eyebrow}>More motion work</p>
          <video
            controls
            playsInline
            preload="metadata"
            aria-label="Selected portfolio motion study"
          >
            <source src={featuredVideo} type="video/mp4" />
            Your browser does not support this video.{" "}
            <a href={featuredVideo}>Open it directly.</a>
          </video>
        </div>
      </section>

      <section
        className={styles.about}
        id="about"
        aria-labelledby="about-title"
      >
        <div className={styles.aboutTitle}>
          <p className={styles.eyebrow}>04 / The approach</p>
          <h2 id="about-title" className={styles.scrollReveal}>
            Curious by design.
          </h2>
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.aboutLead}>
            I work across UI/UX, web design, and visual identity—balancing
            research and problem-solving with distinctive visual craft. My goal
            is to make every interaction feel considered.
          </p>
          <hr />
          <h3>What I bring to the table</h3>
          <div className={styles.skills} aria-label="Design services">
            {[
              "UI/UX design",
              "Web design",
              "Visual identity",
              "Prototyping",
              "Responsive design",
              "Design systems",
            ].map((skill, index) => (
              <span key={skill} style={{ "--skill-index": index }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} id="process">
        <p className={styles.eyebrow}>How I work</p>
        <h2 className={styles.scrollReveal}>Six steps, one clear path.</h2>
        {[
          [
            "Research",
            "Talk to users, map their goals, and find what actually gets in their way.",
          ],
          [
            "Define",
            "Turn findings into one clear problem, a scope, and ways to measure success.",
          ],
          [
            "Structure",
            "Flows and wireframes first, so the layout works before anything is styled.",
          ],
          [
            "Design",
            "Build a visual language and a system that stays consistent as it grows.",
          ],
          [
            "Test",
            "Click-through prototypes, real people, and fixes for whatever breaks.",
          ],
          [
            "Hand off",
            "Specs, states, and notes so developers build exactly what was designed.",
          ],
        ].map(([title, description], index) => (
          <article
            className={styles.processCard}
            key={title}
            style={{ "--step": index, "--tint": `${5 + index * 3}%` }}
          >
            <span className={styles.stepNumber}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.sketch} id="sketch">
        <p className={styles.eyebrow}>Sketch your idea</p>
        <h2 className={styles.scrollReveal}>Draw it. I’ll design it.</h2>
        <SketchBoard />
      </section>

      <section className={styles.brief} id="pick">
        <p className={styles.eyebrow}>Working together</p>
        <h2 className={styles.scrollReveal}>What do you need?</h2>
        <div className={styles.briefChips}>
          {[
            "Website design",
            "UI/UX design",
            "Brand identity",
            "Design system",
            "Landing page",
            "Prototype",
            "Redesign",
            "Accessibility review",
          ].map((item, index) => (
            <span key={item} style={{ "--chip-index": index }}>
              {item}
            </span>
          ))}
        </div>
        <a className={styles.contactLink} href="#contact">
          Send my brief ↗
        </a>
      </section>

      <footer className={styles.footer} id="contact">
        <p className={styles.eyebrow}>05 / Get in touch</p>
        <h2 className={styles.scrollReveal}>Have something good in mind?</h2>
        <p>I’d love to hear about your next project, collaboration, or idea.</p>
        <div className={styles.socials}>
          <a
            href="https://instagram.com/_sepantaalizadeh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram · @_sepantaalizadeh ↗
          </a>
          <a
            href="https://dribbble.com/Sepanta_Alizadeh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble ↗
          </a>
          <a
            href="https://www.behance.net/sepantaalizadeh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance ↗
          </a>
          <a
            href="https://www.linkedin.com/in/sepantaalizadeh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <a className={styles.contactLink} href="https://wa.me/989130772988">
          Say hello <span aria-hidden="true">↗</span>
        </a>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Sepanta Ali Alizadeh</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <a
        className={styles.orderFab}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setOrderOpen(true);
        }}
      >
        Order design
      </a>
      {orderOpen && (
        <div
          className={styles.orderOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOrderOpen(false);
          }}
        >
          <section
            className={styles.orderDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-title"
          >
            <button
              className={styles.orderClose}
              type="button"
              aria-label="Close order dialog"
              onClick={() => setOrderOpen(false)}
            >
              ×
            </button>
            <p className={styles.eyebrow}>Order design</p>
            <h2 id="order-title">Three steps to start your project.</h2>
            <ol>
              <li>
                <b>1</b>
                <span>Open a chat with me using the button below.</span>
              </li>
              <li>
                <b>2</b>
                <span>
                  Tell me what you need, your references, timeline, and budget.
                </span>
              </li>
              <li>
                <b>3</b>
                <span>We agree on the scope and I start designing.</span>
              </li>
            </ol>
            <a
              className={styles.orderContinue}
              href="https://wa.me/989130772988"
              target="_blank"
              rel="noreferrer"
            >
              Continue on WhatsApp ↗
            </a>
            <p className={styles.orderPhone}>
              Prefer a call? <a href="tel:+989130772988">+98 913 077 2988</a>
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
