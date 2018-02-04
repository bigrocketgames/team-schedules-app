import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { getSports } from '../redux/modules/sports/actions';

class Sports extends Component {

  componentDidMount() {
    this.props.getSports();
  } 

render() {
  const {sports} = this.props
  return (
    <View>
      {sports.length > 0 && sports.map(sport => <Text key={sport.id}>{sport.name}</Text>)}
    </View>
  )
}

}

const mapStateToProps = (state) => {
  return {
    sports: state.sports
  }
}

export default connect(mapStateToProps, {getSports})(Sports)