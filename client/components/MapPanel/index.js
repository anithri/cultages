import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { useSize } from 'react-hook-size'
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
import { hexListShape } from 'models/hex'

const ratio = 0.897

const MapPanel = ({ className, hexes }) => {
  const articleRef = useRef()
  const { width, height } = useSize(articleRef)
  const hexagons = hexes.map(hex => (
    <Hexagon {...hex} key={`Hexagon-${hex.id}`} />
  ))
  console.log('MapPanel', width, height)

  return (
    height || (
      <section ref={articleRef} className={cx(className, styles.mapPanel)}>
        <article>
          <HexGrid width={435} height={485} viewBox="-6 -9 81 90">
            <Layout
              flat={false}
              size={{ x: 6, y: 6 }}
              spacing={1.1}
              origin={{ x: 0, y: 0 }}
            >
              {hexagons}
            </Layout>
            {/*<rect x="-6" y="-8" width="75" height="82" fill="var(--white-40)"/>*/}
          </HexGrid>
        </article>
      </section>
    )
  )
}

MapPanel.propTypes = {
  className: PropTypes.string,
  hexes: hexListShape,
}

export default MapPanel
