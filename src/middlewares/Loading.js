export const Loading = store => next => action => {

  let fetching = ''
   Object.keys(store.getState()).map((reducer) => {
         if('fetching' in store.getState()[reducer]){
            fetching = fetching ||  store.getState()[reducer]['fetching']
         } 
  })
  if(fetching) {
    return next({type:"SHOW_LOADING"})
  }else{
    return next({type:"HIDE_LOADING"})
  }
  return next(action)
}