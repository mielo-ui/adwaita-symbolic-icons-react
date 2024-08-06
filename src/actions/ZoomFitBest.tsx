import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ZoomFitBest = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 1C2.34 1 1 2.34 1 4v8c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm0 2h3.012v2h-2v2h-2L3 4q.002-.194.074-.375c.004-.004.004-.008.008-.012a1 1 0 0 1 .203-.308l.02-.02a1 1 0 0 1 .308-.203q.005-.007.016-.008A1 1 0 0 1 4 3m5 0h3.012c.125 0 .254.027.37.074.005.004.013.004.016.008a1 1 0 0 1 .305.203c.008.008.016.012.02.02q.136.134.207.308.001.005.007.016.069.176.075.371L13 7h-2V5H9zM3.012 9h2v2h2v2H4q-.194-.002-.375-.074-.006-.004-.012-.008a1 1 0 0 1-.308-.203l-.02-.02a1 1 0 0 1-.203-.308q-.007-.005-.008-.016A1 1 0 0 1 3 12zM11 9h2l.012 3a1.1 1.1 0 0 1-.075.375q-.003.006-.007.012a1 1 0 0 1-.203.308q-.013.01-.02.02a1 1 0 0 1-.324.21 1 1 0 0 1-.371.075H9v-2h2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ZoomFitBest)
export default ForwardRef