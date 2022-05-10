/* 
bentuknya jadi function ketika kita perlu kirim data ke dalam reducer, yang dinamis biasanya.
kalo data biasa , biasanya object
*/

const incrementAction = {
  type: 'increment-count', //COUNT/INCREMENT
}

const setCounterAction = (num) => ({
  type: 'set-count',
})

export { incrementAction, setCounterAction }
