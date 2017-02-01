export const Loading = store => next => action => {
  let result = next(action)
  let fetching = ''
   Object.keys(store.getState()).map((reducer) => {
         if('fetching' in store.getState()[reducer]){
            fetching = fetching ||  store.getState()[reducer]['fetching']
         } 
  })
  if(fetching) {
    result = next({type:"SHOW_LOADING"})
  }else{
    result = next({type:"HIDE_LOADING"})
  }
  return result
}