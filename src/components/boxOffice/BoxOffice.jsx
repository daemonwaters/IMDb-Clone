import React from 'react'
import styles from './BoxOffice.module.scss'
import BoxOfficeRow from './boxOfficeRow/BoxOfficeRow'

function BoxOffice() {
  return (
    <div className={styles.boxOffice}>
        <BoxOfficeRow/>
        <BoxOfficeRow/>
        <BoxOfficeRow/>
        <BoxOfficeRow/>
        <BoxOfficeRow/>
        <BoxOfficeRow/>
    </div>
  )
}

export default BoxOffice