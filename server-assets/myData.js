var ryansFamily = [
	{
		name: "Chelsey",
		age: "26",
		relationship: "Wife"
	},
	{
		name:"Heidi",
		age: "38",
		relationship: "Oldest Sister"
	}, 
	{
		name:"Hailee",
		age: "36",
		relationship: "Second Oldest Sister"
	},
	{
		name:"Heather",
		age: "35",
		relationship: "Third Oldest Sister"
	},
	{
		name:"Robby",
		age: "31",
		relationship: "Only Brother"
	},
	{
		name:"Melanie",
		age: "30",
		relationship: "Next Sister"
	},
	{
		name:"Michelle",
		age: "26",
		relationship: "Baby Sister"
	}

];
module.exports.getFamily = function(){
	return ryansFamily;
};
module.exports.addFamily = function(newFamilyMember){
	ryansFamily.push(newFamilyMember);
}
var ryansFriends = [
	{
		name: 'Joon',
		age: '27',
		meeting: '3rd Grade'

	}, 
	{
		name: 'AJ',
		age: '27',
		meeting: '2nd Grade'

	}, 
	{
		name: 'Luke',
		age: '27',
		meeting: '7th Grade'

	}, 
	{
		name: 'Ramsy',
		age: '43',
		meeting: 'yesterday'

	}, 
	{
		name: 'Yourmom',
		age: '4444',
		meeting: 'on Tuesday'

	}, 
];
module.exports.getFriends = function(){
	return ryansFriends;

};
module.exports.addFriends = function(newFriend){
	ryansFriends.push(newFriend);
}

var myActivities = [
{
	name: 'rafting', 
},	{
	name: 'skiing', 
},	{
	name: 'coding'
}
];
module.exports.getActivities = function(){
	return myActivities;
}
module.exports.addActivity = function(newActivity){
	myActivities.push(newActivity);
}

