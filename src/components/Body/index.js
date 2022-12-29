// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <ul className="left-navbar">
              <h1>Left Navbar Menu</h1>
              <p>item1</p>
              <p>item2</p>
              <p>item3</p>
              <p>item4</p>
            </ul>
          )}
          {showContent && (
            <div className="content-div">
              <h1>Content</h1>
              <p>
                Lorem ipsum On 2 October 1869, Putlibai gave birth to her last
                child, Mohandas, in a dark, windowless ground-floor room of the
                Gandhi family residence in Porbandar city. As a child, Gandhi
                was described by his sister Raliat as restless as mercury,
                either playing or roaming about.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar">
              <h1>Right Navbar Menu</h1>
              <p className="ad">Ad 1</p>
              <p className="ad">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
