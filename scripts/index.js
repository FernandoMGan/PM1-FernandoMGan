// Clase Activity
class Activity {
    constructor(id, title, description, imgUrl) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
    }
  }
  
  // Clase Repository
  class Activity {
    constructor() {
      this.activities = [];
    }
  
    getAllActivities() {
      return this.activities;
    }
  
    createActivity(id, title, description, imgUrl) {
      const activity = new Activity(id, title, description, imgUrl);
      this.activities.push(activity);
      return activity;
    }
  
    // EXTRA CREDIT: Método para eliminar una actividad por su id
    deleteActivity(id) {
      this.activities = this.activities.filter(activity => activity.id !== id);
    }
  }