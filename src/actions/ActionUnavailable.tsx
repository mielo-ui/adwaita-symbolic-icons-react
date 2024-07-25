import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ActionUnavailable = (
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
      d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m0 2c3.332 0 6 2.668 6 6 0 1.3-.406 2.504-1.105 3.48l-8.38-8.375A5.98 5.98 0 0 1 8 2M3.105 4.52l8.38 8.375A5.98 5.98 0 0 1 8 14c-3.332 0-6-2.668-6-6 0-1.3.406-2.504 1.105-3.48m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ActionUnavailable)
export default ForwardRef