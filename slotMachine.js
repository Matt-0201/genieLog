export function slotMachine(bet, result) {
	var first = result[0];
	var second = result[1];
	var third = result[2];
	if (first == second) {
		return bet*2;
	} else if (second == third) {
		return bet*2;
	} else {
		return 0;
	}
}
