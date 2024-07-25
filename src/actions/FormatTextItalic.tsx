import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextItalic = (
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
      d="M5 3v2h6c.43 0 .61.281.48.73L11.133 7H5.89C4.05 7 2.758 8.344 2.387 9.738c-.188.7-.176 1.48.238 2.157.41.675 1.25 1.105 2.156 1.105h6.762l1.863-6.73C13.844 4.7 12.68 3 11 3zm.89 6h4.684l-.554 2H4.78c-.394 0-.406-.07-.449-.145-.047-.074-.098-.293-.016-.593C4.476 9.656 5.046 9 5.891 9m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextItalic)
export default ForwardRef