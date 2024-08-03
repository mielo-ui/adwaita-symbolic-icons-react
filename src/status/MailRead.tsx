import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailRead = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.502}
      d="M8 .98c-.48 0-.96.133-1.387.391L1.328 4.625A2.79 2.79 0 0 0 0 7v6c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7a2.79 2.79 0 0 0-1.328-2.375l-5.29-3.254A2.66 2.66 0 0 0 8 .981m0 2c.117 0 .234.036.336.098l5.289 3.25a.8.8 0 0 1 .223.203 1 1 0 0 0-.125.051l-5.168 3.445a.99.99 0 0 1-1.11 0L2.277 6.582a1 1 0 0 0-.125-.05.8.8 0 0 1 .223-.204l5.285-3.25A.63.63 0 0 1 8 2.98M2 7.602l4.89 3.257c.673.45 1.548.45 2.22 0L14 7.602V13c0 .563-.437 1-1 1H3c-.562 0-1-.437-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MailRead)
export default ForwardRef