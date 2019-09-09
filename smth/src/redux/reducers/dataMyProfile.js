const data = {
  img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Red_Donatello.jpg/250px-Red_Donatello.jpg',
  nameOfProfile: 'Donatello Sun',
  city: 'New York',
  dateOfBirth: 1987,
  posts: [
    { id: 1, message: 'Wow!' },
    { id: 2, message: 'My page is work!' },
    { id: 3, message: 'New mech is comming' },
  ],
};

const dataMyProfile = (state = '', action) => {
  switch (action.type) {
    case 'DATA_MY_PROFILE':
      return data;
    case 'ADD_NEW_POST':
      return data.posts.push(action);
    default:
      return state;
  }
};

export default dataMyProfile;
