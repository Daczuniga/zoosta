export const getSavedUser= () => {
    const savedUserIds = localStorage.getItem('saved_users')
      ? JSON.parse(localStorage.getItem('saved_users'))
      : {};
  
    return savedUserIds;
  };
  
  export const saveUser = (userIdArr) => {
    localStorage.setItem('saved_users', JSON.stringify(userIdArr));
  };
  
  export const removeCommentId = (commentId) => {
    const savedCommentIds = localStorage.getItem('saved_comment')
      ? JSON.parse(localStorage.getItem('saved_comment'))
      : null;
  
    if (!savedCommentIds) {
      return false;
    }
  
    const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));
  
    return true;
  };
  