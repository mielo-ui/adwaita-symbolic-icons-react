import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AppointmentNew = (
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
      d="M6.5 0C2.922 0 0 2.922 0 6.5S2.922 13 6.5 13q.253-.001.5-.02v-2.007Q6.753 11 6.5 11C4.004 11 2 8.996 2 6.5S4.004 2 6.5 2a4.486 4.486 0 0 1 4.473 5h2.007q.019-.247.02-.5C13 2.922 10.078 0 6.5 0m0 3c-.277 0-.5.223-.5.5V6H4.5c-.277 0-.5.223-.5.5s.223.5.5.5h2c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5M11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AppointmentNew)
export default ForwardRef