import { useMutation, useQueryClient } from "react-query"
import { postQuote, resetQuotes } from "../api/quoteApi"
import { toast } from "react-toastify"

import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
  padding: 8px;
  max-width: 2xl;
  margin: auto;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: lg;
  margin: auto;
  text-align: left;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Label = styled.label``

const Input = styled.input``

const Button = styled.button`
  type: ${(props) => props.type};
  background-color: ${(props) => (props.isLoading ? "#CBD5E0" : "#4299E1")};
  color: ${(props) => (props.isLoading ? "#A0AEC0" : "#fff")};
  padding: 12px 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
`

const UpdateQuotes = () => {
  const queryClient = useQueryClient()

  const createQuoteMutation = useMutation(postQuote)
  const resetQuotesMutation = useMutation((e) => resetQuotes()) //this is from video but I don't get why we need the e
  // const resetQuotesMutation = useMutation(resetQuotes) // this is my code without the 'e'. I think it's cleaner because we don't need the e

  const [form, setForm] = useState({
    author: "",
    quote: "",
  })

  const onChange = (e) => {
    setForm((_form) => ({
      ..._form,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { author, quote } = form
    if (!author || !quote) {
      toast.error("Please fill in all fields")
      return
    }

    await createQuoteMutation.mutate(form, {
      onSuccess: () => {
        setForm({ author: "", quote: "" })
        queryClient.invalidateQueries("top-quotes")
        toast.success("Quote added successfully")
      },
    })
  }

  const onReset = async (e) => {
    resetQuotesMutation.mutate(e, {
      // resetQuotesMutation.mutate("", { //this is my code without passing the event
      onSuccess: () => {
        queryClient.invalidateQueries("top-quotes")
        toast.success("Quotes reset successfully")
      },
    })
  }

  return (
    <Container>
      <Title>Create quote</Title>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Author</Label>
          <Input
            type="text"
            name="author"
            value={form.author}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Quote</Label>
          <Input
            type="text"
            name="quote"
            value={form.quote}
            onChange={onChange}
          />
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            isLoading={createQuoteMutation.isLoading}
            disabled={createQuoteMutation.isLoading}
          >
            {createQuoteMutation.isLoading
              ? "Creating quote..."
              : "Create quote"}
          </Button>
          <Button
            type="button"
            onClick={onReset}
            isLoading={resetQuotesMutation.isLoading}
            disabled={resetQuotesMutation.isLoading}
          >
            {resetQuotesMutation.isLoading ? "Resetting..." : "Reset quotes"}
          </Button>
        </div>
      </Form>
    </Container>
  )
}
export default UpdateQuotes
