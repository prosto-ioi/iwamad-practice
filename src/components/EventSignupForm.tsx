import { useState } from 'react'
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react'
import  Button  from './ui/Button'
import { TextField } from './ui/TextField'
import { validateSignup, type SignupValues } from '../lib/validateSignup'
import type { CampusEvent } from '../data/events'

type EventSignupFormProps = { event: CampusEvent }
type Touched = Partial<Record<keyof SignupValues, boolean>>

const emptyValues: SignupValues = { fullName: '', email: '', tickets: '1' }

export function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(emptyValues)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [touched, setTouched] = useState<Touched>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [booked, setBooked] = useState<{ tickets: number; name: string } | null>(null)

  const errors = validateSignup(values, seatsLeft)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitAttempted(true)
    if (Object.keys(errors).length > 0) return

    const tickets = Number(values.tickets)
    setSeatsLeft((current) => current - tickets)
    setBooked({ tickets, name: values.fullName.trim() })
    setValues(emptyValues)
    setTouched({})
    setSubmitAttempted(false)
  }

  function visibleError(field: keyof SignupValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>
      {booked && (
        <p role="status">
          Booked: {booked.tickets} for {booked.name}.
        </p>
      )}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('fullName')}
          autoComplete="name"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('email')}
          autoComplete="email"
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
    </div>
  )
}