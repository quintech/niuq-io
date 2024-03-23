

/* This component does not filter any data, all Redux states are passed to this component */

export const mapStateToProps = (state) => {
    return {
        data: state // Assuming your state has a property named 'data'
    };
};