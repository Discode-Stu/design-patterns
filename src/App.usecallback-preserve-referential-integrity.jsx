import Ingredients from "./components-usecallback-preserve-referential-integrity/ingredients"
import IngredientsInfoHelper from "./components-usecallback-preserve-referential-integrity/ingredients-info-helper"

export default function AppUseCallbackPreserveReferentialIntegrity() {
  return (
    <>
      <Ingredients ingredientsInfoHelper={<IngredientsInfoHelper />} />
    </>
  )
}
