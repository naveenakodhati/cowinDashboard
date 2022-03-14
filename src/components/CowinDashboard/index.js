// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusContent = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

class CowinDashboard extends Component {
  state = {vaccinationData: {}, apiStatus: apiStatusContent.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusContent.loader})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl)
    const jsonData = await response.json()
    if (response.ok === true) {
      const updatedData = {
        last7DaysVaccination: jsonData.last_7_days_vaccination.map(
          eachData => ({
            vaccineDate: eachData.vaccine_date,
            dose1: eachData.dose_1,
            dose2: eachData.dose_2,
          }),
        ),
        vaccinationByAge: jsonData.vaccination_by_age,
        vaccinationByGender: jsonData.vaccination_by_gender,
      }
      this.setState({
        vaccinationData: updatedData,
        apiStatus: apiStatusContent.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContent.failure})
    }
  }

  renderLoaderView = () => (
    <div className="container" testid="loader">
      <Loader type="ThreeDots" color="#157382" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="container">
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-title">Something went wrong</h1>
    </div>
  )

  renderSuccessCase = () => {
    const {vaccinationData} = this.state
    return (
      <>
        <div className="card-container">
          <h1 className="card-titles">Vaccination Coverage</h1>
          <VaccinationCoverage
            vaccinationCoverage={vaccinationData.last7DaysVaccination}
          />
        </div>
        <div className="card-container">
          <h1 className="card-titles">Vaccination by gender</h1>
          <VaccinationByGender
            vaccinationByGender={vaccinationData.vaccinationByGender}
          />
        </div>
        <div className="card-container">
          <h1 className="card-titles">Vaccination by age</h1>
          <VaccinationByAge
            vaccinationByAge={vaccinationData.vaccinationByAge}
          />
        </div>
      </>
    )
  }

  renderAllCases = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContent.success:
        return this.renderSuccessCase()
      case apiStatusContent.failure:
        return this.renderFailureView()
      case apiStatusContent.loader:
        return this.renderLoaderView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-bg-container">
        <div className="nav-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="logo-title">Co-WIN</h1>
        </div>
        <h1 className="titles">CoWIN Vaccination in India</h1>
        {this.renderAllCases()}
      </div>
    )
  }
}

export default CowinDashboard
