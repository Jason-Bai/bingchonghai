import User from './User'
import { shallow } from 'enzyme'

describe('User', () => {
  const props = {
    name: 'baiyu',
    description: 'baiyu'
  }

  it('show one title element', () => {
    const element = shallow(<User {...props} />)
    expect(element.find('.title')).to.have.length(1)
  })

  it('show one description element', () => {
    const element = shallow(<User {...props} />)
    expect(element.find('.description')).to.have.length(1)
  })
})
