var address = 'jsdkjsdkds';
something = function(address){

erc20Balance(address,function(err,res){
	//address = 'abcdefg';
    console.log("I got back from callback",address);
});
}
	address = '123456';
    function erc20Balance(address,callback){
    console.log("Im the one who initates callback");
    callback(address, "success");
}

something(address)
