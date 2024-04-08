import { CircleNotch } from "@phosphor-icons/react"

const Button = ({ children, loading, ...props }) => (
  <button
    {...props}
    className="inline-flex items-center justify-center p-2 border-black border rounded bg-blue-200"
  >
    {loading ? <CircleNotch className="mr-2 h-4 w-4 animate-spin" /> : null}
    {children}
  </button>
)
export default Button
