import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmblemDefault = (
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
      d="M8 0C3.594 0 0 3.594 0 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8m3.398 4.508a1 1 0 0 1 .735.219c.426.351.488.98.14 1.406l-4.5 5.5c-.18.219-.441.351-.722.367a1.01 1.01 0 0 1-.758-.293l-2.5-2.5a1 1 0 1 1 1.414-1.414l1.719 1.719 3.8-4.645c.169-.203.41-.336.672-.363zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmblemDefault)
export default ForwardRef