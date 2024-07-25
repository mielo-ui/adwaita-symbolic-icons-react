import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PackageXGeneric = (
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
      <path d="M4.023.996A3.043 3.043 0 0 0 .996 4.023v7.91a3.043 3.043 0 0 0 3.027 3.028h7.95A3.043 3.043 0 0 0 15 11.934v-7.91A3.043 3.043 0 0 0 11.973.995zm0 2h7.95c.586 0 1.027.442 1.027 1.027v7.91c0 .587-.441 1.028-1.027 1.028h-7.95a1.005 1.005 0 0 1-1.027-1.027v-7.91c0-.587.442-1.028 1.027-1.028m0 0" />
      <path d="M4.023 1A3.043 3.043 0 0 0 .996 4.027v.946s1.39 2.03 3.027 2.03h7.95c1.468 0 3.027-2.03 3.027-2.03v-.946A3.043 3.043 0 0 0 11.973 1zm0 2h7.95C12.559 3 13 3.441 13 4.027v.946C13 5.559 12.559 6 11.973 6h-7.95a1.004 1.004 0 0 1-1.027-1.027v-.946C2.996 3.441 3.438 3 4.023 3m0 0" />
      <path d="M7 .996h2v10.031l-2-.988zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(PackageXGeneric)
export default ForwardRef