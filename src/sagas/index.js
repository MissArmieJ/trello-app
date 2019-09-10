import {watchForFetchCards} from "./cardSagas"

export default function*() {
  yield [watchForFetchCards()]
}