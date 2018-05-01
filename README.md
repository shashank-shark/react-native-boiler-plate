# React-native boiler-plate

A react-native, redux, redux-saga and firebase project.

* [Style guide](./STYLE_GUIDE.md)
* [Setup guide](./SETUP_GUIDE.md)
* [VSCode snippets](./snippets.json) for sagas, dumb, functional and container components (makes life _waaay_ easier)

Feel free to [get in touch](mailto:shaun@aux.co.za) if you have questions or suggestions :)

# TODOS

* Testing src files
* Find way of attaching saga response to payloadKey of payload for next action
* new Errors should only be created in services if error not already instanceof Error
* checkAndRequestPermission service (one function)
* Add push notifications setup
* Add storybook setup
* Add loginWithEmail, loginWithFacebook, loginWithGoogle sagas and services
* Refactor wrappers (some of them don't need to be wrappers, they can just be components)
* Create ErrorBoundary component
* Error logging to DB component
* System messages management
* FileSystem sagas and services based on new RN
* Add a CHANGELOG
* Fastlane integration
* CodePush integration
* Testing integration
* Write script to generate project in one go (saves up to 3 hrs)
* Add phone authentication
* Full in-app password reset methods
