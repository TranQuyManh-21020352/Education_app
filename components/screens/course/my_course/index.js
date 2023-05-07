import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import styles from './style';
import {ProgressBar} from '../../../atoms';
import Ionicons from 'react-native-vector-icons/Ionicons';

const realtimeLearning = 28;
const targetTimeLearning = 60;

const dataSource = [
  {
    title: 'Build and Deploy a website',
    totalLessons: 24,
    completedLessons: 24,
  },
  {
    title: 'Product design v1.0',
    totalLessons: 24,
    completedLessons: 14,
  },
  {
    title: 'Java Development',
    totalLessons: 18,
    completedLessons: 12,
  },
];

const renderLearingTracking = () => {
  return (
    <>
      <View style={styles.trackingCard}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}>
          <Text style={{color: '#fff', fontFamily: 'Poppins-Medium'}}>
            Leaned today
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            {realtimeLearning}min{' '}
          </Text>

          <Text style={{color: '#fff', fontFamily: 'Poppins-Regular'}}>
            / {targetTimeLearning}min
          </Text>
        </View>
        <ProgressBar
          progress={`${(realtimeLearning * 100) / targetTimeLearning}` + '%'}
          progressStyle={{
            backgroundColor: '#333',
          }}
          containerStyle={{
            width: '100%',
            marginBottom: 2,
            backgroundColor: '#fff',
          }}></ProgressBar>
      </View>
    </>
  );
};

const MyCourse = props => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        style={{
          height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }}
      />
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="chevron-back-outline" size={28} color="#333" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              flex: 90,
              fontFamily: 'Poppins-Medium',
              fontSize: 22,
              color: '#333',
            }}>
            My courses
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginBottom: 20}}>
        {renderLearingTracking()}
      </View>
      <View style={styles.coursesList}>
        <FlatList
          data={dataSource}
          numColumns={2}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              style={styles.coursesListItem}>
              <Text style={styles.coursesListItemTitle}>{item.title}</Text>
              <ProgressBar
                progress={
                  `${(item.completedLessons * 100) / item.totalLessons}` + '%'
                }
                progressStyle={{
                  backgroundColor: '#fff',
                }}
                containerStyle={{
                  width: '100%',
                  marginBottom: 2,
                  backgroundColor: '#333',
                }}></ProgressBar>
              {item.completedLessons === item.totalLessons && (
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                  }}>
                  Completed
                </Text>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop:
                    item.completedLessons === item.totalLessons ? 8 : 28,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      color: '#fff',
                      fontSize: 16,
                    }}>
                    {item.completedLessons}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: '#fff',
                      fontSize: 14,
                    }}>
                    /{item.totalLessons}
                  </Text>
                </View>
                <TouchableOpacity style={styles.coursesListButtonPlay}>
                  <Ionicons name="caret-forward" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCourse;
