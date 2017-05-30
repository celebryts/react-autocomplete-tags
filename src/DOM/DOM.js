class DOM {
    static isDescendant = (node, targetNode) => {
        while (node !== null) {
			if (node === targetNode) return true
			node = node.parentNode
		}
		return false
    }
}

export default DOM