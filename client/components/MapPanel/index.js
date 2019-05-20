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
import GridHex from './GridHex'

const ratio = 0.897
const MapPanel = ({ className, flat, size, hexes }) => {
  const articleRef = useRef()
  const { width, height } = useSize(articleRef)
  const hexagons = hexes.map(hex => <GridHex hex={hex} key={`Hexagon-${hex.id}`} />)

  return (
    height || (
      <section ref={articleRef} className={cx(className, styles.mapPanel)}>
        <article>
          <HexGrid width={480} height={536} viewBox="0 0 52 56">
            <Layout
              flat={!!flat}
              size={{ x: size, y: size }}
              spacing={1.1}
              origin={{ x: 4, y: 6 * 0.75 * 1.1 }}
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
