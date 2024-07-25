import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryLevel_10Charging = (
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
    <path fill="#33d17a" d="M5 12v1h3v-1zm0 0" className="prefix__success" />
    <path
      fill=""
      d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.445.355C2.813 2.727 2 3.668 2 5v8s-.016.707.355 1.45C2.727 15.187 3.668 16 5 16h5v-2H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1h6c.555 0 1 .445 1 1v2h2V5c0-1.332-.812-2.273-1.55-2.645C11.706 1.985 11 2 11 2h-1V1c0-1-1-1-1-1zm6 8v.008a1 1 0 0 0-.707.285l-3 3A1 1 0 0 0 9 12v1h3.133l-.965 1.445a1 1 0 0 0-.16.555H11v1h1v-.004c.266 0 .52-.101.707-.289l3-3a1 1 0 0 0 .29-.707H16v-1h-3.129l.961-1.445c.11-.164.168-.36.168-.555V8zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(BatteryLevel_10Charging)
export default ForwardRef