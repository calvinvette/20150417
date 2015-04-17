var Address = function(line1, line2, city, state, postalCode, country) {
	this.line1 = line1 || "";
	this.line2 = line2 || "";
	this.city = city || "";
	this.state = state || "";
	this.postalCode = postalCode || "";
	this.country = country || "";
	this.addressId = -1;
};
