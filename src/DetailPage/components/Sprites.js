import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Sprites = ({ sprs }) => (
    <Tabs defaultActiveKey="1" style={{minHeight: '20vh'}}>
    {
        sprs.map(spr => {
        return(<TabPane tab={spr[0]} key={spr[0]}>
            {<img src={spr[1]}/>}
        </TabPane>  )
        })
    }
    </Tabs>
)
Sprites.propTypes = {
    sprs: PropTypes.array.isRequired,
}

export default Sprites
