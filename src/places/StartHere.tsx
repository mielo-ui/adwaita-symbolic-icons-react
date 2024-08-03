import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const StartHere = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.629.004c-3.324 0-3.95 4.738-2.078 4.738 1.87 0 5.402-4.738 2.078-4.738M8.496.586q-.084 0-.168.012C6.457.84 7.113 4.09 8.11 4.152c.965.059 2.02-3.558.387-3.566M5.254 1.87a1 1 0 0 0-.324.074c-1.504.621-.23 3.184.613 3.008.773-.156.875-3.105-.29-3.082M2.855 3.88a.73.73 0 0 0-.421.144c-1.204.832.406 2.84 1.113 2.532.621-.274.223-2.645-.692-2.676M9.73 5.418c-2.582-.043-5.984 1.25-6.562 3.848-.629 2.816 2.586 6.718 5.941 6.718 1.653 0 3.555-1.492 3.914-3.382.27-1.438-3.203-.86-3.078.093.149 1.14-.84 1.707-1.804.97-3.082-2.345 5.093-3.517 4.558-6.716-.168-1-1.422-1.504-2.969-1.531m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(StartHere)
export default ForwardRef