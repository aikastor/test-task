
  const encoderRus =  (message, step) => {

    const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й',
      'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
      'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];

    let msg = message.toUpperCase();

    msg = [...msg].map(letter => {
      const position = alphabet.indexOf(letter);
      return position !== -1 ? alphabet[(position + step) % 33] : letter;
    });

    return msg.join('');
  };

  const encoderEng =  (message, step) => {

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
                      'G', 'H', 'I', 'J', 'K', 'L',
                      'M', 'N', 'O', 'P', 'Q', 'R',
                      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let msg = message.toUpperCase();

    msg = [...msg].map(letter => {
      const position = alphabet.indexOf(letter);
      return position !== -1 ? alphabet[(position + step) % 26] : letter;
    });

    return msg.join('');
  };