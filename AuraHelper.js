({
    SearchContact : function(component) {
        var action = component.get("c.getcontacts");
        action.setCallback(this ,function(response){
            var state = response.getState();
            if(state=== "SUCCESS"){
                // alert("this is great");
                var result = response.getReturnValue();
                console.log('result',result);
                component.set("v.contacts",result);
            }
        });
        
        $A.enqueueAction(action);
    }
})
