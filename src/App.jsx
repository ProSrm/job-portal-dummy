import React from 'react'
import Homepage from './Pages/Homepage'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Jobs from './Pages/Jobs'
import AddJobs from './Pages/AddJobs'
import NotFound from './Pages/NotFound'
import Jobpage, { jobloader } from './Pages/Jobpage'
import EditJob from './Pages/EditJob'

const App = () => {
  //addjob functionality
  const addjob = async (job) => {
    const res = await fetch(`/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    return
  }

  //addjob functionality
  const updatejob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    return
  }

  //delete job functionality
  const deletejob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJobs addjob={addjob} />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="edit-job/:id"
          element={<EditJob updatejob={updatejob} />}
          loader={jobloader}
        />
        <Route
          path="jobs/:id"
          element={<Jobpage deletejob={deletejob} />}
          loader={jobloader}
        />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
