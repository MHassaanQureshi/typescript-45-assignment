function Make_Album(name:string,Album_name:string,no_of_tracks?:number){
    let Collection = {
        name:name,
        Album_name:Album_name,
        no_of_tracks:no_of_tracks,
    }
    return Collection
}

console.log(Make_Album("Umair","rockstar without guitar",20))
console.log(Make_Album("Talha Anjum","Open letter"))
console.log(Make_Album("Jokhay","KhanaBadosh"))