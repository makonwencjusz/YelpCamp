var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://s20772.pcdn.co/wp-content/uploads/2015/04/IMG_1398.jpg",
		description: "Integer sed fermentum ligula. Nam facilisis nisl vitae erat dapibus porttitor. Pellentesque dignissim ipsum scelerisque, cursus massa ac, ullamcorper elit. Donec ullamcorper vehicula arcu sed convallis. Quisque nisi ante, interdum et dolor et, luctus lobortis ex. Mauris aliquam in purus sed hendrerit. Nunc sodales odio sit amet enim egestas, eget sagittis dolor consectetur. In erat metus, laoreet dictum turpis eu, venenatis pellentesque nunc. Mauris auctor ante id mauris ultrices bibendum. Suspendisse malesuada turpis a sem gravida, id scelerisque ligula mattis. Curabitur gravida volutpat velit, nec feugiat urna aliquam quis."
	},
	{
		name: "Desert Mesa",
		image: "https://d2y0su6ixv655t.cloudfront.net/wp-content/uploads/2014/07/16115316/BR15102803V_069.jpg",
		description: "Integer sed fermentum ligula. Nam facilisis nisl vitae erat dapibus porttitor. Pellentesque dignissim ipsum scelerisque, cursus massa ac, ullamcorper elit. Donec ullamcorper vehicula arcu sed convallis. Quisque nisi ante, interdum et dolor et, luctus lobortis ex. Mauris aliquam in purus sed hendrerit. Nunc sodales odio sit amet enim egestas, eget sagittis dolor consectetur. In erat metus, laoreet dictum turpis eu, venenatis pellentesque nunc. Mauris auctor ante id mauris ultrices bibendum. Suspendisse malesuada turpis a sem gravida, id scelerisque ligula mattis. Curabitur gravida volutpat velit, nec feugiat urna aliquam quis."
	},
	{
		name: "Canyon Floor",
		image: "https://www.taketours.com/images/destination/Camping%20at%20Monument%20Valley.jpg",
		description: "Integer sed fermentum ligula. Nam facilisis nisl vitae erat dapibus porttitor. Pellentesque dignissim ipsum scelerisque, cursus massa ac, ullamcorper elit. Donec ullamcorper vehicula arcu sed convallis. Quisque nisi ante, interdum et dolor et, luctus lobortis ex. Mauris aliquam in purus sed hendrerit. Nunc sodales odio sit amet enim egestas, eget sagittis dolor consectetur. In erat metus, laoreet dictum turpis eu, venenatis pellentesque nunc. Mauris auctor ante id mauris ultrices bibendum. Suspendisse malesuada turpis a sem gravida, id scelerisque ligula mattis. Curabitur gravida volutpat velit, nec feugiat urna aliquam quis."
	},
]

function seedDB(){
	//remove all campgrounds
	Campground.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds :(");

		//add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				} else{
					console.log("added a campground");
					//create a comment
					Comment.create(
					{
						text: "This place is great, but I wish there was Internet",
						author: "Homer"
					}, function(err, comment){
						if(err){
							console.log(err);
						}else{
							campground.comments.push(comment);
							campground.save();
							console.log("created new comment");
						}
					});
				}
			});
		});
	});

}

module.exports = seedDB;
