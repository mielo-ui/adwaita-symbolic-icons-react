import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewSortDescendingRtl = (
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
      <path d="M13 0c.55 0 1 .45 1 1v11h2v1h-.008a1 1 0 0 1-.285.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.29-.707H10v-1h2V1c0-.55.45-1 1-1M9.5 10c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5h-5c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5zm0-3c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5h-7c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5zm0-3c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5h-9c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewSortDescendingRtl)
export default ForwardRef