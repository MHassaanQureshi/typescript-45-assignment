function Make_Great(name:string[]){
    let updated_names:string[] = []
    for(let i =0 ; i< name.length-1;i++){
        updated_names[i]=`The Great ${name[i]}`
    }
    return updated_names
}
function show_Magicians(name:string[]){
    for(let i =0 ; i< name.length-1;i++){
        console.log(name[i])
    }
    console.log(Make_Great(magicians_name))
}
let magicians_name:string[]= ["SIGNOR BLITZ","Antoni Van Zandt","BOSCO","Leon Bosco","CARL BREMA","Karl Brehmer","KUDA BUX"]

show_Magicians(magicians_name)