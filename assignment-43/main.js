function Make_Great(name) {
    var updated_names = [];
    for (var i = 0; i < name.length - 1; i++) {
        updated_names[i] = "The Great ".concat(name[i]);
    }
    return updated_names;
}
function show_Magicians(name) {
    for (var i = 0; i < name.length - 1; i++) {
        console.log(name[i]);
    }
    console.log(Make_Great(magicians_name));
}
var magicians_name = ["SIGNOR BLITZ", "Antoni Van Zandt", "BOSCO", "Leon Bosco", "CARL BREMA", "Karl Brehmer", "KUDA BUX"];
show_Magicians(magicians_name);
