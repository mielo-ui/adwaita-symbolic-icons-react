import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ColorimeterColorhug = (
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
      d="M7.297-.012c-.078 0-.16.004-.234.012a2.54 2.54 0 0 0-1.25.5C5.324.871 5 1.457 5 2.188V6H2.727A.725.725 0 0 0 2 6.727v6.546c0 .403.324.727.727.727h5.546A.725.725 0 0 0 9 13.273V6.727A.725.725 0 0 0 8.273 6H6V2.188c0-.45.172-.704.438-.907S7.102.981 7.5 1s.785.152 1.063.406.468.586.468 1.125c0 2.164 1.465 3.508 3 3.469.856-.023 1.688-.477 2.25-1.312l-.562-1C13.344 4.602 12.652 4.984 12 5c-.96.023-1.969-.73-1.969-2.469 0-.793-.336-1.445-.812-1.875S8.137.027 7.53 0zM14 2v.125l.781 1.375q.016-.06.031-.125zm0 .344c-.008.105-.02.215-.031.312l.719 1.219c.023-.062.042-.121.062-.187zm-.062.5c-.016.09-.043.168-.063.25l.656 1.125c.031-.063.067-.125.094-.188zm-.094.437c-.024.09-.067.168-.094.25l.594 1.031c.039-.066.09-.117.125-.187zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ColorimeterColorhug)
export default ForwardRef