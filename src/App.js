import './App.css'
import { connect } from 'react-redux'
import { incrementAction } from './actions'

function App(props) {
  return (
    <div className='App'>
      counter: {props.count}
      <button
        onClick={() => {
          props.incrementCount()
        }}>
        INCREMENT
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch, state) => ({
  incrementCount: () => {
    dispatch(incrementAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

//Connect : untuk mapping state dari store biar bisa di ambil komponennya sebagai props
// yang dipake reducer biar dispatch dipake sama appnya
