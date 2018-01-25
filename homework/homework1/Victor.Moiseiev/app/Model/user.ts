export class User {
    constructor(photoUrl: string, name: string, position: string){
        this.photoUrl = photoUrl;
        this.name = name;
        this.position = position;
    }
    public photoUrl: string;
    public name: string;
    public position: string;
}
