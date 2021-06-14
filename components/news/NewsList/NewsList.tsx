import React from 'react';
import News from '../News/News';

// import * as all from '../../../content/news'
const importAll = r => r.keys().map(r);
const files = importAll(require['context']('../../../content/news', true))
console.log(files)

// files.forEach(it => {
//   console.log(it.)
// })

export const NewsList = () => {
  return (
    <>
      {
        files && files.map((it, idx) =>
          <News
            key={idx}
            author={it.attributes.author}
            date={it.attributes.date}
            title={it.attributes.title}
            Body={it.react}
          />
        )
      }
    </>
  )
};

export default NewsList;