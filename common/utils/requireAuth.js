import {redirect} from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const pathname = new URL(request.url).pathname || '/host'
  if (!isLoggedIn) {
    throw redirect(`/login?message=You should log in first!&redirectTo=${pathname}`)
  }
}
