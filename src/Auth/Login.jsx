import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container, Grid, makeStyles } from "@material-ui/core"
import { background, color } from "../helpers/consts"

const useStyles = makeStyles((theme) => ({

  size: {
    width: '500px',
    height: '350px',
    backgroundColor: 'transparent',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  grid: {
    height: '100vh'
  },
  color: {
    color: '#fff',
    textDecoration: 'none'
  },
  btn: {
    backgroundColor: '#fff',
    width: '400px',
    border: 0
  }
}))

const Login = () => {
  const classes = useStyles()

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <Grid container justify="center" alignItems="center" className={classes.grid}>
      <Card className={classes.size}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Grid container justify="center" align="center">
            <Form onSubmit={handleSubmit} >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className={classes.btn} type="submit" >
                Log In
            </Button>
            </Form>
          </Grid>
          <div className="w-100 text-center mt-3">
            <Link className={classes.color} to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Need an account? <Link className={classes.color} to="/signup">Sign Up</Link>
        </div>
      </Card>
    </Grid>
  )
}
export default Login;