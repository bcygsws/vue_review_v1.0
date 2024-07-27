import { defineStore } from 'pinia';
const useCounter = defi('counter', {
	state: () => {
		return {
			count: 1
		};
	}
});
export default useCounter;
