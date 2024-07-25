import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherClear = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="#222">
      <path d="M15 7h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1m-2.754-4.66-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414M7.004.992v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0m-4.66 2.75.707.707a1 1 0 1 0 1.414-1.414l-.707-.707a.99.99 0 0 0-.965-.258.994.994 0 0 0-.45 1.672M.996 8.984h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2m2.754 4.664.707-.707a1 1 0 1 0-1.414-1.414l-.711.707a1.007 1.007 0 0 0 0 1.414c.39.391 1.027.391 1.418 0m5.242 1.348v-1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0m4.66-2.754-.707-.707a1.01 1.01 0 0 0-.968-.262 1.01 1.01 0 0 0-.707.711 1 1 0 0 0 .261.965l.707.707a.995.995 0 0 0 1.672-.445 1 1 0 0 0-.258-.969M8 10c-1.098 0-2-.902-2-2s.902-2 2-2 2 .902 2 2-.902 2-2 2m0-6C5.785 4 4 5.785 4 8s1.785 4 4 4 4-1.785 4-4-1.785-4-4-4m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(WeatherClear)
export default ForwardRef