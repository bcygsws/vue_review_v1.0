import { defineStore } from 'pinia';
const useCounter = defineStore('counter', {
	state: () => {
		return {
			count: 1
		};
	}
});
export default useCounter;
