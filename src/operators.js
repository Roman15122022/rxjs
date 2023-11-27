import {
  fromEvent,
  filter,
  map,
  interval,
  tap,
  take,
  takeLast,
  takeWhile,
  scan,
  reduce,
  switchMap
} from 'rxjs';

fromEvent(document,'click')
  .pipe(
    switchMap((event)=> {
      return interval(500)
        .pipe(
          tap(value => console.log('Tap:',value)),
          map(value => value*3)
        )
    })
  )
  .subscribe((value) =>{
    console.log(value);
  })

const stream$ = interval(500)
  .pipe(
    tap(value => console.log('Tap:',value)),
    map(value => value*3),
    filter(value => value%2===0),
    take(5),
    takeLast(2),
    takeWhile(value => value<10),
  /*   scan((memo, value)=>{  //.reduce in stream
      return  memo += value
    },0),
    reduce((memo, item) =>{ //after stream;
      return memo += item;
    },0) */

  )

stream$.subscribe({
  next: value => console.log('Next:' , value),
  complete: () => console.log('Comlete')
})
