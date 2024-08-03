import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiActivities = (
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
      d="M8 0C3.594 0 0 3.594 0 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8m0 2c.04 0 .074.004.113.008a4.98 4.98 0 0 0 1.43 4.601 5 5 0 0 0 4.453 1.286q.002.052.004.105c0 3.324-2.676 6-6 6q-.06-.001-.113-.008a5.01 5.01 0 0 0-1.282-4.46 5 5 0 0 0-3.351-1.524 4.8 4.8 0 0 0-1.246.097Q2 8.052 2 8c0-3.324 2.676-6 6-6m1.113.105a5.98 5.98 0 0 1 4.782 4.786 3.98 3.98 0 0 1-3.66-1.004 3.98 3.98 0 0 1-1.122-3.782M3.207 9.004c.992.05 1.953.473 2.676 1.223a4 4 0 0 1 1.008 3.668 5.975 5.975 0 0 1-4.786-4.79 4 4 0 0 1 1.102-.101m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiActivities)
export default ForwardRef