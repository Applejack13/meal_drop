import loadingSpinner from "../../images/Loading_Spinner.svg"

import "../loading/loading.css"

export function Loading() {
  return (
    <div className="loading">
      <img src={loadingSpinner} alt="loading" />
    </div>
  )
}
