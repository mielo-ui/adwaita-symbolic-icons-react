import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ChannelInsecure = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 0C5.8 0 4 1.8 4 4v1c0 .55.45 1 1 1s1-.45 1-1V4c0-1.125.875-2 2-2s2 .875 2 2v3h2V4c0-2.2-1.8-4-4-4M4 8c-1.11 0-2 .89-2 2v5c0 .555.445 1 1 1h4V8zm0 0"
    />
    <path
      fill="#ff7800"
      d="M9.5 8C8.668 8 8 8.668 8 9.5v5c0 .832.668 1.5 1.5 1.5h5c.832 0 1.5-.668 1.5-1.5v-5c0-.832-.668-1.5-1.5-1.5zM11 9h2v2.5s0 .5-.5.5h-1c-.5 0-.5-.5-.5-.5zm.5 4h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
      className="prefix__warning"
    />
  </svg>
)
const ForwardRef = forwardRef(ChannelInsecure)
export default ForwardRef