import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const HelpAbout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path d="M7.996.02c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m0 2c3.332 0 6 2.668 6 6s-2.668 6-6 6-6-2.668-6-6 2.668-6 6-6m0 1.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25M6.473 7.02a.5.5 0 0 0 .023 1h.5v3h-.5c-.277 0-.5.222-.5.5 0 .277.223.5.5.5h3c.277 0 .5-.223.5-.5 0-.278-.223-.5-.5-.5h-.5v-4H6.473m0 0" />
  </svg>
)
const ForwardRef = forwardRef(HelpAbout)
export default ForwardRef