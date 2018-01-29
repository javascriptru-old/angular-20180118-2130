export class Mail {
 public fromName: string;
 public title: string;


 constructor(fromName?: string, title?: string) {
  if (fromName) {
    this.fromName = fromName;
  } else {
    this.fromName = this.createRandomString10() + '@gmail.com';
  }

   if (title) {
     this.title = title;
   } else {
     this.title = this.createRandomString10();
   }
 }

 private createRandomString10(): string {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   let result = '';

   for (let i = 0; i < 10; i++) {
     result += alphabet[Math.floor(Math.random() * 26)];
   }
   return result;
 }

}
