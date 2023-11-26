import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs'
document.addEventListener('click', ()=>{
  const stream$ = new ReplaySubject(2 );

  stream$.next('Hello!');
  stream$.next('world!');

  stream$.subscribe(value => console.log( 'Value:',value));
})
