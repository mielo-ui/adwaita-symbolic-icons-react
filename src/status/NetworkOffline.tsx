import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkOffline = (
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
    <g fill="">
      <path
        fillOpacity={0.349}
        d="M12 1a1 1 0 0 0-.707 1.707L12.586 4H5c-.55 0-1 .45-1 1s.45 1 1 1h7.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 12 1M4 7a1 1 0 0 0-.707.293l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 1 0 1.414-1.414L3.414 12H9v-2H3.414l1.293-1.293A1 1 0 0 0 4 7m0 0"
      />
      <path d="M15 10a1 1 0 0 1 .707 1.707L14.414 13l1.293 1.293a1 1 0 1 1-1.414 1.414L13 14.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L11.586 13l-1.293-1.293a1 1 0 1 1 1.414-1.414L13 11.586l1.293-1.293A1 1 0 0 1 15 10m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkOffline)
export default ForwardRef