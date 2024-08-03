import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkVpnAcquiring = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M3 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0" />
      <path
        fillOpacity={0.349}
        d="M7.918 1A2.91 2.91 0 0 0 5 3.918V5h2V4c0-.555.445-1 1-1s1 .445 1 1v1h2V3.918A2.91 2.91 0 0 0 8.082 1zM7 11v1.219c-.316.18-.578.441-.758.758H2.996c-.55 0-1 .449-1 1s.45 1 1 1h3.285c.364.601 1.012.972 1.715.972s1.356-.37 1.719-.972h3.293c.55 0 1-.45 1-1 0-.551-.45-1-1-1H9.75a2.04 2.04 0 0 0-.75-.754V11zm.996 1.938c.555 0 1.008.449 1.004 1.007a1.007 1.007 0 1 1-1.004-1.008m0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkVpnAcquiring)
export default ForwardRef