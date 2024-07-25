import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentProperties = (
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
      d="M4 0C2.355 0 1 1.355 1 3v10c0 1.645 1.355 3 3 3h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1h5.586L13 5.414V12c0 .55.45 1 1 1s1-.45 1-1V5a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 10 0zm4.64 6.168c-.199.004-.402.02-.597.047l1.172 2.074c.242.426-.028.914-.54 1.211l-.925.531c-.516.29-1.09.25-1.332-.176L5.246 7.781c-.25.309-.476.649-.617 1.02-.68 1.762.285 3.469 2.152 3.804.387.075.801.055 1.192.008C8.003 12.605 9.832 16 9.832 16l4.168.004-3.2-4.957c.247-.309.446-.652.587-1.02.68-1.765-.285-3.472-2.149-3.808a2.8 2.8 0 0 0-.597-.047zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentProperties)
export default ForwardRef