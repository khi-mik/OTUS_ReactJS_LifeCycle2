import { useEffect, useState } from "react"
import { Stepper } from "../Stepper/Stepper"
import { SettingsPanel } from "../GameSettingsPanel/Group"
import { game_speed } from "../Game/Game"
import styles from "./PlayProp.module.css"

type PlayPropProps = {
  onPlayChange: (val: boolean) => void
  onRestart: () => void
  onSpeedChange: (speed: number) => void
}

export const PlayProp = ({
  onPlayChange,
  onRestart,
  onSpeedChange,
}: PlayPropProps) => {

  const [isRunnung, setIsRunnung] = useState(true)
  const onClickRunButton = () => {
    setIsRunnung((prev) => !prev)
  }
  const onClickRestartButton = () => {
    onRestart()
    setIsRunnung(true)
  }
  useEffect(() => {
    onPlayChange(isRunnung)
  }, [isRunnung])
  const btnStyle = `${styles.playProp} ${styles.playPropButton}`
  return (
    <SettingsPanel title="Speed">
      <div className={styles.playPropContainer}>
        <div
          data-testid="speed"
          className={`${styles.playProp} ${styles.playPropLabel}`}
        >
        </div>
        <div className={`${styles.playProp} ${styles.speedStepper}`}>
          <Stepper
            step={1}
            startValue={game_speed}
            onValueChange={onSpeedChange}
          ></Stepper>
        </div>
        <div
          data-testid="run"
          className={
            isRunnung ? `${btnStyle} ${styles.play}` : `${btnStyle} ${styles.stop}`
          }
          onClick={onClickRunButton}
        ></div>
        <div
          data-testid="restart"
          className={`${btnStyle} ${styles.reload}`}
          onClick={onClickRestartButton}
        ></div>
      </div>
    </SettingsPanel>
  )
}
