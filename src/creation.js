import { of, from, scan, Observable, observable , fromEvent, map} from 'rxjs';

/*
/!* const stream$ = of(1,2,3,4,5,6,7,8);

stream$.subscribe(value => console.log('Value: ', value)) *!/

/!* const arr$ = from([1,2,3,4,5]).pipe(
  scan((memo,value) => memo.concat(value), [])
)
arr$.subscribe(value => console.log(value)) *!/


const streem$ = new Observable(observable => {
  observable.next('First value');
  setTimeout(() => observable.next('After 1000ms'), 1000)
  setTimeout(() => observable.complete(), 1500)
  setTimeout(() => observable.error('Something went wrong'), 2000)
  setTimeout(() => observable.next('After 3000ms'), 3000)
})

/!*
streem$.subscribe(
  (value) => console.log('Value:', value),
  (error) => console.log(error),
  () => console.log('Finish')
)
*!/

streem$.subscribe({
  next(val){
    console.log(val);
  },
  error(error){
    console.log(error);
  },
  complete(){
    console.log('Finish');
  }
})
*/

fromEvent(document.querySelector('canvas'),'mousemove')
  .pipe(
    map(event => ({
      x: event.offsetX,
      y: event.offsetY,
      ctx: event.target.getContext('2d'),
    }))
  )
  .subscribe(pos => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2);
  })

const clear$ = fromEvent(document.querySelector('#clear'), 'click')

clear$.subscribe(()=>{
  const canvas = document.querySelector('canvas');
  canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height);
})
