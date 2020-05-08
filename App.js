import React from 'react';
import { StyleSheet, Text, View, Dimensions,Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ARTICLES = [{
                    id:"1",
                    uri:require('./assets/news1.png'),
                    text:"news1"
                  },
                  {
                    id:"2",
                    uri:require('./assets/news2.png'),
                    text:"news2"
                  },
                  {
                    id:"3",
                    uri:require('./assets/news3.png'),
                    text:"news3"
                  },
                  {
                    id:"4",
                    uri:require('./assets/news4.png'),
                    text:"news4"
                  },
                  {
                    id:"5",
                    uri:require('./assets/news5.png'),
                    text:"news5"
                  }]


const ArticleList = () => {
           
            return ( ARTICLES.map((article,i) => {
                           return(  
                        <Animated.View key={article.id} style={{
                          flex:1,}}>
                           <View key={article.id} style={{
                             flex:1,
                             backgroundColor:'red',
                             height:SCREEN_HEIGHT,
                             width:SCREEN_WIDTH,
                             position:'absolute',
                             alignItems: 'center',
                             justifyContent: 'center',
                            }}>
                              <View style={{flex:2, backgroundColor:'black',width:SCREEN_WIDTH}}>
                                <Image source={article.uri} style={styles.mainImage} />
                              </View>
                              <View style={{flex:3, backgroundColor:'white',width:SCREEN_WIDTH,padding:20}}>
                                <Text key={i}>{article.text}</Text>
                              </View>
                            </View>
                            </Animated.View>
                           )
            })                       
            ).reverse()
}
                    

export default function App() {


  return (
    <View style={styles.container}>
     <ArticleList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage:{
    flex:1,
    width:SCREEN_WIDTH,
    height:null,
    resizeMode:'cover'
  }
});
