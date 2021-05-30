import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'

export const LangContext = React.createContext({});

export const LangProvider = ({children}) => {
    const [lang,setLang] = useState('');

    return(
        <LangContext.Provider 
            value = {{
                lang,
                setLang,
                changeLang: async(value) => {
                    console.log("language slected",value)
                    try {
                        await AsyncStorage.setItem('selectedLanguage',value) 
                        setLang(value)
                    }
                    catch(e) {
                        console.log(e)
                    }
                },
                setLangFirstTime: async(value) =>{
                    try {
                        const changeLang = await AsyncStorage.getItem('selectedLanguage') 
                        console.log("vasasa",changeLang)
                        if(changeLang==null) {
                            AsyncStorage.setItem('selectedLanguage','en') 
                           setLang('en')
                        }
                        else {
                            AsyncStorage.setItem('selectedLanguage',changeLang) 
                            setLang(changeLang)
                        }
                    }
                    catch(e) {
                        console.log(e)
                    }
                }

            }}
        >

            {children}

        </LangContext.Provider>
    )
}