import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const LocationServicesDisabled = (
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
      d="M8 0a5.97 5.97 0 0 0-4.68 2.258L1.531.468.47 1.532l14 14 1.062-1.062-3.652-3.653c.45-.546.855-1.082 1.168-1.57.262-.414.469-.808.586-1.172l-.02.004c.25-.664.383-1.367.387-2.078a6 6 0 0 0-6-6m0 3.695a2.305 2.305 0 0 1 1.094 4.336L5.969 4.906A2.3 2.3 0 0 1 8 3.696m-5.937 1.43C2.023 5.415 2 5.703 2 6a6 6 0 0 0 .387 2.082l-.016-.008C3.008 10.063 6.152 13.156 8 15v.004V15a93 93 0 0 0 1.945-1.992zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(LocationServicesDisabled)
export default ForwardRef