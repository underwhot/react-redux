import { v4 as uuidv4 } from 'uuid';

export const createBookWithID = (book) => {
  return {
    titleValue: book.title,
    authorValue: book.author,
    isFavourite: false,
    id: uuidv4(),
  };
};
