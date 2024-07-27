import { defineStore } from 'pinia';
const useCounter = define('counter', {
	state: () => {
		return {
			count: 1
		};
	}
});
export default useCounter;
