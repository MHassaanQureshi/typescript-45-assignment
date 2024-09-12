function Make_Great(name) {
    for (var i = 0; i < name.length - 1; i++) {
        name[i] = "The Great ".concat(name[i]);
    }
}
function Magicians(name) {
    for (var i = 0; i < name.length - 1; i++) {
        console.log(name[i]);
    }
}
var magicians_name = ["SIGNOR BLITZ", "Antoni Van Zandt", "BOSCO", "Leon Bosco", "CARL BREMA", "Karl Brehmer", "KUDA BUX"];
Make_Great(magicians_name);
Magicians(magicians_name);
