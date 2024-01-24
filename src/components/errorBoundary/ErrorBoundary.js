import loadingBeanEater from "../../images/Loading_Bean_Eater.svg"

import "../errorBoundary/errorBoundary.css"

export function ErrorBoundary() {
  return (
    <div className="errorBoundary">
      <img src={loadingBeanEater} alt="error" />
    </div>
  )
}
