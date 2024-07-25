import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewSortAscendingRtl = (
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
      <path d="M9.5 14c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5h-5c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5zm0-3c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5h-7c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5zm0-3c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5h-9c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5zM13 16c.55 0 1-.45 1-1V4h2V3h-.008a1 1 0 0 0-.285-.707l-2-2a1 1 0 0 0-1.414 0l-2 2c-.184.187-.29.441-.29.707H10v1h2v11c0 .55.45 1 1 1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewSortAscendingRtl)
export default ForwardRef