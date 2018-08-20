var userData = {};
(async function () {
  var arr = [
    'Hi, Welcome to valueleaf',
    {
      msg: 'Enter your full name please',
      label: 'name',
      responseMsg: 'Hi "name"',
      placeholder: 'Jack Sparrow'
    }, {
      msg: 'Enter your phone number ',
      label: 'phone',
      placeholder: '9876543210'
    }, {
      msg: 'Enter your email ',
      label: 'email',
      placeholder: 'jack@mail.com'
    }, {
      msg: 'Select your city',
      label: 'city',
      placeholder: 'Totuka'
    },
  ]
  var img = [
    {
      url: 'https://img.etimg.com/thumb/msid-55326901,width-300,imgsize-67601,resizemode-4/valueleaf-services-private-limited.jpg',
      name: 'Valueleaf Logo'
    },
  ]
  var regEx = {
    name: /^[a-zA-Z]*\s[a-zA-Z]*$/,
    phone: /^[6-9]\d{9}$/,
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  }

  var botui = new BotUI('my-botui-app');

  const iter = async message => {
    if (typeof message === 'string') {
      botAdd(botui, message, 'imgloading');
      imgLoad(img[0]);

    } else {
      switch (message.label) {
        case 'name': await callBot(botui, message, regEx, 'text')
          break;
        case 'phone': await callBot(botui, message, regEx, 'number')
          break;
        case 'email': await callBot(botui, message, regEx, 'text')
          break;
        case 'city': botAdd(botui, message);
          city = await selectCity(botui, message);
          userData[message.label] = city.text
          break;
      }
    }
    return userData
  }

  const data = await pMapSeries(arr, iter)
  const jsonData = data[data.length - 1]

  botui.message.add({
    loading: true,
    delay: 2000,
    content: 'Thank You',
  })
  
  console.log(jsonData);

  // responseMsg.replace(/"(.+)"/, name)
})();

const callBot = async (botui, message, regEx, subtype) => {
  botAdd(botui, message);
  val = await inputHuman(botui, message, subtype);
  console.log('val ',val)
  field_label = await validateField(botui, message, val.value, regEx)
  userData[message.label] = field_label
}

const botAdd = (botui, message, cssC = '') => {
  return botui.message.add({
    loading: true,
    cssClass: cssC,
    delay: 2000,
    autoHide: false,
    content: message.msg !== undefined ? message.msg : message,
  })
}

const inputHuman = (botui, message, subtype = '') => {
  return botui.action.text({
    delay: 2000,
    action: {
      sub_type: subtype,
      placeholder: message.placeholder,
    }
  })
}

const validateField = async (botui, message, values, regEx) => {
  switch (message.label) {
    case 'name':
      reg = regEx.name;
      values = (reg.test(values) && values !== 'fuck off') ? values
        : values = await validName(botui, message, values, reg);
      return values;
      break;
    case 'phone':
      reg = regEx.phone;
      values = values.length == 10 && reg.test(values) ? values
        : values = await validPhone(botui, message, values, reg);
      return values;
      break;
    case 'email':
      reg = regEx.email
      values = reg.test(values) ? values
        : values = await validEmail(botui, message, values, reg);
      return values;
      break;
  }
}

const validName = async (botui, message, values, reg) => {
  do {
    message.msg = "Please Enter Valid Name"
    values = await botHuman(botui, message, 'text')
  } while (reg.test(values) != true || values == 'fuck off');
  return values
}

const validPhone = async (botui, message, values, reg) => {
  do {
    message.msg = "Please Enter Valid Phone No"
    values = await botHuman(botui, message, 'number')
  } while (values.length != 10 && reg.test(values) != true);
  return values
}

const validEmail = async (botui, message, values, reg) => {
  do {
    message.msg = "Please Enter Valid Email Address"
    values = await botHuman(botui, message, 'text')
  } while (reg.test(values) != true);
  return values
}

const botHuman = async (botui, message, subtype='') => {
  botAdd(botui, message)
  values = await inputHuman(botui, message, subtype)
  values = values.value
  return values
}

const selectCity = async (botui, message) => {
  return await botui.action.select({
    loading: true,
    delay: 2000,
    action: {
      placeholder: "Select Language",
      value: 'KrN',
      searchselect: true,
      label: 'text',
      options: city(),
      button: {
        icon: 'check',
        label: 'OK'
      }
    }
  })
}

const imgLoad = (img) => {
  $(document).ready(function () {
    setTimeout(function () {
      $('.imgloading').append(
        `<div class="botui-message">
        <div class="botui-message">
          <div class="botui-message-content text">
            <img src="${img.url}" alt="${img.name}"/>
          </div>
        </div>
      </div>
      `
      )
    }, 2100);
  });
}


