function garimaStory(item,callMeWhenStoreIsEmpty){
    console.log("Store is busy!");
    //......
    //..
    console.log("Store is empty!");
    callMeWhenStoreIsEmpty();
}

garimaStory("start shopping", () => {
    console.log("lets start shopping......");
})

test("Verify the login page is working", async (page) => {

});