String.prototype.removeDuplicates = function() {
	if(this){
		let splittedArray = this.trim().split(/\s+/);
		let uniqueWords = [];
		for(const value of splittedArray) {
			if(!uniqueWords.find(word => value === word))
				uniqueWords.push(value);
		}
		return uniqueWords.join(" ");
	}
}
