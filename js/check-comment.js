import { MAX_COMMENT_LENGTH } from './const.js';

let errorMessage = '';

const errorComment = () => errorMessage;

const validateComment = (value) => {
  errorMessage = '';

  if (value.trim().length === 0) {
    return true;
  }

  if (value.length > MAX_COMMENT_LENGTH) {
    errorMessage = `Длина комментария не может составлять больше ${MAX_COMMENT_LENGTH} символов`;
  } else {
    return true;
  }
};

export { errorComment, validateComment };
