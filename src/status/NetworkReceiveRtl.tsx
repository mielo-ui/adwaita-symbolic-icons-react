import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkReceiveRtl = (
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
      <path d="M12 1a1 1 0 0 1 .707.293l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L12.586 6H5c-.55 0-1-.45-1-1s.45-1 1-1h7.586l-1.293-1.293A1 1 0 0 1 12 1m0 0" />
      <path
        fillOpacity={0.349}
        d="M4 15a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L3.414 10H11c.55 0 1 .45 1 1s-.45 1-1 1H3.414l1.293 1.293A1 1 0 0 1 4 15m0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkReceiveRtl)
export default ForwardRef