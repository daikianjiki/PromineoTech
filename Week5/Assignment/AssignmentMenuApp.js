class Clothing {
    constructor(item) {
        this.item = item
    }
    describe() {
        return `${this.item} is in your cart.`
    }
}
class Menu {
    constructor() {
        this.merchandise = [];
        this.selected = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.addAnItem();
                    break;
                case '2':
                    this.viewItems();
                    break;
                case '3':
                    this.deleteAnItem();
                    break;
                default:
                        selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Have a great Day!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Add an Item
        2) View your Item
        3) Delete an Item
        `);
    }
    addAnItem() {
        let item = prompt('Add an clothing item of your choice.');
        this.merchandise.push(new Clothing(item));
    }
    viewItems() {
        let itemString = '';
        for (let i = 0; i < this.merchandise.length; i++) {
            itemString += i + ') ' + this.merchandise[i].item + '\n';
        }
        alert(itemString);
    }
    deleteAnItem() {
        let index = prompt('Enter the index of the item you wish to delete:');
        if (index > -1 && index < this.merchandise.length) {
            this.merchandise.splice(index, 1);
        }
    }
}
let menu = new Menu();
menu.start();