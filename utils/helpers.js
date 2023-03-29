module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  trim_name: (email) => {
    const index = email.indexOf('@');
    return email.slice(0, index);
  }
};
