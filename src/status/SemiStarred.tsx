import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SemiStarred = (
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
      fillOpacity={0.349}
      d="M8 0v4.21l.68 2.071c.129.41.511.692.941.696l2.254.007-1.7 1.2a1 1 0 0 0-.366 1.148l.765 2.191L8.61 10.22c-.203-.059-.406-.11-.609-.164v2.222l.047-.03 3.898 2.589c.801.527 1.813-.262 1.496-1.164l-1.5-4.29 3.641-2.573c.793-.563.398-1.813-.574-1.817l-4.656-.015L8.949.69A1 1 0 0 0 8 .004zm0 0"
    />
    <path
      fill="currentColor"
      d="M8 0c-.43 0-.812.277-.95.684l-1.448 4.34-4.59-.016C.027 5-.375 6.262.43 6.824l3.629 2.559-1.5 4.285c-.317.902.687 1.691 1.488 1.172L8 12.277zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SemiStarred)
export default ForwardRef