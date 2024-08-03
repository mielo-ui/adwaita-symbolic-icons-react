import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryLevel_100Charged = (
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
      <path d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.45.355C2.814 2.727 2 3.668 2 5v8s-.016.707.355 1.445C2.727 15.187 3.668 16 5 16h5v-2H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1h6c.555 0 1 .445 1 1v2h2V5c0-1.332-.812-2.273-1.55-2.645C11.706 1.985 11 2 11 2h-1V1c0-1-1-1-1-1zM5 5v8h3v-1c0-.531.21-1.04.586-1.414L11 8.172V5zm0 0" />
      <path d="M13 8v.008a1 1 0 0 0-.707.285l-3 3A1 1 0 0 0 9 12v1h3.133l-.965 1.445a.97.97 0 0 0-.16.555H11v1h1v-.004c.266 0 .52-.101.707-.289l3-3a1 1 0 0 0 .29-.707H16v-1h-3.133l.965-1.445c.11-.164.168-.36.168-.555V8zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(BatteryLevel_100Charged)
export default ForwardRef