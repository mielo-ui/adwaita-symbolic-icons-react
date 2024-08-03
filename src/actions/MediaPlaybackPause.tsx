import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaPlaybackPause = (
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
      <path d="M3 1h3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1M10 1h3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MediaPlaybackPause)
export default ForwardRef