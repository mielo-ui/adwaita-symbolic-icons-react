import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AppointmentSoon = (
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
      d="M6.5 0C2.922 0 0 2.922 0 6.5S2.922 13 6.5 13c.172 0 .332-.02.5-.031v-2.031c-.168.019-.328.062-.5.062C4.004 11 2 8.996 2 6.5S4.004 2 6.5 2 11 4.004 11 6.5c0 .172-.043.332-.062.5h2.03c.012-.168.032-.328.032-.5C13 2.922 10.078 0 6.5 0m0 3c-.277 0-.5.223-.5.5V6H4.5c-.277 0-.5.223-.5.5s.223.5.5.5h2c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5m0 0"
    />
    <path
      fill="currentColor"
      d="M8.875 8.07A.86.86 0 0 0 8 8.937v6.196a.86.86 0 0 0 .875.867h6.25a.86.86 0 0 0 .875-.867V8.938a.86.86 0 0 0-.875-.868zM11 9h2v2.5s0 .5-.5.5h-1c-.5 0-.5-.5-.5-.5zm.5 4h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
      className="warning"
    />
  </svg>
)
const ForwardRef = forwardRef(AppointmentSoon)
export default ForwardRef