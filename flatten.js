function flatten(obj) {
	if (Array.isArray(obj)) {
		return obj.reduce((flatArray, item) => {
			let flatItem = flatten(item)
			return flatArray.concat(flatItem)
		}, [])
	}

	if (typeof obj === 'object') {
		return flatten(Object.values(obj))
	}

	return obj
}