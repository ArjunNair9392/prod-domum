const initState = {
  socialFeeds: [
    {id: '1', name:'Arjun Nair', message: 'This impressive paella is a perfect party dish and a fun   meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},

    {id: '2', name:'Amit Doshi', message: 'This impressive paella is a perfect party dish and a fun   meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},

    {id: '3', name:'Binaya Swain', message: 'This impressive paella is a perfect party dish and a fun   meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'}
  ]
}

const socialFeedReducer = (state = initState, action) => {
  return state;
}

export default socialFeedReducer;
