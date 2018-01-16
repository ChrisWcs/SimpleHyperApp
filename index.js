import { h, app } from "hyperapp"

const state = {
  value: ""
}

const actions = {
  //change: (target) => state => ({ value: target.event.value })
}

const view = (state, actions) => (
  <main>
    <input type="text" value={state.value} /*onChange={actions.change}*//>
  </main>
)

const main = app(state, actions, view, document.getElementById('app'))