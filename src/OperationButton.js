import { ACTIONS } from "./App"

export function OperationButton({ operation, dispatch }) {
  return <button onClick={() => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
  }}>{operation}</button>
}