import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaPlaybackStart = (
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
    <path
      fill=""
      d="M2 2.5v11c0 1.5 1.27 1.492 1.27 1.492h.128c.247.004.489-.05.7-.172l9.797-5.597c.433-.243.656-.735.656-1.227s-.223-.984-.656-1.223L4.098 1.176a1.4 1.4 0 0 0-.7-.176H3.27S2 1 2 2.5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaPlaybackStart)
export default ForwardRef