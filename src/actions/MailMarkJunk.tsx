import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailMarkJunk = (
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
      d="M5.105 0a1 1 0 0 0-.707.293L.297 4.395a.98.98 0 0 0-.29.707v5.796a.97.97 0 0 0 .294.707l4.097 4.102a1 1 0 0 0 .707.293h5.801a1 1 0 0 0 .707-.293l4.102-4.102a1 1 0 0 0 .293-.707V5.102a.99.99 0 0 0-.297-.707L11.613.293A1 1 0 0 0 10.906 0zm.415 2h4.968l3.52 3.512v4.972L10.492 14H5.52l-3.512-3.512V5.516zM7 4v3l.281 2H8.75L9 7V4zm1 5.75A1.249 1.249 0 1 0 9.25 11c0-.691-.559-1.25-1.25-1.25m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MailMarkJunk)
export default ForwardRef