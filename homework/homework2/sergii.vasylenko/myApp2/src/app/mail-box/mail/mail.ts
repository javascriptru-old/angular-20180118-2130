export class mail {
    public id: number;
    public header: string;
    public body: string;
    public startTime: Date;
    public deletedTime: Date;

    public constructor(id: number, header: string, body: string){
        this.id = id;
        this.header = header;
        this.body = body;
    }
}



