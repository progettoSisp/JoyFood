/**
 * Created by Aerdna on 13-Sep-16.
 */
// Sign in data for the normal user

var Person = function(name, category, description) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.completed = false;
    this.date = new Date();
};