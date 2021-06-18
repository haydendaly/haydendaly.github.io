import React, { useContext } from "react";
import Particles from "react-particles-js";

import { StyleContext, StyleContextType } from "~/functions/Style";

function LinksBg() {
  const { isDark } = useContext(StyleContext) as StyleContextType;
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 2,
          },
          color: {
            value: isDark ? "#bbb" : "#3a3a3a",
          },
          line_linked: {
            color: {
              value: isDark ? "#77abb7" : "#77abb7",
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

function BubblesBg() {
  const { isDark } = useContext(StyleContext) as StyleContextType;
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          color: {
            value: isDark ? "#bbb" : "#3a3a3a",
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export { LinksBg, BubblesBg };
