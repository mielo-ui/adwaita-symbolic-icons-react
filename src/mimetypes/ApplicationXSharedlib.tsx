import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationXSharedlib = (
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
      <path d="M13.617 7.059c.52.52.52 1.363 0 1.882l-4.676 4.676c-.52.52-1.363.52-1.882 0L2.383 8.941a1.33 1.33 0 0 1 0-1.882l4.676-4.676c.52-.52 1.363-.52 1.882 0zM5.648.977.977 5.648a3.32 3.32 0 0 0 0 4.704l4.671 4.671a3.32 3.32 0 0 0 4.704 0l4.671-4.671a3.32 3.32 0 0 0 0-4.704L10.352.977a3.32 3.32 0 0 0-4.704 0m0 0" />
      <path d="M9.434 4.559a.997.997 0 0 0-.77 1.586l.14.199c.274.379.227.953-.05 1.328l-.035.05c-.274.383-.809.602-1.25.458l-.23-.075a1 1 0 0 0-.618 1.903l.223.074c.445.145.738.64.75 1.106v.066c.015.465-.305.96-.75 1.105l-.223.075a1 1 0 0 0-.64 1.261.997.997 0 0 0 1.257.64l.23-.077c.446-.145.977.082 1.25.457a.3.3 0 0 0 .04.05l.054.09c.301-.113.59-.289.836-.535l.72-.718a4 4 0 0 1-.575-1.11l-.012-.035q-.006-.01-.011-.02c-.286-.843-.153-1.644 0-2.437.003-.004.007-.012.011-.016l.012-.039A3.95 3.95 0 0 1 11.207 8l.027-.016q.032-.021.063-.05a4 4 0 0 1 2.289-.715c.476 0 .93.086 1.351.234a2.3 2.3 0 0 0-.617-1.101l-1.75-1.75c-.066.41-.41.777-.804.902q-.034.013-.063.02c-.445.148-1.008.019-1.281-.36l-.14-.195a1.02 1.02 0 0 0-.653-.399q-.101-.017-.195-.011m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ApplicationXSharedlib)
export default ForwardRef