export class Member {
    id: number;
    name: string;
    img: string;
    team_name: string;
    rol: string;
    description: string;
    github: string;
    gplus: string;

    constructor(name, img, team, rol, description, github, gplus){
        this.name = name;
        this.img = img;
        this.team_name = team;
        this.rol = rol;
        this.description = description;
        this.github = github;
        this.gplus = gplus;
    }
}
