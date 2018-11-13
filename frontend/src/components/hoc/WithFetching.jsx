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
        this.setState(() => {
          return {
            isLoading: false
          }
        });
        try {
          await this.performRestApiCall(url);
        } catch (error) {
          this.setState(() => {
            return {
              isLoading: true,
              error: true
            }
          });
        }
      }

      performRestApiCall(url) {
        fetch(url)
        .then(result => result.json())
        .then(data => this.setState(prevState => {
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