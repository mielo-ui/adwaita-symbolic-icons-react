import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeMedium = (
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
      <path d="M7 1.008a.99.99 0 0 0-.77.351L3 5H2C.906 5 0 5.844 0 7v2c0 1.09.91 2 2 2h1l3.23 3.64c.211.255.493.364.77.36zm3.04 2.98A1.004 1.004 0 0 0 9 4.996v.066a.96.96 0 0 0 .2.528 4 4 0 0 1 0 4.816 1 1 0 0 0-.2.531v.067c0 .305.133.605.395.805a1 1 0 0 0 1.398-.2C11.598 10.543 12 9.273 12 8a6 6 0 0 0-1.207-3.613 1 1 0 0 0-.754-.399m0 0" />
      <path
        fillOpacity={0.349}
        d="M13.46 1.969a1 1 0 0 0-.558.168 1.005 1.005 0 0 0-.27 1.39 7.995 7.995 0 0 1 0 8.946 1.005 1.005 0 0 0 .27 1.39 1.005 1.005 0 0 0 1.391-.27 10.015 10.015 0 0 0 0-11.187 1 1 0 0 0-.832-.437m0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeMedium)
export default ForwardRef