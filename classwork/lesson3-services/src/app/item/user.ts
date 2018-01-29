export class User {

  private list = [];

  private name = '';

  dosomething() {
     return this.name;
  }

  getList() {
    return this.list;
  }

  addNew(user) {
    this.list.push(user);
  }
}
