import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NightLight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M3.05 2.05a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3m0 2c.184 0 .367.02.55.05A2 2 0 0 0 9 9c.93 0 1.738-.645 1.95-1.55A3 3 0 1 1 8 5M1 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m14 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M3.05 11.95a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 14c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NightLight)
export default ForwardRef