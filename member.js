function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 200,
        showSalary: function () {
            console.log(this.salary);
        },
        addBonus: function () {
            console.log(this.salary + this.bonus);
        }
    };
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showSalary();
    member.addBonus();
}