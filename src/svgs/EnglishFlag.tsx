import { JSX, SVGProps } from 'react'

const EnglishFlag = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" {...props}>
    <path fill="#00247d" d="M1 1h28v18H1z" />
    <path
      fill="none"
      d="M2.704 20h24.592L15 11.803zM0 1.803v16.394L12.296 10zM27.296 0H2.704L15 8.197zM30 18.197V1.803L17.704 10z"
    />
    <path
      fill="#fff"
      d="M15 8.197 2.704 0H0v1.803L12.296 10 0 18.197V20h2.704L15 11.803 27.296 20H30v-1.803L17.704 10 30 1.803V0h-2.704z"
    />
    <path fill="#fff" d="M12 1h6v18h-6z" />
    <path fill="#fff" d="M1.001 7.001h28v6h-28z" />
    <path fill="#cf142b" d="M1.001 8.001h28v4h-28z" />
    <path fill="#cf142b" d="M13 1h4v18h-4z" />
    <path d="M0 0v20h30V0H0zm29 19H1V1h28v18z" />
  </svg>
)
export default EnglishFlag
