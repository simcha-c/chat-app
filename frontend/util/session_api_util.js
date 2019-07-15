export const signupUser = function(user) {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  });
};

export const loginUser = function(user) {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  });
};

export const logoutUser = function() {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE'
  });
};

