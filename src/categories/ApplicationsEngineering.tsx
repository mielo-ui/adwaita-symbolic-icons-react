import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationsEngineering = (
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
        fillRule="evenodd"
        d="M7.996 8C4 8 2 11 2 14H.25c-.25 0-.25.156-.25.25v1.5c0 .25.137.25.25.25h15.492c.195.008.25-.129.25-.25v-1.5c.024-.145 0-.25-.25-.25h-1.746c0-3-2-6-6-6m0 3c2.352 0 3 1.762 3 3H5c0-1.2.7-3 2.996-3m0 0"
      />
      <path d="M14.988.602c-.281-.243-.625-.422-.965-.563L14 2.27c-.004.461-.453.731-1.004.731h-1c-.555-.008-1.004-.309-1-.77L11.02 0a3.6 3.6 0 0 0-.977.535C8.664 1.652 8.645 3.485 10 4.633c.285.242.625.422.969.562.027.012.027 2.055.027 2.055 1.488.75 2.352 1.75 3 2.75V5.25a3.6 3.6 0 0 0 .953-.55c1.38-1.118 1.395-2.95.04-4.098m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ApplicationsEngineering)
export default ForwardRef