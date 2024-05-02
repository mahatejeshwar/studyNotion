import React from "react";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard=()=>{
      
    const {loading:authLoading}=useSelector((state)=>state.auth)
    const {loading:profileLoading}=useSelector((state)=>state.profile)
      if(profileLoading || authLoading){
        return(
            <div>
                Loading..
            </div>
        )
      }
    
    return (
        <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
          <Sidebar></Sidebar>
          <div className='h-[calc(100vh-3.5rem)] overflow-auto'>
                <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
                     <Outlet></Outlet>
                </div>
          </div>
        </div>
    )
}

export default Dashboard