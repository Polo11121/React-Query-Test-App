import React, { useState, useEffect } from 'react'

interface Props {
  onSubmit: (values: any) => void
  initialValues?: any
  submitText?: string
  clearOnSubmit?: boolean
}

const defaultFormValues = {
  title: '',
  body: '',
}

export const PostForm = ({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit,
}: Props) => {
  const [values, setValues] = useState(initialValues)

  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }))

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues)
    }
    e.preventDefault()
    onSubmit(values)
  }

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <div>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={(e) => setValue('title', e.target.value)}
          required
        />
      </div>
      <br />
      <label htmlFor="body">body</label>
      <div>
        <textarea
          name="body"
          value={values.body}
          onChange={(e) => setValue('body', e.target.value)}
          required
          rows={10}
        />
      </div>
      <br />
      <button type="submit">{submitText}</button>
    </form>
  )
}
