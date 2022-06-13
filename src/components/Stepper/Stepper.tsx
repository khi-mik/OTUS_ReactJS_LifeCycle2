import { useEffect, useState } from "react"
import styles from "./Stepper.module.css"

export const isNum = (value: string) => {
  return /[0-9]/.test(value)
}

type StepperProps = {
  step: number
  startValue: number
  onValueChange: (val: number) => void
  id?: string
}

export const Stepper = ({
  startValue,
  onValueChange,
}: StepperProps) => {
  const [value, setValue] = useState(startValue)
  useEffect(() => {
    if (value) {
      onValueChange(value)
    }
  }, [value])
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.stepperInput}>
        <input
          value={value}
          style={{ width: 30 }}
          onChange={(e) => {
            const val = e.target.value && isNum(e.target.value) ? parseInt(e.target.value) : 0
            setValue(val)
          }}
          onKeyPress={(event) => {
            if (!isNum(event.key)) {
              event.preventDefault()
            }
          }}
        ></input>
      </div>
    </div>
  )
}
