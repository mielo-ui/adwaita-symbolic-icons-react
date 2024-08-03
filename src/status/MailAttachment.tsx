import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailAttachment = (
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
      d="M9.75.277c-.89 0-1.781.34-2.457 1.016l-3.5 3.5q-.03.029-.059.062c-.07.082-.574.63-.793 1.438-.218.805-.058 1.973.84 2.902.914.942 2.13 1.094 2.946.868.812-.231 1.222-.586 1.5-.875l1.98-1.981a1 1 0 1 0-1.414-1.414l-2 2c-.008.004-.012.012-.02.02.114-.118-.289.238-.59.324-.296.082-.5.148-.964-.332-.485-.5-.422-.711-.348-.989.074-.273.258-.503.387-.66l3.449-3.449c.645-.644 1.441-.644 2.086 0l2.5 2.5c.645.645.645 1.441 0 2.086l-6 6s-.184.184-.473.375S6.168 14 6 14H3c-.168 0-.45-.113-.668-.332S2 13.168 2 13V9c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .832.387 1.55.918 2.082S2.168 16 3 16h3c.832 0 1.469-.36 1.93-.668s.777-.625.777-.625l6-6a3.48 3.48 0 0 0 0-4.914l-2.5-2.5A3.47 3.47 0 0 0 9.75.277m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MailAttachment)
export default ForwardRef