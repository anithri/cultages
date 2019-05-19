import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styles from './styles.module.css'
import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex,
} from 'react-hexgrid'
import { useSize } from 'react-hook-size'
import { hexListShape } from 'models/hex'

const MapPanel = ({ className, hexes }) => {
  // const sectionRef = useRef()
  // const { width, height } = useSize(sectionRef)
  const hexagons = hexes.map(hex => (
    <Hexagon {...hex} key={`Hexagon-${hex.id}`} />
  ))
  return (
    <section className={cx(className, styles.mapPanel)}>
      <HexGrid width={1200} height={800} viewBox="0 0 100 100">
        {/* Grid with manually inserted hexagons */}
        <Layout
          size={{ x: 1, y: 1 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {hexagons}
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
      </HexGrid>
    </section>
  )
}

MapPanel.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapPanel
