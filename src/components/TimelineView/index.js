// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="timelineContainer">
      <div className="responsiveContainer ">
        <div className="headerContainer">
          <h1 className="heading">
            MY JOURNEY OF
            <br />
            <span className="CCBPHeading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderTimeLine(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
