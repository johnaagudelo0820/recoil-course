import {atom, useRecoilState, useRecoilValue} from 'recoil'

const darkModeAtom = atom({
  key: 'darkMode',
  default: false,
})

const DarkModeSwitch = () => {
  const [darkMode, setdarkMode] = useRecoilState(darkModeAtom)
  console.log(darkMode)
  return (
    <input
      type="checkbox"
      checked={darkMode}
      onChange={(event) => setdarkMode(event.currentTarget.checked)}
    />
  )
}

const Button = () => {
  const darkMode = useRecoilValue(darkModeAtom)
  return (
    <button
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
      }}
    >
      My UI Button
    </button>
  )
}

export const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}
