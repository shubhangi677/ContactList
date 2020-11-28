({
    doInit : function(component, event, helper) {
        helper.SearchContact(component, event, helper);
    },
    handleKeyUp : function(component, event) {
        var SearchStr = component.find("enter-search").get("v.value");
        var action = component.get("c.searchString");
        action.setParams({
            "searchCon" :SearchStr
        });
        action.setCallback(this ,function(response){          
            if(response.getState() === "SUCCESS"){
                var result = response.getReturnValue();
                console.log('result',result);
                component.set("v.contacts",result);
            }
        });
        $A.enqueueAction(action);
    }
})
