export default class Character {
  constructor(name, type) {
    const heroTypes = ['Boweman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if ((typeof name !== 'string') || (name.length < 2 || name.length > 10)) {
      throw new Error('Ошибка! Имя должно быть строкой длиной от 2 до 10 символов!');
    } else {
      this.name = name;
    }

    if (!heroTypes.includes(type)) {
      throw new Error('Ошибка! Такого героя нет!');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack = this.attack + this.attack * 0, 2;
      this.defence = this.defence + this.defence * 0, 2;
      this.health = 100;
    }
  };

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - defence / 100);
    }
  };
}