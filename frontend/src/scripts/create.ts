const getData = (e) => {
  const formData = new FormData(e.target);
  //здесь можно сделать проверку данных формы
  const data: { [index: string]: any } = {};
  formData.forEach(function (value, key) {
    data[key] = value;
  });
  // console.log(data)
  return data;
};

export { getData };
