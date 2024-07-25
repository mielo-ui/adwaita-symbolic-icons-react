import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentEdit = (
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
      d="M12.277.832c-.578.008-1.168.23-1.691.754l-9 9A2 2 0 0 0 1 12v3h3c.531 0 1.04-.21 1.414-.586l9-9c1.79-1.789.082-4.39-1.89-4.57-.083-.012-.165-.012-.247-.012M10.5 4.437 11.563 5.5 4.5 12.563 3.438 11.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentEdit)
export default ForwardRef