let authenticate = function (user, pw) {
	if (user == "admin" && pw == "admin") {
		return true
	} else {
		return false
	}
}

module.exports = function (req, res, next) {
	if (authenticate(req.body.user, req.body.pw) || authenticate(req.query.user, req.query.pw)) {
		next()
	} else {
		res.status(401).end()
	}
}