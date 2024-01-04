const loadFromStorage = key => {
  return new Promise((resolve, reject) => {
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      resolve(data);          
    } else {
      reject(key);
    }
  });
};
