import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions } from 'antd';
const Stats = ({ stas }) => (
    <Descriptions title="Stats" layout="vertical" bordered>
        {
          stas.map(sta => {
            return(
              <Descriptions.Item label={sta[1].stat.name}>{sta[1].base_stat}</Descriptions.Item>
            )})
        }
      </Descriptions>
)
Stats.propTypes = {
    stas: PropTypes.array.isRequired,
}

export default Stats
