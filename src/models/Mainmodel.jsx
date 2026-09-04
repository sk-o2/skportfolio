import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import MainmodelScene from "../assets/3d/mainmodel.glb";

export function Mainmodel({
  isRotating,
  setIsRotating,
  setCurrentStage,
  targetRotation,
  setTargetRotation,
  autoTour = false,
  onHeadingChange,
  ...props
}) {
  const mainmodelRef = useRef();
  const { gl, viewport } = useThree();
  const { scene } = useGLTF(MainmodelScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);
    if (setTargetRotation) setTargetRotation(null);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      mainmodelRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      if (setTargetRotation) setTargetRotation(null);
      mainmodelRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      if (setTargetRotation) setTargetRotation(null);
      mainmodelRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    if (setTargetRotation) setTargetRotation(null);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      mainmodelRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (targetRotation !== null && targetRotation !== undefined && !isRotating) {
      const twoPi = Math.PI * 2;
      const currentRot = mainmodelRef.current.rotation.y;
      let diff = (targetRotation - (currentRot % twoPi) + twoPi) % twoPi;
      if (diff > Math.PI) diff -= twoPi;

      if (Math.abs(diff) > 0.005) {
        mainmodelRef.current.rotation.y += diff * 0.08;
      } else {
        mainmodelRef.current.rotation.y = currentRot + diff;
        if (setTargetRotation) setTargetRotation(null);
      }
    } else if (autoTour && !isRotating) {
      mainmodelRef.current.rotation.y -= 0.004;
    } else if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      mainmodelRef.current.rotation.y += rotationSpeed.current;
    }

    const rotation = mainmodelRef.current.rotation.y;
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    if (onHeadingChange) {
      onHeadingChange(normalizedRotation);
    }

    switch (true) {
      case normalizedRotation >= 5.40 && normalizedRotation <= 5.80:
        setCurrentStage(5);
        break;
      case (normalizedRotation >= 5.95 && normalizedRotation <= 2 * Math.PI) ||
        (normalizedRotation >= 0 && normalizedRotation <= 0.30):
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.30:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.40 && normalizedRotation <= 2.60:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        if (isRotating || autoTour) {
          setCurrentStage(null);
        }
    }
  });

  return (
    <a.primitive
      ref={mainmodelRef}
      position={[0, -2.5, -1]}
      object={scene}
      scale={window.innerWidth < 640 ? 0.008 : 0.01}
      {...props}
    />
  );
}
