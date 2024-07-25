import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeLowRtl = (
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
      d="M9 1.008a.99.99 0 0 1 .77.351L13 5h1c1.094 0 2 .844 2 2v2c0 1.09-.91 2-2 2h-1l-3.23 3.64A.97.97 0 0 1 9 15zm-2.957 2.98c.2.012.394.074.562.203.442.332.532.961.196 1.403a3.996 3.996 0 0 0 0 4.812.998.998 0 1 1-1.594 1.207A6 6 0 0 1 4 8a6 6 0 0 1 1.207-3.613c.184-.246.465-.383.754-.399h.086zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeLowRtl)
export default ForwardRef