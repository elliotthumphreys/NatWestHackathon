import React, { useState, useEffect } from 'react'
import { GetContent, GetHats } from '../../util'

export const ContentContext = React.createContext();
export const HatsContext = React.createContext();


export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState({ isLoading: true })

    const getContentAsync = async () => {
        const { success, content } = await GetContent()

        if (success) {
            let parsedContent = {}

            content.forEach(page => {
                let parsedData = {}

                page.data.forEach(dataItem => {
                    parsedData[dataItem.name] = dataItem.value || dataItem.slug  
                })

                let parsedPage = {
                    slug: page.slug || page.type,
                    name: page.name || page.type,
                    ...parsedData
                }
                parsedContent[parsedPage.slug] = parsedPage
            });

            console.log(parsedContent)

            setContent(parsedContent)
        }
    }

    useEffect(() => {
        console.log('provider is getting content ?')
        getContentAsync()
    }, [])

    return <ContentContext.Provider value={content}>
        {content.isLoading || children}
    </ContentContext.Provider>
}

export const HatsProvider = ({ children }) => {
    const [hats, setHats] = useState([])

    const getHats = async () => {
        if (hats.length === 0) {
            const { success, hats } = await GetHats()

            if (success) {
                setHats(hats)
            }
        }

        return hats
    }

    const getHat = async id => {
        if (hats.length === 0) {
            let responce = await getHats()

            return responce.find(hat => hat._id === id)
        }

        return hats.find(hat => hat._id === id)
    }

    return <HatsContext.Provider value={{ getHats, getHat }}>
        {children}
    </HatsContext.Provider>
}