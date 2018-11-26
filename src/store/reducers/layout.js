const initialState = {
    header: {
        logo: '',
        slogan: ''
    },
    footer: {
        copyright: ''
    }
  };
  
  export default function quizReducer(state = initialState, action) {
      switch (action.type) {
          default:
            return  state;
      }
  }