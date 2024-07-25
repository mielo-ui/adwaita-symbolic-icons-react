import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewPagedRtl = (
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
      <path
        fillOpacity={0.349}
        d="M7.5 4c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h3c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h3c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 0"
      />
      <path d="M12 0c1.645 0 3 1.355 3 3v7c0 1.645-1.355 3-3 3H6c-1.645 0-3-1.355-3-3V3c0-1.645 1.355-3 3-3zm0 2H6c-.57 0-1 .43-1 1v7c0 .57.43 1 1 1h6c.57 0 1-.43 1-1V3c0-.57-.43-1-1-1M1 4c.55 0 1 .45 1 1v8c0 .55.45 1 1 1h7c.55 0 1 .45 1 1s-.45 1-1 1H3a3 3 0 0 1-3-3V5c0-.55.45-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewPagedRtl)
export default ForwardRef