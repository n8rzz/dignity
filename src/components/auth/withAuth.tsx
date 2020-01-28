import React from 'react';
import { auth, firebase } from './firebase';

const withAuth = (Component: any) => {
    return class extends React.Component {
        constructor(props: any) {
            super(props);

            this.state = {
                status: 'SIGNED_OUT',
            }
        }

        componentDidMount() {
            auth.onAuthStateChanged((authUser: any) => {
                if (!authUser) {
                    console.log('NO USER', authUser);

                    return;
                }

                console.log('USER', authUser);

                this.setState({ status: 'SIGNED_IN' });
            });
        }

        handleSignIn = () => {
            const provider = new firebase.auth.GoogleAuthProvider();

            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            auth.signInWithPopup(provider)
                .then(() => {
                    alert('You are signed In');
                })
                .catch(err => {
                    alert('OOps something went wrong check your console');
                    console.log(err);
                });
        };

        handleLogout = () => {
            auth.signOut()
                .then(() => {
                    alert('Logout successful');
                }).catch((error) => {
                    alert('OOps something went wrong check your console');
                    console.log(error);
                });
        }

        renderContent() {
            const { status }: any = this.state;

            if (status == 'SIGNED_OUT') {
                return (
                    <>
                        <button onClick={this.handleSignIn}>Sign In using google</button>
                        <button onClick={this.handleLogout}>Logout</button>
                    </>
                );
            } else if (status == 'SIGNED_IN') {
                return (<Component { ...this.props } />);
            }
        }

        render() {
            return (
                <React.Fragment>
                    { this.renderContent() }
                </React.Fragment>
            );
        }
    }
};

export default withAuth;
