const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  	let ans = []
	for(let i=0;i<arr.length;i++){ 
		let subArr = [] 
		let sum = 0
		for(let j=i;j<arr.length;j++){ 
			sum += arr[j] 
			i = j 
			if(sum <= n){
				subArr.push(arr[j])
			}
			else{
			  i--
			  break
			}
		}
		ans.push(subArr)
	}
	return ans
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
