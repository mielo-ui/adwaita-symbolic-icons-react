import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkNoRoute = (
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
    <g fill="currentColor">
      <path d="M8.168 3.008a2.95 2.95 0 0 0-1.3.222A3 3 0 0 0 5.015 6h2a1 1 0 1 1 1 1c-.551 0-1 .45-1 1v2h2V8.82a3.02 3.02 0 0 0 1.773-1.672 3.01 3.01 0 0 0-.652-3.27 3 3 0 0 0-1.969-.87M8.016 11c-.551 0-1 .45-1 1s.449 1 1 1 1-.45 1-1-.45-1-1-1m0 0" />
      <path
        fillOpacity={0.349}
        d="M12 1a1 1 0 0 0-.707 1.707L12.586 4h-.941c.343.582.527 1.242.53 1.91l-.01.09h.42l-.46.457a3.8 3.8 0 0 1-.992 2.035 1 1 0 0 0 .16.215 1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 12 1M4.426 4.184A1 1 0 0 0 4 5c0 .105.02.203.05.3a3.8 3.8 0 0 1 .376-1.116M4 7a1 1 0 0 0-.707.293l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 1 0 1.414-1.414L3.414 12H6v-2H3.414l1.293-1.293a1 1 0 0 0 .219-.34 3.9 3.9 0 0 1-.754-1.351A1 1 0 0 0 4 7m6 3v2h1c.55 0 1-.45 1-1s-.45-1-1-1zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkNoRoute)
export default ForwardRef