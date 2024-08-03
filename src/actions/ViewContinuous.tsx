import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewContinuous = (
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
      <path
        fillOpacity={0.349}
        d="M5.5 0c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h5c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h5c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 8c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h5c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h5c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 0"
      />
      <path d="M15 7H1v2h14zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewContinuous)
export default ForwardRef