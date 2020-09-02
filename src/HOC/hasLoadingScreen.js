import React from 'react';
import LoadingScreen from '../Components/Common/LoadingScreen';

function hasLoadingScreen(WrappedComponent){
    function wrappedComponent(props){
        let { componentMounted, loadingMessage, disableLoading } = props;
        if(disableLoading || componentMounted){
            return <WrappedComponent {...props} loaded={true} />
        } else {
            return <LoadingScreen loadingMessage={ loadingMessage } />
        }
    }

    return wrappedComponent;
}

export default hasLoadingScreen;