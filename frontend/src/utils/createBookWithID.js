import { v4 as uuidv4 } from 'uuid';

export const createBookWithID = (book, source) => {
  return {
    titleValue: book.title,
    authorValue: book.author,
    source,
    isFavourite: false,
    id: uuidv4(),
  };
};
