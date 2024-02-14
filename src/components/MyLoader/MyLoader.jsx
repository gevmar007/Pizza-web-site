import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    
  >
    <rect x="0" y="263" rx="0" ry="0" width="271" height="86" /> 
    <rect x="2" y="370" rx="0" ry="0" width="110" height="30" /> 
    <rect x="200" y="393" rx="0" ry="0" width="2" height="4" /> 
    <rect x="163" y="370" rx="0" ry="0" width="110" height="30" /> 
    <circle cx="132" cy="124" r="122" />
  </ContentLoader>
)

export default MyLoader