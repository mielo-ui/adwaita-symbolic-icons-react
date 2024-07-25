import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewSortAscending = (
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
      <path d="M6.5 6c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h5c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h7c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h9c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zM3 16c-.55 0-1-.45-1-1V4H0V3h.008a1 1 0 0 1 .285-.707l2-2a1 1 0 0 1 1.414 0l2 2c.184.187.29.441.29.707H6v1H4v11c0 .55-.45 1-1 1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewSortAscending)
export default ForwardRef