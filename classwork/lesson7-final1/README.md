Observable



Observable.create(observer => {
  observer.next(1111);
  observer.complete(); 
})

Observable.of(true)
Observable.of([1,2,3])   ----[1,2,3]---------> 
Observable.from([1,2,3]) ----3----2-----1---->
Observable.fromPromise(promise)
Observable.fromEvent(...)



const subject = new Subject();

subject.subscribe()
subject.subscribe()
subject.subscribe()
subject.subscribe()


subject.next(11111); 





COLD        | HOT 
Youtube     | TV 
