/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 const login = function (req, res) {

	var id = req.param('userid');
 	var password = req.param('password');

 	//Validation

 	loginHelper(id,password)
 	.then(function(resp) {
 		if(resp) {
 			sails.log("User found ");
 			res.send(resp.id);	
 		} else {
 			sails.log("User not found ");
 			res.send(false);
 		}
 		
 	})
 	.catch((err) => {
 		res.serverError(err);
 	})
 };

 const create= function(req,res) {
 	var userid = req.param('userid');
 	var password = req.param('password');

 	User.create({id:userid,password:password}).exec(function (err, data) {
 		if (err) { return res.serverError(err); }
 		sails.log('Created user with id '+data.id);
 		return res.ok();
 	});
 };

 const fetchUser = function(req,res) {
 	User.find().exec(function (err,resp) {
 		if(err) {
 			res.send(err);
 		} else {
 			res.send(resp);
 		}
 	});
 };

 const loginHelper= function(id,password) {
 	return new Promise(function(resolve, reject) {
 		sails.log("Id "+id+" password "+password);
 		User.findOne({ where: {id:id,password:password}, limit: 1,select:['id']}).exec(function (err,resp) {
 			if (err) {
 				sails.log("Error occured "+err);
 				return reject(err);
 			}
 			
 			return resolve(resp);
 		});
 	})
 };

 module.exports = {
 	login,
 	create,
 	fetchUser
 }