var Customer = function(customerId, firstName, lastName, phoneNumber, email) {
	this.customerId = customerId || -1;
	this.firstName = firstName || "";
	this.lastName = lastName || "";
	this.phoneNumber = phoneNumber || "";
	this.email = email || "";
	this.birthDate = new Date(); // TODO - Fix this with Formatting options in the form
	this.homeAddress = new Address("hl1", "hl2", "hc", "hs", "hco", "hpc");
	this.workAddress = new Address("wl1", "wl2", "wc", "ws", "wco", "wpc");
};

Customer.prototype.getCustomerId = function() {
	return this.customerId;
};

Customer.prototype.setCustomerId = function(customerId) {
	this.customerId = customerId;
};

Customer.prototype.getFirstName = function() {
	return this.firstName;
};

Customer.prototype.setFirstName = function(firstName) {
	$(document).trigger("firstNameChange", firstName);
	this.firstName = firstName;
};

Customer.prototype.getLastName = function() {
	return this.lastName;
};

Customer.prototype.setLastName = function(lastName) {
	this.lastName = lastName;
};

Customer.prototype.getPhoneNumber = function() {
	return this.phoneNumber;
};

Customer.prototype.setPhoneNumber = function(phoneNumber) {
	this.phoneNumber = phoneNumber;
};

Customer.prototype.getEmail = function() {
	return this.email;
};

Customer.prototype.setEmail = function(email) {
	this.email = email;
};

Customer.prototype.getBirthDate = function() {
	return this.birthDate;
};

Customer.prototype.setBirthDate = function(birthDate) {
	this.birthDate = birthDate;
};


Customer.prototype.toString = function() {
	return "Customer ID# " + this.getCustomerId()
			+ ": " + this.getFirstName() + " " + this.getLastName();
};


