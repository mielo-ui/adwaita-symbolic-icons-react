import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceMonkey = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    ref={ref}
    {...props}
  >
    <g fill="#474747">
      <path d="M7.844.031C6.617.765 6.78 1.664 6.938 2.062c-1.808.269-3.55 1.312-4.125 3.188-.284-.212-.588-.344-.938-.344C.841 4.906 0 5.99 0 7.281c0 1.293.841 2.344 1.875 2.344.467 0 .886-.212 1.219-.563 2.719-1.273 7.092-1.466 9.875.032.32.322.71.531 1.156.531C15.159 9.625 16 8.574 16 7.281s-.841-2.375-1.875-2.375c-.428 0-.811.193-1.125.5-.507-1.702-1.84-2.91-3.812-3.281-.17-.639-.285-1.916 1.625-1.781-2.17-.793-2.72 1.625-2.72 1.625-.265-.118-.965-.639-.25-1.938zM6.469 5.063c.38 0 .719.646.719 1.468 0 .823-.34 1.5-.72 1.5s-.655-.677-.655-1.5c0-.822.276-1.468.656-1.468m3 0c.38 0 .719.646.719 1.468 0 .823-.34 1.5-.72 1.5s-.655-.677-.655-1.5c0-.822.276-1.468.656-1.468M2 5.968c.256 0 .474.15.656.343a6 6 0 0 0 .125 1.75c-.191.294-.452.5-.781.5-.572 0-1.031-.566-1.031-1.28S1.429 5.968 2 5.968m12.031 0c.572 0 1.063.597 1.063 1.312s-.49 1.282-1.063 1.282c-.372 0-.659-.262-.843-.626a7 7 0 0 0 0-1.375c.187-.35.484-.593.843-.593" />
      <path
        d="M7.969 8.969c-3.88 0-7.031 1.567-7.031 3.5s3.15 3.5 7.03 3.5S15 14.402 15 12.469s-3.151-3.5-7.031-3.5M3 11.03s.367 2.031 4.969 2.031c4.386 0 5.094-2 5.094-2S13.023 14.04 7.969 14C2.82 13.96 3 11.031 3 11.031z"
        color="#000"
        overflow="visible"
        style={{
          marker: "none",
        }}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(FaceMonkey)
export default ForwardRef