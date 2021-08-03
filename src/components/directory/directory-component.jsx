import React from 'react';
import './directory.styles.scss';
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item-component'
import { connect } from 'react-redux';

const Directory =({ sections })=>(
    <div className="directory-menu">
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps}/>
  ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
})

export default connect(mapStateToProps)(Directory);