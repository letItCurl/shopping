export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public id: number;

    constructor(id: number, name: string, description: string, imagePath: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}