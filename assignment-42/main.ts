function Make_Great(name:string[]){
    for(let i =0 ; i< name.length-1;i++){
        name[i]=`The Great ${name[i]}`
    }
}
function Magicians(name:string[]){
    for(let i =0 ; i< name.length-1;i++){
        console.log(name[i])
    }
}
let magicians_name:string[]= ["SIGNOR BLITZ","Antoni Van Zandt","BOSCO","Leon Bosco","CARL BREMA","Karl Brehmer","KUDA BUX"]
Make_Great(magicians_name)
Magicians(magicians_name)