import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceGlasses = (
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
      d="M8 1a6.99 6.99 0 0 0-6.313 4H4.25a2 2 0 0 1 1.719-.969c.566 0 1.072.244 1.437.625.2-.132.413-.156.563-.156.165 0 .394.022.593.156A1.99 1.99 0 0 1 10 4.031 2 2 0 0 1 11.719 5h2.594A6.99 6.99 0 0 0 8 1M5.969 5.031c-.563 0-1 .438-1 1V7c0 .563.437 1 1 1s1-.437 1-1v-.969c0-.562-.438-1-1-1m4.031 0c-.563 0-1 .438-1 1V7c0 .563.437 1 1 1s1-.437 1-1v-.969c0-.562-.437-1-1-1m-2.031.782c0 .009-.032.021-.031.03.006.063.03.124.03.188V7c0 1.1-.9 2-2 2-1.099 0-2-.9-2-2V6H1.282A7 7 0 0 0 1 8a7 7 0 0 0 14 0 7 7 0 0 0-.281-2H12v1c0 1.1-.9 2-2 2s-2-.9-2-2v-.969c0-.042-.003-.083 0-.125v-.062zM3 10.063c.997.636 4.016.937 5 .937s3.805.03 5-.938v.5c0 .681-1.744 1.407-5 1.407s-5-.874-5-1.406z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceGlasses)
export default ForwardRef