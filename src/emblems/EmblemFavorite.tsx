import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmblemFavorite = (
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
      fillRule="evenodd"
      d="M11.848 1a4.28 4.28 0 0 0-3.004 1.121l-.864.77-.859-.77a4.27 4.27 0 0 0-4.187-.875A4.26 4.26 0 0 0 .086 4.441 4.27 4.27 0 0 0 1.44 8.5l6.54 5.828L14.522 8.5a4.27 4.27 0 0 0 1.227-4.664A4.27 4.27 0 0 0 11.848 1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmblemFavorite)
export default ForwardRef