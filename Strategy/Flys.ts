export interface Flys {
  canFly(): String;
}

export class DoesFly implements Flys {
  canFly(): String {
    return 'Can Fly';
  }
}

export class DoesNotFly implements Flys {
  canFly(): String {
    return "Can't Fly";
  }
}
