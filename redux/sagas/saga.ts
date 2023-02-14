export function* workerSaga() {}

export function* watcherSaga() {
  console.log("Saga connected");
}

export default function* rootSaga() {
  yield watcherSaga();
}
