import React from "react"
export const Work: React.FC = () => {
    const electron = (window as any).electron
    return(
       <div>
        This is a work page content <br />
        The home directory is @ {electron.homeDir()} <br />
        The OS arch is {electron.arch()} <br />
        The OS version is {electron.osVersion()}
        </div> 
    ) 
}