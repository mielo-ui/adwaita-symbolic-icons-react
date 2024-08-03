import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewPaged = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path
        fillOpacity={0.349}
        d="M9 5.5v-1c0-.277-.223-.5-.5-.5h-3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h3c.277 0 .5-.223.5-.5m0 0"
      />
      <path d="M4 0C2.355 0 1 1.355 1 3v7c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h6c.57 0 1 .43 1 1v7c0 .57-.43 1-1 1H4c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1m11 2c-.55 0-1 .45-1 1v8c0 .55-.45 1-1 1H6c-.55 0-1 .45-1 1s.45 1 1 1h7a3 3 0 0 0 3-3V5c0-.55-.45-1-1-1m0 0" />
      <path
        fillOpacity={0.349}
        d="M9 8.5v-1c0-.277-.223-.5-.5-.5h-3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h3c.277 0 .5-.223.5-.5m0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewPaged)
export default ForwardRef