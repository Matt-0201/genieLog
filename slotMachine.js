export function slotMachine(bet, result) {
	var first = result[0];
	var second = result[1];
	var third = result[2];
	if (first == second && second == third) {
		if (first == '$')
			return bet*20;
		return bet*5;
	} else if (second == third) {
		return bet*2;
	} else if (first == second) {
		return bet*2;
	} else {
		return 0;
	}
}