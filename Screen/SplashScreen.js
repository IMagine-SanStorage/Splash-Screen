import React, {  useEffect, useReducer, useRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Animated,  Dimensions,  Text, View } from "react-native";
// import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import Login from './LoginScreen';
// import sizesDiffer from 'react-native/Libraries/Utilities/differ/sizesDiffer';


export default function SplashScreen(){
    
    const edges = useSafeAreaInsets(); //useSafeAreaInsets가 HOOK라는 것 같은데...뭔지 잘...

    const startAnimation = useRef(new Animated.Value(0)).current;

    //SS페이지 로고 스케일 다운
    const scaleLogo = useRef(new Animated.Value(1)).current;

    //offset 애니메이션
    const moveLogo = useRef(new Animated.ValueXY({x: 0,y:0})).current;
    
    //SS화면 Home 화면 분리...같음
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    //애니메이션 done
    useEffect(() => {

        setTimeout(() =>{

            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: -Dimensions.get('window').height + (edges.top + 250), //+(숫자) = 올라가는 높이
                        useNativeDriver: true
                    }
                ),
                // Animated.timing(
                //     scaleLogo, // 로고 크기를 줄임 
                //     {
                //         toValue: 0.5, //기본 로고 Value를 1로 두고 0,5 크기로 지정
                //         useNativeDriver: true
                //     }
                // ),
                Animated.timing( 
                    moveLogo, //로고를 옮김
                    {
                        toValue: {
                            x: -(Dimensions.get('window').width/2) +64, 
                        // X: +오른쪽기준 왼쪽, -왼쪽기준 오른쪽으로
                        // Y: +는 위 기준 아래로, -는 아래기준 위로
                            y: (Dimensions.get('window').height/2) -130 //-130 이거를 잘 조절해야함
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
            .start();

        }, 1500); //600=1초  이거를 타이머로 재보는 노력...ㅅㅂ 나 2/3 5:46am에 뭐하고 있냐...
        
    },[])
    
    return(
        
        <View style={{    
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,  
        }}>
            
            <Animated.View style={{
                flex: 1,
                backgroundColor: '#315EFF',
                zIndex: 1,
                borderBottomLeftRadius: 55,
                transform: [
                { translateY: startAnimation  }
            ]
        }}>

        <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
        }}>

            <Animated.Text style={{    //폰트를 바꿔야 함
                    fontSize:64, 
                    fontWeight: 'bold',
                    color: 'white',
                    transform: [
                        // {translateX: moveLogo.x}, 
                        {translateY: moveLogo.y},              //translateX와 아래 scale 코드 위 아래 위치에 따라 MATE 로고 위치가 다름
                    //    { scale: scaleLogo },                 //scale가 윗줄이고 translateX가 아랫줄이면 MATE로고가 화면 중앙선을 기준으로 (+64) 같음
                     ] 
            }}>MATE</Animated.Text>

        </Animated.View>

        </Animated.View>

             <Animated.View style={{    
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fff',             //#fff 가 흰색임
            zIndex: 0,
            transform: [
                {translateY: contentTransition}
            ]
        }}>

           <Login></Login>
{/* Home이 Animated.View 안으로 들어 와야함 */}
        </Animated.View> 

          

        </View>
    );
}
