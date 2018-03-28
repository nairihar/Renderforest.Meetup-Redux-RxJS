import Rx from 'rxjs'

// export const pingEpic = action$ =>
//   action$.ofType('PING')
//     .switchMap(action =>
//       Rx.Observable.of(action)
//         .delay(2000)
//         .mapTo({ type: 'PONG' })
//     )

export const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(2000)
    .mapTo({ type: 'PONG' })
