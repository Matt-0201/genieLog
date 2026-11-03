export function slotMachine(bet, result) {
	var first = result[0];
	var second = result[1];
	if (first == second) {
		return bet *2;
	} else {
		return 0;
	}
}
