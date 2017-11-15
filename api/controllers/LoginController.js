/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 const NO_USER_ID = "Please enter user id";
 const NO_PASSWORD = "Please enter password";

 const login = function (request, response) {

	var userid = req.param('userid');
 	var password = req.param('password');
 	
 	//Validation
 	var error = [];
 	if(!userid) {
 		error.push(NO_USER_ID);
 	} else if(!password) {
 		error.push(NO_PASSWORD);
 	} if(!userid && !password) {
 		error.push(NO_USER_ID);
 		error.push(NO_PASSWORD);
 	}

 	if(error.length!=0) {
 		response.status(401);
 		response.send(error);
 		return;
 	}
 	
 	//Valid request
 	loginHelper(id,password)
 	.then(function(helper_resp) {
 		if(helper_resp) {
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
 		
 		User.findOne({ where: {id:id,password:password}, limit: 1,select:['id']}).exec(function (db_err,db_resp) {
 			if (db_err) {
 				sails.log("Error occured "+err);
 				return reject(err);
 			}
 			
 			//If db response contains id, credential correct
 			if(db_resp.id) {
 				return resolve(true);
 			} else {
 				return resolve(false);
 			}
 			
 		});
 	})
 };

 module.exports = {
 	login,
 	create,
 	fetchUser
 }