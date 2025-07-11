import taskData from "@/services/mockData/tasks.json";

let tasks = [...taskData];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const taskService = {
  async getAll() {
    await delay(200);
    return [...tasks];
  },

  async getById(id) {
    await delay(200);
    const task = tasks.find(t => t.Id === parseInt(id));
    return task ? { ...task } : null;
  },

  async create(taskData) {
    await delay(300);
    const newTask = {
      Id: tasks.length > 0 ? Math.max(...tasks.map(t => t.Id)) + 1 : 1,
      text: taskData.text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return { ...newTask };
  },

  async update(id, taskData) {
    await delay(300);
    const index = tasks.findIndex(t => t.Id === parseInt(id));
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...taskData };
      return { ...tasks[index] };
    }
    return null;
  },

  async delete(id) {
    await delay(250);
    const index = tasks.findIndex(t => t.Id === parseInt(id));
    if (index !== -1) {
      const deletedTask = tasks.splice(index, 1)[0];
      return { ...deletedTask };
    }
    return null;
  },

  async toggleComplete(id) {
    await delay(200);
    const index = tasks.findIndex(t => t.Id === parseInt(id));
    if (index !== -1) {
      tasks[index].completed = !tasks[index].completed;
      return { ...tasks[index] };
    }
    return null;
  },

  async getActiveTasks() {
    await delay(200);
    return tasks.filter(t => !t.completed).map(t => ({ ...t }));
  },

  async getCompletedTasks() {
    await delay(200);
    return tasks.filter(t => t.completed).map(t => ({ ...t }));
  },
};