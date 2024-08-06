import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AppointmentMissed = (
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
      fillOpacity={0.35}
      d="M6.5 0C2.922 0 0 2.922 0 6.5S2.922 13 6.5 13c.172 0 .332-.02.5-.031v-2.031c-.168.019-.328.062-.5.062C4.004 11 2 8.996 2 6.5S4.004 2 6.5 2 11 4.004 11 6.5c0 .172-.043.332-.062.5h2.03c.012-.168.032-.328.032-.5C13 2.922 10.078 0 6.5 0m0 3c-.277 0-.5.223-.5.5V6H4.5c-.277 0-.5.223-.5.5s.223.5.5.5h2c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5m0 0"
    />
    <path
      fill="currentColor"
      d="M11.715 8.012a3.999 3.999 0 0 0-2.543 6.816 3.999 3.999 0 1 0 2.543-6.816m-1.13 1.57c.255 0 .513.102.708.297l.707.707.707-.707a1 1 0 1 1 1.414 1.414l-.707.707.707.707a1 1 0 1 1-1.414 1.414L12 13.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707-.707-.707a1.004 1.004 0 0 1 .707-1.71m0 0"
      className="error"
    />
  </svg>
)
const ForwardRef = forwardRef(AppointmentMissed)
export default ForwardRef