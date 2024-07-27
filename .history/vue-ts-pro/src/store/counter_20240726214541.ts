import {definePinia} from 'pinia';
const useCounter=definePinia('counter',{
    state:()=>{
      return {
        count:1
      }
    }
})
export default useCounter;