import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryLevel_10 = (
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
    <path
      fill=""
      d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.45.355C2.814 2.727 2 3.668 2 5v8s-.016.707.355 1.45C2.727 15.187 3.668 16 5 16h2v-2H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1h6c.555 0 1 .445 1 1v2h2V5c0-1.332-.812-2.273-1.55-2.645C11.706 1.985 11 2 11 2h-1V1c0-1-1-1-1-1zm0 0"
    />
    <path fill="#ed333b" d="M5 12v1h2v-1zm0 0" className="prefix__error" />
    <path
      fill="#ff7800"
      d="M9.5 8C8.668 8 8 8.668 8 9.5v5c0 .832.668 1.5 1.5 1.5h5c.832 0 1.5-.668 1.5-1.5v-5c0-.832-.668-1.5-1.5-1.5zM11 9h2v2.5s0 .5-.5.5h-1c-.5 0-.5-.5-.5-.5zm.5 4h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
      className="prefix__warning"
    />
  </svg>
)
const ForwardRef = forwardRef(BatteryLevel_10)
export default ForwardRef