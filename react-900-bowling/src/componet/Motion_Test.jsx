import React from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

const Motion_Test = () => {
  const motionSpringSetting = { stiffness: 170, damping: 26 };

  const motionDefaultStyle = {
    x: x + aid.math.getRandomInt(-45, 45),
    y: y + aid.math.getRandomInt(-45, 45),
    z: z + aid.math.getRandomInt(-45, 45),
    rotateX: rotateX + aid.math.getRandomInt(-45, 45),
    rotateY: rotateY + aid.math.getRandomInt(-45, 45),
    rotateZ: rotateZ + aid.math.getRandomInt(-45, 45),
    scale: aid.math.getRandomFloat(0.35, 0.65),
  };
  const WorkItemWrap = styled.div.attrs({
    style: ({ x, y, z, rotateX, rotateY, rotateZ, scale }) => ({
      transform: `translate3d(${x}px,${y}px, ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
    }),
  })`
    position: absolute;
    ...
    transform-style: preserve-3d;
    transition-delay: 0s;
    transition-duration: 0.25s;
    transition-property: all;
    transition-timing-function: ease-out;
    perspective(2000px);
  `;

  return (
    <Motion
      defaultStyle={motionDefaultStyle}
      style={{
        x: spring(x, motionSpringSetting),
        y: spring(y, motionSpringSetting),
        z: spring(z, motionSpringSetting),
        rotateX: spring(rotateX, motionSpringSetting),
        rotateY: spring(rotateY, motionSpringSetting),
        rotateZ: spring(rotateZ, motionSpringSetting),
        scale: spring(1, motionSpringSetting),
      }}
    >
      {(interpolatedStyle) => (
        <WorkItemWrap {...interpolatedStyle}> ... </WorkItemWrap>
      )}
    </Motion>
  );
};

export default Motion_Test;
