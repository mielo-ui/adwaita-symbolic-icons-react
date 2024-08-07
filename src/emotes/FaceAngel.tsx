import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceAngel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M2.188 4.094A6.94 6.94 0 0 0 1 8a7 7 0 0 0 14 0c0-1.45-.433-2.789-1.188-3.906a4.5 4.5 0 0 1-.624.343c-.85.395-1.855.563-2.938.563h-4.5c-1.083 0-2.087-.168-2.938-.563a4.4 4.4 0 0 1-.624-.343M6 6c.558 0 1.031.473 1.031 1.031V8c0 .558-.473 1-1.031 1s-1-.442-1-1v-.969C5 6.473 5.442 6 6 6m4 0c.558 0 1 .473 1 1.031V8c0 .558-.442 1-1 1s-1-.442-1-1v-.969C9 6.473 9.442 6 10 6M3 9.063C3.715 10.136 5.235 11 8 11c2.452 0 4.21-.75 5-1.938v.5c0 .681-.838 2.407-5 2.407-3.88 0-5-1.874-5-2.406z" />
      <path
        d="M5.736 0c-.958 0-1.826.172-2.5.484S2 1.295 2 2s.563 1.204 1.236 1.516c.674.312 1.542.484 2.5.484h4.528c.958 0 1.826-.172 2.5-.484S14 2.705 14 2 13.437.796 12.764.484C12.09.172 11.222 0 10.264 0zm0 1h4.528c.834 0 1.583.162 2.08.393.496.23.656.481.656.607s-.16.377-.656.607c-.497.23-1.246.393-2.08.393H5.736c-.834 0-1.583-.162-2.08-.393C3.16 2.377 3 2.126 3 2s.16-.377.656-.607C4.153 1.163 4.902 1 5.736 1"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          fontVariantLigatures: "normal",
          fontVariantPosition: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantAlternates: "normal",
          fontFeatureSettings: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          textOrientation: "mixed",
          isolation: "auto",
          mixBlendMode: "normal",
          marker: "none",
        }}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(FaceAngel)
export default ForwardRef