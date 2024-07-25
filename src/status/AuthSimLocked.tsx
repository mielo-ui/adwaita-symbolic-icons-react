import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AuthSimLocked = (
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
      <path d="M13 9c-1.098 0-2 .902-2 2v1h-1v4h6v-4h-1v-1c0-1.098-.902-2-2-2m0 1c.563 0 1 .438 1 1v1h-2v-1c0-.562.438-1 1-1m0 0" />
      <path
        fillOpacity={0.349}
        d="M4 0C2 0 2 2 2 2v12c0 2 2 2 2 2h5v-5H4V9h6.668A3.03 3.03 0 0 1 13 7.875c.352 0 .688.074 1 .188V3l-3-3zm1 6 1 .008v2H4V7s0-1 1-1m6 0c1 0 1 1 1 1l-.004 1h-2V6zm-4 .008h2v2H7zm-3 5.996h2v2L5 14c-1 0-1-1-1-1zm3 0h2v2H7zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(AuthSimLocked)
export default ForwardRef