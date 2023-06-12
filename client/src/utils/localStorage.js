export const getSavedUser= () => {
  const savedUserIds = localStorage.getItem('saved_users')
    ? JSON.parse(localStorage.getItem('saved_users'))
    : {};

  return savedUserIds;
};

export const saveUser = (userIdArr) => {
  localStorage.setItem('saved_users', JSON.stringify(userIdArr));
};

export const saveCommentId = (commentId) => {
  if(commetnIdArr.length) {
    localStorage.setItem('saved_comment', JSON.stringify(commentId));
  } else {
    localStorage.removeItem('saved_comment');
  }
}

export const removeCommentId = (commentId) => {
  const savedCommentIds = localStorage.getItem('saved_comment')
    ? JSON.parse(localStorage.getItem('saved_comment'))
    : null;

  if (!savedCommentIds) {
    return false;
  }

  const updatedSavedCommentIds = savedCommentIds?.filter((savedCommentId) => savedCommentId !== commentId);
  localStorage.setItem('saved_comment', JSON.stringify(updatedSavedCommentIds));

  return true;
};

export const clearLocalStorage = () => {
  localStorage.removeItem('id_token'); // Remove the specific item you stored, such as 'userData'
  // Add any other necessary local storage clear operations
};










