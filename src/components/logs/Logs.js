import React, { useEffect } from 'react';
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "./../../actions/logAction";

//log: { logs, loading } destructures the log object from the state. this saves having to write e.g.: state.log.logs 
const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        //calling getLogs() from the logAction file
       getLogs(); 
        // eslint-disable-next-line
    }, []);

    if( loading || logs === null ){
        return <Preloader />;
    }
    
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {/* if no logs to show output message else loop through them and show each log message */}
                {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) : (
                        logs.map(log => <LogItem log={log} key={log.id}/>)
                )}
                {console.log("Logs: ", logs)}
                
            </ul>
        </div>
    );
}

Logs.propTypes = {
    log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    //make the log prop = to state.log. the state."log" here has to be the same as the name "log" in the index.js in the reducers folder 
    log: state.log
});

// the connect here connects redux to the react component
// needed to add getLogs as a 2nd param as we need to state any actions which we're going to run
//export default connect(mapStateToProps, { getLogs })(Logs);

// connect(
//     mapStateToProps,
//     { getLogs }
// )(Logs);

export {
    Logs,
    connect
}

export default connect(mapStateToProps, {getLogs})(Logs);

