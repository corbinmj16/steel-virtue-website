const newLineText = (str) => {
  const text = str;
  return text.split('\n').map((str, key) => {
    const reg = /^[^:]+:\s*/gm;
    const keyword = str.match(reg);

    return <p key={key}><b>{keyword}</b> {str.split(keyword).pop()}</p>;
  })
};

export default newLineText;