module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },

  trim_name: (email) => {
    const index = email.indexOf('@');
    return email.slice(0, index);
  }
};
