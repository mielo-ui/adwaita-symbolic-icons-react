import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeLow = (
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
      d="M7 1.008a.99.99 0 0 0-.77.351L3 5H2C.906 5 0 5.844 0 7v2c0 1.09.91 2 2 2h1l3.23 3.64c.211.255.493.364.77.36zm2.957 2.98a1 1 0 0 0-.562.203 1 1 0 0 0-.196 1.403 3.996 3.996 0 0 1 0 4.812.998.998 0 1 0 1.594 1.207A6 6 0 0 0 12 8a6 6 0 0 0-1.207-3.613 1 1 0 0 0-.754-.399h-.086zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeLow)
export default ForwardRef