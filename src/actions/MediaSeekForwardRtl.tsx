import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaSeekForwardRtl = (
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
      <path d="M7 4.004a.97.97 0 0 0-.516.14l-5 3a1 1 0 0 0 0 1.715l5 3c.157.094.336.141.516.141v.004c1-.004 1-1 1-1v-6s.004-1-1-1m0 0" />
      <path d="M14 4.004a.97.97 0 0 0-.516.14l-5 3a1 1 0 0 0 0 1.715l5 3c.157.094.336.141.516.141v.004c1-.004 1-1 1-1v-6s.004-1-1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MediaSeekForwardRtl)
export default ForwardRef