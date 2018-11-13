import React, {Component} from 'react';

const WithFetching = (url) => (WrappedComponent) =>
    class WithFetching extends Component {
      constructor(props) {
        super(props);
        this.state = {
          feeList: [],
          isLoading: false,
          error: false,
          errors: []
        };
      }

      async componentDidMount() {
        this.setState((prevState, props) => {
          return {
            isLoading: !prevState.isLoading
          }
        });
        try {
          await this.performRestApiCall(url);
        } catch (error) {
          this.setState((prevState, props) => {
            return {
              isLoading: !prevState.isLoading,
              error: true
            }
          });
        }
      }

      performRestApiCall(url) {
        fetch(url, {
          method: 'GET',
          cache: "no-store"
        })
        .then(result => result.json())
        .then(data => this.setState((prevState, props) => {
              return {
                feeList: [...prevState.feeList, ...data.result]
              }
            })
        ).catch(error => console.log(error));
      }

      render() {
        // const {error, loading} = this.state;
        return (
            <WrappedComponent {...this.props} {...this.state} />
        );
      }
    };

export default WithFetching;